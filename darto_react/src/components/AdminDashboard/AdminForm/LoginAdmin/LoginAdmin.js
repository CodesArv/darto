import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./LoginAdmin.css";
import { Link, useHistory } from "react-router-dom";
import {
    saveAdminAuthData,
    saveAdminData,
} from "../../../../stores/reducers/login/LoginSlice";
import { apiHandler } from "../../../../assets/api";
import { endpoint } from "../../../../assets/api/endpoint";
import { useDispatch } from "react-redux";
export default function LoginAdmin(props) {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // function validateForm() {
  //   return email.length > 0 && password.length > 0;
  // }

  // function handleSubmit(event) {
  //   event.preventDefault();
  // }
  const dispatch = useDispatch();

  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  // const [data, setData] = useState({
  //   email: "",
  //   password: ""
  // })
  const submit = async (e) => {
    e.preventDefault();
    let hardcodedCred = {
      email: "Admin99@darto.in",
      password: "#Admin@1231",
    };
      if (
          userName === hardcodedCred.email &&
          password === hardcodedCred.password
      ) {
          dispatch(
              saveAdminAuthData({
                  authToken: "123456abcdef",
                  refreshToken: "123456abcdef",
                  isAuthenticated: true,
              })
          );
          dispatch(
              saveAdminData({
                  role: "admin" || "",
                  email: "Admin99@darto.in" || "",

                  // name: result.data.name ? result.data.name : "",
              })
          );
          // sessionStorage.setItem("token", "123456abcdef");
          history.push("/admin");
      }
    else {
      //bad combination
      alert("wrong email or password combination");
    }
  
  };

  const history = useHistory();
  //   const addm =()=>{
  //     history.push('/admin');
  // };
  const reg = () => {
    history.push("/adminregister");
  };
  const pass = () => {
    history.push("/adminforgotpassword");
  };
  return (
    <div className='Login' style={{ height: "100vh" }}>
      <Form className='Login2'>
        <p style={{ fontSize: "3rem", textAlign: "center", color: "#7890a1" }}>
          Admin Login
        </p>
        <Form.Group size='lg' controlId='email'>
          <Form.Label
            style={{
              height: "3vh",
              fontSize: "10px",
              marginTop: "20px",
              color: "#7890a1",
            }}
          >
            Email Id/Phone No.
          </Form.Label>
          <Form.Control
            style={{
              height: "7vh",
              fontSize: "3rem",
              backgroundColor: "rgb(35, 53, 77)",
              color: "#7890a1",
              border: "none",
              borderRadius: "5px",
            }}
            autoFocus
            type='Email'
            placeholder='Enter Email id'
            value={userName}
            onChange={(e) => setuserName(e.target.value)}
          />
        </Form.Group>
        <Form.Group size='lg' controlId='password'>
          <Form.Label
            style={{
              height: "3vh",
              fontSize: "10px",
              marginTop: "20px",
              color: "#7890a1",
            }}
          >
            Password
          </Form.Label>
          <Form.Control
            style={{
              height: "7vh",
              fontSize: "3rem",
              backgroundColor: "rgb(35, 53, 77)",
              color: "#7890a1",
              border: "none",
              borderRadius: "5px",
            }}
            type='password'
            placeholder='Enter Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <div className='container' style={{ display: "flex", width: "100%" }}>
          <div className='row' style={{ width: "", margin: "auto" }}>
            <div className='col'>
              <Button
                block
                size='lg'
                style={{
                  // height: "7vh",
                  fontSize: "16px",
                  // width: "100%",
                  marginTop: "20px",
                  backgroundColor: "#0099ff",
                  paddingLeft: "20px",
                  paddingRight: "20px",

                  borderRadius: "5px",
                }}
                type='submit'
                onClick={(e) => submit(e)}
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
}
