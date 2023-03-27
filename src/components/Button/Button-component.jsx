import React from "react";
import "../Button/button-component.style.scss";

const Button = ({ children, type, ...rest }) => {
  console.log("type", type);
  return (
    <button className={`btn ${type}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
