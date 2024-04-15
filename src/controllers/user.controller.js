import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import { mailSender } from "../utils/mailer.js";
import dotenv from "dotenv";

//Config
dotenv.config({
  path: "./.env",
});

// ################## Generate Access and Refresh Access Token ##################

const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while generating refresh and access token"
    );
  }
};

// ################## Register User ##################

const registerUser = asyncHandler(async (req, res) => {
  // console.log("hi");
  const { fullName, email, password } = req.body;

  if ([fullName, email, password].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "All fields are required");
  }

  const existedUser = await User.findOne({ email: email });
  // console.log(existedUser, "kjhfg");
  if (existedUser) {
    throw new ApiError(409, "User with this email already exists");
  }

  const user = await User.create({
    fullName,
    email,
    password,
  });

  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }
  const DOMAIN_NAME = process.env.DOMAIN_NAME;
  // console.log(DOMAIN_NAME);
  // const mailContent = `<p> Hi ${fullName}, Please <a href = ${DOMAIN_NAME}/verifyemail?id=${createdUser._id}>Verify </a> your mail. </p>`;
  // console.log(email);
  const mailContent = `<div
  style="
    font-family: Helvetica, Arial, sans-serif;
    min-width: 1000px;
    overflow: auto;
    line-height: 2;
  "
>
  <div style="margin: 50px auto; width: 70%; padding: 20px 0">
    <div style="border-bottom: 1px solid #eee">
      <a
        href=${DOMAIN_NAME}
        style="
          font-size: 1.4em;
          color: #00466a;
          text-decoration: none;
          font-weight: 600;
        "
        >Neartocollege</a
      >
    </div>
    <h2
      style="
        margin: 0 auto;
        width: max-content;
        padding: 0 10px;
        border-radius: 4px;
      "
    >
      Verify Your Email
    </h2>
    <p style="font-size: 1.1em">Hi, ${fullName}</p>
    <p>
      Thank you for choosing Neartocollege. Please click the button below to
      verify your email.
    </p>

    <a
    href = ${DOMAIN_NAME}/verifyemail?id=${createdUser._id}
      style="
        background-color: #1c64f2;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 10px 2px;
        cursor: pointer;
        border-radius: 5px;
      "
    >
      Verify Email
    </a>
    <p style="font-size: 0.9em">Regards,<br />Neartocollege</p>
    <hr style="border: none; border-top: 1px solid #eee" />
  </div>
</div>
`;
  await mailSender([email], "Account Verification", mailContent);

  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User registered Successfully"));
});

// ############## Login #################

const loginUser = asyncHandler(async (req, res) => {
  // req body -> data
  // username or email
  //find the user
  //password check
  //access and refresh token
  //send cookie

  const { email, password } = req.body;
  // console.log(email);

  if (!email && !password) {
    throw new ApiError(400, "email and password is required");
  }

  // Here is an alternative of above code based on logic discussed in video:
  // if (!(username || email)) {
  //     throw new ApiError(400, "username or email is required")

  // }
  // User.find({ name: 'Punit'}
  // const user = await User.findOne({
  //   $or: [{ username }, { email }],
  // });

  const user = await User.findOne({ email: email });
  // const user = await User.find({
  //   email: email,
  // });
  // console.log(user);

  if (!user) {
    throw new ApiError(404, "User does not exist");
  }
  if (!user.isVerified) {
    throw new ApiError(404, "This account is not verified");
  }

  const isPasswordValid = await user.isPasswordCorrect(password);

  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid user credential");
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
    user._id
  );

  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          user: loggedInUser,
          accessToken,
          refreshToken,
        },
        "User logged In Successfully"
      )
    );
});

// ################## Logout ##################

const logoutUser = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: {
        refreshToken: undefined,
      },
    },
    {
      new: true,
    }
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User Logout"));
});

// ################## Refresh Access Token ##################

const refreshAccessToken = asyncHandler(async (req, res) => {
  const incomingRefreshToken =
    req.cookies.refreshToken || req.body.refreshToken;

  if (!incomingRefreshToken) {
    throw new ApiError(401, "unauthorized request");
  }

  try {
    const decodedToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    const user = await User.findById(decodedToken?._id);

    if (!user) {
      throw new ApiError(401, "Invalid refresh token");
    }

    if (incomingRefreshToken !== user?.refreshToken) {
      throw new ApiError(401, "Refresh token is expired or used");
    }

    const options = {
      httpOnly: true,
      secure: true,
    };

    const { accessToken, newRefreshToken } =
      await generateAccessAndRefreshTokens(user._id);

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", newRefreshToken, options)
      .json(
        new ApiResponse(
          200,
          { accessToken, refreshToken: newRefreshToken },
          "Access token refreshed"
        )
      );
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid refresh token");
  }
});

// ################### Change Currenet Password ####################

const changeCurrentPassword = asyncHandler(async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  const id = req.user?._id;
  const user = await User.findById(id);

  const isPasswordCorrect = await user.isPasswordCorrect(oldPassword);

  if (!isPasswordCorrect) {
    throw new ApiError(400, "Invalid old password");
  }

  user.password = newPassword;

  await user.save({ validateBeforeSave: false });

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Password changed successfully"));
});

// ################### Get Current User ############################
const getCurrentUser = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, req.user, "current user fetched successfully"));
});

// ################### Get Current User by id ############################

