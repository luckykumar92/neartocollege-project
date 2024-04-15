import React from "react";
// import { Container } from "./index.js";
import { Link } from "react-router-dom";

const Support = () => {
  return (
    // <Container>
      <div className="bg-gray-700 py-8 px-4 mx-auto sm:py-16 lg:px-6">
        <h3 className="mb-8 text-4xl tracking-tight font-extrabold text-white">
          Support Page
        </h3>
        <div className="mb-5">
          <div className="mb-10">
            <p className="text-gray-400">
              Welcome to the support page for neartocollege.com! Our commitment
              is to provide you with the best possible support and assistance.
              If you have any questions, concerns, or need help with our
              services, please refer to the information below or contact our
              support team.
            </p>
          </div>
          <h2 className="flex items-center mb-4 text-lg font-medium text-white">
            {" "}
            1. Frequently Asked Questions (FAQs):
          </h2>
          <div className="text-gray-400">
            Before reaching out to our support team, please check our
            comprehensive Frequently Asked Questions (FAQs) section. Here,
            you'll find answers to common queries related to account management,
            ordering process, printing options, and more.&nbsp;&nbsp;
            <Link
              className="hover:underline me-4 md:me-6 text-blue-500 "
              to="/faq"
            >
              FAQs
            </Link>
          </div>
        </div>
        <div className="mb-5">
          <h2 className="flex items-center mb-4 text-lg font-medium text-white">
            {" "}
            2. Contact Information:
          </h2>
          <p className="mb-4 text-gray-400">
            If you can't find the information you need in the FAQs, our support
            team is ready to assist you. You can reach us via email or through
            our contact form.
          </p>
          <div className="text-gray-400">
            <li>
              Email:&nbsp;&nbsp;
              <span className="underline underline-offset-4">
                neartocollege@gmail.com.
              </span>
            </li>
            <li>
              Contact Form:&nbsp;&nbsp;
              <Link
                className="hover:underline me-4 md:me-6 text-blue-500 "
                to="/contactus"
              >
                Link
              </Link>
            </li>
          </div>
        </div>{" "}
        <div className="mb-5">
          <h3 className="flex items-center mb-4 text-base font-medium text-white">
            3. Technical Support:
          </h3>
          <div className="text-gray-400">
            <li>
              If you encounter technical issues while using our website, such as
              uploading files, navigating the platform, or placing an order, our
              technical support resources can help you troubleshoot.&nbsp;&nbsp;
              <Link
                className="hover:underline me-4 md:me-6 text-blue-500 "
                to="/contactus"
              >
                Link
              </Link>
            </li>
          </div>
        </div>{" "}
        <div className="mb-5">
          <h3 className="flex items-center mb-4 text-base font-medium text-white">
            4. Feedback and Suggestions:
          </h3>
          <div className="text-gray-400">
            We value your feedback! If you have suggestions for improving our
            services or encounter any issues that need attention, please let us
            know through our feedback form.&nbsp;&nbsp;
            <Link
              className="hover:underline me-4 md:me-6 text-blue-500 "
              to="/contactus"
            >
              Link
            </Link>
          </div>
        </div>{" "}
        <div className="mb-10">
          <h3 className="flex items-center mb-4 text-base font-medium text-white">
            5. Business Inquiries:
          </h3>
          <div className="text-gray-400">
            For business-related inquiries, partnerships, or bulk printing
            orders, please contact our business support team at&nbsp;&nbsp;
            <span className="underline underline-offset-4">
              neartocollege@gmail.com.
            </span>
          </div>
        </div>
        <div className="mb-5">
          <div className="text-gray-400">
            Our goal is to provide timely and effective support to ensure your
            experience with neartocollege.com is seamless and enjoyable. Thank
            you for choosing us for your document printing needs!
          </div>
        </div>
      </div>
    // </Container>
  );
};

export default Support;
