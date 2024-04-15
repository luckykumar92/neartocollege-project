import axios from "axios";
import React, { useState, useId } from "react";
import { Input, Container } from "../index";
import { useDispatch } from "react-redux";
import {
  setTotalPages,
  setFilesUrl,
} from "../../redux/features/print/printSlice.js";

const UploadCard = () => {
  const presetKey = String(import.meta.env.VITE_PRESET_KEY);
  const cloudname = String(import.meta.env.VITE_CLOUD_NAME);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [noOfPages, setNoOfPages] = useState(0);
  const [cloudinaryUrls, setCloudinaryUrls] = useState([]);
  const [arrOfPages, setArrOfPages] = useState([]);
  const id = useId();

  const dispatch = useDispatch();
  // ------------
  // console.log(totalPages);
  async function handleInput(event) {
    try {
      setUploaded(false);
      setUploading(true);
      setNoOfPages(0);
      setCloudinaryUrls([]);

      const files = event.target.files;
      const newFileData = Array.from(files).map((file) => ({
        file,
      }));

      const promises = newFileData.map(async (fileObj, index) => {
        const formData = new FormData();
        formData.append("file", fileObj.file);
        formData.append("upload_preset", presetKey);

        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/${cloudname}/image/upload`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        // Extract the number of pages from the Cloudinary response
        const numberOfPages = response.data.pages || 1;
        setNoOfPages((prevTotalPages) => prevTotalPages + numberOfPages);
        setCloudinaryUrls((prevUrls) => [
          ...prevUrls,
          response.data.secure_url,
        ]);
        setArrOfPages((prev) => [...prev, response.data.pages]);

        return response;
      });

      await Promise.all(promises);

      setUploaded(true);
    } catch (err) {
      console.log(err);
    } finally {
      setUploading(false);
    }
  }

  dispatch(setTotalPages(noOfPages));
  dispatch(setFilesUrl(cloudinaryUrls));

  // console.log(arrOfPages);

  // ###################################################

  return (
    <Container>
      <div className="flex flex-row max-[480px]:flex-col text-gray-400 focus:outline-none bg-gray-700 border-gray-600 placeholder-gray-400">
        <div className="flex flex-col p-4 items-center borde min-w-[350px]">
          <Input
            className="block text-lg border rounded-lg cursor-pointer"
            type="file"
            name="image"
            accept=".pdf"
            multiple
            onChange={handleInput}
          />
          <p className=" text-blue-500">
            *Currenly we are accepting PDF Files only
          </p>
          {uploading && (
            <div className=" flex flex-col text-yellow-400">
              File Uploading...
            </div>
          )}
          {uploaded && (
            <div className="flex flex-col mb-2 text-sm font-medium text-white">
              <span className=" text-green-500">
                File Successfully Uploaded!
              </span>
              <div>Total Number of Pages: {noOfPages}</div>
            </div>
          )}
        </div>
        <div className="p-1 overflow-y-hidden flex items-center border-gray-900 bg-gray-700 hover:bg-gray-800">
          {cloudinaryUrls.map((curl, index) => (
            <div key={index} className="">
              <iframe
                src={curl}
                title={`File Preview ${index}`}
                className=" p-1 w-[350px] h-[220px]"
              />
              <p className=" text-center">Pages: {arrOfPages[index]}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default UploadCard;
