import React from "react";
import headerLogo from "@/assets/logo/logo3.svg";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <div className="">
      <Link to="/">
        <img src={headerLogo} className="w-56 sm:w-64" alt="neartocollege" />
      </Link>
    </div>
  );
};

export default Logo;
