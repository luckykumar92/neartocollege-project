import React from "react";
import AlertPopup from "./AlertPopup";
import { Loader } from "lucide-react";

const LoadingPopup = ({ loading }) => {
  return (
    <AlertPopup open={loading} onOpenChange={false} className="w-min">
      <button
        disabled={true}
        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium disabled:pointer-events-none p-3 bg-black dark:bg-white text-white dark:text-black w-min"
      >
        <Loader className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </button>
    </AlertPopup>
  );
};

export default LoadingPopup;
