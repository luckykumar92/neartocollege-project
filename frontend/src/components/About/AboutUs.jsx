import React from "react";

const AboutUs = () => {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-20 lg:max-w-7xl lg:px-8 relative flex flex-col justify-between">
      <h2 className="mb-3 text-3xl font-extrabold leading-tight text-gray-900">
        About us
      </h2>
      <p className="mb-12 text-lg text-gray-500">
        Welcome to Neartocollege.com, your one-stop destination for seamless
        printing services designed to make your life easier. At Neartocollege,
        our primary objective is to provide you with hassle-free access to
        high-quality printing, eliminating the need for you to
        <span className="text-gray-800"> stand and wait in long queues</span>.
      </p>
      <div className="w-full">
        <div className="flex flex-col w-full mb-10 sm:flex-row">
          <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
            <div className="relative h-full ml-0 mr-0 sm:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                    About Us
                  </h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">
                  ------------
                </p>
                <p className="mb-2 text-gray-600">
                  At the core of our services is the commitment to simplicity
                  and affordability. Neartocollege.com is more than just a
                  website; it's a platform dedicated to meeting your everyday
                  printing needs with ease. We understand the importance of
                  efficient printing solutions in your daily life, especially in
                  the college environment.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <div className="relative h-full ml-0 md:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                    Our Mission
                  </h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">
                  ------------
                </p>
                <p className="mb-2 text-gray-600">
                  Our mission is to offer you affordable and straightforward
                  printing solutions. We aim to revolutionize the printing
                  experience, ensuring that you can access top-notch printing
                  services without any unnecessary complications.
                  Neartocollege.com strives to be the go-to platform for
                  students and professionals alike, providing a convenient
                  avenue for all your printing requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full mb-5 sm:flex-row">
          <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
            <div className="relative h-full ml-0 mr-0 sm:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                    Hassle-Free Printing
                  </h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">
                  ------------
                </p>
                <p className="mb-2 text-gray-600">
                  Say goodbye to the traditional hassles of printing. With
                  Neartocollege.com, you won't find yourself standing in long
                  lines or dealing with complicated printing processes. We have
                  streamlined our services to ensure that you can submit your
                  printing tasks effortlessly, allowing you to focus on what
                  matters most to you – be it academics, projects, or any other
                  commitments.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
            <div className="relative h-full ml-0 mr-0 sm:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                    Quality Assurance
                  </h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">
                  ------------
                </p>
                <p className="mb-2 text-gray-600">
                  We understand the significance of quality in printing.
                  Neartocollege.com is committed to delivering printing
                  solutions that meet the highest standards. Whether you need
                  documents, presentations, or creative projects printed, rest
                  assured that our services prioritize quality without
                  compromising on affordability.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <div className="relative h-full ml-0 md:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                    Get Started Today
                  </h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">
                  ------------
                </p>
                <p className="mb-2 text-gray-600">
                  Experience the convenience of Neartocollege.com for all your
                  printing needs. Our user-friendly platform ensures a seamless
                  process from submission to delivery. Let us simplify your
                  printing experience, allowing you to focus on what truly
                  matters in your academic and professional journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
