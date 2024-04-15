import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
  
      <footer className="bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link to="/">
                <div className="italic text-5xl font-extrabold ...">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-800 max-[480px]:italic max-[480px]:font-sans max-[480px]:text-2xl max-[480px]:font-extrabold">
                    neartocollege
                  </span>
                </div>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <ul className="text-gray-400 font-medium">
                  <li className="mb-0">
                    <Link
                      to="/contactus"
                      className="hover:underline me-4 md:me-6"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/aboutus"
                      className="hover:underline me-4 md:me-6"
                    >
                      About Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-0 text-sm font-semibold uppercase text-white">
                  Help
                </h2>
                <ul className="text-gray-400 font-medium">
                  <li className="mb-0">
                    <Link to="how-it-works" className="hover:underline">
                      Hows it works?
                    </Link>
                  </li>
                  <li>
                    <Link to="faq" className="hover:underline">
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link to="support" className="hover:underline">
                      Support
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-0 text-sm font-semibold uppercase text-white">
                  Legal
                </h2>
                <ul className="text-gray-400 font-medium">
                  <li className="mb-0">
                    <Link
                      to="/privacy-policy"
                      // to="#"
                      className="hover:underline me-4 md:me-6"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/terms-and-conditions"
                      // to="#"
                      className="hover:underline"
                    >
                      Terms &amp; Conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/refund-and-cancellation"
                      // to="#"
                      className="hover:underline"
                    >
                      Refund &amp; Cancellation
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
          <span className="block text-sm sm:text-center text-gray-400">
            © 2024&nbsp;
            <a href="https://neartocollege.com" className="hover:underline">
              Neartocollege
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
 
  );
};

export default Footer;
