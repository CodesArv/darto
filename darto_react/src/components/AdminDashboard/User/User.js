import React from "react";
//import HeaderDashboard from "./HeaderDashboard/HeaderDashboard";
import SideNavigation from "../SideNavigation/SideNavigation";
import { Container, Row, Col } from "react-bootstrap";
// import "./Admin.css";
import TableUser from "./tableUser/TableUser";
const User = () => {
  return (
    <>
      <div className="" style={{   width:'100vw'}}>
        {/* <Row>
          <Col>
            <HeaderDashboard />
          </Col>
        </Row> */}
        <div className="row">
          <div className="col-3">
            <SideNavigation />
          </div>
          <div className="col-9" style={{backgroundColor: "white" }}>
          {/* <div /> */}
            <TableUser />
          </div>
        </div>
      </div>
    </>
  );
};
export default User;
