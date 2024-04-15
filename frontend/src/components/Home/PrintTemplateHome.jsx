import React from "react";
import { Button, Container } from "../index.js";
import { Link } from "react-router-dom";

const PrintTemplateHome = () => {
  return (
    <Container>
      <div className="flex flex-row max-[480px]:flex-col py-[20px]">
        <div className="w-full lg:w-1/2">
          <Link to="/shoplocation">
            <div className="flex items-center flex-col justify-center ">
              <img
                src="https://res.cloudinary.com/utube-cloudinary/image/upload/v1704694401/assets/images/n0swft3cl7it1u2nzb6o.jpg"
                className="object-cover"
                alt="Hero Illustration"
                loading="eager"
                placeholder="blur"
              />
            </div>
          </Link>
        </div>
        <div className="flex items-center w-full lg:w-1/2 ">
          <div className="max-w-2xl mb-8  ml-[20px] max-[480px]:ml-[10px]">
            <h1 className="text-1xl font-bold leading-snug tracking-tight lg:text-4xl lg:leading-tight xl:text-4xl xl:leading-tight text-white">
              "Eliminate the Hassle: No More Long Queues for Document Printing"
            </h1>
            {/* <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl text-gray-300">
              College life is a whirlwind of assignments, projects, and memories
              worth cherishing. Imagine having the power to turn your digital
              creations into tangible keepsakes. Welcome to
              <span>neartocollege.com</span>, where we've crafted the perfect
              solution for college students like you - transforming your digital
              PDFs into printouts that make a statement.
            </p> */}
            <Link
              className="inline-flex  items-center px-6 py-3 font-medium bg-blue-600 rounded-lg hover:opacity-75 text-white"
              to="/shoplocation">
              Print Now
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PrintTemplateHome;
