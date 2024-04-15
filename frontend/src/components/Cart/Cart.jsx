import React from "react";
import { useSelector, useDispatch } from "react-redux";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import DeliveryForm from "./DeliveryForm";
import OrderPrice from "./OrderPrice";
import headerbanner from "../../assets/hero1.png";
import { Button } from "../ui/button";
import { setOrderData } from "@/redux/features/print/orderSlice";
import axios from "axios";

const Cart = () => {
  const address = useSelector((state) => state.order.address);
  const addressLength = JSON.stringify(address).length;
  const orderData = useSelector((state) => state.order.orderData);
  const orderDataLength = JSON.stringify(orderData).length;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const orderHandler = async () => {
    try {
      const orderResponse = await axios.post(
        "/api/v1/prints/printorder",
        orderData
      );
      if (orderResponse) {
        // setLoading(false);
        swal(
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
      // setLoading(false);
      swal(`Something went wrong`, "error");
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
                <div className="glass p-6 box-border rounded-lg">
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
                  {<OrderPrice />}
                  {/* place order button  */}
                  <div>
                    <Button
                      disabled={addressLength < 3}
                      className="w-full px-6 py-3 rounded-lg bg-primary text-white poppins ring-red-300 focus:ring-4 transition duration-500"
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
    </main>
  );
};

export default Cart;
