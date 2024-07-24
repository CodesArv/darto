import React from "react";
//import HeaderDashboard from "./HeaderDashboard/HeaderDashboard";
import SideNavigation from "../SideNavigation/SideNavigation";
import { Container, Row, Col } from "react-bootstrap";
import "./TeamAdmin.css";
import TeamView from "./TeamView/TeamView";
const UserAdmin = () => {
  return (
    <>
      <div className='' style={{ marginLeft: "0" }}>
        {/* <Row>
          <Col>
            <HeaderDashboard />
          </Col>
        </Row> */}
        <div className='row'>
          <div className='col-3'>
            <SideNavigation />
          </div>
          <div className='col-9' style={{ backgroundColor: "white" }}>
            {/* <div /> */}
            <TeamView />
          </div>
        </div>
      </div>
    </>
  );
};
export default UserAdmin;
