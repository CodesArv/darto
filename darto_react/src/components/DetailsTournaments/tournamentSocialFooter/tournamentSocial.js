import React from "react";
import "../../../components/SocialFooter/SocialFooter.css";
import { Row, Col } from "reactstrap";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
const tournamentSocials = () => {
  return (
    // <fluid-Container>
    <>
      <Row className="div1">
        <Col className="xzx">
          <h5 style={{ fontSize: "3rem" }}>
            Connect and Follow US
          </h5>
        </Col>
      </Row>

      <Row className="iconsrow" style={{ justifyContent: "space-around" }}>
        <Col className="arun" xs="2" sm="2">
          <div className="icondiv">
            <center>
            <a href="https://www.facebook.com/" className="social_Media_Handling" target="_blank">
              <FacebookIcon style={{ fontSize: "32px",color:'#7890a1' }}  className="iconHovertf"/> <br />
           
              </a>
            </center>
          </div>
        </Col>
        <Col className="arun" xs="2" sm="2">
          <div className="icondiv">
            <center>
            <a href="https://www.youtube.com" className="social_Media_Handling" target="_blank">
              <YouTubeIcon style={{ fontSize: "32px",color:'#7890a1' }} className="iconHoverty"/> <br />
           
              </a>
            </center>
          </div>
        </Col>
        <Col className="arun" xs="2" sm="2">
          <div className="icondiv">
            <center>
            <a href="https://www.instagram.com/" className="social_Media_Handling" target="_blank">
              <InstagramIcon style={{ fontSize: "32px" , color:'#7890a1'}} className="iconHoverD" /> <br />
            
              </a>
            </center>
          </div>
        </Col>
        <Col className="arun" xs="2" sm="2">
          <div className="icondiv">
            <center>
            <a href="https://twitter.com/?lang=en-in" className="social_Media_Handling" target="_blank">
              <TwitterIcon style={{ fontSize: "32px",color:'#7890a1'}} className="iconHovert"  /> <br />
         
              </a>
            </center>
          </div>
        </Col>
       
      </Row>
      </>
    // </fluid-Container>
  );
};

export default tournamentSocials;
