import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LoadingPopup from "@/components/ui/custom/LoadingPopup";
import { Button } from "@/components/ui/button";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "@/redux/features/auth/authSlice";
import authBg from "@/assets/auth-bg.jpg";
import mainLogo from "@/assets/logo/footerlogo.svg";

const LoginWithOtp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [otpValue, setOtpValue] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setOtpValue(event.target.value);
  };

  const handleSubmit = async () => {
    // console.log(otpValue);
    setLoading(true);
    try {
      const verifyCode = otpValue.toString();
      const phone = JSON.parse(sessionStorage.getItem("otpPhone"));
      const email = JSON.parse(sessionStorage.getItem("otpEmail"));

      let loginAccount;

      if (phone) {
        loginAccount = await axios.post("/api/v1/users/login-with-otp", {
          verifyCode,
          phone,
        });
      } else if (email) {
        loginAccount = await axios.post("/api/v1/users/login-with-otp", {
          verifyCode,
          email,
        });
      } else {
        throw new Error("Phone or email not found.");
      }

      if (loginAccount) {
        dispatch(login(loginAccount.data.data));
        setLoading(false);
        Swal.fire("Logged in Successfully", "", "success");
        navigate("/");
      }
    } catch (error) {
      setLoading(false);
      Swal.fire(`${error.response.data.message}`, "", "error");
      console.log(error.response.data.message);
    }
  };

  return (
    <div
      className="bg-[#023047] w-full "
      style={{
        backgroundImage: `url(${authBg})`,
      }}
    >
      <div className="bg-[#023047] bg-opacity-40 py-8  max-[640px]:py-0 w-full h-full flex items-center justify-center min-h-[80vh]">
        <Card className="flex-1 max-w-xl mx-auto max-[640px]:my-0 max-[640px]:rounded-none h-full w-full bg-[#023047] rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60 border border-gray-100 my-auto">
          <div className="mx-auto flex justify-center my-4">
            <img src={mainLogo} className="w-64" alt="neartocollege" />
          </div>
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl text-white">Confirm OTP</CardTitle>
            <CardDescription>
              <p className="text-md md:text-xl text-gray-400">
                Enter the OTP we just sent you.
              </p>
            </CardDescription>
          </CardHeader>

          <CardContent className="grid gap-4 text-gray-300">
            <div className="flex flex-col max-w-md space-y-5 mx-auto">
              <input
                type="text"
                placeholder="OTP"
                className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black"
                value={otpValue} // Set the value of the input field
                onChange={handleChange} // Handle input changes
              />
              <Button
                type="submit"
                className="w-[90%] mx-auto bg-[#023047] hover:bg-gray-300 hover:text-[#023047]"
                onClick={handleSubmit}
              >
                Confirm
              </Button>
            </div>
            {loading && <LoadingPopup loading={loading} />}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginWithOtp;
