import React from "react";
import { Button, Input, Container } from "../index";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import PrintFormSelect from "./PrintFormSelect.jsx";
import { useSelector, useDispatch } from "react-redux";
import { setOrderData } from "../../redux/features/print/printSlice.js";
import Textarea from "../Textarea.jsx";

const PrintForm = ({ shopData }) => {
  const totalPages = useSelector((state) => state.print.totalPages);
  const filesUrl = useSelector((state) => state.print.filesUrl);
  // console.log(filesUrl, "jhgffhg");
  const userData = useSelector((state) => state.auth.userData);
  // console.log(userData, "lkjghv");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  // ------------------------
  const paperTypes = shopData.paperTypes;
  const paperSizes = shopData.paperSizes;
  const printedColours = shopData.printedColours;
  const printingSides = shopData.printingSides;
  const bindingOptions = shopData.bindingOptions;
  const coverOptions = shopData.coverOptions;
  const shopLocation = shopData.shopLocation;
  const shopName = shopData.shopName;
  const shopEmail = shopData.email;
  const shopContactNumber = shopData.contactNumber;
  const userEmail = userData.email;

  // ###################   Form Data ####################

  const pForm = async (data) => {
    // console.log("form", data);
    data.noOfPages = totalPages;

    // ######## Order Data #############

    const noOfPages = data.noOfPages;
    const noOfCopies = data.noOfCopies;
    const selectedPaperTypesData = paperTypes.find(
      (pdata) => pdata._id === data.paperTypes
    );
    const selectedPaperSizesData = paperSizes.find(
      (pdata) => pdata._id === data.paperSizes
    );
    const selectedPrintedColoursData = printedColours?.find(
      (pdata) => pdata._id === data.printedColours
    );
    const selectedPrintingSidesData = printingSides?.find(
      (pdata) => pdata._id === data.printingSides
    );
    const selectedCoverOptionsData = coverOptions?.find(
      (pdata) => pdata._id === data.coverOptions
    );
    const selectedBindingOptionsData = bindingOptions?.find(
      (pdata) => pdata._id === data.bindingOptions
    );

    const message = data.message || "";

    // const orderPageData = {
    //   shopName,
    //   shopLocation,
    //   shopEmail,
    //   shopContactNumber,
    //   noOfPages,
    //   noOfCopies,
    //   selectedPaperTypesData,
    //   selectedPaperSizesData,
    //   selectedPrintedColoursData,
    //   selectedPrintingSidesData,
    //   selectedBindingOptionsData,
    //   selectedCoverOptionsData,
    //   message,
    //   userEmail,
    //   filesUrl,
    // };

    const orderTotal = Math.ceil(
      parseInt(noOfPages ? noOfPages : 1) *
        parseInt(noOfCopies ? noOfCopies : 1) *
        (parseFloat(selectedPrintedColoursData?.price) +
          parseFloat(selectedPrintingSidesData?.price) +
          parseFloat(selectedPaperTypesData?.price) +
          parseFloat(selectedPaperSizesData?.price) +
          parseFloat(selectedCoverOptionsData?.price) +
          parseFloat(selectedBindingOptionsData?.price))
    );

    // ########## Order Data ################

    const OrderData = {
      shopName: shopName,
      shopLocation: shopLocation,
      shopEmail: shopEmail,
      shopContactNumber: shopContactNumber,
      noOfPages: noOfPages,
      noOfCopies: noOfCopies,
      printedColour: selectedPrintedColoursData?.name,
      printingSide: selectedPrintingSidesData?.name,
      paperType: selectedPaperTypesData?.name,
      paperSize: selectedPaperSizesData?.name,
      coverOption: selectedCoverOptionsData?.name,
      bindingOption: selectedBindingOptionsData?.name,
      message: message,
      userEmail: userEmail,
      filesUrl: filesUrl,
      orderTotal: orderTotal,
    };

    // console.log(orderPageData);
    dispatch(setOrderData(OrderData));
    navigate("/printorder");
  };

  // ##########################################################################
  return (
    <div>
      <div className="bg-gray-700 p-4 mx-auto">
        <p className="flex items-center text-5xl font-extrabold text-white max-w-fit p-1  max-[480px]:ml-0 mb-10">
          {shopName} || {shopLocation}
        </p>
        <form onSubmit={handleSubmit(pForm)} className="mt-8">
          <div className="grid gap-6 mb-6 md:grid-cols-2 ">
            {/* ***************************************************** */}
            {/* ******************* No of Pages ********************* */}
            {/* <h1>hi { selectedPaperSizesData.name}</h1> */}

            <Input
              label="PAGES: "
              type="number"
              className=""
              min={1}
              value={totalPages}
              // disabled
              {...register("noOfPages", {
                required: true,
              })}
            />
            {/* ***************************************************** */}
            {/* ******************** Copies ************************* */}
            <Input
              label="COPIES: "
              type="number"
              className=""
              min={1}
              placeholder="Number of Copies"
              {...register("noOfCopies", {
                required: true,
                value: 1,
              })}
            />
            {/* ***************************************************** */}
            {/* ******************* PRINTED COLOUR *********************/}
            <PrintFormSelect
              options={printedColours}
              label="PRINTED COLOUR: "
              className=""
              {...register("printedColours", { required: true })}
            />
            {/* ***************************************************** */}
            {/* ************** Printing Sides *********************** */}
            <PrintFormSelect
              options={printingSides}
              label="PRINTING SIDE: "
              className=""
              {...register("printingSides", { required: true })}
            />
            {/* ***************************************************** */}
            {/* ******************* Paper Types  ******************** */}
            <PrintFormSelect
              options={paperTypes}
              label="PAPER TYPE: "
              className=""
              {...register("paperTypes", { required: true })}
            />

            {/* ***************************************************** */}
            {/* ******************* Paper Sizes  ******************** */}

            <PrintFormSelect
              options={paperSizes}
              label="PAPER SIZE: "
              className=""
              {...register("paperSizes", { required: true })}
            />

            {/* ***************************************************** */}
            {/* ******************* Cover Options  ******************** */}

            <PrintFormSelect
              options={coverOptions}
              label="COVER OPTION: "
              className=""
              {...register("coverOptions", { required: true })}
            />

            {/* ***************************************************** */}
            {/* ******************* Binding Options  ******************** */}

            <PrintFormSelect
              options={bindingOptions}
              label="BINDING OPTION: "
              className=""
              {...register("bindingOptions", { required: true })}
            />

            {/* ***************************************************** */}
            {/* ****************** Custom Message ******************* */}

            <Textarea
              label="Message(For any additional detail)"
              className=""
              rows="4"
              {...register("message", {
                required: false,
              })}
            />
            {/* <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-white">
                Any coustomization
              </label>
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                placeholder="Write coustomization details here..."
                onChange={(e) => setUserMessage(e.target.value)}></textarea>
            </div> */}
            <Button
              disabled={totalPages == 0}
              type="submit"
              className="w-[100px] h-[40px] mt-[90px] max-[480px]:m-0 text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:outline-none"
            >
              Continue
            </Button>
          </div>
        </form>
      </div>

      {/* {showOrderCard && (
        <PrintOrderCard
          noOfpage={noOfpage}
          noOfCopies={noOfCopies}
          selectedPaperTypesData={selectedPaperTypesData}
          selectedPaperSizesData={selectedPaperSizesData}
          selectedPrintedColoursData={selectedPrintedColoursData}
          selectedPrintingSidesData={selectedPrintingSidesData}
          shopLocation={shopLocation}
        />
      )} */}
    </div>
  );
};

export default PrintForm;
