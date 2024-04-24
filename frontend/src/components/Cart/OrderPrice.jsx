import React from "react";

const OrderPrice = ({ orderData, tax, deliveryFee, orderTotal }) => {
  // console.log(orderData, tax, deliveryFee, orderTotal,);

  return (
    <div className="flex flex-col space-y-3 my-4">
      <div className="flex items-center font-semibold text-white">
        <span className="flex-grow">Shop Name :</span>
        <span className="">
          {orderData.shopName ? `${orderData.shopName}` : "-----"}
        </span>
      </div>
      <div className="flex items-center font-semibold text-white">
        <span className="flex-grow">Shop Location :</span>
        <span className="">
          {orderData.shopLocation ? `${orderData.shopLocation}` : "-----"}
        </span>
      </div>
      <div className="flex items-center font-semibold text-white">
        <span className="flex-grow">No. of Pages :</span>
        <span className="">
          {orderData.noOfPages ? `${orderData.noOfPages}` : "-----"}
        </span>
      </div>
      <div className="flex items-center font-semibold text-white">
        <span className="flex-grow">No. of Copies :</span>
        <span className="">
          {orderData.noOfCopies ? `${orderData.noOfCopies}` : "-----"}
        </span>
      </div>
      <div className="flex items-center font-semibold text-white">
        <span className="flex-grow">Printed Colour :</span>
        <span className="">
          {orderData.printedColour ? `${orderData.printedColour}` : "-----"}
        </span>
      </div>{" "}
      <div className="flex items-center font-semibold text-white">
        <span className="flex-grow">Printing Side :</span>
        <span className="">
          {orderData.printingSide ? `${orderData.printingSide}` : "-----"}
        </span>
      </div>{" "}
      <div className="flex items-center font-semibold text-white">
        <span className="flex-grow">Paper Type :</span>
        <span className="">
          {orderData.paperType ? `${orderData.paperType}` : "-----"}
        </span>
      </div>
      <div className="flex items-center font-semibold text-white">
        <span className="flex-grow">Paper Size :</span>
        <span className="">
          {orderData.paperSize ? `${orderData.paperSize}` : "-----"}
        </span>
      </div>
      <div className="flex items-center font-semibold text-white">
        <span className="flex-grow">Cover Option :</span>
        <span className="">
          {orderData.coverOption ? `${orderData.coverOption}` : "-----"}
        </span>
      </div>
      <div className="flex items-center font-semibold text-white">
        <span className="flex-grow">Binding Option :</span>
        <span className="">
          {orderData.bindingOption ? `${orderData.bindingOption}` : "-----"}
        </span>
      </div>
      <hr />
      <div className="flex items-center text-white">
        <span className="flex-grow">Subtotal</span>
        <span className="">
          {orderData.subTotal ? `₹${orderData.subTotal}` : "-----"}
        </span>
      </div>
      <div className="flex items-center text-white">
        <span className="flex-grow">Tax</span>
        <span className=" ">{orderData.subTotal ? `₹${tax}` : "-----"}</span>
      </div>
      <div className="flex items-center text-white">
        <span className="flex-grow">Delivery Fee</span>
        <span className="">
          {orderData.subTotal ? `₹${deliveryFee}` : "-----"}
        </span>
      </div>
      <div className="flex items-center text-white">
        <span className="flex-grow">Total</span>
        <span className="">
          {orderData.subTotal ? `₹${orderTotal}` : "-----"}
        </span>
      </div>
    </div>
  );
};

export default OrderPrice;
