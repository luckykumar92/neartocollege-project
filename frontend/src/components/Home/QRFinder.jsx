import React from "react";
import { Link } from "react-router-dom";

const QRFinder = () => {
  return (
    <div className="flex flex-row max-[480px]:flex-col blur-sm">
      <div className="w-full lg:w-1/2">
        {/* <Link to="#"> */}
        <div className="flex items-center flex-col justify-center ">
          <img
            src="https://res.cloudinary.com/utube-cloudinary/image/upload/v1704699128/assets/images/qzzrhezymargajzhvdyv.svg"
            className=" w-[400px] object-cover"
            alt="Hero Illustration"
            loading="eager"
            placeholder="blur"
          />
          <Link
            className="inline-flex  items-center px-6 py-3 font-medium bg-blue-600 rounded-lg hover:opacity-75 text-white"
            to="#"
          >
            Order Now
          </Link>
        </div>
        {/* </Link> */}
      </div>
      <div className="flex items-center w-full lg:w-1/2 ">
        <div className="max-w-2xl mb-8">
          <h1 className="text-4xl font-bold leading-snug tracking-tight lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight text-white">
            QR Finder
          </h1>
          {/* <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl text-gray-300">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
              saepe nemo possimus, deserunt deleniti animi laudantium ducimus
              adipisci labore, doloribus architecto nesciunt corrupti
              consequatur odio quidem, laborum vitae molestias facilis dolor.
              Voluptatem similique repellat nihil deserunt accusamus tempora
              nisi molestiae voluptate expedita rem, praesentium placeat ipsa
              dicta, obcaecati rerum quasi.
            </p> */}
        </div>
      </div>
    </div>
  );
};

export default QRFinder;
