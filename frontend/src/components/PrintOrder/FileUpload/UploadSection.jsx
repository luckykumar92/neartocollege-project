import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilesUrl, setTotalPages } from "@/redux/features/print/printSlice";
import LoadingPopup from "@/components/ui/custom/LoadingPopup";
import Swal from "sweetalert2";

const UploadSection = () => {
  const presetKey = String(import.meta.env.VITE_PRESET_KEY);
  const cloudname = String(import.meta.env.VITE_CLOUD_NAME);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [noOfPages, setNoOfPages] = useState(0);
  const [cloudinaryUrls, setCloudinaryUrls] = useState([]);
  const [arrOfPages, setArrOfPages] = useState([]);
  const dispatch = useDispatch();

  // --------------------------------------
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
      Swal.fire("File Uploaded Successfully", "", "success");
    } catch (err) {
      console.log(err);
      setUploading(false);
      Swal.fire("Error Uploading File", "", "error");
    } finally {
      setUploading(false);
    }
  }

  dispatch(setTotalPages(noOfPages));
  dispatch(setFilesUrl(cloudinaryUrls));

  // ###################################################

  return (
    <div className="flex flex-row max-[480px]:flex-col focus:outline-none bg-[#023047]">
      <div className="flex flex-col p-4 items-center borde min-w-[350px]">
        <div className="mx-auto max-w-7xl p-3">
          <label className="flex w-full cursor-pointer appearance-none items-center justify-center rounded-md border-2 border-dashed border-[#eeeeee] p-6 transition-all hover:border-primary-300">
            <div className="space-y-1 text-center">
              <div className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-6 w-6 text-gray-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                  />
                </svg>
              </div>
              <div className=" text-white">
                <a
                  href="#"
                  className="font-medium text-primary-500 hover:text-primary-700"
                >
                  Click to upload
                </a>
                &nbsp;or drag and drop
              </div>
              <p className="text-sm text-gray-500">
                PDF, WORDX, PPTX, PNG, JPG or JPEG (up to 10MB)
              </p>
              <p className="text-sm text-gray-500">
                Recommended<span className="text-white">&nbsp; PDF File</span>
              </p>
            </div>
            <input
              className="sr-only"
              type="file"
              name="image"
              accept=".pdf"
              multiple
              onChange={handleInput}
            />
          </label>
        </div>{" "}
        {/* ------------------------- */}
        {uploading && <LoadingPopup loading={uploading} />}
        {/* ---------------------------- */}
        {uploaded && (
          <div className="flex flex-col mb-2 text-sm font-medium text-white">
            <span className=" text-green-500">File Successfully Uploaded!</span>
            <div>Total Number of Pages: {noOfPages}</div>
          </div>
        )}
      </div>
      <div className="p-1 overflow-y-hidden flex items-center">
        {cloudinaryUrls.map((curl, index) => (
          <div key={index} className="">
            <iframe
              src={curl}
              title={`File Preview ${index}`}
              className=" p-1 w-[350px] h-[220px]"
            />
            <p className=" text-center text-white">
              Pages: {arrOfPages[index]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadSection;
