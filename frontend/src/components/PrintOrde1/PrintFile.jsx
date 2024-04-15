import axios from "axios";
import React, { useState } from "react";

const PrintFile = () => {
  const presetKey = "printfileupload";
  const cloudname = "utube-cloudinary";
  const [fileData, setFileData] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);

  async function handleInput(event) {
    try {
      setUploading(true);

      const files = event.target.files;
      const newFileData = Array.from(files).map((file) => ({
        file,
        preview: null,
      }));

      // Replace the existing file data with the new file data
      setFileData(newFileData);

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

        const reader = new FileReader();
        reader.onloadend = () => {
          setFileData((prevFileData) => {
            const updatedFileData = [...prevFileData];
            updatedFileData[index].preview = reader.result;
            updatedFileData[index].numberOfPages = numberOfPages; // Add numberOfPages to fileData
            return updatedFileData;
          });
        };
        reader.readAsDataURL(fileObj.file);

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

  const renderFileContent = (fileObj, index) => {
    return (
      <div key={index}>
        {fileObj.preview && (
          <div className="flex">
            <br />
            <div className=" bg-red-400">
              {fileObj.file.type.includes("pdf") ? (
                <>
                  <div className=" flex flex-col">
                    <embed
                      src={fileObj.preview}
                      type="application/pdf"
                      width="200px"
                      height="200px"
                    />
                    <p>Total Pages: {fileObj.numberOfPages}</p>
                  </div>
                </>
              ) : (
                <div className=" flex flex-col">
                  <img
                    src={fileObj.preview}
                    alt={`File ${index}`}
                    className=" flex flex-row"
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className=" flex flex-row max-[480px]:flex-col flex-wrap items-center mx-auto max-w-screen-xl p-4">
      <div
        className="flex flex-col p-4 items-center border 
           rounded-b-md shadow md:flex-row md:max-w-xl 
            border-gray-900 bg-gray-700 hover:bg-gray-800 w-[350px] max-[480px]:w-full h-[220px]">
        <input
          className="block w-full text-lg border rounded-lg cursor-pointer text-gray-400 focus:outline-none bg-gray-700 border-gray-600 placeholder-gray-400"
          type="file"
          name="image"
          multiple
          onChange={handleInput}
        />

        {uploading && <div className=" flex flex-col">Uploading...</div>}
        {uploaded && (
          <div className=" flex flex-col">Successfully Uploaded!</div>
        )}
      </div>
      <div className="flex flex-row">
        {fileData.map((fileObj, index) => renderFileContent(fileObj, index))}
      </div>
    </div>
  );
};

export default PrintFile;
