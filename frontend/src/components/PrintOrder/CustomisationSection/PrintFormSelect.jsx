import React, { useId } from "react";
import { cn } from "@/lib/utils";
import { Label } from "../../ui/label";

function PrintFormSelect({ options, label, className, ...props }, ref) {
  const id = useId();
  return (
    <div>
      {label && (
        <Label htmlFor={id} className="text-black text-opacity-80">
          {label}
        </Label>
      )}
      <select
        {...props}
        id={id}
        ref={ref}
        className={cn(
          "flex h-11 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
          className
        )}
      >
        {options?.map((option) => (
          <option
            key={option._id}
            value={option._id}
            className={cn(
              "relative flex w-full select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-xl outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 leading-10 cursor-pointer",
              className
            )}
          >
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default React.forwardRef(PrintFormSelect);
