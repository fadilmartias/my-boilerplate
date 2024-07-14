import React from "react";

const Input = ({
  variant,
  label,
  required,
  className,
  classNameWrapper,
  error,
  ...props
}) => {
  if (variant === "normal" || !variant) {
    return (
      <div className="">
        <label
          className="block text-sm font-medium text-gray-700 mb-2"
          htmlFor={props.id || props.name}
        >
          {label}
          {required && <sup className="text-red-500">*</sup>}
        </label>
        <input
          className={`w-full  rounded-lg border py-2 px-4 ${error ? "border-danger focus:border-danger" : "focus:border-primary"} focus:outline-none ${
            className ?? ""
          } `}
          {...props}
        />
         <div className="text-danger text-xs mt-2 capitalize">{error}</div>
      </div>
    );
  } else if (variant === "floating") {
    return (
      <div className={`relative z-0 w-full group ${classNameWrapper ?? ""}`}>
        <input
          className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 peer ${error ? "border-danger dark:focus:border-danger focus:border-danger" : "border-gray-300 dark:focus:border-primary-dark focus:border-primary"} ${
            className ?? ""
          }`}
          placeholder=" "
          {...props}
        />
        <label
          htmlFor={props.id || props.name}
          className={`peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${error ? "text-danger peer-focus:text-danger" : "text-gray-500 dark:text-gray-400 peer-focus:text-primary peer-focus:dark:text-primary-dark"}`}
        >
          {label}
          {required && <sup className="text-red-500">*</sup>}
        </label>
        <div className="text-danger text-xs mt-2 first-letter:capitalize">{error}</div>
      </div>
    );
  }
};

export default Input;
