import React from "react";
//import HeaderDashboard from "./HeaderDashboard/HeaderDashboard";
import SideNavigation from "../SideNavigation/SideNavigation";
// import { Container, Row, Col } from "react-bootstrap";
// import "./ClubAdmin.css";
import StateBoardTable from "./stateBoardTable/StateBoardTable";
const State = () => {
  return (
    <>
      <div className='' style={{ width: "", marginLeft: "0" }}>
        {/* <Row>
          <Col>
            <HeaderDashboard />
          </Col>
        </Row> */}
        <div style={{display:"flex"}}>
          <div >
            <SideNavigation />
          </div>
          <div  style={{ backgroundColor: "white" }}>
            {/* <div /> */}
            <StateBoardTable />
          </div>
        </div>
      </div>
    </>
  );
};
export default State;
