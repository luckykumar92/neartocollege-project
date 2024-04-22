import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { AlertCircle } from "lucide-react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import authBg from "@/assets/auth-bg.jpg";
import Swal from "sweetalert2";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { ForgotPassword } from "./auth";
import LoadingPopup from "@/components/ui/custom/LoadingPopup";
import GenerateOtpForLogin from "./GenerateOtpForLogin";

// #########################################################
const SignupForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);

  // +++++++++++++++++++++++++++++++++++++++++++++++++++++
  const createAccount = async (data) => {
    setLoading(true);
    console.log(data);
    setError("");

    if (data.phone.length !== 10) {
      setLoading(false);
      Swal.fire("Error", "Phone number should be a 10-digit number", "error");
      setError("Phone number should be a 10-digit number");
      return; // Stop execution here
    }

    if (data.password !== data.confirmpassword) {
      setLoading(false);
      Swal.fire(
        "Error",
        "New password and Confirm Password should be the same",
        "error"
      );
      setError("New password and Confirm Password should be the same");
      return; // Stop execution here
    }

    try {
      const userData = await axios.post("/api/v1/users/register", data);
      if (userData) {
        console.log(userData.data.data.phone);
        setLoading(false);
        Swal.fire(
          "Account Created Successfully",
          "Please Verify Your Account",
          "success"
        );
        sessionStorage.setItem(
          "phone",
          JSON.stringify(userData.data.data.phone)
        );
        navigate("/account-verify");
      }
    } catch (error) {
      setLoading(false);
      // console.log(error.response.data.message);
      Swal.fire("Error", `${error.response.data.message}`, "error");
      setError(error.response.data.message);
    }
  };

  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${authBg})`,
      }}
    >
      <div className="bg-[#023047] bg-opacity-40 py-8 max-[640px]:py-0 w-full h-full flex items-center justify-center">
        <Card className="flex-1 max-w-2xl mx-auto max-[640px]:my-0 max-[640px]:rounded-none h-full w-full bg-[#023047] rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60 border border-gray-100">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl text-white">
              Create an account
            </CardTitle>
            <CardDescription>
              <p className="mt-4 text-gray-300">
                Already have an account?&nbsp;
                <Link to="/login">
                  <Button variant="link" className="text-white">
                    Login
                  </Button>
                </Link>
              </p>
            </CardDescription>
          </CardHeader>

          {error && (
            <CardHeader>
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            </CardHeader>
          )}
          <form onSubmit={handleSubmit(createAccount)}>
            <CardContent className="grid gap-4 text-gray-100">
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  {...register("fullName", {
                    required: true,
                  })}
                />
              </div>{" "}
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
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
              <div className="grid gap-2">
                <Label htmlFor="phone">Mobile Number</Label>
                <Input
                  id="phone"
                  type="number"
                  placeholder="Mobile Number"
                  {...register("phone", {
                    // required: true,
                    // minLength: 10,
                    // maxLength: 10,
                  })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="password"
                  {...register("password", {
                    required: true,
                  })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="confirm password"
                  {...register("confirmpassword", {
                    required: true,
                  })}
                />
              </div>
            </CardContent>
            {/* ----------------------------- */}
            <CardFooter>
              <div className="items-top flex space-x-2">
                <Checkbox id="terms1" />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="terms1"
                    className="text-sm text-gray-100 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Accept terms and conditions
                  </label>
                  <p className="text-sm text-gray-400">
                    You agree to our Terms of Service and Privacy Policy.
                  </p>
                </div>
              </div>
            </CardFooter>
            <CardFooter>
              <Button
                type="submit"
                className="w-[90%] mx-auto bg-[#023047] hover:bg-gray-300 hover:text-[#023047]"
              >
                Create account
              </Button>
            </CardFooter>
            <div className="relative mb-3">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or
                </span>
              </div>
            </div>
            {/* ------------------------------------------- */}
            <CardFooter>
              <div className="relative flex justify-center flex-row mx-auto space-x-4 sm:space-x-12">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="link"
                      disabled={true}
                      className="text-white"
                    >
                      Forgot Password
                    </Button>
                  </DialogTrigger>
                  <ForgotPassword />
                </Dialog>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="link" className=" text-white">
                      Login With OTP
                    </Button>
                  </DialogTrigger>
                  <GenerateOtpForLogin />
                </Dialog>
              </div>
            </CardFooter>
            {/* // ----------------------------------------- */}
            <CardFooter>
              <Button
                disabled={true}
                variant="outline"
                className=" w-[80%] mx-auto"
              >
                {/* <Github color="#000000" /> */}
                Login with Google
              </Button>
            </CardFooter>
          </form>
          {/* ------------------------------------ */}
          {loading && <LoadingPopup loading={loading} />}
        </Card>
      </div>
    </div>
  );
};

export default SignupForm;
