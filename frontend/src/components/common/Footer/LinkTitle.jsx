import React from "react";
import { ChevronRight } from "lucide-react";
const LinkTitle = ({ title }) => {
  return (
    <div>
      <span className="pr-5">
        <ChevronRight className="absolute text-[#17AD94] w-5" />
      </span>
      {title}
    </div>
  );
};

export default LinkTitle;
