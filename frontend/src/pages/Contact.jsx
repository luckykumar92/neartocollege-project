import React, { useState } from "react";
import { useForm } from "react-hook-form";
// import { Container, Button, Input, Textarea } from "./index.js";
import axios from "axios";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";

const Contact = () => {
  const { register, handleSubmit } = useForm();
  // const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const contactUs = async (data) => {
    // console.log(data);
    setLoading(true);
    try {
      const contactUs = await axios.post("/api/v1/users/contactus", data);
      if (contactUs) {
        setLoading(false);
        alert("Form Submitted Successfully");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert("Something went wrong");
    }
  };
  return (
    // <Container>
      <section className="bg-gray-700 text-white">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center">
            Contact Us
          </h2>
          <p className="mb-8  font-light text-center text-gray-400 sm:text-xl">
            Got a technical issue? Want to send feedback? Any Query? Let us
            know.
          </p>
          <div className=" flex flex-col  items-start content-center ml-[30%] max-[480px]:ml-[0%] lg:mb-16">
            <div className=" flex flex-row">
              <svg
                className="w-6 h-6 mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 19 18"
              >
                <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
              </svg>
              <p>+91 7857847878</p>
            </div>
            {/*  */}
            <div className=" flex flex-row mt-2">
              <img
                src="https://res.cloudinary.com/utube-cloudinary/image/upload/v1704805238/assets/images/vvai4ozoitmlbh7hoent.svg"
                className="w-8 mr-2"
                alt="email"
              />
              <p>neartocollege@gmail.com</p>
            </div>
          </div>
          <form onSubmit={handleSubmit(contactUs)} className="space-y-8">
            <div>
              <Input
                label="Your email "
                placeholder="Enter your email"
                type="email"
                className="mb-5"
                {...register("email", {
                  required: true,
                  validate: {
                    matchPatern: (value) =>
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                        value
                      ) || "Email address must be a valid address",
                  },
                })}
              />
              <Input
                label="Subject "
                placeholder="Let us know how we can help you"
                type="text"
                className="mb-5"
                {...register("subject", {
                  required: false,
                })}
              />
              <Textarea
                label="Your message"
                placeholder="Leave a comment..."
                className="mb-5"
                rows="6"
                {...register("message", {
                  required: true,
                })}
              />

              <Button
                type="submit"
                // disabled
                className="w-full font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-blue-600 hover:bg-blue-700 "
              >
                Submit
              </Button>
            </div>
          </form>
          {loading && (
            <img
              src="https://res.cloudinary.com/utube-cloudinary/image/upload/v1704712718/assets/icons/z6c33uoa8d3yjqimd0e0.webp"
              className=" w-[200px]"
            />
          )}
        </div>
      </section>
    // </Container>
  );
};

export default Contact;
