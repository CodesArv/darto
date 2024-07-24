import React from "react";
// import "./Header.css";
import logos from "../../containers/Layout/Header/logos.png";
// import logos from "../../Layout/Header/logos.png";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link, useHistory } from "react-router-dom";
const SearchTopNavigation = () => {
  const history = useHistory();
  const Ccarousal = () => {
    history.go(-1);
  };
  const backHome = () => {
    history.push("/home");
  };
  return (
      <>
          <div className="stake-back  width_60_media ">
              <div
                  className="stake-back1 sub_navigation_bar"
                  style={{ cursor: "pointer" }}
              >
                  <span className="update-opt">
                      {" "}
                      <AiOutlineArrowLeft onClick={() => Ccarousal()} />{" "}
                  </span>{" "}
              </div>
              <div
                  className="darto-logo5 align_Logo_Manage sub_navigation_bar"
                  style={{ cursor: "pointer" }}
              >
                  <img
                      className="darto-logo5"
                      src={logos}
                      onClick={() => backHome()}
                  />
              </div>
          </div>
      </>
  );
};
export default SearchTopNavigation;
// Ccarousal
