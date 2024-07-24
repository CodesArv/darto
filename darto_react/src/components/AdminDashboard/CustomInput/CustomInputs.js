import React from "react";

import { Input, Label } from "reactstrap";
import "./CustomInput.css";

const CustomInputs = ({ id, name, type, label, placeholder, ...props }) => {
  return (
    <div className='mb-3'>
      <Label className='labelStyle'>{label}</Label>
      <Input
        {...props}
        className='inputStyle'
        placeholder={placeholder}
        name={name}
        type={type}
      />
    </div>
  );
};
export default CustomInputs;
