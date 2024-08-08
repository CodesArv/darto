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
       
      <div style={{display:"flex"}}>
          <div >
            <SideNavigation />
          </div>
          <div  style={{ backgroundColor: "white" }}>
            {/* <div /> */}
            <CafeBarView />
          </div>
        </div>
      </div>
    </>
  );
};
export default CafeBarAdmin;
