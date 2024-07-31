import React from "react";
//import HeaderDashboard from "./HeaderDashboard/HeaderDashboard";
import SideNavigation from "../SideNavigation/SideNavigation";
// import { Container, Row, Col } from "react-bootstrap";
import "../TeamAdmin/TeamAdmin.css";
import TableSlideView from "./TableSlideView/TableSlideView";
const SliderShow = () => {
  return (
    <>
      <div className='' style={{ marginLeft: "0" }}>
      <div style={{display:"flex"}}>
          <div>
            <SideNavigation />
          </div>
          <div  style={{ backgroundColor: "white" }}>
            <TableSlideView />
          </div>
        </div>
      </div>
    </>
  );
};
export default SliderShow;
