import React from "react";
//import HeaderDashboard from "./HeaderDashboard/HeaderDashboard";
import SideNavigation from "../SideNavigation/SideNavigation";
import { Container, Row, Col } from "react-bootstrap";
import "../TeamAdmin/TeamAdmin.css";
import TableSlideView from "./TableSlideView/TableSlideView";
const SliderShow = () => {
  return (
    <>
      <div className='' style={{ marginLeft: "0" }}>
        <div className='row'>
          <div className='col-3'>
            <SideNavigation />
          </div>
          <div className='col-9' style={{ backgroundColor: "white" }}>
            <TableSlideView />
          </div>
        </div>
      </div>
    </>
  );
};
export default SliderShow;
