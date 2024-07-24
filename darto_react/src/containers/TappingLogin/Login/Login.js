import React, { useState } from "react";
import "./Login.css";
import { Modal } from "react-bootstrap";

import { Link, useHistory } from "react-router-dom";
import {
  saveAuthData,
  saveUserData,
} from "../../../stores/reducers/login/LoginSlice";
import { apiHandler } from "../../../assets/api";
import { endpoint } from "../../../assets/api/endpoint";

import { useDispatch } from "react-redux";
const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submit = async (e) => {
    e.preventDefault();

    // history.push("/admin/modules");
    //combination is good. Log them in.
    //this token can be anything. You can use random.org to generate a random string;
    //   const token = '123456abcdef';
    //   sessionStorage.setItem('auth-token', token);
    //   const role = "user";
    // sessionStorage.setItem("role", role);

    //   history.push("/Home");
    // } else {
    //   //bad combination
    //   alert("wrong email or password combination");
    // }
    const result = await apiHandler({
      url: endpoint.SIGIN_USER,
      method: "POST",
      data: {
        email: email,
        password: password,
      },
    });
    console.log("Result - ", result.data);
    if (email === email && password === password) {
      dispatch(
        saveAuthData({
          authToken: result.data.accessToken,
          refreshToken: result.data.refreshToken,
          isAuthenticated: true,
        })
      );
      // dispatch(
      //   saveUserData({
      //     role: "user" || "",
      //     email: "User99@darto.in" || "",
      //     // name: result.data.name ? result.data.name : "",
      //   })
      // );
      sessionStorage.setItem("token", result.data.accessToken);
      // const role = "";
      // sessionStorage.setItem("role", role);
      history.push("/home");
    } else {
      //bad combination
      alert("wrong email or password combination");
    }
  };
  const history = useHistory();
  return (
    <>
      <div className='login-number-send'>
        <div className='mt-5'>
          <label className='name_Class_Define mt-5'>
            Email Id / Phone number:
          </label>
          <input
            name=''
            class='form-control  mt-5'
            style={{
              fontSize: "3rem",
              borderRadius: "10px",

              padding: "15px",
            }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email Id/Phone no.'
            type='text'
          />
          <label className='name_Class_Define'>Password:</label>
          <input
            name=''
            class='form-control mt-5'
            style={{
              fontSize: "3rem",
              borderRadius: "10px",

              padding: "15px",
              //   marginLeft: "10px",
            }}
            placeholder='Password'
            type='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div style={{ padding: "10px" }}>
          <div style={{ float: "left", fontSize: "2.5rem", color: "white" }}>
            <input type='checkbox' checked='checked' /> Remember me
          </div>
          <div style={{ float: "right", fontSize: "2.5rem" }}>
            <a href='/forgots'> forget password</a>
          </div>
        </div>
        <div
          className='space_Button_just'
          style={{ justifyContent: "space-between" }}
        >
          <button
            className='phone-login-button '
            //  onClick={() =>  SignUp()}
          >
            Sign Up
          </button>
          <button className='phone-login-button '>Sign In</button>
        </div>
      </div>
    </>
  );
};
export default Login;
