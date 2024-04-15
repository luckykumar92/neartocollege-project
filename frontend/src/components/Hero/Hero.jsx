import React from "react";
import { Button } from "../ui/button";
import heroBg from "@/assets/hero-bg12.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="w-full h-[400px]  bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      <div className="bg-black bg-opacity-60 w-full h-full flex items-center justify-center">
        <div className="w-full h-full flex items-center justify-center">
          <div className="relative text-center" data-aos="fade-up">
            <div className="">
              <h1 className="text-6xl max-[767px]:mt-8 max-[767px]:text-4xl font-bold text-white text-opacity-85">
                ONLINE PRINTING SHOP
              </h1>
              <h2 className="ml-3 text-2xl max-[480px]:text-xl mt-3 font-[700] text-white text-opacity-75">
                We Deliver Order Each and Every Pincode
              </h2>
              <h3 className="font-[400] text-white text-opacity-65">
                "Eliminate the Hassle: No More Long Queues for Document
                Printing!"
              </h3>
            </div>
            <Link to="/shops">
              <Button className="mt-4 bg-[#023047]  hover:bg-white  text-white hover:text-[#023047] border-2 border-[#023047]">
                Print Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
