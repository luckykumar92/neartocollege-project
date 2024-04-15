import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// -------------------------------------------------
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button";
// import verifiedIcon from "../../assets/verifiedicon.svg";
import verifiedIcon from "@/assets/icons/verifiedicon.svg";
import emailVerifyIcom from "@/assets/icons/emailverification.svg";
import LoadingButton from "@/components/ui/custom/LoadingButton";

// ########################################################

const IsVerified = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  // -------------------------------------------
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState([]);
  const [isVerifiedAlready, setIsVerifiedAlready] = useState(false);

  useEffect(() => {
    axios
      .get(`/api/v1/users/getuserdetail?id=${id}`)
      .then((fetchData) => {
        if (fetchData) {
          const data = fetchData.data.data;
          if (data.isVerified === true) {
            setIsVerifiedAlready(true);
          }
          setUserData(data);
        } else {
          setUserData({});
        }
      })
      .finally(() => setLoading(false));
  }, []);
  //   console.log(userData, "1");
  const handleVerify = async () => {
    try {
      const res = await axios.post(`/api/v1/users/verifyemail`, {
        _id: id,
        isVerified: true,
      });
      if (res) {
        console.log(res);
        const data = res.data.data;
        setUserData(data);
        // setLoading(false);
        // openPopup();
        // alert("Account created Successfully");
        // navigate("/login");
      }
    } catch (error) {
      // setLoading(false);
      setError(error.response.data.message);
    }
  };

  return !loading ? (
    <Card className="flex items-center justify-center min-h-[70vh] p-5 bg-gray-600 min-w-screen dark:bg-black rounded-none">
      <CardContent className="max-w-xl p-8 text-center bg-white shadow-xl lg:max-w-3xl rounded-3xl lg:p-12 dark:bg-black dark:text-white dark:border">
        <CardTitle className="text-2xl">Account Verification</CardTitle>
        {isVerifiedAlready ? (
          <div>
            <img src={verifiedIcon} className=" w-40 mx-auto" />
            <h1>This Email Account is Already Verified</h1>
          </div>
        ) : (
          <div>
            <CardHeader className="text-2xl">
              Thanks for signing up for Neartocollege.com
            </CardHeader>
            {userData.isVerified === true ? (
              <div>
                <img src={verifiedIcon} className=" w-40 mx-auto" />
                <h1>Account Verified Successfully</h1>
              </div>
            ) : (
              <div>
                <div className="flex justify-center">
                  <img src={emailVerifyIcom} className="w-40 mx-auto mb-3" />
                </div>
                <p>
                  We're happy you're here. Let's get your email address
                  verified:
                </p>
                <div className="mt-4">
                  <Button
                    onClick={handleVerify}
                    className="px-2 py-2 dark:text-black text-white"
                  >
                    Click to Verify Email
                  </Button>
                  {/* <p class="mt-4 text-sm">
                    If you're having trouble clicking the "Verify Email Address"
                    button, copy and paste the URL below into your web browser:
                    <Button variant="link">
                      http://localhost:8000/email/verify/3/1ab7a09a3
                    </Button>
                  </p> */}
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  ) : (
    <LoadingButton />
  );
};

export default IsVerified;
