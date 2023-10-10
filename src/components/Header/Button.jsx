import React from "react";
import PropTypes from "prop-types";

const Button = ({
  children,
  type = "button",
  textColor = "text-white",
  className = "",
  ...props
}) => {
  return (
    <button
      className={`px-4 btn btn-neutral py-2 rounded-lg ${textColor} ${className}`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  textColor: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
