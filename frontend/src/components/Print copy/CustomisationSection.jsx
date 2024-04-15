import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { setOrderData } from "@/redux/features/print/printSlice";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import PrintFormSelect from "./PrintFormSelect";

const CustomisationSection = ({ shopData }) => {
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

  const customisationForm = async (data) => {
    // console.log("form", data);
    data.noOfPages = totalPages;
    console.log("form", data);
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
  return (
    <div className="bg-[#d8f2ff] bg-opacity-90 p-4 mx-auto">
      <p className="flex items-center text-5xl font-extrabold text-black text-opacity-90 max-w-fit p-1  max-[480px]:ml-0 mb-10">
        {shopName} - {shopLocation}
      </p>
      <form onSubmit={handleSubmit(customisationForm)} className="mt-8">
        <div className="grid gap-6  mb-6  grid-cols-1 md:grid-cols-2 ">
          {/* ***************************************************** */}
          {/* ******************* No of Pages ********************* */}
          {/* <h1>hi { selectedPaperSizesData.name}</h1> */}
          <div>
            <Label className="text-black text-opacity-80" htmlFor="pages">
              PAGES:
            </Label>
            <Input
              type="number"
              className="text-black text-xl font-[500] bg-[#023047] bg-opacity-20"
              min={1}
              value={totalPages}
              // disabled
              {...register("noOfPages", {
                required: true,
              })}
            />
          </div>
          {/* ***************************************************** */}
          {/* ******************** Copies ************************* */}
          <div>
            <Label className="text-black text-opacity-80" htmlFor="copies">
              COPIES:
            </Label>
            <Input
              type="number"
              className="text-black text-lg font-[500] bg-[#023047] bg-opacity-20"
              min={1}
              placeholder="Number of Copies"
              {...register("noOfCopies", {
                required: true,
                value: 1,
              })}
            />
          </div>
          {/* ***************************************************** */}
          {/* ******************* PRINTED COLOUR *********************/}
          <PrintFormSelect
            options={printedColours}
            label="PRINTED COLOUR: "
            className="text-black text-lg font-[500] bg-[#023047] bg-opacity-20"
            {...register("printedColours", { required: true })}
          />
          {/* ***************************************************** */}
          {/* ************** Printing Sides *********************** */}
          <PrintFormSelect
            options={printingSides}
            label="PRINTING SIDE: "
            className="text-black text-lg font-[500] bg-[#023047] bg-opacity-20"
            {...register("printingSides", { required: true })}
          />
          {/* ***************************************************** */}
          {/* ******************* Paper Types  ******************** */}
          <PrintFormSelect
            options={paperTypes}
            label="PAPER TYPE: "
            className="text-black text-lg font-[500] bg-[#023047] bg-opacity-20"
            {...register("paperTypes", { required: true })}
          />

          {/* ***************************************************** */}
          {/* ******************* Paper Sizes  ******************** */}

          <PrintFormSelect
            options={paperSizes}
            label="PAPER SIZE: "
            className="text-black text-lg font-[500] bg-[#023047] bg-opacity-20"
            {...register("paperSizes", { required: true })}
          />

          {/* ***************************************************** */}
          {/* ******************* Cover Options  ******************** */}

          <PrintFormSelect
            options={coverOptions}
            label="COVER OPTION: "
            className="text-black text-lg font-[500] bg-[#023047] bg-opacity-20"
            {...register("coverOptions", { required: true })}
          />

          {/* ***************************************************** */}
          {/* ******************* Binding Options  ******************** */}

          <PrintFormSelect
            options={bindingOptions}
            label="BINDING OPTION: "
            className="text-black text-lg font-[500] bg-[#023047] bg-opacity-20"
            {...register("bindingOptions", { required: true })}
          />
          {/* ***************************************************** */}
          {/* ****************** Custom Message ******************* */}
          <div>
            <Label className="text-black text-opacity-80" htmlFor="message">
              Message(For any additional detail)
            </Label>
            <Textarea
              className="text-black text-lg font-[500] bg-[#023047] bg-opacity-20"
              rows="4"
              {...register("message", {
                required: false,
              })}
            />
          </div>
          <Button
            disabled={totalPages == 0}
            type="submit"
            className="w-[100px] h-[40px] mt-[90px] max-[480px]:m-0 text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-[#023047] hover:bg-white hover:text-[#023047] focus:outline-none"
          >
            Continue
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CustomisationSection;
