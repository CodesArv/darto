import React, { useState, useEffect } from "react";
import "./Details.css";
// import image from '../../Asset/Image/image.jpg';
import MaterialIcon from "react-google-material-icons";
import { BsFillShareFill } from "react-icons/bs";
import { endpoint } from "../../assets/api/endpoint";
import { apiHandler } from "../../assets/api";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Tournamentcard from "../Tournamentcard/Tournamentcard";
import NoticeModal from "../AdminDashboard/NoticeModal/NoticeModal";
import { Modal } from "react-bootstrap";
import ParticipateForm from "../../containers/ParticipateForm/ParticipateForm";
import ShareItem from "../../containers/ShareItem/ShareItems/ShareItems";
import PropTypes from "prop-types";
import MobileHeader from "../../containers/Layout/MobileHeader/MobileHeader";
import { BsFacebook } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardSubtitle,
  Row,
  Col,
} from "reactstrap";

import { useHistory, useParams } from "react-router-dom";

function ShareItemModal({ GetByObj, onHide, ...ShareItems }) {
  const onclose = () => {
    onHide();
  };
  return (
    <Modal
      close
      onHide={onHide}
      {...ShareItems}
      size='lg-aria-labelledby=contained-modal-title-vcenter'
      centered
    >
      <Modal.Header
        onClick={() => onclose()}
        style={{ position: "relative", height: 29 }}
      >
        <span
          style={{ right: 10, position: "absolute" }}
          className='curser-pointer'
        >
          <MaterialIcon
            color='var(--token-2a633678-f86b-4ab5-94be-ee4f65254cde, rgb(150, 168, 182)) '
            icon='close'
            stretch={true}
          />
        </span>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          backgroundColor: "#23354d",
        }}
      >
        <ShareItem onHide={onHide} />
      </Modal.Body>
    </Modal>
  );
}

function ParticipateModal({ onHide, ...props }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onclose = () => {
    onHide();
  };
  return (
    <Modal
      {...props}
      size='lg aria - labelledby = contained-modal-title-vcenter'
      centered
    >
      <Modal.Header
        onClick={() => onclose()}
        style={{ position: "relative", height: 29 }}
      >
        <span style={{ right: 10, position: "absolute" }}>
          <MaterialIcon
            color='var(--token-2a633678-f86b-4ab5-94be-ee4f65254cde, rgb(150, 168, 182)) '
            icon='close'
            stretch={true}
          />
        </span>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          backgroundColor: "#23354d",
        }}
      >
        <ParticipateForm onHide={onHide} />
      </Modal.Body>
    </Modal>
  );
}
export const formatDate = (dateObj) => {
  if (dateObj === null || dateObj === "") return null;

  var monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  var date = new Date(dateObj);
  const dateStr =
    date.getDate() +
    " " +
    monthNames[date.getMonth()] +
    " " +
    date.getFullYear();
  return dateStr;
};

export const parseDate = (weekDate) => {
  if (weekDate === null || weekDate === "") return null;

  let dateObj = new Date(weekDate);

  var month =
    (dateObj.getMonth() + 1 < 10 ? "0" : "") + (dateObj.getMonth() + 1);
  var date = (dateObj.getDate() < 10 ? "0" : "") + dateObj.getDate();
  return dateObj.getFullYear() + "-" + month + "-" + date;
};

