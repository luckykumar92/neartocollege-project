import { setFilesUrl, setTotalPages } from "@/redux/features/print/printSlice";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setOrderData } from "@/redux/features/print/orderSlice";

const OrderPrice = () => {
  const data = useSelector((state) => state.order.orderData);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const closePopup = () => {
    dispatch(setOrderData({}));
    dispatch(setFilesUrl([]));
    dispatch(setTotalPages(0));
    setDialogOpen(false);
    navigate("/");
  };

  // ############################################

  const orderHandler = async () => {
    setDialogOpen(true);
    setLoading(true);
    try {
      const orderResponse = await axios.post("/api/v1/prints/printorder", data);
      if (orderResponse) {
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setDialogOpen(false);
    }
  };
  //----------------------------------------------
  const allPrice = useSelector((state) => state.order.orderData?.subTotal || 0);
  // const allPrice = 100;
  const subTotal = parseFloat(allPrice.toFixed(2));
  const tax = parseFloat((allPrice % 5).toFixed(2));
  const deliveryFee = parseFloat((allPrice % 20).toFixed(2));
  const total = parseFloat((subTotal + tax + deliveryFee).toFixed(2));
  return (
    <div className="flex flex-col space-y-3 my-4">
      <div className="flex items-center font-semibold text-black">
        <span className="flex-grow text-gray-300">Shop Name :</span>
        <span className=" text-white text-opacity-90">
          {data.shopName ? `${data.shopName}` : "-----"}
        </span>
      </div>
      <div className="flex items-center font-semibold text-black">
        <span className="flex-grow text-gray-300">Shop Location :</span>
        <span className=" text-white text-opacity-90">
          {data.shopLocation ? `${data.shopLocation}` : "-----"}
        </span>
      </div>
      <div className="flex items-center font-semibold text-black">
        <span className="flex-grow text-gray-300">No. of Pages :</span>
        <span className=" text-white text-opacity-90">
          {data.noOfPages ? `${data.noOfPages}` : "-----"}
        </span>
      </div>
      <div className="flex items-center font-semibold text-black">
        <span className="flex-grow text-gray-300">No. of Copies :</span>
        <span className=" text-white text-opacity-90">
          {data.noOfCopies ? `${data.noOfCopies}` : "-----"}
        </span>
      </div>
      <div className="flex items-center font-semibold text-black">
        <span className="flex-grow text-gray-300">Printed Colour :</span>
        <span className=" text-white text-opacity-90">
          {data.printedColour ? `${data.printedColour}` : "-----"}
        </span>
      </div>{" "}
      <div className="flex items-center font-semibold text-black">
        <span className="flex-grow text-gray-300">Printing Side :</span>
        <span className=" text-white text-opacity-90">
          {data.printingSide ? `${data.printingSide}` : "-----"}
        </span>
      </div>{" "}
      <div className="flex items-center font-semibold text-black">
        <span className="flex-grow text-gray-300">Paper Type :</span>
        <span className=" text-white text-opacity-90">
          {data.paperType ? `${data.paperType}` : "-----"}
        </span>
      </div>
      <div className="flex items-center font-semibold text-black">
        <span className="flex-grow text-gray-300">Paper Size :</span>
        <span className=" text-white text-opacity-90">
          {data.paperSize ? `${data.paperSize}` : "-----"}
        </span>
      </div>
      <div className="flex items-center font-semibold text-black">
        <span className="flex-grow text-gray-300">Cover Option :</span>
        <span className=" text-white text-opacity-90">
          {data.coverOption ? `${data.coverOption}` : "-----"}
        </span>
      </div>
      <div className="flex items-center font-semibold text-black">
        <span className="flex-grow text-gray-300">Binding Option :</span>
        <span className="text-white text-opacity-90">
          {data.bindingOption ? `${data.bindingOption}` : "-----"}
        </span>
      </div>
      <hr />
      <div className="flex items-center">
        <span className="flex-grow text-gray-300">Subtotal</span>
        <span className=" text-white text-opacity-90">
          {data.subTotal ? `₹${data.subTotal}` : "-----"}
        </span>
      </div>
      <div className="flex items-center">
        <span className="flex-grow text-gray-300">Tax</span>
        <span className=" text-white text-opacity-90">
          {data.subTotal ? `₹${tax}` : "-----"}
        </span>
      </div>
      <div className="flex items-center">
        <span className="flex-grow text-gray-300">Delivery Fee</span>
        <span className=" text-white text-opacity-90">
          {data.subTotal ? `₹${deliveryFee}` : "-----"}
        </span>
      </div>
      <div className="flex items-center">
        <span className="flex-grow text-gray-300">Total</span>
        <span className=" text-white text-opacity-90">
          {data.subTotal ? `₹${total}` : "-----"}
        </span>
      </div>
    </div>
  );
};

export default OrderPrice;
