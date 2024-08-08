import React from "react";
//import HeaderDashboard from "./HeaderDashboard/HeaderDashboard";
import SideNavigation from "../SideNavigation/SideNavigation";
import { Container, Row, Col } from "react-bootstrap";
import "./ClubAdmin.css";
import ClubView from "./ClubView/ClubView";
const ClubAdmin = () => {
  return (
    <>
      <div className='' style={{ marginLeft: "0" }}>
      <div style={{display:"flex"}}>
          <div >
            <SideNavigation />
          </div>
          <div style={{ backgroundColor: "white" }}>
            {/* <div /> */}
            <ClubView />
          </div>
        </div>
      </div>
    </>
  );
};
export default ClubAdmin;
