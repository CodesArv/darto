import React from "react";
import "../Header/Header.css";
import logos from "../../Layout/Header/logos.png";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link, useHistory } from "react-router-dom";
const DesktopHeader = () => {
  const history = useHistory();
  const Ccarousal = () => {
    history.go(-1);
  };
  const backHome = () => {
    history.push("/home");
  };
  return (
    <>
      <div className="stake-back ">
        <div className="stake-back1">
          <span className="update-opt">
            {" "}
            <AiOutlineArrowLeft onClick={() => Ccarousal()} />{" "}
          </span>{" "}
        </div>
        <div className="darto-logo5">
          <img className="darto-logo5" src={logos} onClick={() => backHome()} />
        </div>
      </div>
    </>
  );
};
export default DesktopHeader;
// Ccarousal
