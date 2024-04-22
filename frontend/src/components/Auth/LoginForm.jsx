import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../../redux/features/auth/authSlice.js";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ForgotPassword } from "./auth.js";
import { AlertCircle } from "lucide-react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card.jsx";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import authBg from "@/assets/auth-bg.jpg";
import Swal from "sweetalert2";
import LoadingPopup from "../ui/custom/LoadingPopup.jsx";
import GenerateOtpForLogin from "./GenerateOtpForLogin.jsx";

// ----------------------------------------------------

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async (data) => {
    setLoading(true);
    setError("");
    try {
      const session = await axios.post("/api/v1/users/login", data);
      if (session) {
        const userData = await axios.get("/api/v1/users/getuser");
        console.log(userData.data.data);
        if (userData) dispatch(authLogin(userData.data.data));
        setLoading(false);
        Swal.fire("Loggedin Successfully", "", "success");
        navigate("/");
      }
    } catch (error) {
      setLoading(false);
      Swal.fire(`${error.response.data.message}`, "", "error");
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
      <div className="bg-[#023047] bg-opacity-40 py-8  max-[640px]:py-0 w-full h-full flex items-center justify-center">
        <Card className="flex-1 max-w-2xl mx-auto max-[640px]:my-0 max-[640px]:rounded-none h-full w-full bg-[#023047] rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60 border border-gray-100">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl text-white">
              Log in to your account
            </CardTitle>
            <CardDescription>
              <p className="mt-4 text-gray-300">
                don't have an account?&nbsp;
                <Link to="/signup">
                  <Button variant="link" className="text-white">
                    Signup
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
          <form onSubmit={handleSubmit(login)}>
            <CardContent className="grid gap-4 text-gray-100">
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
                className="w-[90%] mx-auto bg-[#023047] hover:bg-gray-300 hover:text-[#023047]"
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
          {loading && <LoadingPopup loading={loading} />}
        </Card>
      </div>{" "}
    </div>
  );
};

export default LoginForm;
