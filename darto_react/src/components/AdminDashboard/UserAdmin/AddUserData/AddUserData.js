import React, { useEffect, useState } from "react";
import "./AddUserData.css";
import { apiHandler } from "../../../../assets/api";
import { endpoint } from "../../../../assets/api/endpoint";
import { useHistory } from "react-router";
import CustomInputs from "../../CustomInput/CustomInputs";
import NoticeModal from "../../NoticeModal/NoticeModal";

const AddUserData = ({onHide}) => {
  let history = useHistory();
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [userName, setuserName] = useState("");

  const [mobileNumber, setmobileNumber] = useState("");
  const [password, setpassword] = useState("");
  // const [role ,setrole] = useState('');
  const [rawData, setRawData] = useState({});
  const [noticeModal, setNoticeModal] = useState(false);
  const [noticeModalErrMsg, setNoticeModalErrMsg] = useState("");

  const [noticeModalHeaderMsg, setNoticeModalHeaderMsg] = useState("");

  const closeNoticeModal = () => {
    setNoticeModal(false);
    setNoticeModalErrMsg("");
    setNoticeModalHeaderMsg("");
  };
  const onAdd = async () => {
    // e.preventDefault();

    const result = await apiHandler({
      url: endpoint.SIGNUP_ADMIN,
      method: "POST",
      data: {
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        mobileNumber: mobileNumber,
        password: password,
        // role:role
      },
    });
    if (result.data.status === 500) {
      setNoticeModalHeaderMsg("Error");
      setNoticeModalErrMsg(result.data.message);
      setNoticeModal(true);
    }
    else {
    console.log("Resultput - ", result.data);
    setNoticeModalHeaderMsg("Sucess");
      setNoticeModalErrMsg("Sucessfullty create team admin");
      setNoticeModal(true);
      onHide();
    // history.push("/teamadmin");
    }
    console.log("Resultput - ", result.data);
    //  closeModal();
    history.push("/user");
  };

  return (
    <>
      <div
        className="bg-form-col"
        style={{ backgroundColor: "rgb(16, 20, 44)" }}
      >
        <div className="bg-form-col1">
          <h1>Admin</h1>
        </div>

        <div className="divbtnconnect">
          <CustomInputs
            type="text"
            placeholder="First Name"
            onChange={(e) => setfirstName(e.target.value)}
            value={firstName}
          />
        </div>
        <div className="divbtnconnect">
          <CustomInputs
            type="text"
            placeholder="Last Name"
            onChange={(e) => setlastName(e.target.value)}
            value={lastName}
          />
        </div>
        <div className="divbtnconnect">
          <CustomInputs
            type="text"
            placeholder="Username"
            onChange={(e) => setuserName(e.target.value)}
            value={userName}
          />
        </div>
        <div className="divbtnconnect">
          <CustomInputs
            type="number"
            placeholder="Mobile Number"
            onChange={(e) => setmobileNumber(e.target.value)}
            value={mobileNumber}
          />
        </div>
        <div className="divbtnconnect">
          <CustomInputs
            type="password"
            placeholder="Password"
            onChange={(e) => setpassword(e.target.value)}
            value={password}
          />
        </div>
        <div
          className="divbtnconnect usercheck"
          style={{ display: "inline-block" }}
        >
          <div className="row">
            <CustomInputs type="checkbox" label="Tournament & Event" />
          </div>
          <div className="row">
            <CustomInputs type="checkbox" label="Teams" />
          </div>
          <div className="row">
            <CustomInputs type="checkbox" label="Groups" />
          </div>
          <div className="row">
            <CustomInputs type="checkbox" label="Centers and Cafe & Bars" />
          </div>
        </div>

        <div className="month-imp2" style={{ marginTop: "10px" }}>
          <button className="month-imp2" onClick={() => onAdd()}>
            Add
          </button>
        </div>
      </div>
      {noticeModal && (
          <NoticeModal
            noticeModal={noticeModal}
            noticeModalHeader={noticeModalHeaderMsg}
            noticeModalErrMsg={noticeModalErrMsg}
            closeModal={closeNoticeModal}
          />
        )}
    </>
  );
};
export default AddUserData;
