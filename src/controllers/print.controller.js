import { Print } from "../models/print.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { printOrderEmailContent } from "../utils/email.template.js";
import { sendEmail } from "../utils/sendEmail.js";

// ################## Register User ##################

const createPrintData = asyncHandler(async (req, res) => {
  const {
    shopName,
    shopLocation,
    email,
    contactNumber,
    paperTypes,
    paperSizes,
    printedColours,
    printingSides,
    coverOptions,
    bindingOptions,
    perPageCost,
  } = req.body;

  const shopImage = {
    url: "https://res.cloudinary.com/utube-cloudinary/image/upload/v1701091785/samples/ecommerce/analog-classic.jpg",
  };

  const printFormData = await Print.create({
    shopName,
    shopLocation,
    email,
    contactNumber,
    shopImage: shopImage?.url || "",
    paperTypes,
    paperSizes,
    printedColours,
    printingSides,
    coverOptions,
    bindingOptions,
    perPageCost,
  });

  const createdData = await Print.findById(printFormData._id);

  if (!createdData) {
    throw new ApiError(
      500,
      "Something went wrong while registering the Print Form"
    );
  }
  return res
    .status(201)
    .json(new ApiResponse(200, createdData, "PrintData Added Successfully"));
});

// ################################

const getShopLocationData = asyncHandler(async (req, res) => {
  const shopsData = await Print.find({}).select(
    "shopName shopLocation shopImage ratings perPageCost"
  );
  //shopData._id.valueOf()
  return res
    .status(201)
    .json(
      new ApiResponse(
        200,
        shopsData,
        "Fetched shops location data Successfully"
      )
    );
});

// ########### Get shopData bt id ###################
const getShopDataById = asyncHandler(async (req, res) => {
  const { id } = req.query;
  // console.log(id);
  const shopData = await Print.findById(id);
  return res
    .status(200)
    .json(
      new ApiResponse(200, shopData, "Shop data fetched Successfully by id")
    );
});

// ########### Upload Print File ###############
const uploadPrintFile = asyncHandler(async (req, res) => {
  let filesLocalPath = [];

  await req.files?.printfile.map((file) => {
    filesLocalPath.push(file.path);
  });

  const folderName = "Printfiles";
  const printFile = await uploadOnCloudinary(filesLocalPath, folderName);

  if (!printFile) {
    throw new ApiError(400, "Upload file failed");
  }

  const headerData = printFile.map((f) => f.url);

  return res
    .status(201)
    .json(new ApiResponse(200, headerData, "File Uploaded Successfully"));
});

// ##################################################
const printOrder = asyncHandler(async (req, res) => {
  const { orderData, orderValue } = req.body;
  const timestamp = new Date().getTime();
  const randomNum = Math.floor(Math.random() * 10000); // You can adjust the range as needed
  const newOrderNumber = `ORDER-${timestamp}-${randomNum}`;

  const filesUrl = orderData.filesUrl;
  const eFilesUrl = filesUrl.map((f, index) => `<hr>${index + 1}. ${f}`);
  // console.log(eFilesUrl);

  const emailContent = printOrderEmailContent(
    orderData,
    newOrderNumber,
    eFilesUrl,
    orderValue
  );

  const shopEmail = orderData.shopEmail;
  const userEmail = orderData.userEmail;

  const emailResponse = await sendEmail(
    [shopEmail, userEmail],
    "Order Detail",
    emailContent
  );

  if (emailResponse.success == "false") {
    throw new ApiError(
      500,
      "Something went wrong while sending verification email"
    );
  }

  return res
    .status(201)
    .json(
      new ApiResponse(200, { success: "true" }, "OrderPlaced Successfully")
    );
});

// ################### Exports Controllers #################

export {
  createPrintData,
  getShopLocationData,
  getShopDataById,
  uploadPrintFile,
  printOrder,
};
