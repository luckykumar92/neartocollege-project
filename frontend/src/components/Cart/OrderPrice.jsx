import React from "react";
import { useSelector } from "react-redux";

const OrderPrice = () => {
  const data = useSelector((state) => state.order.orderData);

  //----------------------------------------------
  const allPrice = useSelector((state) => state.order.orderData?.subTotal || 0);
  const subTotal = parseFloat(allPrice.toFixed(2));
  const tax = parseFloat((allPrice % 5).toFixed(2));
  const deliveryFee = parseFloat((allPrice % 20).toFixed(2));
  const total = parseFloat((subTotal + tax + deliveryFee).toFixed(2));

  return (
    <div className="flex flex-col space-y-3 my-4">
      <div className="flex items-center font-semibold text-white">
        <span className="flex-grow">Shop Name :</span>
        <span className="">{data.shopName ? `${data.shopName}` : "-----"}</span>
      </div>
      <div className="flex items-center font-semibold text-white">
        <span className="flex-grow">Shop Location :</span>
        <span className="">
          {data.shopLocation ? `${data.shopLocation}` : "-----"}
        </span>
      </div>
      <div className="flex items-center font-semibold text-white">
        <span className="flex-grow">No. of Pages :</span>
        <span className="">
          {data.noOfPages ? `${data.noOfPages}` : "-----"}
        </span>
      </div>
      <div className="flex items-center font-semibold text-white">
        <span className="flex-grow">No. of Copies :</span>
        <span className="">
          {data.noOfCopies ? `${data.noOfCopies}` : "-----"}
        </span>
      </div>
      <div className="flex items-center font-semibold text-white">
        <span className="flex-grow">Printed Colour :</span>
        <span className="">
          {data.printedColour ? `${data.printedColour}` : "-----"}
        </span>
      </div>{" "}
      <div className="flex items-center font-semibold text-white">
        <span className="flex-grow">Printing Side :</span>
        <span className="">
          {data.printingSide ? `${data.printingSide}` : "-----"}
        </span>
      </div>{" "}
      <div className="flex items-center font-semibold text-white">
        <span className="flex-grow">Paper Type :</span>
        <span className="">
          {data.paperType ? `${data.paperType}` : "-----"}
        </span>
      </div>
      <div className="flex items-center font-semibold text-white">
        <span className="flex-grow">Paper Size :</span>
        <span className="">
          {data.paperSize ? `${data.paperSize}` : "-----"}
        </span>
      </div>
      <div className="flex items-center font-semibold text-white">
        <span className="flex-grow">Cover Option :</span>
        <span className="">
          {data.coverOption ? `${data.coverOption}` : "-----"}
        </span>
      </div>
      <div className="flex items-center font-semibold text-white">
        <span className="flex-grow">Binding Option :</span>
        <span className="">
          {data.bindingOption ? `${data.bindingOption}` : "-----"}
        </span>
      </div>
      <hr />
      <div className="flex items-center text-white">
        <span className="flex-grow">Subtotal</span>
        <span className="">
          {data.subTotal ? `₹${data.subTotal}` : "-----"}
        </span>
      </div>
      <div className="flex items-center text-white">
        <span className="flex-grow">Tax</span>
        <span className=" ">{data.subTotal ? `₹${tax}` : "-----"}</span>
      </div>
      <div className="flex items-center text-white">
        <span className="flex-grow">Delivery Fee</span>
        <span className="">{data.subTotal ? `₹${deliveryFee}` : "-----"}</span>
      </div>
      <div className="flex items-center text-white">
        <span className="flex-grow">Total</span>
        <span className="">{data.subTotal ? `₹${total}` : "-----"}</span>
      </div>
    </div>
  );
};

export default OrderPrice;
