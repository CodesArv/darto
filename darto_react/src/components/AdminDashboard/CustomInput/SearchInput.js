import React from "react";
import { Input } from "reactstrap";

import CustomInput from "../CustomInput/CustomInput.css";
const SearchInput = ({ id, name, type, placeholder, ...props }) => {
  return (
    <>
      <div className='row mb-3'>
        <div className=' SearchStyle1'>Search:</div>
        <div className=''>
          <Input
            {...props}
            className='SearchStyle'
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
          />
        </div>
      </div>
    </>
  );
};
export default SearchInput;
