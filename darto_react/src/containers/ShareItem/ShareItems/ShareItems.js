import React from "react";
import { Container, Row, Col } from "reactstrap";

import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { AiOutlineMessage } from "react-icons/ai";
import { AiOutlinePrinter } from "react-icons/ai";
import direct from "./direct.jpg";
import { BsSlack } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { SiInstapaper } from "react-icons/si";
import {
  FacebookMessengerShareButton,
  InstapaperShareButton,
  WhatsappShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  RedditShareButton,
  TumblrShareButton,
  LivejournalShareButton,
  MailruShareButton,
  ViberShareButton,
  WorkplaceShareButton,
  EmailShareButton,
} from "react-share";
import MaterialIcon from "react-google-material-icons";

const ShareItem = () => {
  return (
    <div>
      <h1 className='iconheading ' style={{ float: "left" }}>
        Share
      </h1>
      <div
        className='row iconsrow'
        style={{ backgroundColor: "#23354d", width: "100%" }}
      >
        <div className='col arun' xs='2' sm='2'>
          <div className='icondiv'>
            <center>
              <FacebookMessengerShareButton
                url={"https://github.com"}
                appId='521270401588372'
                className='Demo__some-network__share-button'
              >
                <BsFacebook size={32} round />
                <p className='iconheading'>FaceBook</p>
              </FacebookMessengerShareButton>
            </center>
          </div>
        </div>
        <div className='col arun' xs='2' sm='2'>
          <div className='icondiv'>
            <center>
              <InstapaperShareButton
                url={"https://github.com"}
                appId='521270401588372'
                className='Demo__some-network__share-button'
              >
                <SiInstapaper size={32} round />
                <p className='iconheading'> Instapaper</p>
              </InstapaperShareButton>
              {/* <BsYoutube /> <br />
              <p className="iconheading">YouTube</p> */}
            </center>
          </div>
        </div>
        <div className='col arun' xs='2' sm='2'>
          <div className='icondiv'>
            <center>
              <WhatsappShareButton
                url={"https://github.com"}
                appId='521270401588372'
                className='Demo__some-network__share-button'
              >
                <BsWhatsapp size={32} round />
                <p className='iconheading'>Whtsapp</p>
              </WhatsappShareButton>
            </center>
          </div>
        </div>
        <div className='col arun' xs='2' sm='2'>
          <div className='icondiv'>
            <center>
              <TwitterShareButton
                url={"https://github.com"}
                appId='521270401588372'
                className='Demo__some-network__share-button'
              >
                <AiOutlineTwitter size={32} round /> <br />
                <p className='iconheading'>Twitter</p>
              </TwitterShareButton>
            </center>
          </div>
        </div>
        {/* <Col className="arun" xs="2" sm="2">
          <div className="icondiv">
            <center>
              <BsTelegram /> <br />
              <p className="iconheading">telegram</p>
            </center>
          </div>
        </Col> */}
      </div>
      <div
        className='row iconsrow'
        style={{ backgroundColor: "#23354d", width: "100%" }}
      >
        <div className='col arun' xs='2' sm='2'>
          <div className='icondiv'>
            <center>
              <EmailShareButton
                url={"https://github.com"}
                appId='521270401588372'
                className='Demo__some-network__share-button'
              >
                <SiGmail size={32} round /> <br />
                <p className='iconheading'>Gmail</p>
              </EmailShareButton>
            </center>
          </div>
        </div>
        <div className='col arun' xs='2' sm='2'>
          <div className='icondiv'>
            <center>
              <AiOutlineMessage size={32} round /> <br />
              <p className='iconheading'>Messages</p>
            </center>
          </div>
        </div>
        <div className='col arun' xs='2' sm='2'>
          <div className='icondiv'>
            <center>
              <LinkedinShareButton
                url={"https://github.com"}
                appId='521270401588372'
                className='Demo__some-network__share-button'
              >
                <AiOutlinePrinter size={32} round /> <br />
                <p className='iconheading'>Print</p>
              </LinkedinShareButton>
            </center>
          </div>
        </div>
        <div className='col arun' xs='2' sm='2'>
          <div className='icondiv'>
            <center>
              {/* <AiOutlineTwitter /> <br />
              <p className="iconheading ">Twitter</p> */}
            </center>
          </div>
        </div>
    
      </div>
      <div
        className='row iconsrow'
        style={{ backgroundColor: "#23354d", width: "100%" }}
      >
      
      </div>
    </div>
  );
};

export default ShareItem;
