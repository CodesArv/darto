import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./UserRegisterPage.css";
import { Link, useHistory } from "react-router-dom";
import NoticeModal from "../../../../../components/AdminDashboard/NoticeModal/NoticeModal";
import { endpoint } from "../../../../../assets/api/endpoint";
import { apiHandler } from "../../../../../assets/api";
import darto_avatar from "../../../../../assets/darto_avatar.jpg";
import MaterialIcon from "react-google-material-icons";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default function UserRegisterPage(props) {
  const history = useHistory();
  // const url = "https://jsonplaceholder.typicode.com/posts";

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");

  const [mobileNumber, setmobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [checkedinput, setcheckedinput] = useState(false);
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
  // const validateEmail = (e) => {
  //   var email = e.target.value
  //   if(regex)
  //   const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  //   return regex(email);
  // }

  const validatesave = () => {
    if (email === "") {
      setNoticeModal(true);
      setNoticeModalErrMsg("Please Selected email");
      setNoticeModalHeaderMsg("Error");
      return false;
    }
    if (password === "") {
      setNoticeModal(true);
      setNoticeModalErrMsg("Please Selected password");
      setNoticeModalHeaderMsg("Error");
      return false;
    }

    if (checkedinput === false) {
      setNoticeModal(true);
      setNoticeModalErrMsg("Please Agree Term & condition");
      setNoticeModalHeaderMsg("Error");
      return false;
    }
    return true;
  };
  const submit = async (e) => {
    if (validatesave()) {
      e.preventDefault();

      const result = await apiHandler({
        url: endpoint.SIGNUP_USER,
        method: "POST",
        data: {
          firstName: firstName,
          lastName: lastName,
          email: email,
          mobileNumber: mobileNumber,
          password: password,
          role: "User",
        },
      });
      if (result.data.status === 500) {
        setNoticeModalHeaderMsg("Error");
        setNoticeModalErrMsg(result.data.message);
        setNoticeModal(true);
      } else {
        console.log("Result - ", result.data);
        // toast.success("Please Check Your Email",{
        //   fontSize:"24px"
        // });
        // if (emailNotification === true) {

        setNoticeModalErrMsg(
          " Thank you your Signup is completed and check you " +
            email +
            " email, authentication your email, check in junk and spam folder also  "
        );
        setNoticeModalHeaderMsg("Success");
        setNoticeModal(true);
        setEmailNotification(true);

        // if(noticeModal === false){

        // }
        // }
      }
    }
  };
  const term = () => {
    history.push("/privacypolicycontent");
  };
  const handleCheck = () => {
    setcheckedinput(!checkedinput);
  };

  const log = () => {
    history.push("/login");
  };
  return (
    <div className='Login padding_bottom_nine9 width_60_media'>
      <Form className='Login2'>
        <div className='size-manage_by_login'>
          <img src={darto_avatar} className='size_of_img_ninty_nine_by_login' />
        </div>
        <Form.Group size='lg' controlId='email'>
          <div
            style={{ display: "flex", textAlign: "center" }}
            className='padding_bottom_27px'
          >
            <div className='material_div_inside'>
              <span className='material_fix_icon'>
                <MaterialIcon
                  color='var(--token-2a633678-f86b-4ab5-94be-ee4f65254cde, rgb(120, 144, 161))'
                  icon='account_circle'
                  stretch={false}
                />{" "}
              </span>
            </div>
            <div className='form_ctrl_define_perfect' style={{ width: "100%" }}>
              <Form.Control
                className='border_form_ctrl'
                style={{
                  padding: "14px",
                  fontSize: "18px",
                  backgroundColor: "white",
                  color: "",
                  border: "none",
                }}
                autoFocus
                type='name'
                placeholder='First Name'
                onChange={(e) => setfirstName(e.target.value)}
                value={firstName}
              />
            </div>
          </div>
        </Form.Group>
        <Form.Group size='lg' controlId='email'>
          <div
            style={{ display: "flex", textAlign: "center" }}
            className='padding_bottom_27px'
          >
            <div className='material_div_inside'>
              <span className='material_fix_icon'>
                <MaterialIcon
                  color='var(--token-2a633678-f86b-4ab5-94be-ee4f65254cde, rgb(120, 144, 161))'
                  icon='person'
                  stretch={false}
                />{" "}
              </span>
            </div>
            <div className='form_ctrl_define_perfect' style={{ width: "100%" }}>
              <Form.Control
                className='border_form_ctrl'
                style={{
                  padding: "14px",
                  fontSize: "18px",
                  backgroundColor: "white",
                  color: "",
                  border: "none",
                }}
                autoFocus
                placeholder='Last Name'
                type='name'
                onChange={(e) => setlastName(e.target.value)}
                value={lastName}
              />
            </div>
          </div>
        </Form.Group>
        <Form.Group size='lg' controlId='email'>
          <div
            style={{ display: "flex", textAlign: "center" }}
            className='padding_bottom_27px'
          >
            <div className='material_div_inside'>
              <span className='material_fix_icon'>
                <MaterialIcon
                  color='var(--token-2a633678-f86b-4ab5-94be-ee4f65254cde, rgb(120, 144, 161))'
                  icon='email'
                  stretch={false}
                />{" "}
              </span>
            </div>
            <div className='form_ctrl_define_perfect' style={{ width: "100%" }}>
              <Form.Control
                className='border_form_ctrl'
                style={{
                  padding: "14px",
                  fontSize: "18px",
                  backgroundColor: "white",
                  color: "",
                  border: "none",
                }}
                autoFocus
                type='username'
                placeholder='Email '
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
        </Form.Group>
        <Form.Group size='lg' controlId='email'>
          <div
            style={{ display: "flex", textAlign: "center" }}
            className='padding_bottom_27px'
          >
            <div className='material_div_inside'>
              <span className='material_fix_icon'>
                <MaterialIcon
                  color='var(--token-2a633678-f86b-4ab5-94be-ee4f65254cde, rgb(120, 144, 161))'
                  icon='smartphone'
                  stretch={false}
                />{" "}
              </span>
            </div>
            <div className='form_ctrl_define_perfect' style={{ width: "100%" }}>
              <Form.Control
                className='border_form_ctrl'
                style={{
                  padding: "14px",
                  fontSize: "18px",
                  backgroundColor: "white",
                  color: "",
                  border: "none",
                }}
                autoFocus
                type='tel'
                placeholder='Mobile Number (Optional)'
                onChange={(e) => setmobileNumber(e.target.value)}
                value={mobileNumber}
              />
            </div>
          </div>
        </Form.Group>
        <Form.Group size='lg' controlId='password'>
          <div
            style={{ display: "flex", textAlign: "center" }}
            className='padding_bottom_27px'
          >
            <div className='material_div_inside'>
              <span className='material_fix_icon'>
                <MaterialIcon
                  color='var(--token-2a633678-f86b-4ab5-94be-ee4f65254cde, rgb(120, 144, 161))'
                  icon='lock'
                  // Using default values:
                  stretch={false}
                />{" "}
              </span>
            </div>
            <div className='form_ctrl_define_perfect' style={{ width: "100%" }}>
              <Form.Control
                className='border_form_ctrl'
                style={{
                  padding: "14px",
                  fontSize: "18px",
                  backgroundColor: "white",
                  color: "",
                  border: "none",
                }}
                placeholder='Password'
                type='password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
          </div>
        </Form.Group>
        <Form.Group size='lg' controlId='formBasicCheckbox'>
          <div style={{ display: "flex" }}>
            <div className=''>
              <Form.Check
                style={{
                  fontSize: "14px",
                  color: "white",
                  color: "#7890a1",
                }}
                value={checkedinput}
                onChange={() => handleCheck()}
                type='checkbox'
                label='I understand and accept the  '
                required={true}
              />
            </div>

            <div
              style={{
                fontSize: "14px",
                color: "white",
                color: "#7890a1",

                paddingLeft: "6px",
              }}
            >
              <a
                className='hover_of_color'
                href=''
                onClick={() => term()}
                style={{
                  color: "#7890a1",
                  textDecoration: "none",
                  padding: "0px",
                }}
              >
                {" "}
                privacy policy
              </a>
            </div>
          </div>
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
            onClick={(e) => submit(e)}
          >
            Sign Up
          </Button>
        </div>
        <div className=''>
          <div
            className='sinup_color_define'
            block
            size='lg'
            type='submit'
            onClick={() => log()}
          >
            Log In
          </div>
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
