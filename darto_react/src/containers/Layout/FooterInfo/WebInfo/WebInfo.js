import React from "react";
//import './GeneralInfo.css';
import { MdOutlineArrowForwardIos } from "react-icons/md";
import MobileHeader from "../../MobileHeader/MobileHeader";
import { Link, useHistory } from "react-router-dom";
const WebInfo = () => {
  return (
    <>
      <div className="s-t-a-k-e-genres_margin">
        <div className="general-info">
          <h1 className="general-info">Website Info</h1>
        </div>
        {/* <div className="list-serach1">
          <p className="about-darto">Cookie Policy</p>
          <MdOutlineArrowForwardIos className="about-darto" />
        </div> */}
        {/* <div className="list-serach1"> */}
        <Link className='list-serach1' to="/privacypolicycontent">
          <span className="about-darto">Privacy Policy</span>
          <span> <MdOutlineArrowForwardIos className="about-darto" /></span>
        </Link>
        {/* </div> */}
        <Link className='list-serach1' to="/tc">
          <span className="about-darto">Terms & Conditions</span>
          <span> <MdOutlineArrowForwardIos className="about-darto" /></span>
        </Link>
        <Link className='list-serach1' to="/">
          <span className="about-darto">Site Map</span>
          <span> <MdOutlineArrowForwardIos className="about-darto" /></span>
        </Link>
        <Link className='list-serach1' to="/cookies">
          <span className="about-darto">Cookies</span>
          <span> <MdOutlineArrowForwardIos className="about-darto" /></span>
        </Link>
        <Link className='list-serach1' to="/adminlogin">
          <span className="about-darto">Admin</span>
          <span> <MdOutlineArrowForwardIos className="about-darto" /></span>
        </Link>
        {/* <div className="list-serach1">
          <p className="about-darto">Side Map</p>
          <MdOutlineArrowForwardIos className="about-darto" />
        </div> */}
        {/* <div className="list-serach1">
          <p className="about-darto">FAQs</p>
          <MdOutlineArrowForwardIos className="about-darto" />
        </div> */}
      </div>
      {window.innerWidth <= 768 && <MobileHeader />}
    </>
  );
};
export default WebInfo;
