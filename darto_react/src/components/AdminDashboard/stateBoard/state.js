import React from "react";
//import HeaderDashboard from "./HeaderDashboard/HeaderDashboard";
import SideNavigation from "../SideNavigation/SideNavigation";
import { Container, Row, Col } from "react-bootstrap";
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
        <div className='row'>
          <div className='col-3'>
            <SideNavigation />
          </div>
          <div className='col-9' style={{ backgroundColor: "white" }}>
            {/* <div /> */}
            <StateBoardTable />
          </div>
        </div>
      </div>
    </>
  );
};
export default State;
