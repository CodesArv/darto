import React from "react";

import SideNavigation from "../SideNavigation/SideNavigation";
import { Container, Row, Col } from "react-bootstrap";
import "../TeamAdmin/TeamAdmin.css";
import PartnersTable from "./PartnersTable/PartnersTable";

const Adminpartners = () => {
  return (
    <>
      <div className='' style={{ marginLeft: "0" }}>
        <div className='row'>
          <div className='col-3'>
            <SideNavigation />
          </div>
          <div className='col-9' style={{ backgroundColor: "white" }}>
            <PartnersTable />
          </div>
        </div>
      </div>
    </>
  );
};
export default Adminpartners;
