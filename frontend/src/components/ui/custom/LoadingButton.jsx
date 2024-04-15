import React from "react";
import { Loader2, Loader } from "lucide-react";

const LoadingButton = () => {
  return (
    <button
      disabled
      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium disabled:pointer-events-none p-3 bg-black dark:bg-white text-white dark:text-black w-min"
    >
      <Loader className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </button>
  );
};

export default LoadingButton;
