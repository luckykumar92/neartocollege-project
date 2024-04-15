import React, { useState } from "react";
import swal from "sweetalert";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateAddress } from "@/redux/features/print/orderSlice";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const DeliveryForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const address = async (data) => {
    localStorage.setItem("address", JSON.stringify(data));
    dispatch(updateAddress(data));

    swal(
      "address Updated!",
      "Your shipping details updated successfully!",
      "success"
    );
  };
  return (
    <div className="flex flex-col mt-20">
      <h1 className="text-2xl poppins pb-4 border-b border-gray-500 text-white">
        Edit Delivery Details
      </h1>
      <form className="my-4" onSubmit={handleSubmit(address)}>
        <div className="flex flex-col space-y-3">
          <Input
            className=" bg-white"
            type="text"
            placeholder="Country and District"
            {...register("country", {
              required: true,
            })}
          />
          <Input
            className=" bg-white"
            type="text"
            placeholder="Road Name and Road No"
            name="roadNo"
            {...register("roadNo", {
              required: true,
            })}
          />
          <Input
            className=" bg-white"
            type="text"
            placeholder="Flat, suite or floor"
            name="flatno"
            {...register("flatno", {
              required: true,
            })}
          />
          <Input
            className=" bg-white"
            type="text"
            placeholder="Delivery to"
            {...register("fullname", {
              required: true,
            })}
          />
          <Button>Save & Continue</Button>
        </div>
      </form>
    </div>
  );
};

export default DeliveryForm;
