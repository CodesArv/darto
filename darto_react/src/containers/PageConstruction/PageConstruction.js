import React, { useState, useEffect } from "react";
import "./PageConstruction.css";
import page from "../../assets/page.png";
import { Col, Container, Row } from "reactstrap";

const PageConstruction = () => {
  return (
    <>
      <Container justfly="center">
        <Row>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={12}
            style={{ backgroundColor: "#F6F6F6", textAlign: "center" }}
          >
            <img src={page} alt="logo" />
            <h3 style={{ fontWeight: "bold", marginTop: 5 }}>
              <span style={{ color: "red" }}>PAGE IS</span> UNDER CONSTRUCTION
            </h3>
          </Col>
        </Row>
      </Container>
      {/* <div className="page">

      </div> */}
    </>
  );
};

export default PageConstruction;