const getUserById = asyncHandler(async (req, res, next) => {
  const { id } = req.query;
  const user = await User.findById(id);
  return res.status(200).json(new ApiResponse(200, user, "user fetched by id"));
});

// ################### Get Current User by Email ############################

const getUserByEmail = asyncHandler(async (req, res, next) => {
  const { email } = req.body;
  const user = await User.find({ email: email });
  return res.status(200).json(new ApiResponse(200, user, "user fetched by id"));
});

// ################### Update Account Detail #######################

const updateAccountDetails = asyncHandler(async (req, res) => {
  const { fullName, email } = req.body;

  if ((!fullName, !email)) {
    throw new ApiError(400, "All fields are required");
  }

  const user = await User.findByIdAndUpdate(
    req.user?._id,
    {
      $set: {
        fullName,
        email: email,
      },
    },
    { new: true }
  ).select("-password");

  return res
    .status(200)
    .json(new ApiResponse(200, user, "Account detail updated successfully"));
});

// ################### Update User Avatar ##########################

const updateUserAvatar = asyncHandler(async (req, res) => {
  const avatarLocalPath = req.file?.path;
  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is missing");
  }
  console.log(avatarLocalPath);
  //TODO: delete old image

  const avatar = await uploadOnCloudinary(avatarLocalPath);

  if (!avatar.url) {
    throw new ApiError(400, "Error while uploading on avatar");
  }

  const user = await User.findByIdAndUpdate(
    req.user?._id,
    {
      $set: {
        avatar: avatar.url,
      },
    },
    { new: true }
  ).select("-password");

  return res
    .status(200)
    .json(new ApiResponse(200, user, "Avatar image updated successfully"));
});

// ##################### mail Verify ###################
const mailVerification = asyncHandler(async (req, res) => {
  const { _id, isVerified } = req.body;
  const user = await User.findByIdAndUpdate(
    _id,
    {
      $set: {
        isVerified: isVerified,
      },
    },
    { new: true }
  ).select("-password");

  return res
    .status(200)
    .json(new ApiResponse(200, user, "User Verified Successfully"));
});

// ##################### Sent Forgot Password Mail ###################

const FPMail = asyncHandler(async (req, res) => {
  const { email } = req.body;

  const existedUser = await User.findOne({ email: email });
  if (!existedUser) {
    throw new ApiError(409, "User with this email doesnot exists");
  }

  const DOMAIN_NAME = process.env.DOMAIN_NAME;
  const mailContent = `<div
  style="
    font-family: Helvetica, Arial, sans-serif;
    min-width: 1000px;
    overflow: auto;
    line-height: 2;
  "
>
  <div style="margin: 50px auto; width: 70%; padding: 20px 0">
    <div style="border-bottom: 1px solid #eee">
      <a
        href=${DOMAIN_NAME}
        style="
          font-size: 1.4em;
          color: #00466a;
          text-decoration: none;
          font-weight: 600;
        "
        >Neartocollege</a
      >
    </div>
    <h2
      style="
        margin: 0 auto;
        width: max-content;
        padding: 0 10px;
        border-radius: 4px;
      "
    >
      Change Password
    </h2>
    <p style="font-size: 1.1em">Hi, ${existedUser.fullName}</p>
    <p>
      Thank you for choosing Neartocollege. Please click the button below to
     to set your new Password.
    </p>

    <a
    href = ${DOMAIN_NAME}/forgotpassword?id=${existedUser._id}
      style="
        background-color: #1c64f2;
        border: none;
        color: white;
        padding: 5px 16px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 10px 2px;
        cursor: pointer;
        border-radius: 5px;
      "
    >
     Click
    </a>
    <p style="font-size: 0.9em">Regards,<br />Neartocollege</p>
    <hr style="border: none; border-top: 1px solid #eee" />
  </div>
</div>
`;
  await mailSender([email], "Forgot Password", mailContent);

  return res
    .status(201)
    .json(new ApiResponse(200, {}, "Forgot Password Mail sent successfully"));
});

// ##################### Forgot Password ###################

const forgotPassword = asyncHandler(async (req, res) => {
  const { _id, email, password } = req.body;

  const existedUser = await User.findOne({
    $and: [{ _id }, { email }],
  });

  if (!existedUser) {
    throw new ApiError(409, "Something went wrong");
  }

  existedUser.password = password;

  await existedUser.save({ validateBeforeSave: false });

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Forgot Password changed successfully"));
});

// ##################### Contact Us ###################

const contactUs = asyncHandler(async (req, res) => {
  const contactData = req.body;
  // console.log(contactData);
  const mailContent = `<!doctype html>
<html lang="en">
  <body
  >
    <p style="font-family: sans-serif">Contact Email : ${contactData.email}</p>
    <p style="font-family: sans-serif">Subject : ${contactData.subject}</p>
    <p style="font-family: sans-serif">Message : ${contactData.message}</p>
  </body>
</html>`;

  const email = "neartocollege@gmail.com";
  await mailSender([email], "Contact Us / Feedback", mailContent);

  return res
    .status(201)
    .json(new ApiResponse(200, {}, "Contact us Form Submitted successfully"));
});

// ################### Exports Controllers #################
export {
  registerUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  changeCurrentPassword,
  getCurrentUser,
  updateAccountDetails,
  updateUserAvatar,
  mailVerification,
  getUserById,
  getUserByEmail,
  forgotPassword,
  FPMail,
  contactUs,
};
