import React, { useState } from "react";
import "./TappingLogin.css";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { BiMessage } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import FacebookLogin from "react-facebook-login";
import { GoogleLogin } from "react-google-login";
const TappingLogin = () => {
  const history = useHistory();
  const [login, setLogin] = useState(false);
  const [data, setData] = useState({
    name: "kamal",
    email: "sharma@123gmail.com",
    picture:
      "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
  });
  const [datagoogle, setDataGoogle] = useState({
    name: "kamal",
    email: "sharma@123gmail.com",
    picture:
      "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
  });
  const [picture, setPicture] = useState("");

  const loginphone = () => {
    history.push("/login");
  };
  const loginHome = () => {
    history.push("/home");
  };

  const responseFacebook = (data) => {
    //console.log(data);
    //setData();
    setPicture(data.picture);
    if (data.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };
  const responseGoogle = (datagoogle) => {
    //  console.log(response);
    //setDataGoogle(datagoogle);
    setPicture(datagoogle.picture);
    if (datagoogle.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };

  return (
    <>
      <div className='tapping_login1 width_60_media'>
        <div className='tapping_login'>
          <h1>
            By Tapping Login you are agree with our term of services and privacy
            policy
          </h1>
        </div>
        {/* <div className="phone_login">
          <button className="l-o-g-i-n-as-guest" onClick={() => loginHome()}>
            <CgProfile style={{ fontSize: "4rem" }} /> LOGIN as Guest{" "}
          </button>
        </div> */}
        {/* <hr /> */}
        {/* <div> */}

        {/* <FacebookLogin
          
            appId="562118384400275"
            autoLoad={true}
            fields="name,email,picture"
            scope="public_profile,user_friends"
            callback={responseFacebook}
            icon="fa-facebook"
          /> */}
        {/* )}kep-login-facebook */}
        {/* {login && <image src={picture} roundedCircle />} */}
        {/* </button> */}
        {/* </div> */}
        <hr />
        {/* <div>
         
          <GoogleLogin
        
            clientId="562118384400275"
            autoLoad={true}
            fields="name,email,picture"
            scope="public_profile,user_friends"
            callback={responseGoogle}
           
          />
       
        </div> */}
        {/* <hr /> */}
        <div className='phone_login' style={{ backgroundColor: "#acb7b2" }}>
          <button
            className='l-o-g-i-n-as-guest'
            onClick={() => loginphone()}
            style={{ backgroundColor: "#acb7b2" }}
          >
            <BiMessage style={{ fontSize: "4rem" }} /> LOGIN{" "}
          </button>
        </div>
        <hr />
        <div className='tapping_login'>
          <h1>We will never post anything without your permission</h1>
        </div>
        <hr />
        <div className='tapping_login'>
          <h1 style={{ color: "white" }}>Version 0.01</h1>
        </div>
      </div>
    </>
  );
};
export default TappingLogin;
