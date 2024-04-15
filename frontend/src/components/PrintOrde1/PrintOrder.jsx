import React, { useState } from "react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Popup from "../Popup";
import axios from "axios";
import {
  setOrderData,
  setTotalPages,
  setFilesUrl,
} from "../../redux/features/print/printSlice.js";
import "./googlepay.css";

const PrintOrder = () => {
  const data = useSelector((state) => state.print.orderData);
  // console.log(data);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // // console.log(data,"kjghfyujgu");
  const [loading, setLoading] = useState(false);
  // // #######################################
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    dispatch(setOrderData([]));
    dispatch(setFilesUrl([]));
    dispatch(setTotalPages(0));
    setPopupOpen(false);
    navigate("/");
  };

  // ############################################

  const orderHandler = async () => {
    // console.log(data, "jhgfxdghj");
    setLoading(true);
    try {
      const orderResponse = await axios.post("/api/v1/prints/printorder", data);
      if (orderResponse) {
        setLoading(false);
        openPopup();
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  // console.log(data, "jkhfvc");
  return (
    // {/* ***************************************************** */}
    // {/* ################### Order Detail #################### */}
    // {/* ***************************************************** */}
    // <div>hi</div>
    <div className="w-full max-w-md p-4 border  rounded-lg shadow sm:p-8 bg-gray-800 border-gray-700 mx-auto">
      <span className="text-xl font-bold leading-none text-white flex items-center justify-between mb-4 mx-auto">
        Order Summary
      </span>
      <p className="flex items-center font-extrabold text-white max-w-fit p-1  max-[480px]:ml-0 mb-10">
        {data.shopName} || {data.shopLocation}
      </p>
      <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-700">
          <li className="py-3 sm:py-4">
            <div className="flex items-center">
              <div className="flex-1 min-w-0 ms-4">
                <span className="text-sm font-medium truncate text-white">
                  <p>No. of Pages :</p>
                  <p>No. of Copies :</p>
                  <p>Printed Colour :</p>
                  <p>Printing Side :</p>
                  <p>Paper Type :</p>
                  <p>Paper Size :</p>
                  <p>Cover Option :</p>
                  <p>Binding Option :</p>
                </span>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-white">
                <div className="flex-1 min-w-0 ms-4">
                  <span className="text-sm font-medium truncate text-white text-right">
                    <p>{data.noOfPages}</p>
                    <p>{data.noOfCopies}</p>
                    <p>{data.printedColour}</p>
                    <p>{data.printingSide}</p>
                    <p>{data.paperType}</p>
                    <p>{data.paperSize}</p>
                    <p>{data.coverOption}</p>
                    <p>{data.bindingOption}</p>
                  </span>
                </div>
              </div>
            </div>
          </li>

          <li className="py-3 sm:py-4">
            <div className="flex items-center">
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium truncate text-white">
                  Order Total
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-white">
                ₹{data.orderTotal}
              </div>
            </div>
          </li>
        </ul>
      </div>
      <Button
        onClick={orderHandler}
        // type="submit"

        className="googlepay long"
        title="Buy with Google Pay"
      ></Button>
      {loading && (
        <img
          src="https://res.cloudinary.com/utube-cloudinary/image/upload/v1704712718/assets/icons/z6c33uoa8d3yjqimd0e0.webp"
          // className=" w-[400px] object-cover"
          // alt="Hero Illustration"
          // loading="eager"
          // placeholder="blur"
        />
      )}

      <Popup
        isOpen={isPopupOpen}
        // isOpen={true}
        onClose={closePopup}
      >
        <img
          className="w-96 max-[480px]:w-48 max-[480px]:mx-auto flex justify-center items-center bg-gray-700 "
          src="https://res.cloudinary.com/utube-cloudinary/image/upload/v1704726348/assets/icons/nil5nmrcwu30wr6sdmf9.gif"
          alt="ordersuccessfull"
        />
        <span className="text-white place-content-center text-3xl max-[480px]:text-2xl">
          Order Successfully Placed
        </span>
        <p className="mt-4 text-white">*Check Your Gmail</p>
      </Popup>

      {/* //   *****************************************************
       {/* {orderState} */}
      {/* ***************************************************** */}
      {/* ################ Order Success Popup ################ */}
      {/* ***************************************************** */}
      {/* <div>
        <Popup isOpen={isPopupOpen} onClose={closePopup}>
          <img
            className="w-96 max-[480px]:w-48 max-[480px]:mx-auto flex justify-center items-center bg-gray-700 "
            src="https://res.cloudinary.com/utube-cloudinary/image/upload/v1703679161/assets/icons/ordersuccess.gif"
            alt="ordersuccessfull"
          />
          <span className="text-white place-content-center text-3xl max-[480px]:text-2xl">
            Order Successfully Placed
          </span>
          <p className="mt-4 text-white">*Check Your Gmail</p>
        </Popup>
      </div> */}
    </div>
  );
};

export default PrintOrder;
