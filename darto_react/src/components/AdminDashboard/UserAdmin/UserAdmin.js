import React from "react";
//import HeaderDashboard from "./HeaderDashboard/HeaderDashboard";
import SideNavigation from "../SideNavigation/SideNavigation";
// import { Container, Row, Col } from "react-bootstrap";
import "./UserAdmin.css";
import UserView from "./UserView/UserView";
const UserAdmin = () => {
  return (
    <>
      <div className="" style={{  marginLeft:'0'}}>
        {/* <Row>
          <Col>
            <HeaderDashboard />
          </Col>
        </Row> */}
        <div style={{display:"flex"}}>
          <div >
            <SideNavigation />
          </div>
          <div style={{backgroundColor: "white" }}>
          {/* <div /> */}
            <UserView />
          </div>
        </div>
      </div>
    </>
  );
};
export default UserAdmin;
