import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
// ----------------------------------------
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { AlertCircle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import LoadingButton from "@/components/ui/custom/LoadingButton";
// #############################################

const ForgotPassword = () => {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [sentMailBodyElement, setSentMailBodyElement] = useState(true);
  const [successMailBodyElement, setSuccessMailBodyElement] = useState(false);
  const [loading, setLoading] = useState(false);

  const forgotPassword = async (data) => {
    setLoading(true);
    console.log(data);
    setError("");
    try {
      const responseData = await axios.post("/api/v1/users/fpmail", data);
      // console.log(responseData.data.message);
      setLoading(false);
      setEmail(data.email);
      setSentMailBodyElement(false);
      setSuccessMailBodyElement(true);
    } catch (error) {
      setLoading(false);
      setEmail("");
      setError(error.response.data.message);
      setSuccessMailBodyElement(false);
      setSentMailBodyElement(true);
      // console.log(error.response.data.message);
    }
  };

  return (
    <div>
      {sentMailBodyElement && (
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Password assistance</DialogTitle>
            <DialogDescription>
              Enter the email address associated with your Neartocollege
              account.
            </DialogDescription>
          </DialogHeader>
          {error && (
            <DialogHeader>
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            </DialogHeader>
          )}
          <form onSubmit={handleSubmit(forgotPassword)} className="mt-8">
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
          {loading && <LoadingButton />}
        </DialogContent>
      )}
      {/*  --------------------------------------------------- */}
      {successMailBodyElement && (
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Password assistance</DialogTitle>
            <DialogDescription>
              We've sent a change Password link to the email :&nbsp;&nbsp;{" "}
              <span className=" text-blue-600">{email || "null"}</span> .&nbsp;
              &nbsp;Check your inbox.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      )}
    </div>
  );
};

export default ForgotPassword;
