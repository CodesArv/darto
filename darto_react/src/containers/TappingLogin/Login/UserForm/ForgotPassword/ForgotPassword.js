import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { apiHandler } from "../../../../../assets/api";
import { endpoint } from "../../../../../assets/api/endpoint";
import NoticeModal from "../../../../../components/AdminDashboard/NoticeModal/NoticeModal";
// import "./LoginAdmin.css";
import { Link, useHistory } from "react-router-dom";

export default function UserForgotPassword() {
  const [email, setEmail] = useState("");
  const [noticeModal, setNoticeModal] = useState(false);
  const [noticeModalErrMsg, setNoticeModalErrMsg] = useState("");
  const [noticeModalHeaderMsg, setNoticeModalHeaderMsg] = useState("");
  const [emailNotification, setEmailNotification] = useState(false);
  const closeNoticeModal = () => {
    setNoticeModal(false);
    setNoticeModalErrMsg("");
    setNoticeModalHeaderMsg("");
    if (emailNotification) {
      history.push("/login");
    }
  };
  const history = useHistory();
  const onsentemail = async (event) => {
    event.preventDefault();
    const result = await apiHandler({
      url: endpoint.CREATE_RESETPASSWORD,
      method: "POST",
      data: {
        email: email,
      },
    });
    if (result.data.status === 500) {
      setNoticeModalHeaderMsg("Error");
      setNoticeModalErrMsg(result.data.message);
      setNoticeModal(true);
    } else {
      console.log("Resultput - ", result.data);
      setNoticeModalErrMsg("Forget password link sent to your" + email + " ");
      setNoticeModalHeaderMsg("Success");
      setNoticeModal(true);
      setEmailNotification(true);
    //   history.push("/login");
    }
  };
  //CREATE_RESETPASSWORD
  return (
    <div className='Login' style={{ height: "100vh" }}>
      <Form className='Login2'>
        <p
          style={{
            fontSize: "3rem",
            textAlign: "center",
            color: "#7890a1",
            paddingBottom: "18px",
          }}
        >
          Forgot Password
        </p>
        <Form.Group size='lg' controlId='email'>
          <Form.Control
            style={{
              padding: "14px",
              fontSize: "18px",
              backgroundColor: "white",
              color: "",
              border: "none",
              borderRadius: "5px",
            }}
            autoFocus
            type='email'
            placeholder='Registered Email id'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <div className='padding_top_18px_define_reg'>
          <Button
            block
            size='lg'
            style={{
              border: "#fa0043",
              padding: "14px",
              fontSize: "3rem",
              width: "100%",
              marginTop: "20px",
              backgroundColor: "#fa0043",
              borderRadius: "63px",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
            type='submit'
            onClick={(event) => onsentemail(event)}
          >
            Send Email
          </Button>
        </div>
      </Form>
      {noticeModal && (
        <NoticeModal
          noticeModal={noticeModal}
          noticeModalHeader={noticeModalHeaderMsg}
          noticeModalErrMsg={noticeModalErrMsg}
          closeModal={closeNoticeModal}
        />
      )}
    </div>
  );
}
