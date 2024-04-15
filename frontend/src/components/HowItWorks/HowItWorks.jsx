import React from "react";
import {
  Smile,
  FileText,
  Users,
  UserRoundCheck,
  Building2,
  Sheet,
  Star,
  Circle,
  Sparkle,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import HowItWorksCard from "./HowItWorksCard";
import { Separator } from "../ui/separator";
import printerIcon from "@/assets/icons/printer.svg";
import uploadIcon from "@/assets/icons/upload.svg";
import customiseIcon from "@/assets/icons/customise.svg";
import checkoutIcon from "@/assets/icons/checkout.svg";

import fileTypeIcon from "@/assets/icons/filetype.svg";
import blackWhiteIcon from "@/assets/icons/coloroption.svg";
import paperFormatIcon from "@/assets/icons/paperformat.svg";
import messageIcon from "@/assets/icons/message.svg";

const HowItWorks = () => {
  const HowItWorksCardData = [
    {
      iconSrcUrl: printerIcon,

      heading: "Visit Print Store",
      description: "Open Blinkit app and visit Print Store",
    },
    {
      iconSrcUrl: uploadIcon,
      heading: "Upload file(s)",
      description: "Upload a file or multiple files to take prints",
    },
    {
      iconSrcUrl: customiseIcon,
      heading: "Customise print",
      description: "Choose print settings as per your requirement",
    },
    {
      iconSrcUrl: checkoutIcon,
      heading: "Checkout",
      description: "Add prints to cart and place an order",
    },
  ];
  const customisationOptionsData = [
    {
      iconSrcUrl: fileTypeIcon,
      heading: "Upload any file type",
      description: "Print PDF, JPG, PNG, JPEG, and many more",
    },
    {
      iconSrcUrl: blackWhiteIcon,
      heading: "Black & White / Colour",
      description: "Save cost with black & white or pick the coloured option",
    },
    {
      iconSrcUrl: paperFormatIcon,
      heading: "Paper format size",
      description: "We work only with A4 printing paper of 70 GSM",
    },
    {
      iconSrcUrl: messageIcon,
      heading: "Orientation",
      description: "Choose landscape or portrait as per your need",
    },
  ];
  return (
    <Card className=" rounded-none py-10">
      <div>
        <div className="mx-auto ml-0 sm:ml-4 lg:ml-8">
          <div>
            <h2 className="text-black font-bold max-[640px]:text-xl sm:text-3xl text-4xl uppercase text-center">
              How Print Store works
            </h2>
            <span className="flex mx-auto items-center justify-center content-center">
              <hr className="w-20 my-auto" />
              <Circle
                className="fill-[#023047] bg-white
                rounded-full text-white"
              />
              <Circle
                className="fill-[#023047] bg-white
                rounded-full text-white"
              />
              <Sparkle className="fill-[#023047] bg-white rounded-full text-white w-12 h-12" />
              <Circle
                className="fill-[#023047] bg-white
                rounded-full text-white"
              />
              <Circle
                className="fill-[#023047] bg-white
                rounded-full text-white"
              />
              <hr className="w-20 my-auto" />
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-8 gap-2 mt-8 items-center mx-auto max-w-6xl mb-6">
          {HowItWorksCardData.map((data, index) => (
            <HowItWorksCard key={index} cardData={data} />
          ))}
        </div>
        <Separator />
        <div className="mx-auto ml-0 sm:ml-4 lg:ml-8">
          <div>
            <h2 className="text-black font-bold max-[480px]:text-xl sm:text-3xl text-4xl uppercase text-center">
              Customisation options
            </h2>
            <span className="flex mx-auto items-center justify-center content-center">
              <hr className="w-20 my-auto" />
              <Circle
                className="fill-[#023047] bg-white
                rounded-full text-white"
              />
              <Circle
                className="fill-[#023047] bg-white
                rounded-full text-white"
              />
              <Sparkle className="fill-[#023047] bg-white rounded-full text-white w-12 h-12" />
              <Circle
                className="fill-[#023047] bg-white
                rounded-full text-white"
              />
              <Circle
                className="fill-[#023047] bg-white
                rounded-full text-white"
              />
              <hr className="w-20 my-auto" />
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-8 gap-2 mt-8 items-center mx-auto max-w-6xl mb-6">
          {customisationOptionsData.map((data, index) => (
            <HowItWorksCard key={index} cardData={data} />
          ))}
        </div>
      </div>
    </Card>
  );
};

export default HowItWorks;
