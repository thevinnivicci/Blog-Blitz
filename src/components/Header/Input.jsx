import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full form-control">
      {label && (
        <label className="label text-xl" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        className={`input-lg border border-gray-300 rounded-xl shadow-sm
         ${className}`}
        ref={ref}
        {...props}
        id={id}
      />
    </div>
  );
});
export default Input;
