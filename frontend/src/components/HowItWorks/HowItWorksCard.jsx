import React from "react";

const HowItWorksCard = ({ cardData }) => {
  return (
    <div className="flex lg:flex-col flex-row lg:text-center  border-[#ebebeb] w-full h-full">
      <div className="flex lg:mx-auto p-4 sm:mx-6 rounded-sm items-center justify-center lg:mb-[40px] mb-0 bg-white">
        <img
          src={cardData.iconSrcUrl}
          className="w-36"
          alt="..."
        />
      </div>
      <div className="flex flex-col my-auto lg:my-0">
        <h4 className="font-bold lg:mb-4 sm:text-2xl text-lg">
          <span className="text-black">
            <h1>{cardData.heading}</h1>
          </span>
        </h4>
        <p className="lg:leading-6 text-sm mb-0">
          {cardData.description}
        </p>
      </div>
    </div>
  );
};

export default HowItWorksCard;
