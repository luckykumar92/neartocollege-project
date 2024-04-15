import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button, Logo, Container } from "../components";

const IsVerified = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  // -------------------------------------------
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/v1/users/getuserdetail?id=${id}`)
      .then((fetchData) => {
        const userData = fetchData.data.data;
        if (userData) {
          setUserData(userData);
        } else {
          setUserData({});
        }
      })
      .finally(() => setLoading(false));
  }, [userData]);
  //   console.log(userData, "1");
  const handleVerify = async () => {
    await axios.post(`/api/v1/users/verifyemail`, {
      _id: id,
      isVerified: true,
    });
  };

  return (
    <Container>
      {userData.isVerified === true ? (
        <section className="bg-gray-700 text-white my-1">
          <div className="flex flex-col items-center justify-center mx-auto">
            <span>
              <Logo />
            </span>
            <div className=" flex flex-col mx-auto my-auto">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="https://res.cloudinary.com/utube-cloudinary/image/upload/v1704979028/assets/icons/kdgxufdrbmamt5p24tec.png"
                alt="v-true"
              />
            </div>
            <p>Your Accous Has been verified</p>
          </div>
        </section>
      ) : (
        <section className="bg-gray-700 text-white my-1">
          <div className="flex flex-col items-center justify-center mx-auto">
            <span>
              <Logo />
            </span>
            <div className=" flex flex-col mx-auto my-auto">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="https://res.cloudinary.com/utube-cloudinary/image/upload/v1704979030/assets/icons/nq30h2ew2whv82pass0z.gif"
                alt="v-false"
              />
              <Button onClick={handleVerify}>Click to verify</Button>
            </div>
          </div>
        </section>
      )}
    </Container>
  );
};

export default IsVerified;
