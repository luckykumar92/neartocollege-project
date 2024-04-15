import Hero from "@/components/Hero/Hero";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Testimonials from "@/components/Testimonials/Testimonials";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Hero />
      <hr />
      <HowItWorks />
      <Testimonials />
    </>
  );
};

export default HomePage;
