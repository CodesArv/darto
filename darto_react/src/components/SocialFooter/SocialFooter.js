import React from "react";
import "./SocialFooter.css";
import { Row, Col } from "reactstrap";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
const SocialFooter = () => {
  return (
    // <fluid-Container>
    <>
      <div className='div1'>
        <Col className='xzx'>
          <h5 style={{ fontSize: "3rem" }}>Follow US</h5>
        </Col>
      </div>

      <Row
        className='iconsrow'
        style={{ justifyContent: "space-around", padding: "20px" }}
      >
        <Col className='arun' xs='2' sm='2'>
          <div className='icondiv'>
            <center>
              <a
                href='https://www.facebook.com/Darto-108267898403302'
                className='social_Media_Handling'
                target='_blank'
              >
                <FacebookIcon
                  style={{ fontSize: "24px", color: "#7890a1" }}
                  className='iconHovertf'
                />{" "}
                <br />
              </a>
            </center>
          </div>
        </Col>
        <Col className='arun' xs='2' sm='2'>
          <div className='icondiv'>
            <center>
              <a
                href='https://www.youtube.com/channel/UCS3VbHvBs5hW7WccTJ2ezqQ'
                className='social_Media_Handling'
                target='_blank'
              >
                <YouTubeIcon
                  style={{ fontSize: "24px", color: "#7890a1" }}
                  className='iconHoverty'
                />{" "}
                <br />
              </a>
            </center>
          </div>
        </Col>
        <Col className='arun' xs='2' sm='2'>
          <div className='icondiv'>
            <center>
              <a
                href='https://www.instagram.com/dartoindia/'
                className='social_Media_Handling'
                target='_blank'
              >
                <InstagramIcon
                  style={{ fontSize: "24px", color: "#7890a1" }}
                  className='iconHoverD'
                />{" "}
                <br />
              </a>
            </center>
          </div>
        </Col>
        <Col className='arun' xs='2' sm='2'>
          <div className='icondiv'>
            <center>
              <a
                href='https://twitter.com/dartoindia'
                className='social_Media_Handling'
                target='_blank'
              >
                <TwitterIcon
                  style={{ fontSize: "24px", color: "#7890a1" }}
                  className='iconHovert'
                />{" "}
                <br />
              </a>
            </center>
          </div>
        </Col>
      </Row>
    </>
    // </fluid-Container>
  );
};

export default SocialFooter;
