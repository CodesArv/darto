import React, { useEffect, useState } from "react";
import "../AddUserData/AddUserData.css";
import { apiHandler } from "../../../../assets/api";
import { endpoint } from "../../../../assets/api/endpoint";
import { useHistory } from "react-router";
import CustomInputs from "../../CustomInput/CustomInputs";
import PropTypes from "prop-types";
const EditUser = ({ userrecord, editable, updateUserRecord }) => {
  let history = useHistory();

  const [firstName, setfirstName] = useState(userrecord.firstName || "");
  const [lastName, setlastName] = useState(userrecord.lastName || "");
  const [userName, setuserName] = useState(userrecord.userName || "");
  const [password, setpassword] = useState(userrecord.password || "");

  const [mobileNumber, setmobileNumber] = useState(
    userrecord.mobileNumber || ""
  );
  // const [role ,setrole] = useState(record.role || '');

  const onEditData = async () => {
    updateUserRecord({
      _id: userrecord._id,
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      password: password,

      mobileNumber: mobileNumber,
      // role:role
    });
  };

  return (
    <>
      <div
        className='bg-form-col'
        style={{ backgroundColor: "rgb(16, 20, 44)" }}
      >
        <div className='bg-form-col1'>
          <h1>Admin</h1>
        </div>

        <div className='divbtnconnect'>
          <CustomInputs
            type='text'
            placeholder='First Name'
            onChange={(e) => setfirstName(e.target.value)}
            value={firstName}
          />
        </div>
        <div className='divbtnconnect'>
          <CustomInputs
            type='text'
            placeholder='Last Name'
            onChange={(e) => setlastName(e.target.value)}
            value={lastName}
          />
        </div>
        <div className='divbtnconnect'>
          <CustomInputs
            type='text'
            placeholder='Username'
            onChange={(e) => setuserName(e.target.value)}
            value={userName}
          />
        </div>
        <div className='divbtnconnect'>
          <CustomInputs
            type='number'
            placeholder='Mobile Number'
            onChange={(e) => setmobileNumber(e.target.value)}
            value={mobileNumber}
          />
        </div>

        <div className='month-imp2' style={{ marginTop: "10px" }}>
          <button className='month-imp2' onClick={onEditData}>
            Edit
          </button>
        </div>
      </div>
    </>
  );
};
EditUser.propTypes = {
  updateUserRecord: PropTypes.func,
  onHide: PropTypes.func,
};
export default EditUser;
