import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {
  setTotalPages,
  setFilesUrl,
} from "../../redux/features/print/printSlice.js";
import { Button } from "../ui/button.jsx";
import LoadingButton from "../ui/custom/LoadingButton.jsx";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card.jsx";
import AlertPopup from "../ui/custom/AlertPopup.jsx";
import {
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
} from "../ui/alert-dialog.jsx";
import { X } from "lucide-react";
import { setOrderData } from "@/redux/features/print/orderSlice.js";

const PrintOrder = () => {
  const data = useSelector((state) => state.order.orderData);
  console.log(data, "hgftcyvghbjk");
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
  return (
    // {/* ***************************************************** */}
    // {/* ################### Order Detail #################### */}
    // {/* ***************************************************** */}

    <div className="bg-[#023047] bg-opacity-90 w-full h-full py-8 max-[640px]:py-0">
      <Card className="rounded-none max-w-md mx-auto bg-[#d8f2ff]">
        <div className="p-4 sm:p-8">
          {/* <CardHeader>
            <CardTitle className="text-3xl font-bold text-black text-opacity-90 place-content-center mb-4 mx-auto text-center">
              Order Summary
            </CardTitle>
            <CardTitle className="flex items-center font-extrabold text-black text-opacity-90 place-content-center text-center mx-auto max-w-fit p-1  max-[640px]:ml-0 mb-5">
              {data.shopName} || {data.shopLocation}
            </CardTitle>
          </CardHeader>
          <CardContent className="flow-root"> */}
          <ul className="divide-y divide-black">
            <li className="py-3 sm:py-4">
              <div className="flex items-center glass">
                <div className="flex-1 min-w-0 ms-4">
                  <span className="text-md font-medium truncate text-black">
                    <p className="text-lg">Shop Name :</p>
                    <p className="text-lg"> Shop Location :</p>
                    <hr />
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
                      <p className="text-lg">{data.shopName}</p>
                      <p className="text-lg">{data.shopLocation}</p>
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
                  <p className="text-lg font-medium truncate">Order Total</p>
                </div>
                <div className="inline-flex items-center text-base font-semibold">
                  ₹{data.orderTotal}
                </div>
              </div>
            </li>
          </ul>
          {/* </CardContent> */}
          {/* {loading && <LoadingButton />} */}
        </div>
        <CardFooter>
          <Button
            onClick={orderHandler}
            type="submit"
            className="googlepay long w-full"
            title="Buy with Google Pay"
          >
            Buy with Google Pay
          </Button>
        </CardFooter>
      </Card>
      {/* ################################################ */}
      {dialogOpen && (
        <AlertPopup open={dialogOpen} onOpenChange={false} className="w-min">
          {loading ? (
            <LoadingButton className="" />
          ) : (
            <AlertDialogContent className="">
              <AlertDialogDescription>
                <AlertDialogTitle>
                  Order Placed Successfully!!!!
                </AlertDialogTitle>
                <button
                  onClick={closePopup}
                  className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground border-2 p-1"
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </button>
                <AlertDialogDescription>
                  We are glad, that you're with us ? We've sent you a
                  verification link to the email address &nbsp;
                  {/* <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                  {registerEmail || "null"}
                </code> */}
                  <AlertDialogTitle className="text-center text-black py-2">
                    If You have Verified below
                  </AlertDialogTitle>
                  <div className="relative flex justify-center flex-row mx-auto space-x-12">
                    {/* <Link to="/">
                    <Button variant="">Home</Button>
                  </Link>
                  <Link to="/login">
                    <Button variant="">Login</Button>
                  </Link> */}
                  </div>
                </AlertDialogDescription>
              </AlertDialogDescription>
            </AlertDialogContent>
          )}
        </AlertPopup>
      )}
    </div>
  );
};

export default PrintOrder;
