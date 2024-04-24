import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import DeliveryForm from "./DeliveryForm";
import OrderPrice from "./OrderPrice";
import { Button } from "@/components/ui/button";
import { setOrderData } from "@/redux/features/print/orderSlice";
import axios from "axios";
import Swal from "sweetalert2";
import LoadingPopup from "@/components/ui/custom/LoadingPopup";

const Cart = () => {
  const address = useSelector((state) => state.order.address);
  const addressLength = JSON.stringify(address).length;
  const orderData = useSelector((state) => state.order.orderData);
  const orderDataLength = JSON.stringify(orderData).length;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  // +++++++++++++++++++++ Order Value ++++++++++++++++++++++++++++
  const price = orderData?.subTotal || 0;
  const subTotal = parseFloat(price.toFixed(2));
  const tax = parseFloat((price % 5).toFixed(2));
  const deliveryFee = parseFloat((price % 20).toFixed(2));
  const orderTotal = parseFloat((subTotal + tax + deliveryFee).toFixed(2));

  // ++++++++++++++++++++++++++++++++++++++++++++++++
  const orderHandler = async () => {
    const orderValue = {
      subTotal: subTotal,
      tax: tax,
      deliveryFee: deliveryFee,
      orderTotal: orderTotal,
    };
    setLoading(true);
    try {
      const orderResponse = await axios.post("/api/v1/prints/printorder", {
        orderData: orderData,
        orderValue: orderValue,
      });
      if (orderResponse) {
        setLoading(false);
        Swal.fire(
          "Congratulations!!!",
          `Order placed successfully\n\nCheck your email for order details`,
          "success"
        );
        localStorage.removeItem("orderData");
        localStorage.removeItem("address");
        dispatch(setOrderData({}));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      Swal.fire(`Something went wrong`, "", "error");
    }
  };
  return (
    <main
      className="min-h-screen banner bg-gradient-to-r from-[#023047] to-[#b1e5ff]"
      //    style={{
      //    backgroundImage: `url(${headerbanner})`,
      //}}
    >
      <div className="max-w-screen-xl mx-auto px-6">
        {orderDataLength > 2 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
              {/* left side form  */}
              {/* ----------------Address------------ */}
              <div className="col-span-1">
                <DeliveryForm />

                <div className="flex flex-col space-y-4 mt-3 text-white">
                  <p>
                    Deliver Place :&nbsp;
                    <span className="font-semibold">
                      {address.country ? `${address.country}` : "-----"}
                    </span>
                  </p>
                  <p>
                    Road :&nbsp;
                    <span className="font-semibold">
                      {address.roadNo ? `${address.roadNo}` : "-----"}
                    </span>
                  </p>
                  <p>
                    Floor :&nbsp;
                    <span className="font-semibold">
                      {address.flatno ? `${address.flatno}` : "-----"}
                    </span>
                  </p>
                  <p>
                    Deliver to :&nbsp;
                    <span className="font-semibold">
                      {address.fullname ? `${address.fullname}` : "-----"}
                    </span>
                  </p>
                </div>
              </div>
              {/* right side  */}
              {/* ----------------Order Details---------------- */}
              <div className="col-span-1">
                <div className="mt-4 p-6 box-border bg-[#023047] rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-90 border border-gray-100">
                  {/*<PrintOrder/>*/}
                  {/* orders  */}
                  {/* 
                  <div className=" flex flex-col space-y-3 h-64 overflow-y-scroll orderContainer ">
                    {cartItems.map((item) => (
                      <OrderCard key={item.id} {...item} />
                    ))}
                  </div> */}
                  <h1 className="py-4 font-[800] text-xl bg-yellow-200 mx-auto text-center">
                    ORDER DETAILS
                  </h1>
                  {
                    <OrderPrice
                      orderData={orderData}
                      subTotal={subTotal}
                      tax={tax}
                      deliveryFee={deliveryFee}
                      orderTotal={orderTotal}
                    />
                  }
                  {/* place order button  */}
                  <div>
                    <Button
                      disabled={addressLength < 3}
                      className="w-full mx-auto bg-[#023047] hover:bg-gray-300 hover:text-[#023047]"
                      onClick={orderHandler}
                    >
                      {addressLength < 3 ? "address not added" : "Place Order"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="pt-24">
            <h1 className="text-center text-5xl text-primary poppins">
              No Item has added!!
            </h1>
          </div>
        )}
      </div>
      {loading && <LoadingPopup loading={loading} />}
    </main>
  );
};

export default Cart;
