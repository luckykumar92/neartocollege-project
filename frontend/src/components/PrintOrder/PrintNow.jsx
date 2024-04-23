import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import CustomisationSection from "./CustomisationSection/CustomisationSection";
import UploadSection from "./FileUpload/UploadSection";

const PrintNow = () => {
  // --------- Params id ------------------
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");

  const [shopData, setShopData] = useState({});
  const [loading, setLoading] = useState(true);

  // ---------- Fetch data from backend -------
  useEffect(() => {
    axios
      .get(`/api/v1/prints/shopdata?id=${id}`)

      .then((userData) => {
        setShopData(userData.data.data);
        // console.log(userData.data.data);
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className=" bg-[#eeeeee]">
      <div className="mx-auto max-w-2xl px-4 pb-5 sm:px-6 sm:pb-8 lg:max-w-7xl lg:px-8 bg-white">
        <UploadSection />
        <CustomisationSection shopData={shopData} />
      </div>
    </div>
  ) : (
    <h1>Loading</h1>
  );
};

export default PrintNow;
