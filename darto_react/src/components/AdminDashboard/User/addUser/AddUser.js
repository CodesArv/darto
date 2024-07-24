import React from "react";
import CustomInputs from "../../CustomInput/CustomInputs";
const AddUser =()=>{
    return(
    <>
      <CustomInputs type="text" label="First Name" placeholder="First Name" />
      <CustomInputs type="text" label="Last Name" placeholder="Last Name" />
      <CustomInputs type="text" label="Email Id" placeholder="Email Id"/>
      <CustomInputs type="number" label="Mobile Number" placeholder="Mobile Number"/>
      <div>
        <div className='floating-left flot-flot'>
          <button className='style-team-buttons2 button2'>Add User</button>
        </div>
      </div>
    </>
    )
}
export default AddUser;