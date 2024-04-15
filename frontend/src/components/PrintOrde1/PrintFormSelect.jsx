import React, { useId } from "react";


function PrintFormSelect({ options, label, className, ...props }, ref) {
  const id = useId();
  return (
    <div className="">
      {label && (
        <label
          htmlFor={id}
          className="block mb-2 text-sm font-medium text-white">
          {label}
        </label>
      )}
      <select
        {...props}
        id={id}
        ref={ref}
        className={`border text-lg rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white ${className}`}>
        {options?.map((option) => (
          <option
            key={option._id}
            value={option._id}
            className=" text-xl">
            {option.name}
          </option>
        ))}
      </select>
      
    </div>
  );
}

export default React.forwardRef(PrintFormSelect);
