import { Print } from "../models/print.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { printOrderEmailContent } from "../utils/email.template.js";
import { mailSender } from "../utils/mailer.js";
import { sendEmail } from "../utils/sendEmail.js";
// import { CloudinaryResponse } from "../utils/multipleFile.js";

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

  // console.log(
  //   shopName,
  //   shopLocation,
  //   email,
  //   contactNumber,
  //   paperTypes,
  //   paperSizes,
  //   printedColours,
  //   printingSides
  // );

  // if (
  //   [
  //     shopName,
  //     shopLocation,
  //     email,
  //     contactNumber,
  //     paperTypes,
  //     paperSizes,
  //     printedColours,
  //     printingSides,
  //   ].some((field) => field?.trim() === "")
  // ) {
  //   throw new ApiError(400, "All fields are required");
  // }

  // const existedShopName = await User.findOne({
  //   shopName,
  // });

  // if (existedShopName) {
  //   throw new ApiError(409, "Shopname already exists");
  // }

  // console.log("Hi1");
  // const shopImageLocalPath = req.files;
  // console.log("Hi2");

  // console.log(shopImageLocalPath);
  // if (!shopImageLocalPath) {
  //   throw new ApiError(400, "shopImage is required");
  // }

  // const shopImage = await uploadOnCloudinary(shopImageLocalPath);
  // if (!shopImage) {
  //   throw new ApiError(400, "shopImage  upload error");
  // }
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
  // console.log(createdData, 2);
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
// =================================

const testUpload = asyncHandler(async (req, res) => {
  // const testUpload = asyncHandler(
  //   async((req, res) => {
  // console.log(req.file.buffer);
  const file = req.files;
  return res.status(201).json({
    resData: file,
  });
});
// );

