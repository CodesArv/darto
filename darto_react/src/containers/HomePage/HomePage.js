import React from "react";

import img1 from "../../assets/images/logo_files/img1.jpg";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

import Tournaments from "../../domains/Tournaments/Tournaments";
import CommonSign from "../Layout/CommonSign/CommonSign";
import Gallery from "../../domains/HomePage/Gallery/Gallery";
import "../../themes/Styles.css";
import { Link, useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();
  const onevent = () => {
    history.push("/gallery");
  };
  return (
    <>
      <div>
        <Card
          style={{
            flex: 1,
            backgroundColor: "white",
            marginLeft: "20px",
            marginRight: "20px",
          }}
        >
          <CardImg style={{ width: "100%" }} src={img1} alt='Card image cap' />

          <CardBody>
            <CardSubtitle tag='h6' className='mb-2 text-muted textcolor1'>
              Card subtitle
            </CardSubtitle>
            <CardText className='textcolor'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <div class='button-container-div'></div>
          </CardBody>
        </Card>
      </div>
      <div>
        <Tournaments />
        <CommonSign />

        <Gallery />
        {/* <Bottom/> */}

        {/* <button className="btnt" onClick={() => onevent()}>
                  Event Gallery
              </button> */}
      </div>
    </>
  );
};
export default HomePage;
