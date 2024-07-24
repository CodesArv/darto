import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./LoginUser.css";
import { Link, useHistory } from "react-router-dom";
import { apiHandler } from "../../../../../assets/api";
import { endpoint } from "../../../../../assets/api/endpoint";
import NoticeModal from "../../../../../components/AdminDashboard/NoticeModal/NoticeModal";
import MaterialIcon from "react-google-material-icons";
import darto_avatar from "../../../../../assets/darto_avatar.jpg";

import {
  saveAuthData,
  saveUserData,
} from "../../../../../stores/reducers/login/LoginSlice";

import { useDispatch } from "react-redux";
export default function LoginUser(props) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkedinput, setcheckedinput] = useState(false);
  const [noticeModal, setNoticeModal] = useState(false);
  const [noticeModalErrMsg, setNoticeModalErrMsg] = useState("");
  const [noticeModalHeaderMsg, setNoticeModalHeaderMsg] = useState("");
  const closeNoticeModal = () => {
    setNoticeModal(false);
    setNoticeModalErrMsg("");
    setNoticeModalHeaderMsg("");
  };
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
    // if (checkedinput === false) {
    //   setNoticeModal(true);
    //   setNoticeModalErrMsg("Please Selected darto condition");
    //   setNoticeModalHeaderMsg("error");
    //   return false;
    // }
    return true;
  };
  const submit = async (e) => {
    if (validatesave()) {
      e.preventDefault();
      const result = await apiHandler({
        url: endpoint.SIGNIN_USER,
        method: "POST",
        data: {
          email: email,
          password: password,
        },
      });
      if (result.data.status === 500) {
        setNoticeModalHeaderMsg("Error");
        setNoticeModalErrMsg(result.data.message);
        setNoticeModal(true);
      } else if (result.data.status === 401) {
        setNoticeModalHeaderMsg("Error");
        setNoticeModalErrMsg(result.data.message);
        setNoticeModal(true);
      } else {
        console.log("Resultput - ", result.data);
        if (email === email && password === password) {
          dispatch(
            saveAuthData({
              authToken: result.data.accessToken,
              refreshToken: result.data.refreshToken,
              isAuthenticated: true,
            })
          );
          dispatch(
              saveUserData({
                  status: result.data.status,
                  uid: result.data.uid,
                  id: result.data.id,
                  isPaidCustomer: result.data.isPaidCustomer,

                  // name: result.data.name ? result.data.name : "",
              })
          );
          // sessionStorage.setItem("token", result.data.accessToken);
          history.push("/home");
        }
      }
    }
  };
  const register = () => {
    history.push("/userregister");
  };

  const history = useHistory();
  const handleCheck = () => {
    setcheckedinput(!checkedinput);
  };

  return (
    <>
      <div className='Login width_60_media padding_bottom_nine9'>
        <Form className='Login2'>
          <div className='size-manage_by_login'>
            <img
              src={darto_avatar}
              className='size_of_img_ninty_nine_by_login'
            />
          </div>
          {/* <p
            style={{ fontSize: "3rem", textAlign: "center", color: "#7890a1" }}
          >
            User Login
          </p> */}
          <Form.Group size='lg' controlId='email'>
            <div style={{ display: "flex", textAlign: "center" }}>
              <div className='material_div_inside'>
                <span className='material_fix_icon'>
                  <MaterialIcon
                    color='var(--token-2a633678-f86b-4ab5-94be-ee4f65254cde, rgb(120, 144, 161))'
                    icon='account_circle'
                    // Using default values:
                    stretch={false}
                  />{" "}
                </span>
              </div>
              <div
                className='form_ctrl_define_perfect'
                style={{ width: "100%" }}
              >
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
                  type='Email'
                  placeholder='Enter Email id'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
          </Form.Group>
          <Form.Group size='lg' controlId='password'>
            <div
              style={{
                display: "flex",
                textAlign: "center",
                paddingTop: "27px",
              }}
            >
              <div className='material_div_inside'>
                <span className='material_fix_icon'>
                  <MaterialIcon
                    color='var(--token-2a633678-f86b-4ab5-94be-ee4f65254cde, rgb(120, 144, 161))'
                    icon='lock'
                    stretch={false}
                  />{" "}
                </span>
              </div>
              <div
                className='form_ctrl_define_perfect'
                style={{ width: "100%" }}
              >
                <Form.Control
                  className='border_form_ctrl'
                  style={{
                    padding: "14px",
                    fontSize: "18px",
                    backgroundColor: "white",
                    color: "",
                    border: "none",
                  }}
                  type='password'
                  placeholder='Enter Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
          </Form.Group>
          <div className='padding_top_18px_define_o'>
            <div
              style={{
                alignItems: "center",
                float: "left",
                fontSize: "14px",
                color: "#7890a1",
                display: "flex",
              }}
            >
              <input
                type='checkbox'
                // value={checkedinput}
                // onChange={() => handleCheck()}
                style={{ marginRight: "12px" }}
              />{" "}
              Remember me
            </div>
            <div style={{ float: "right", fontSize: "14px", color: "#fa0043" }}>
              <Link
                className='hover_of_color'
                to='/userforgotpassword'
                // onClick={() => forgotpassword()}
                style={{ color: "white", textDecoration: "none" }}
              >
                {" "}
                forget password ?
              </Link>
            </div>
          </div>

          <div className='padding_top_18px_define'>
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
              Log in
            </Button>
          </div>
          <div className=''>
            <div
              className='sinup_color_define'
              block
              size='lg'
              type='submit'
              onClick={() => register()}
            >
              Sign up
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
    </>
  );
}
