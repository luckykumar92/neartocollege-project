import React from "react";

const HowItWorks = () => {
  return (
    // <Container>
      <div className="pb-8 border-gray-700 bg-gray-700 text-center">
        <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-white">
          How Print Service Works?
        </h2>
        <div className="grid shadow-sm border-gray-700 md:grid-cols-2 mx-16 max-[480px]:mx-0">
          <figure className="flex  p-8 text-center border-b  rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e border-gray-600">
            <figcaption className="flex items-center justify-center ">
              <img
                className="w-24 h-24 mb-3 rounded-md shadow-lg bg-blue-600"
                src="https://res.cloudinary.com/utube-cloudinary/image/upload/v1704801935/assets/images/a1a5eewfjdauml1z0oe9.svg"
                alt="Bonnie image"
              />

              <div className="space-y-0.5 font-medium text-white text-left rtl:text-right ms-3">
                <div> Visit Neartocollege.com</div>
                <div className="text-sm text-gray-400">
                  Login to Neartocollege
                </div>
              </div>
            </figcaption>
          </figure>
          <figure className="flex  p-8 text-center border-b  rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e border-gray-600">
            <figcaption className="flex items-center justify-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                className="w-24 h-24 mb-3 rounded-md shadow-lg bg-blue-600 p-2"
              >
                <path
                  d="M18,4h1a1,1,0,0,0,0-2H18a1,1,0,0,0,0,2Z"
                  fill="#ffffff"
                  className="color000 svgShape"
                ></path>
                <path
                  d="M57,2H23a1,1,0,0,0,0,2H57a3.0033,3.0033,0,0,1,3,3V34H58V32a4.9926,4.9926,0,0,0-2.15-4.0981A2.9662,2.9662,0,0,0,56,27V23a3.0033,3.0033,0,0,0-3-3h-5.01a3.1761,3.1761,0,0,0-.7965-2H53a3.0033,3.0033,0,0,0,3-3V11a3.0033,3.0033,0,0,0-3-3H45a3.0033,3.0033,0,0,0-3,3v4a2.9962,2.9962,0,0,0,1.3618,2.5077,2.9447,2.9447,0,0,0-.3042.2062A2.9961,2.9961,0,0,0,42,20V33.0459l-1.1426-1.1426a3.5953,3.5953,0,0,0-4.9541-.001A3.5078,3.5078,0,0,0,34.902,34H4V7A3.0033,3.0033,0,0,1,7,4h8a1,1,0,0,0,0-2H7A5.0059,5.0059,0,0,0,2,7V43a5.0059,5.0059,0,0,0,5,5H23.72l-1.5,6H22a6.0066,6.0066,0,0,0-6,6v1a1,1,0,0,0,1,1H56a2.0027,2.0027,0,0,0,2-2V55a2.0027,2.0027,0,0,0,2-2V51a2.0027,2.0027,0,0,0-2-2V47.8989A5.0083,5.0083,0,0,0,62,43V7A5.0059,5.0059,0,0,0,57,2ZM54,23v4a.9631.9631,0,0,1-.0176.0993A4.9942,4.9942,0,0,0,53,27H48V22h5A1.0006,1.0006,0,0,1,54,23ZM44,11a1.0006,1.0006,0,0,1,1-1h8a1.0006,1.0006,0,0,1,1,1v4a1.0006,1.0006,0,0,1-1,1H45a1.0006,1.0006,0,0,1-1-1ZM40.6614,49.5247,40.28,48H42v1A1.9854,1.9854,0,0,0,40.6614,49.5247Zm-3.343-16.2083a1.5469,1.5469,0,0,1,2.125.001L42,35.874v4.252l-4.6826-4.6826a1.45,1.45,0,0,1-.3906-.6993A1.4673,1.4673,0,0,1,37.3184,33.3164ZM4,43V36H35.2805a3.474,3.474,0,0,0,.6228.8574l5.85,5.85c.075.075.1618.1449.2471.2151V46H7A3.0033,3.0033,0,0,1,4,43Zm21.7813,5H38.2188l1.5,6H24.2813ZM18,60a4.0039,4.0039,0,0,1,4-4H40.9824c.331.0058.697.0164,1.0176.0292V60Zm38,0H44V55H56Zm2.002-7H42V51H58ZM44,49V20a1,1,0,0,1,1.1748-.9854A1.0838,1.0838,0,0,1,46,20.1074V28a1,1,0,0,0,1,1h6a2.98,2.98,0,0,1,1.15.231l.0226.0084A3.0039,3.0039,0,0,1,56,32V49Zm14-3.1843V36h2v7A2.995,2.995,0,0,1,58,45.8157Z"
                  fill="#ffffff"
                  className="color000 svgShape"
                ></path>
                <path
                  d="M32 44a3 3 0 1 0-3-3A3.0033 3.0033 0 0 0 32 44zm0-4a1 1 0 1 1-1 1A1.0006 1.0006 0 0 1 32 40zM28 18h8a3.0033 3.0033 0 0 0 3-3V11a3.0033 3.0033 0 0 0-3-3H28a3.0033 3.0033 0 0 0-3 3v4A3.0033 3.0033 0 0 0 28 18zm-1-7a1.0006 1.0006 0 0 1 1-1h8a1.0006 1.0006 0 0 1 1 1v4a1.0006 1.0006 0 0 1-1 1H28a1.0006 1.0006 0 0 1-1-1zM25 27a3.0033 3.0033 0 0 0 3 3h8a3.0033 3.0033 0 0 0 3-3V23a3.0033 3.0033 0 0 0-3-3H28a3.0033 3.0033 0 0 0-3 3zm2-4a1.0006 1.0006 0 0 1 1-1h8a1.0006 1.0006 0 0 1 1 1v4a1.0006 1.0006 0 0 1-1 1H28a1.0006 1.0006 0 0 1-1-1zM11 8a3.0033 3.0033 0 0 0-3 3v4a3.0033 3.0033 0 0 0 3 3h8a3.0033 3.0033 0 0 0 3-3V11a3.0033 3.0033 0 0 0-3-3zm9 3v4a1.0006 1.0006 0 0 1-1 1H11a1.0006 1.0006 0 0 1-1-1V11a1.0006 1.0006 0 0 1 1-1h8A1.0006 1.0006 0 0 1 20 11zM19 20H11a3.0033 3.0033 0 0 0-3 3v4a3.0033 3.0033 0 0 0 3 3h8a3.0033 3.0033 0 0 0 3-3V23A3.0033 3.0033 0 0 0 19 20zm1 7a1.0006 1.0006 0 0 1-1 1H11a1.0006 1.0006 0 0 1-1-1V23a1.0006 1.0006 0 0 1 1-1h8a1.0006 1.0006 0 0 1 1 1z"
                  fill="#ffffff"
                  className="color000 svgShape"
                ></path>
              </svg>

              <div className="space-y-0.5 font-medium text-white text-left rtl:text-right ms-3">
                <div>Shops</div>
                <div className="text-sm text-gray-400">
                  Select Shop For Printing
                </div>
              </div>
            </figcaption>
          </figure>
          <figure className="flex  p-8 text-center border-b  rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e border-gray-600">
            <figcaption className="flex items-center justify-center ">
              <img
                className="w-24 h-24 mb-3 rounded-md shadow-lg bg-blue-600"
                src="https://res.cloudinary.com/utube-cloudinary/image/upload/v1704800788/assets/images/xa0leyspo04j0mte8jfn.svg"
                alt="Upload image"
              />
              <div className="space-y-0.5 font-medium text-white text-left rtl:text-right ms-3">
                <div>Upload file(s)</div>
                <div className="text-sm text-gray-400">
                  Upload a file or multiple files to take prints
                </div>
              </div>
            </figcaption>
          </figure>
          <figure className="flex  p-8 text-center border-b  rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e border-gray-600">
            <figcaption className="flex items-center justify-center ">
              <img
                className="w-24 h-24 mb-3 rounded-md shadow-lg"
                src="https://res.cloudinary.com/utube-cloudinary/image/upload/v1704800388/assets/images/bucqbvsr9qikq0wch258.svg"
                alt="Bonnie image"
              />
              <div className="space-y-0.5 font-medium text-white text-left rtl:text-right ms-3">
                <div>Customise print</div>
                <div className="text-sm text-gray-400">
                  Choose print settings as per your requirement
                </div>
              </div>
            </figcaption>
          </figure>
          <figure className="flex  p-8 text-center border-b  rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e border-gray-600">
            <figcaption className="flex items-center justify-center ">
              <img
                className="w-24 h-24 mb-3 rounded-md shadow-lg"
                src="https://res.cloudinary.com/utube-cloudinary/image/upload/v1704801014/assets/images/ino6eguukahov8rvx3to.svg"
                alt="Bonnie image"
              />
              <div className="space-y-0.5 font-medium text-white text-left rtl:text-right ms-3">
                <div>Checkout</div>
                <div className="text-sm text-gray-400">
                  Do Payment to place an order
                </div>
              </div>
            </figcaption>
          </figure>
          <figure className="flex  p-8 text-center border-b  rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e border-gray-600">
            <figcaption className="flex items-center justify-center">
              <img
                className="w-24 h-24 mb-3 rounded-md shadow-lg bg-blue-600"
                src="https://res.cloudinary.com/utube-cloudinary/image/upload/v1704887692/assets/images/iolh1qgkbb2t3m5zrgv2.svg"
                alt="Bonnie image"
              />

              <div className="space-y-0.5 font-medium text-white text-left rtl:text-right ms-3">
                <div>Order</div>
                <div className="text-sm text-gray-400">
                  Receive Your Order from Selected Shop
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    // </Container>
  );
};

export default HowItWorks;
//
