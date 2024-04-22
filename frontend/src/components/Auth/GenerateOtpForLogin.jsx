import React, { useState } from "react";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import LoadingPopup from "@/components/ui/custom/LoadingPopup";

const GenerateOtpForLogin = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);

  const generateOtpForLogin = async (data) => {
    setLoading(true);
    // console.log(data);
    try {
      const responseData = await axios.post(
        "/api/v1/users/generate-otp-for-login",
        data
      );
      //  console.log(responseData.data);
      setLoading(false);
      Swal.fire(
        "OTP Sended Successfully",
        "Enter OTP For Login Your Account",
        "success"
      );
      sessionStorage.setItem(
        "otpEmail",
        JSON.stringify(responseData.data.data.email)
      );
      navigate("/login-with-otp");
    } catch (error) {
      setLoading(false);
      // console.log(error.response.data.message);
      Swal.fire("Error", `${error.response.data.message}`, "error");
    }
  };

  return (
    <div>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Password assistance</DialogTitle>
          <DialogDescription>
            Enter the email address associated with your Neartocollege account.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(generateOtpForLogin)} className="mt-8">
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="link" className="sr-only">
                Link
              </Label>
              <Input
                label="Email: "
                placeholder="Enter your email"
                type="email"
                {...register("email", {
                  required: true,
                  validate: {
                    matchPatern: (value) =>
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                        value
                      ) || "Email address must be a valid address",
                  },
                })}
              />
            </div>
            <Button type="submit" size="sm" className="px-3">
              Continue
            </Button>
          </div>
        </form>
      </DialogContent>
      {loading && <LoadingPopup loading={loading} />}
    </div>
    //   {/*  --------------------------------------------------- */}
  );
};

export default GenerateOtpForLogin;
