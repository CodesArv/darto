import React, { useEffect, useState } from "react";
import CustomInputs from "../../CustomInput/CustomInputs";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
const EditUser = ({ record, editable, updateRecord }) => {
  let history = useHistory();
  const [firstName, setfirstName] = useState(
    record.firstName ? record.firstName : ""
  );
  const [lastName, setlastName] = useState(
    record.lastName ? record.lastName : ""
  );
  const [mobileNumber, setmobileNumber] = useState(
    record.mobileNumber ? record.mobileNumber : ""
  );

  const [email, setEmail] = useState(record.email || "");
  const [role, setRole] = useState(record.role || "");
  console.log("recordedit", record);
  const onEditData = async () => {
    updateRecord({
      id: record.id,
      firstName: firstName,
      lastName: lastName,
      mobileNumber: mobileNumber,
      email: email,
      role: role,
      // gender: gender,

      // middleName: middleName,

      // tagName: tagName,
      // ageGroup: ageGroup,
      // userDetils: userDetils,
      // organization: organization ,

      // houseNumber: houseNumber,
      // street: street,
      // locality: locality,
      // postOffice: postOffice,
      // city: city,
      // state: state,
      // district: district,
      // pincode: pincode,
      // country:country,
    });
    console.log("updateRecord", updateRecord);
  };

  return (
    <>
      <div className='padding_left10px_right_10px'>
        <div className='padding_bottom9px'>
          <CustomInputs
            type='text'
            label='First Name :'
            placeholder='First Name'
            onChange={(e) => setfirstName(e.target.value)}
            value={firstName}
          />
        </div>
        <div className='padding_bottom9px'>
          <CustomInputs
            disabled
            type='text'
            label='Middle Name :'
            placeholder='Middle Name'
            className='padding_bottom9px'
          />
        </div>
        <div className='padding_bottom9px'>
          <CustomInputs
            type='text'
            label='Last Name :'
            className='padding_bottom9px'
            placeholder='Last Name'
            onChange={(e) => setlastName(e.target.value)}
            value={lastName}
          />
        </div>
        <div className='padding_bottom9px'>
          <CustomInputs
            type='text'
            label='Email Id :'
            className='padding_bottom9px'
            placeholder='Email Id'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className='padding_bottom9px'>
          <CustomInputs
            type='number'
            label='Mobile Number :'
            placeholder='Mobile Number'
            className='padding_bottom9px'
            onChange={(e) => setmobileNumber(e.target.value)}
            value={mobileNumber}
          />
        </div>
        <div className='padding_bottom9px'>
          <CustomInputs
            disabled
            type='text'
            label='Tag name :'
            className='padding_bottom9px'
            placeholder='Tag Name'
          />
        </div>
        <div className='padding_bottom9px'>
          <label className='labelStyle'>Role :</label>
          <select
            placeholder='Mathches'
            className='teamclass teamclass1'
            style={{ padding: "none" }}
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value=''>-Select-</option>
            <option value='Admin'>Admin</option>
            <option value='User'>User</option>
          </select>
        </div>
        <div className='padding_bottom9px'>
          <CustomInputs
            disabled
            type='text'
            label='Gender :'
            className='padding_bottom9px'
            placeholder='Gender'
          />
        </div>
        <div className='padding_bottom9px'>
          <CustomInputs
            disabled
            type='text'
            label='AgeGroup :'
            className='padding_bottom9px'
            placeholder='Age Group'
          />
        </div>
        <div className='padding_bottom9px'>
          <CustomInputs
            disabled
            type='text'
            label='User Detail :'
            className='padding_bottom9px'
            placeholder='User Detail'
          />
        </div>
        <div className='padding_bottom9px'>
          <CustomInputs
            disabled
            type='text'
            label='Organization :'
            placeholder='Organization'
            className='padding_bottom9px'
          />
        </div>
        <div className='padding_bottom9px'>
          <CustomInputs
            disabled
            type='text'
            label='House Number :'
            placeholder='House Number'
            className='padding_bottom9px'
          />
        </div>
        <div className='padding_bottom9px'>
          <CustomInputs
            disabled
            type='text'
            label='Street :'
            className='padding_bottom9px'
            placeholder='Street'
          />
        </div>
        <div className='padding_bottom9px'>
          <CustomInputs
            disabled
            type='text'
            label='Locality :'
            className='padding_bottom9px'
            placeholder='Locality'
          />
        </div>
        <div className='padding_bottom9px'>
          <CustomInputs
            disabled
            type='text'
            label='Post Office :'
            className='padding_bottom9px'
            placeholder='Post Office'
          />
        </div>
        <div className='padding_bottom9px'>
          <CustomInputs
            disabled
            type='text'
            label='City :'
            className='padding_bottom9px'
            placeholder='City'
          />
        </div>
        <div className='padding_bottom9px'>
          <CustomInputs
            disabled
            type='text'
            label='State :'
            className='padding_bottom9px'
            placeholder='State'
          />
        </div>
        <div className='padding_bottom9px'>
          <CustomInputs
            disabled
            type='text'
            label='District :'
            className='padding_bottom9px'
            placeholder='District'
          />
        </div>
        <div className='padding_bottom9px'>
          <CustomInputs
            disabled
            type='number'
            label='Pincode :'
            className='padding_bottom9px'
            placeholder='Pincode'
          />
        </div>
        <div className='padding_bottom9px'>
          <CustomInputs
            disabled
            type='text'
            label='Country :'
            className='padding_bottom9px'
            placeholder='Country'
          />
        </div>
        <div>
          <div className='floating-left flot-flot'>
            <button
              className='style-team-buttons2 button2'
              onClick={onEditData}
            >
              Edit User
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
EditUser.propTypes = {
  updateRecord: PropTypes.func,
  onHide: PropTypes.func,
};
export default EditUser;
