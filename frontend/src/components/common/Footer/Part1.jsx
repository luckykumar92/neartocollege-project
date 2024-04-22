import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Instagram } from "lucide-react";
import LinkTitle from "./LinkTitle";
import headerLogo from "@/assets/logo/footerlogo.svg";

const Part1 = () => {
  return (
    <footer className="bg-[#023047]">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 mr-5">
            <div className="flex flex-row md:flex-col">
              <div className="mr-3 md:mr-0">
                <Link to="/">
                  <img src={headerLogo} className="w-64" alt="neartocollege" />
                </Link>
              </div>
              {/* <div className="flex flex-row space-x-4 md:pt-7">
                <span className="bg-[#292929] rounded-sm flex items-center justify-center my-auto p-3">
                  <Link>
                    <Linkedin className="w-[24px] h-[24px] text-white" />
                  </Link>
                </span>
                <span className="bg-[#292929] rounded-sm flex items-center justify-center my-auto p-3">
                  <Link>
                    <Instagram className="w-[24px] h-[24px] text-white" />
                  </Link>
                </span>
              </div> */}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-5 ml-3 text-base font-semibold text-white">
                Useful Links
              </h2>
              <ul className="text-white space-y-3">
                <li className="">
                  <Link to="/" className="hover:underline ">
                    <LinkTitle title="Home" />
                  </Link>
                </li>
                <li>
                  <Link to="/about-us" className="hover:underline">
                    <LinkTitle title="About Us" />
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us" className="hover:underline">
                    <LinkTitle title="Contact Us" />
                  </Link>
                </li>
              </ul>
            </div>
            {/* ---------------------Help------------------ */}
            <div>
              <h2 className="mb-5 ml-3 text-base font-semibold text-white">
                Help
              </h2>
              <ul className="text-white space-y-3">
                <li className="">
                  <Link to="#" className="hover:underline">
                    <LinkTitle title="Hows it works?" />
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    <LinkTitle title="FAQs" />
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    <LinkTitle title="Support" />
                  </Link>
                </li>
              </ul>
            </div>
            {/* ----------Legal-------------- */}
            <div>
              <h2 className="mb-5 ml-3 text-base font-semibold text-white">
                Legal
              </h2>
              <ul className="text-white space-y-3">
                <li className="">
                  <Link to="#" className="hover:underline">
                    <LinkTitle title="Privacy Policy" />
                  </Link>
                </li>
                <li className="">
                  <Link to="#" className="hover:underline">
                    <LinkTitle title="Terms and Conditions" />
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    <LinkTitle title="Refund and Cancellation" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Part1;
