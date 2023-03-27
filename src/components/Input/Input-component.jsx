import React from "react";
import "../Input/Input-component.style.scss";

const Input = ({ children, type, ...rest }) => {
  return <input className="inputs" {...rest} type={type} />;
};

export default Input;
