import React from "react";
//import HeaderDashboard from "./HeaderDashboard/HeaderDashboard";
import SideNavigation from "../SideNavigation/SideNavigation";
import { Container, Row, Col } from "react-bootstrap";
import "../TeamAdmin/TeamAdmin.css";
import FooterTable from "./FooterTable/FooterTable";
const FooterAdmin = () => {
  return (
    <>
      <div className='' style={{ marginLeft: "0" }}>
        {/* <Row>
          <Col>
            <HeaderDashboard />
          </Col>
        </Row> */}
        <div style={{display:"flex"}}>
          <div >
            <SideNavigation />
          </div>
          <div style={{ backgroundColor: "white" }}>
            {/* <div /> */}
            <FooterTable />
          </div>
        </div>
      </div>
    </>
  );
};
export default FooterAdmin;
