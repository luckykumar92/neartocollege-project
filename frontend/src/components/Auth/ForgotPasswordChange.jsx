import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
// ----------------------------------------------------
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { AlertCircle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
// ------------------------------------------------------------

// ##############################################
const ForgotPasswordChange = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  // ---------------------------------------
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const changePassword = async (data) => {
    setLoading(true);
    setError("");
    if (data.password !== data.confirmpassword) {
      setError("New password and Confirm Password Should be same");
    } else {
      data._id = id;
      // console.log(data);
      setError("");
      try {
        const session = await axios.post("/api/v1/users/forgotpassword", data, {
          _id: id,
        });
        // console.log(session.data.message);
        if (session) {
          setLoading(false);
          alert("Password changed successfully");
          navigate("/");
        }
      } catch (error) {
        setLoading(false);
        setError(error.response.data.message);
      }
    }
  };
  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl"> Change Password</CardTitle>
        <CardDescription>
          <p className="mt-4">Description?&nbsp;</p>
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

      <form onSubmit={handleSubmit(changePassword)} className="mt-8">
        <CardContent className="grid gap-4">
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
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">New Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="new password"
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
          <Button type="submit" className=" w-[90%] mx-auto">
            Change password
          </Button>
        </CardFooter>
      </form>
      {loading && <h1>Loading</h1>}
    </Card>
  );
};

export default ForgotPasswordChange;
