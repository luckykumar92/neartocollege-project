import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePaths, folderName = "zxc") => {
  const responses = [];
  for (const localFilePath of localFilePaths) {
    console.log(localFilePath, folderName);
    try {
      if (!localFilePath) continue;
      //upload the file on cloudinary
      const response = await cloudinary.uploader.upload(localFilePath, {
        folder: folderName,
        resource_type: "auto",
      });
      // file has been uploaded successfully
      //console.log("file is uploaded on cloudinary ", response.url);
      fs.unlinkSync(localFilePath);
      responses.push(response);
    } catch (error) {
      fs.unlinkSync(localFilePath); // remove the locally saved temporary file as the upload operation got failed
    }
  }
  return responses;
};

export { uploadOnCloudinary };
