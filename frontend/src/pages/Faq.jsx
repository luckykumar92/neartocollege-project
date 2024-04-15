import React from "react";

const Faq = () => {
  return (
    <section className="bg-gray-700">
      <div className="py-8 px-4 mx-auto sm:py-16 lg:px-6">
        <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-white">
          Frequently asked questions
        </h2>
        <div className="pt-8 text-left border-t border-gray-700 ">
          <div>
            <div className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium text-white">
                <svg
                  className="flex-shrink-0 mr-2 w-5 h-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                How does Print service work?
              </h3>
              <p className="text-gray-400">
                <ul>
                  <li>Login to neartocollege.com</li>
                  <li>Select Shop For Print</li>
                  <li>Upload your documents to be printed</li>
                  <li>Choose from different customisations available.</li>
                  <li>Checkout to place the order</li>
                  <li>Your documents are deleted once printed</li>
                </ul>
              </p>
            </div>
            <div className="mb-[200px] max-[480px]:mb-5">
              <h3 className="flex items-center mb-4 text-lg font-medium text-white">
                <svg
                  className="flex-shrink-0 mr-2 w-5 h-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                What file formats can I print?
              </h3>
              <p className="text-gray-400">
                You can upload documents in any of the popular file formats like
                JPG, JPEG, PNG, PDF and many more
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
