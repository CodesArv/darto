import React from "react";

import SideNavigation from "../SideNavigation/SideNavigation";
import { Container, Row, Col } from "react-bootstrap";
import "../TeamAdmin/TeamAdmin.css";
import PartnersTable from "./PartnersTable/PartnersTable";

const Adminpartners = () => {
  return (
    <>
      <div className='' style={{ marginLeft: "0" }}>
      <div style={{display:"flex"}}>
          <div >
            <SideNavigation />
          </div>
          <div  style={{ backgroundColor: "white" }}>
            <PartnersTable />
          </div>
        </div>
      </div>
    </>
  );
};
export default Adminpartners;
