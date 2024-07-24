import React, { useState } from "react";

import "./Setting.css";
import { FaSignLanguage } from "react-icons/fa";
import { FaPaintRoller } from "react-icons/fa";
import { MdPassword } from "react-icons/md";
import MaterialIcon from "react-google-material-icons";
import { Link, useHistory } from "react-router-dom";
const Setting = () => {
  const history = useHistory();
  const forgot = () => {
    history.push("/userforgotpassword");
  };
  return (
    <div className='setting-page width_60_media'>
      <div className='frame-setting'>
        <div className='language-setting'>
          <span>
            <MaterialIcon
              color='var(--token-cebda8be-1d57-4f3c-87d7-5b584796ea49, rgb(181, 181, 181)) '
              icon='translate'
              // Using default values:
              stretch={false}
              size='14px'
            />
          </span>{" "}
          <span>Language</span>
        </div>
        <div className='round-setting-7'>
          <select
            className='round-setting-7'
            id='cars'
            name='carlist'
            form='carform'
          >
            <option value='English'>English</option>
          </select>
        </div>
      </div>
      <div className='frame-setting-2' style={{ display: "flex" }}>
        <div className='theme-setting-2'>
          <span>
            <MaterialIcon
              color='var(--token-cebda8be-1d57-4f3c-87d7-5b584796ea49, rgb(181, 181, 181))'
              icon=' brush'
              size='14px'
              stretch={false}
            />
          </span>{" "}
          <span>Theme</span>
        </div>
        <div className='round-setting-1' style={{ marginRight: "10px" }}>
          <button className='round-setting-1'>Light</button>
        </div>
        <div className='round-setting-1'>
          <button
            className='round-setting-1'
            style={{ backgroundColor: "#00bbff" }}
          >
            Dark
          </button>
        </div>
      </div>
      <div className='frame-setting-2' style={{ display: "flex" }}>
        <div className='theme-setting-2'>
          <span>
            <MaterialIcon
              color='var(--token-cebda8be-1d57-4f3c-87d7-5b584796ea49, rgb(181, 181, 181))'
              icon='password'
              size='14px'
              stretch={false}
            />
          </span>{" "}
          <span>Password</span>
        </div>
        <div className='round-setting-2'>
          <button className='light-setting-3' onClick={() => forgot()}>
            Forget Password
          </button>
        </div>
      </div>
    </div>
  );
};
export default Setting;