const DetailsTournaments = ({}) => {
  const params = useParams();
  const [noticeModal, setNoticeModal] = useState(false);
  const [noticeModalErrMsg, setNoticeModalErrMsg] = useState("");
  const [noticeModalHeaderMsg, setNoticeModalHeaderMsg] = useState("");

  const closeNoticeModal = () => {
    setNoticeModal(false);
    setNoticeModalErrMsg("");
    setNoticeModalHeaderMsg("");
  };
  const history = useHistory();
  const gallerypart = () => {
    history.push("/galleryparticipate");
  };

  const scoreboard = () => {
    history.push("/score");
  };
  const shareitemOpt = () => {
    history.push("/shareitem");
  };

  const [rawData, setRawData] = useState({});

  useEffect(() => {
    GetTournament();
  }, []);
  const GetTournament = async () => {
    const result = await apiHandler({
      url: endpoint.TOURNAMENT_GETTOURNAMENTOVERVIEWBYID + params.id,
      method: "GET",
      data: null,
    });
    if (result.data.status === 404) {
      setNoticeModalHeaderMsg("Error");
      setNoticeModalErrMsg(result.data.message);
      setNoticeModal(true);
    } else {
      if (result.data.length === 0) {
        setNoticeModalHeaderMsg("Error");
        setNoticeModalErrMsg("No Record Found");
        setNoticeModal(true);
      } else {
        console.log(result.data);
        setRawData(result.data.response);
      }
    }
  };

  const formatTime = () => {

    const date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? (hours < 10 ? "0" + hours : hours) : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return hours + ":" + minutes + " " + ampm;
  };
  const [showShareItem, setshowShareItem] = React.useState(false);
  const [showparticipate, setShowParticipate] = React.useState(false);
  return (
    <div className='detailcardcompo '>
      {/* {rawData &&
        rawData.map((item) => (  */}
      <Card
        className='padding_profile_bottom'
        style={{
          flex: 1,
          backgroundColor: "rgb(16, 20, 44)",
          width: "100%",
          padding: "none",
        }}
      >
        <div class='aspect-ratio aspect-ratio-16-to-9 '>
          <CardImg
            className='img_SPECIFIC_Height'
            src={rawData && rawData?.image}
            alt='Card image cap'
          />
        </div>
        {/* {item?.image?.tournamentImage} */}
        <CardBody style={{ padding: "0px" }}>
          <div className=''>
            <CardSubtitle tag='h6' className='mb-4 mt-4 font_Blue_twenty '>
              {rawData && rawData.name}
            </CardSubtitle>
            <CardText
              className='stadiumnamecardtour alignrightt '
              style={{ display: "flex" }}
            >
              <span style={{ margin: 2 }} className='icon_FontColor'>
                <MaterialIcon
                  color='var(--token-2a633678-f86b-4ab5-94be-ee4f65254cde, rgb(150, 168, 182)) '
                  icon='apartment'
                  stretch={true}
                  size='16px'
                />{" "}
              </span>
              <span className='font_Style_Sub color_White padding_left_Club'>
                {rawData && rawData.description}
              </span>
            </CardText>
          </div>
        </CardBody>
      </Card>
      {/* ))}  */}
      {/* <CardText className="detailtournamentdetails">{body}</CardText> */}

      <fluid-Container className='icon_FontColor '>
        <Row>
          <Col xs='6' className='leftclass icon_FontColor '>
            Days
          </Col>
          <Col xs='6' className='rightclass icon_FontColor'>
            Game Format
          </Col>
        </Row>

        <Row className='asdf icon_FontColor'>
          <Col xs='6' className='leftdetail'>
            <span className='icon_FontColor'>
              <MaterialIcon
                color='var(--token-2a633678-f86b-4ab5-94be-ee4f65254cde, rgb(150, 168, 182)) '
                icon='sports_score'
                stretch={true}
                size='16px'
              />
            </span>{" "}
            <span className='font_Style_Sub color_White def_margin_itm padding_left_Club'>
              {rawData && rawData.fromDate ? formatDate(rawData.fromDate) : ""}-{" "}
              {rawData && rawData.toDate ? formatDate(rawData.toDate) : ""}{" "}
            </span>
          </Col>
          <Col xs='6' className='rightdetail '>
            <span className='icon_FontColor '>
              <MaterialIcon
                color='var(--token-dcfc1000-f350-494d-bd15-7f017b76226e, rgb(255, 255, 255))'
                icon='ads_click'
                stretch={true}
                size='16px'
              />
            </span>
            <span className='def_margin_itm padding_left_Club'>501</span>
          </Col>
        </Row>

        <Row className='icon_FontColor'>
          <Col xs='6' className='leftclass icon_FontColor'>
            Entry
          </Col>
          <Col xs='6' className='rightclass icon_FontColor '>
            Last Date
          </Col>
        </Row>

        <Row className='asdf icon_FontColor'>
          <Col xs='6' className='leftdetail'>
            {" "}
            <span className='icon_FontColor'>
              <MaterialIcon
                color='var(--token-2a633678-f86b-4ab5-94be-ee4f65254cde, rgb(150, 168, 182))'
                icon='event'
                stretch={true}
                size='16px'
              />
            </span>
            <span className='def_margin_itm font_Style_Sub color_White padding_left_Club'>
              {rawData && rawData.fromDate ? formatDate(rawData.fromDate) : ""}
            </span>
          </Col>
          <Col xs='6' className='rightdetail font_Style_Sub color_White'>
            {rawData && rawData.toDate ? formatDate(rawData.toDate) : ""}
          </Col>
        </Row>
        <Row className='icon_FontColor'>
          <Col xs='6' className='leftclass icon_FontColor'>
            Dart Type
          </Col>
          <Col xs='6' className='rightclass icon_FontColor'>
            Display
          </Col>
        </Row>
        <Row className='asdf icon_FontColor'>
          <Col xs='6' className='leftdetail'>
            {" "}
            <span className='icon_FontColor'>
              <MaterialIcon
                color='var(--token-dcfc1000-f350-494d-bd15-7f017b76226e, rgb(255, 255, 255))'
                icon='gamepad'
                stretch={true}
                size='16px'
              />
            </span>
            <span className='def_margin_itm color_White align_Display_Flex'>
              Steel Tip<span className='padding_Common_Line'> | </span>Soft Tip
            </span>
          </Col>
          <Col xs='6' className='rightdetail' onClick={() => scoreboard()}>
            {/* <MarginIcon className="icon" style={{ fontSize: "27px" }} /> */}
            <span className='icon_FontColor'>
              <MaterialIcon
                color='var(--token-dcfc1000-f350-494d-bd15-7f017b76226e, rgb(255, 255, 255))'
                icon='scoreboard'
                stretch={true}
                size='16px'
              />
            </span>
            <span className='def_margin_itm color_White'>ScoreBoard</span>
          </Col>
        </Row>
        <Row className='icon_FontColor'>
          <Col xs='6' className='leftclass icon_FontColor'>
            Joined Member
          </Col>
        </Row>
        <Row className='asdf icon_FontColor'>
          <Col xs='6' className='leftdetail'>
            {" "}
            <span className='icon_FontColor'>
              <AccountCircleIcon
                className='icon'
                style={{ fontSize: "16px" }}
              />
            </span>
            <span className='def_margin_itm color_White align_Display_Flex'>
              +500
            </span>
          </Col>
        </Row>
      </fluid-Container>
      {/* <br /> */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div class='row detailbtndiv'>
        <div
          className='col-4 icon_FontColor'
          style={{ fontSize: "14px", textAlign: "center" }}
        >
          <button
            className='detailbtnparticipate'
            onClick={() => setShowParticipate(true)}
          >
            Participate
          </button>
        </div>
        <div className='col-4 icon_FontColor ' style={{ textAlign: "center" }}>
          <button
            className='detailbtnparticipate'
            style={{ backgroundColor: "gray", fontSize: "14px" }}
            onClick={() => gallerypart()}
          >
            Gallery
          </button>
        </div>
        <div className='col-4 icon_FontColor' style={{ textAlign: "center" }}>
          <button
            onClick={() => setshowShareItem(true)}
            className='detailbtnparticipate'
            style={{ backgroundColor: "gray", fontSize: "14px" }}
          >
            {" "}
            <BsFillShareFill /> Share
          </button>
        </div>
      </div>
      {/* <br /> */}
      {/* <fluid-Container> */}
      <Row className='overview'>
        {/* <center> */}
        {/* <br /> */}
        <Col
          xs='6'
          style={{ fontSize: "15px", fontWeight: "700", marginTop: "10px" }}
        >
          Overview
        </Col>
        {/* </center> */}
      </Row>
      <Row className='icon_FontColor padding_profile_top'>
        <Col xs='6' className='leftclass icon_FontColor'>
          Matches
        </Col>
        <Col xs='6' className='rightclass icon_FontColor'>
          Fee Per Entry
        </Col>
      </Row>
      <Row className='asdf icon_FontColor'>
        <Col xs='6' className='leftdetail'>
          {" "}
          <span className='icon_FontColor'>
            <MaterialIcon
              color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161))'
              icon='groups'
              stretch={true}
              size='16px'
            />{" "}
          </span>
          <span className='def_margin_itm font_Style_Sub padding_left_Club'>
            {rawData && rawData.matches}
          </span>
        </Col>
        <Col xs='6' className='rightdetail icon_FontColor'>
          {" "}
          <span className='icon_FontColor'>
            <MaterialIcon
              color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) '
              icon='credit_card'
              stretch={true}
              size='16px'
            />{" "}
          </span>
          <span className='def_margin_itm font_Style_Sub padding_left_Club'>
            Free | Rs.
          </span>
          <span className='font_Style_Sub '>
            {rawData && rawData.feeperentry}
          </span>
        </Col>
      </Row>
      <Row className='icon_FontColor'>
        <Col xs='6' className='leftclass icon_FontColor'>
          Age Group
        </Col>
        <Col xs='6' className='rightclass icon_FontColor'>
          Game-Hours
        </Col>
      </Row>
      <Row className='asdf icon_FontColor'>
        <Col xs='6' className='leftdetail'>
          {"  "}
          <span className='icon_FontColor'>
            <MaterialIcon
              color='var(--token-2a633678-f86b-4ab5-94be-ee4f65254cde, rgb(150, 168, 182))'
              icon='safety_divider'
              stretch={true}
              size='16px'
            />{" "}
          </span>
          <span className='def_margin_itm font_Style_Sub padding_left_Club'>
            {"  "}
            18+ yrs
          </span>
        </Col>
        <Col xs='' className='rightdetail icon_FontColor'>
          {" "}
          <span className='icon_FontColor'>
            <MaterialIcon
              color='var(--token-2a633678-f86b-4ab5-94be-ee4f65254cde, rgb(150, 168, 182)) '
              icon='schedule'
              stretch={true}
              size='16px'
            />{" "}
          </span>
          <span className='def_margin_itm font_Style_Sub '>
            {rawData && rawData.gameHours
              ? formatTime(rawData && rawData.gameHours)
              : ""}{" "}
            to{" "}
            {rawData && rawData.gameHours
              ? formatTime(rawData && rawData.gameHours)
              : ""}
          </span>
          {/* <td >{item && item.overView && item.overView.WorkingHours ? formatTime(item.overView.WorkingHours) : ""}</td> */}
        </Col>
      </Row>
      <Row className='icon_FontColor'>
        <Col xs='6' className='leftclass icon_FontColor'>
          Mode
        </Col>
        <Col xs='6' className='rightclass icon_FontColor'>
          Category
        </Col>
      </Row>
      <Row className='asdf icon_FontColor'>
        <Col xs='6' className='leftdetail font_Style_Sub'>
          {rawData && rawData.mode}
        </Col>
        <Col xs='6' className='rightdetail font_Style_Sub'>
          {" "}
          Club Matches
        </Col>
      </Row>
      <Row>
        <Col xs='6' className='leftclass icon_FontColor'>
          Tournament Type
        </Col>
        <Col xs='6' className='rightclass icon_FontColor'>
          Gender
        </Col>
      </Row>
      <Row className='asdf icon_FontColor'>
        <Col xs='6' className='leftdetail font_Style_Sub'>
          {" "}
          <span className='icon_FontColor'>
            {" "}
            <MaterialIcon
              color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) '
              icon='stars'
              stretch={true}
              size='16px'
            />
          </span>
          <span className='def_margin_itm font_Style_Sub padding_left_Club'>
            {" "}
            {rawData && rawData.tournamentType}{" "}
          </span>
        </Col>
        <Col xs='6' className='rightdetail font_Style_Sub'>
          {" "}
          <span className='def_margin_itm font_Style_Sub padding_left_Club'>
            Male/Female/Both/All
          </span>
        </Col>
      </Row>
      <Row>
        <Col xs='6' className='leftclass icon_FontColor'>
          Contact Detail
        </Col>
      </Row>
      <Row className='asdf icon_FontColor'>
        <Col xs='6' className='leftdetail font_Style_Sub'>
          {" "}
          <span className='icon_FontColor'>
            {" "}
            <MaterialIcon
              color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) '
              icon='call'
              stretch={true}
              size='16px'
            />
          </span>
          <span className='def_margin_itm font_Style_Sub padding_left_Club'>
            {" "}
            {rawData && rawData.mobileNumber} / {rawData && rawData.email}
          </span>
        </Col>
      </Row>
      <Row>
        <Col xs='6' className='leftclass icon_FontColor'>
          CheckList
        </Col>
      </Row>
      <Row className='icon_FontColor'>
        <Col xs='6' className='leftdetail font_Style_Sub'>
          {" "}
          <span className='icon_FontColor'>
            {" "}
            <MaterialIcon
              color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) '
              icon='rule'
              stretch={true}
              size='16px'
            />
          </span>
          <span className='def_margin_itm font_Style_Sub padding_left_Club'>
            {" "}
            Polo Neck T-Shirt{" "}
          </span>
        </Col>
      </Row>
      <Row className='icon_FontColor'>
        <Col xs='6' className='leftdetail font_Style_Sub'>
          {" "}
          <span className='def_margin_itm font_Style_Sub padding_left_Club padding_left_21px'>
            {" "}
            Trouser{" "}
          </span>
        </Col>
      </Row>
      <Row className='icon_FontColor'>
        <Col xs='6' className='leftdetail font_Style_Sub'>
          {" "}
          <span className='def_margin_itm font_Style_Sub padding_left_Club padding_left_21px'>
            {" "}
            Formal Black Shoes{" "}
          </span>
        </Col>
      </Row>
      {/* <br /> */}
      <Row>
        <Col>
          <div className='stackiconstyle'>
            <div className='social_Media_D'>
              <a
                href='https://www.facebook.com/'
                className='social_Media_Handling'
                target='_blank'
              >
                <BsFacebook
                  className='stake-favorite'
                  style={{ fontSize: "6rem", textAlign: "center" }}
                />
                <p className='stake-favorite5'>facebook</p>
              </a>
            </div>
            <div className='social_Media_D'>
              <a
                href='https://www.youtube.com'
                className='social_Media_Handling'
                target='_blank'
              >
                <AiFillYoutube
                  className='stake-favorite'
                  style={{ fontSize: "6rem", textAlign: "center" }}
                />
                <p
                  className='stake-favorite5'
                  style={{ textAlign: "center" }}
                  target='_blank'
                >
                  youtube
                </p>
              </a>
            </div>
            <div className='social_Media_D'>
              <a
                href='https://www.instagram.com/'
                className='social_Media_Handling'
                target='_blank'
              >
                <BsInstagram
                  className='stake-favorite'
                  style={{ fontSize: "6rem", textAlign: "center" }}
                />
                <p className='stake-favorite5' style={{ textAlign: "center" }}>
                  instagram
                </p>
              </a>
            </div>
            <div className='social_Media_D'>
              <a
                href='https://twitter.com/?lang=en-in'
                className='social_Media_Handling'
                target='_blank'
              >
                <AiOutlineTwitter
                  className='stake-favorite'
                  style={{ fontSize: "6rem", textAlign: "center" }}
                />
                <p className='stake-favorite5' style={{ textAlign: "center" }}>
                  twitter
                </p>
              </a>
            </div>
          </div>
        </Col>
      </Row>
      <Row className='padding_profile_top'>
        <Col xs='6' className='leftclass icon_FontColor'>
          Metro Connectivity
        </Col>
      </Row>
      <Row className='asdf'>
        <Col xs='6' className='leftdetail'>
          {" "}
          <span className='icon_FontColor'>
            <MaterialIcon
              color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) '
              icon='train'
              stretch={true}
              size='16px'
            />
          </span>
          <span className='def_margin_itm font_Style_Sub padding_left_Club'>
            {(rawData && rawData.locality) || ""}
          </span>
        </Col>
      </Row>
      <Row>
        <Col xs='6' className='leftclass icon_FontColor'>
          Address
        </Col>
      </Row>
      <Row className='asdf'>
        <Col className='leftdetail'>
          {" "}
          <span className='icon_FontColor'>
            <MaterialIcon
              color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) '
              icon='location_on'
              stretch={true}
              size='16px'
            />{" "}
          </span>
          <span className='def_margin_itm font_Style_Sub padding_left_Club'>
            {(rawData && rawData.locality) || ""} ,{" "}
            {(rawData && rawData.city) || ""},{(rawData && rawData.state) || ""}
            , {(rawData && rawData.pincode) || ""} <br />
            {/* stadium=  
                
                district={item && item.loaction && item.loaction.district || ""}
                state=
                country={item && item.loaction && item.loaction.country || ""}
                pincode={item && item.loaction && item.loaction.pincode || ""} */}
          </span>
        </Col>
      </Row>
      <Row>
        <Col xs='6' className='more'>
          Details
        </Col>
      </Row>
      <Row className='padding_bottom_nine9'>
        <Col className='morepara font_Style_Sub'>
          Trusted results for Your Search Query. Check Visymo Search for the
          best results! Unlimited Access. 100% Secure. Always Facts. Privacy
          Friendly. The Best Resources. Results & Answers. Services: Best
          Results, Explore Now, New Sources, Best in Search.
        </Col>
      </Row>
      <ParticipateModal
        show={showparticipate}
        onHide={() => setShowParticipate(false)}
      />{" "}
      <ShareItemModal
        show={showShareItem}
        onHide={() => setshowShareItem(false)}
      />{" "}
      {/* </fluid-Container> */}
      {noticeModal && (
        <NoticeModal
          noticeModal={noticeModal}
          noticeModalHeader={noticeModalHeaderMsg}
          noticeModalErrMsg={noticeModalErrMsg}
          closeModal={closeNoticeModal}
        />
      )}
      {window.innerWidth <= 768 && <MobileHeader />}
      {/* </ThemeProvider> */}
      {/* <InformationFooter /> */}
    </div>
  );
};
Tournamentcard.propTypes = {
  GetByObj: PropTypes.object,
};

export default DetailsTournaments;
