import React from "react";
//import HeaderDashboard from "./HeaderDashboard/HeaderDashboard";
import SideNavigation from "../SideNavigation/SideNavigation";
import { Container, Row, Col } from "react-bootstrap";
import "./CafeBarAdmin.css";
import CafeBarView from "./CafeBarView/CafeBarView";
const CafeBarAdmin = () => {
  return (
    <>
      <div className='' style={{ marginLeft: "0" }}>
       
        <div className='row'>
          <div className='col-3'>
            <SideNavigation />
          </div>
          <div className='col-9' style={{ backgroundColor: "white" }}>
            {/* <div /> */}
            <CafeBarView />
          </div>
        </div>
      </div>
    </>
  );
};
export default CafeBarAdmin;