// ##################################################
const printOrder = asyncHandler(async (req, res) => {
  const { orderData, orderValue } = req.body;
  const timestamp = new Date().getTime();
  const randomNum = Math.floor(Math.random() * 10000); // You can adjust the range as needed
  const newOrderNumber = `ORDER-${timestamp}-${randomNum}`;
  // console.log(newOrderNumber);
  // console.log(orderData, "jhfgsxdgygui");
  const filesUrl = orderData.filesUrl;
  const eFilesUrl = filesUrl.map((f, index) => `<hr>${index + 1}. ${f}`);
  // console.log(eFilesUrl);

  const emailContent = printOrderEmailContent(
    orderData,
    newOrderNumber,
    eFilesUrl,
    orderValue
  );

  //   const mailContent = `<!DOCTYPE html>
  // <html lang="en">
  //   <body
  //     style="
  //       background-color: #ced4da;
  //       margin-left: auto;
  //       margin-right: auto;
  //       max-width: 40rem;
  //       padding-top: 1.5rem;
  //     ">
  //       <img
  //       style="margin-left: 1.5rem; width: 300px"
  //       src="https://res.cloudinary.com/utube-cloudinary/image/upload/v1704771876/assets/images/kepskqcb32dnuljjpm8q.png"
  //       alt="neartocollege"
  //       srcset=""
  //     />
  //     <p
  //       style="
  //         font-family: sans-serif;
  //         font-weight: 700;
  //         margin-top: 40px;
  //         padding-left: 1.5rem;
  //       ">
  //       Order Summary
  //     </p>
  //     <p
  //       style="
  //         font-family: sans-serif;
  //         font-weight: 700;
  //         padding-left: 1.5rem;
  //       ">
  //       Order Number : ${newOrderNumber}
  //     </p>
  //     <div style="position: relative; border-radius: 0.375rem">
  //       <table
  //         style="
  //           width: 100%;
  //           font-size: 0.875rem;
  //           text-align: left;
  //           direction: ltr;
  //           color: #6b7280;
  //           background-color: #f9fafb;
  //         ">
  //         <thead
  //           style="
  //             font-size: 0.75rem;
  //             color: #4a5568;
  //             text-transform: uppercase;
  //             background-color: #f9fafb;
  //           ">
  //           <tr>
  //             <th
  //               scope="col"
  //               style="
  //                 padding-left: 1.5rem;
  //                 padding-right: 1.5rem;
  //                 padding-top: 0.75rem;
  //                 padding-bottom: 0.75rem;
  //               ">
  //               Shop Name :
  //             </th>
  //             <th
  //               scope="col"
  //               style="
  //                 padding-left: 1.5rem;
  //                 padding-right: 1.5rem;
  //                 padding-top: 0.75rem;
  //                 padding-bottom: 0.75rem;
  //               ">
  //               ${orderData.shopName} || ${orderData.shopLocation}
  //             </th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //         <tr
  //             style="background-color: #ffffff; border-bottom: 1px solid #e5e5e5">
  //             <th
  //               scope="row"
  //               style="
  //                 padding-left: 1.5rem;
  //                 padding-right: 1.5rem;
  //                 padding-top: 1rem;
  //                 padding-bottom: 1rem;
  //                 font-weight: 500;
  //                 color: #333333;
  //                 white-space: nowrap;
  //               ">
  //               Shop Contact Deatail :
  //             </th>

  //             <td
  //               style="
  //                 padding-left: 1.5rem;
  //                 padding-right: 1.5rem;
  //                 padding-top: 1rem;
  //                 padding-bottom: 1rem;
  //               ">
  //              ${orderData.shopContactNumber},${orderData.shopEmail}
  //             </td>
  //           </tr>
  //           <tr
  //             style="background-color: #ffffff; border-bottom: 1px solid #e5e5e5">
  //             <th
  //               scope="row"
  //               style="
  //                 padding-left: 1.5rem;
  //                 padding-right: 1.5rem;
  //                 padding-top: 1rem;
  //                 padding-bottom: 1rem;
  //                 font-weight: 500;
  //                 color: #333333;
  //                 white-space: nowrap;
  //               ">
  //               No. of Pages :
  //             </th>

  //             <td
  //               style="
  //                 padding-left: 1.5rem;
  //                 padding-right: 1.5rem;
  //                 padding-top: 1rem;
  //                 padding-bottom: 1rem;
  //               ">
  //               ${orderData.noOfPages}
  //             </td>
  //           </tr>
  //           <tr
  //             style="background-color: #ffffff; border-bottom: 1px solid #e5e5e5">
  //             <th
  //               scope="row"
  //               style="
  //                 padding-left: 1.5rem;
  //                 padding-right: 1.5rem;
  //                 padding-top: 1rem;
  //                 padding-bottom: 1rem;
  //                 font-weight: 500;
  //                 color: #333333;
  //                 white-space: nowrap;
  //               ">
  //               No. of Copies :
  //             </th>

  //             <td
  //               style="
  //                 padding-left: 1.5rem;
  //                 padding-right: 1.5rem;
  //                 padding-top: 1rem;
  //                 padding-bottom: 1rem;
  //               ">
  //               ${orderData.noOfCopies}
  //             </td>
  //           </tr>
  //           <tr
  //             style="background-color: #ffffff; border-bottom: 1px solid #e5e5e5">
  //             <th
  //               scope="row"
  //               style="
  //                 padding-left: 1.5rem;
  //                 padding-right: 1.5rem;
  //                 padding-top: 1rem;
  //                 padding-bottom: 1rem;
  //                 font-weight: 500;
  //                 color: #333333;
  //                 white-space: nowrap;
  //               ">
  //               Printed Colour :
  //             </th>

  //             <td
  //               style="
  //                 padding-left: 1.5rem;
  //                 padding-right: 1.5rem;
  //                 padding-top: 1rem;
  //                 padding-bottom: 1rem;
  //               ">
  //               ${orderData.printedColour}
  //             </td>
  //           </tr>
  //           <tr
  //             style="background-color: #ffffff; border-bottom: 1px solid #e5e5e5">
  //             <th
  //               scope="row"
  //               style="
  //                 padding-left: 1.5rem;
  //                 padding-right: 1.5rem;
  //                 padding-top: 1rem;
  //                 padding-bottom: 1rem;
  //                 font-weight: 500;
  //                 color: #333333;
  //                 white-space: nowrap;
  //               ">
  //               Prining Side :
  //             </th>
  //             <td
  //               style="
  //                 padding-left: 1.5rem;
  //                 padding-right: 1.5rem;
  //                 padding-top: 1rem;
  //                 padding-bottom: 1rem;
  //               ">
  //               ${orderData.printingSide}
  //             </td>
  //           </tr>
  //              <tr
  //             style="background-color: #ffffff; border-bottom: 1px solid #e5e5e5">
  //             <th
  //               scope="row"
  //               style="
  //                 padding-left: 1.5rem;
  //                 padding-right: 1.5rem;
  //                 padding-top: 1rem;
  //                 padding-bottom: 1rem;
  //                 font-weight: 500;
  //                 color: #333333;
  //                 white-space: nowrap;
  //               ">
  //               Prining Side :
  //             </th>
  //             <td
  //               style="
  //                 padding-left: 1.5rem;
  //                 padding-right: 1.5rem;
  //                 padding-top: 1rem;
  //                 padding-bottom: 1rem;
  //               ">
  //               ${orderData.paperType}
  //             </td>
  //           </tr>
  //              <tr
  //             style="background-color: #ffffff; border-bottom: 1px solid #e5e5e5">
  //             <th
  //               scope="row"
  //               style="
  //                 padding-left: 1.5rem;
  //                 padding-right: 1.5rem;
  //                 padding-top: 1rem;
  //                 padding-bottom: 1rem;
  //                 font-weight: 500;
  //                 color: #333333;
  //                 white-space: nowrap;
  //               ">
  //               Prining Side :
  //             </th>
  //             <td
  //               style="
  //                 padding-left: 1.5rem;
  //                 padding-right: 1.5rem;
  //                 padding-top: 1rem;
  //                 padding-bottom: 1rem;
  //               ">
  //               ${orderData.paperSize}
  //             </td>
  //           </tr>
  //           </tr>
  //              <tr
  //             style="background-color: #ffffff; border-bottom: 1px solid #e5e5e5">
  //             <th
  //               scope="row"
  //               style="
  //                 padding-left: 1.5rem;
  //                 padding-right: 1.5rem;
  //                 padding-top: 1rem;
  //                 padding-bottom: 1rem;
  //                 font-weight: 500;
  //                 color: #333333;
  //                 white-space: nowrap;
  //               ">
  //               Cover Option :
  //             </th>
  //             <td
  //               style="
  //                 padding-left: 1.5rem;
  //                 padding-right: 1.5rem;
  //                 padding-top: 1rem;
  //                 padding-bottom: 1rem;
  //               ">
  //               ${orderData.coverOption}
  //             </td>
  //           </tr>
  //           </tr>
  //              <tr
  //             style="background-color: #ffffff; border-bottom: 1px solid #e5e5e5">
  //             <th
  //               scope="row"
  //               style="
  //                 padding-left: 1.5rem;
  //                 padding-right: 1.5rem;
  //                 padding-top: 1rem;
  //                 padding-bottom: 1rem;
  //                 font-weight: 500;
  //                 color: #333333;
  //                 white-space: nowrap;
  //               ">
  //               Binding Option :
  //             </th>
  //             <td
  //               style="
  //                 padding-left: 1.5rem;
  //                 padding-right: 1.5rem;
  //                 padding-top: 1rem;
  //                 padding-bottom: 1rem;
  //               ">
  //               ${orderData.bindingOption}
  //             </td>
  //           </tr>
  //           <tr
  //             style="background-color: #ffffff; border-bottom: 1px solid #e5e5e5">
  //             <th
  //               scope="row"
  //               style="
  //                 padding-left: 1.5rem;
  //                 padding-right: 1.5rem;
  //                 padding-top: 1rem;
  //                 padding-bottom: 1rem;
  //                 font-weight: 500;
  //                 color: #333333;
  //                 white-space: nowrap;
  //               ">
  //               Messages :
  //             </th>
  //             <td
  //               style="
  //                 padding-left: 1.5rem;
  //                 padding-right: 1.5rem;
  //                 padding-top: 1rem;
  //                 padding-bottom: 1rem;
  //               ">
  //               ${orderData.message}
  //             </td>
  //           </tr>
  //           <tr
  //             style="background-color: #ffffff; border-bottom: 1px solid #e5e5e5">
  //             <th
  //               scope="row"
  //               style="
  //                 padding-left: 1.5rem;
  //                 padding-right: 1.5rem;
  //                 padding-top: 1rem;
  //                 padding-bottom: 1rem;
  //                 font-weight: 500;
  //                 color: #333333;
  //                 white-space: nowrap;
  //               ">
  //               Files Url :
  //             </th>
  //             <td
  //               style="
  //                 padding-left: 1.5rem;
  //                 padding-right: 1.5rem;
  //                 padding-top: 1rem;
  //                 padding-bottom: 1rem;
  //               ">
  //               ${eFilesUrl}
  //             </td>
  //           </tr>
  //         </tbody>
  //       </table>

  //       <span
  //         style="
  //           font-family: sans-serif;
  //           font-weight: 800;
  //           padding-left: 1.5rem;
  //           padding-right: 1.5rem;
  //         ">
  //         Order Total: ₹${orderData.orderTotal}
  //       </span>
  //     </div>
  //     <p style="margin-top: 40px; padding-left: 1.5rem">
  //       We hope to see you again soon.
  //     </p>
  //     <span style="font-weight: 800; padding-left: 1.5rem; margin-bottom: 1.5rem"
  //       >Neartocollege.com</span
  //     >
  //   </body>
  // </html>
  // `;

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

  // await mailSender([shopEmail, userEmail], "Order Detail", mailContent);

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
  testUpload,
};
