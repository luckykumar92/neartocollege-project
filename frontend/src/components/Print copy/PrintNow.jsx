import React, { useEffect, useState } from "react";
// import Printform from "./PrintForm";
import { useLocation } from "react-router-dom";
import axios from "axios";
import FileUpload from "./FileUpload";
import CustomisationSection from "./CustomisationSection";
import UploadSection from "./UploadSection";

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
    <div className="bg-[#b1e5ff] bg-opacity-90">
      <UploadSection />
      <CustomisationSection shopData={shopData} />
    </div>
  ) : (
    <h1>Loading</h1>
  );
};

export default PrintNow;
