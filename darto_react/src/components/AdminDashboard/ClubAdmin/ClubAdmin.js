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
        <div className='row'>
          <div className='col-3'>
            <SideNavigation />
          </div>
          <div className='col-9' style={{ backgroundColor: "white" }}>
            {/* <div /> */}
            <ClubView />
          </div>
        </div>
      </div>
    </>
  );
};
export default ClubAdmin;
