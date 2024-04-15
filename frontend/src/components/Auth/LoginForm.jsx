import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../../redux/features/auth/authSlice.js";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ForgotPassword } from "./auth.js";
// ----------------------------------------------------
import { AlertCircle } from "lucide-react";

import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardContent,
} from "@/components/ui/card.jsx";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import LoadingButton from "@/components/ui/custom/LoadingButton";
import AlertPopup from "@/components/ui/custom/AlertPopup";

// ----------------------------------------------------

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);

  const login = async (data) => {
    // console.log(data);
    setDialogOpen(true);
    setError("");
    try {
      const session = await axios.post("/api/v1/users/login", data);
      if (session) {
        const userData = await axios.get("/api/v1/users/getuser");
        console.log(userData.data.data);
        if (userData) dispatch(authLogin(userData.data.data));
        setDialogOpen(false);
        navigate("/");
      }
    } catch (error) {
      setDialogOpen(false);
      setError(error.response.data.message);
    }
  };
  // background: rgb(2,0,36);
  // background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(102,155,188,1) 30%, rgba(0,212,255,1) 100%);
  return (
    <div className="bg-[#023047] bg-opacity-90 w-full py-8 max-[640px]:py-0">
      <Card className="flex-1 md:max-w-2xl mx-auto max-[640px]:my-0 max-[640px]:rounded-none bg-gradient-to-r from-[#d8f2ff] to-[#b1e5ff]">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Log in to your account</CardTitle>
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
        <form onSubmit={handleSubmit(login)}>
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
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                        value
                      ) || "Email address must be a valid address",
                  },
                })}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                  required: true,
                })}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              className="w-[90%] mx-auto bg-[#023047] hover:bg-[#023047] hover:bg-opacity-80"
            >
              LOG IN
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
          <CardFooter>
            <div className="relative flex justify-center flex-row mx-auto space-x-12">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="link">Forgot Password</Button>
                </DialogTrigger>
                <ForgotPassword />
              </Dialog>

              <Link to="/signup">
                <Button variant="link">Signup</Button>
              </Link>
            </div>
          </CardFooter>
          {/* ------------------------------------------- */}

          {/* // ----------------------------------------- */}
          <CardFooter>
            <Button disabled variant="outline" className=" w-[80%] mx-auto">
              {/* <Github color="#000000" /> */}
              Login with Google
            </Button>
          </CardFooter>
        </form>
        {dialogOpen && (
          <AlertPopup open={dialogOpen} onOpenChange={false} className="w-min">
            <LoadingButton className="" />
          </AlertPopup>
        )}
      </Card>
    </div>
  );
};

export default LoginForm;
