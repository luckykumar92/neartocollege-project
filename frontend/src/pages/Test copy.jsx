import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import React from "react";

const Test = () => {
  const data = {
    noOfPages: 2,
    noOfCopies: 2,
    printedColour: "Black",
    printingSide: "Single",
    paperType: "Normal",
    paperSize: "A4",
    coverOption: "No",
    bindingOption: "No",
    orderTotal: 100,
    shopName: "ShopName",
    shopLocation: "ShopLocation",
  };
  return (
    <div className="bg-[#b1e5ff] w-full h-full p-20 max-[640px]:p-0">
      <Card className="rounded-none max-w-md mx-auto bg-[#d8f2ff]">
        <div
          // className="w-full  p-4 border  rounded-lg shadow sm:p-8 bg-[#023047] border-gray-700 "
          className="p-4 sm:p-8"
        >
          <h1 className="text-3xl font-bold text-black text-opacity-90 place-content-center mb-4 mx-auto text-center">
            Order Summary
          </h1>
          <p className="flex items-center font-extrabold text-black text-opacity-90 place-content-center text-center mx-auto max-w-fit p-1  max-[640px]:ml-0 mb-5">
            {data.shopName} || {data.shopLocation}
          </p>
          <CardContent>
            <div className="flow-root">
              <ul className="divide-y divide-gray-700">
                <li className="py-3 sm:py-4">
                  <div className="flex items-center">
                    <div className="flex-1 min-w-0 ms-4">
                      <span className="text-md font-medium truncate text-black">
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
                        <span className="text-md font-medium truncate text-black text-right">
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
                  <div className="flex items-center text-black text-opacity-90">
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-lg font-medium truncate">
                        Order Total
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold">
                      ₹{data.orderTotal}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </CardContent>
          {/* {loading && (
        <img
          src="https://res.cloudinary.com/utube-cloudinary/image/upload/v1704712718/assets/icons/z6c33uoa8d3yjqimd0e0.webp"
          // className=" w-[400px] object-cover"
          // alt="Hero Illustration"
          // loading="eager"
          // placeholder="blur"
        />
      )} */}

          {/* <Popup
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
      </Popup> */}

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
        <CardFooter>
          <Button
            // onClick={orderHandler}
            type="submit"
            className="googlepay long mx-auto"
            title="Buy with Google Pay"
          ></Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Test;
