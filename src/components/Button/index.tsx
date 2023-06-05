import React from "react";

export const Button = ({
  children,
  className: otherClasses,
  ...props
}: React.ComponentProps<"button">) => {
  return (
    <button
      className={`rounded-lg bg-amber-200 px-8 py-4 font-semibold text-indigo-900 transition-colors hover:bg-amber-300 ${
        otherClasses ?? ""
      }`}
      {...props}
    >
      {children}
    </button>
  );
};
