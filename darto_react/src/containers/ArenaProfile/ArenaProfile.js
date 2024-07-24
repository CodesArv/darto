import React, { useEffect, useState } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col,
  Row,
  Container,
} from "reactstrap";
import "./ArenaProfile.css";
import googleMap2 from "./googleMap2.jpg";
import ScheduleIcon from "@mui/icons-material/Schedule";
import TrainIcon from "@mui/icons-material/Train";
import ShareIcon from "@mui/icons-material/Share";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CallIcon from "@mui/icons-material/Call";
import { apiHandler } from "../../assets/api";
import { endpoint } from "../../assets/api/endpoint";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useParams } from "react-router";
import NoticeModal from "../../components/AdminDashboard/NoticeModal/NoticeModal";
import MaterialIcon from "react-google-material-icons";
import ShareItem from "../ShareItem/ShareItems/ShareItems";
import { Modal } from "react-bootstrap";
function MyVerticallyCenteredModal({ onHide, ...show }) {
  const onclose = () => {
    onHide();
  };
  return (
    <Modal
      {...show}
      onHide={onHide}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header
        onClick={() => onclose()}
        style={{ position: "relative", height: 29 }}
      >
        <span style={{ right: 10, position: "absolute" }} className="curser-pointer">
          <MaterialIcon
            color='var(--token-2a633678-f86b-4ab5-94be-ee4f65254cde, rgb(150, 168, 182)) '
            icon='close'
            stretch={true}
          />
        </span>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "#23354d" }}>
        <ShareItem onHide={onHide} {...show} />
      </Modal.Body>
    </Modal>
  );
}
const ArenaProfile = ({ recordArena }) => {
  const parmas = useParams();
  const [noticeModal, setNoticeModal] = useState(false);
  const [noticeModalErrMsg, setNoticeModalErrMsg] = useState("");
  const [noticeModalHeaderMsg, setNoticeModalHeaderMsg] = useState("");
  const [modalShows, setModalShows] = React.useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  // const { authToken } = useSelector((state) => state.login.authData);
  const closeNoticeModal = () => {
    setNoticeModal(false);
    setNoticeModalErrMsg("");
    setNoticeModalHeaderMsg("");
  };
  const [rawData, setRawData] = useState({});
  useEffect(() => {
    GetDartoArena();
  }, []);
  const GetDartoArena = async () => {
    const result = await apiHandler({
      url: endpoint.GETBYID_CENTERS + parmas.id,
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
    //const date =  rawData.result.overView.WorkingHours;
    const date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? (hours < 10 ? "0" + hours : hours) : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return hours + ":" + minutes + " " + ampm;
  };
  return (
    <>
      <div className='detailcardcompo padding_bottom_nine9 width_60_media'>
        <Card style={{ flex: 1, backgroundColor: "#10142c" }}>
          <div className='display_arrow_on_img'>
            <div className='with_define_vw'>
              <MaterialIcon
                color='var(--token-d983c132-e015-4177-baf8-441dbe84f948, rgb(0, 187, 255))'
                icon='arrow_back_ios'
                stretch={true}
                size='18px'
              />
            </div>
            <div className='with_define_vw_flot'>
              <MaterialIcon
                color='var(--token-d983c132-e015-4177-baf8-441dbe84f948, rgb(0, 187, 255))'
                icon='arrow_forward_ios'
                stretch={true}
                size='18px'
              />
            </div>
          </div>
          <CardImg
            className='img_SPECIFIC_Height padding_profile_bottom'
            style={{ width: "100%" }}
            src={rawData && rawData.image}
            alt='Card image cap'
          />

          {/* {item?.image?.tournamentImage} */}
          <CardBody className='card_Body_none'>
            <CardSubtitle tag='h6' className=' amigo bottom_9px_padding '>
              {" "}
              {rawData && rawData.name}{" "}
              <span
                className='spn1 color_Blue_define_sh'
                onClick={() => setModalShow(true)}
              >
                {" "}
                <MaterialIcon
                  color='var(--token-d983c132-e015-4177-baf8-441dbe84f948, rgb(0, 187, 255))'
                  icon='share'
                  stretch={true}
                  size='18px'
                />
              </span>
            </CardSubtitle>
            <CardText className='txtcolor34 padding_profile_bottom'>
              <span className='upper_case_define'>
                {rawData && rawData.description} <br />{" "}
              </span>
              <span className='spn12'>
                {" "}
                {(rawData && rawData.locality) || ""}
              </span>
            </CardText>
            {/* <Container className='underlined'> */}
            {/* <table>
  <tr>
    <td className="txtcolor1st">Working Hours</td>
    <td className="txtcolor2nd">Metro Connectivity</td>
  </tr>
  <tr>
    <td className="txtcolor1st"><BiStopwatch/> 9:00 To 18:00</td>
    <td className="txtcolor2nd"><MdTrain/> Noida Sector 16</td>
  </tr>
</table> */}
            {/* </Container> */}
            {/* <div class='button-container-div12'></div> */}
          </CardBody>
          <CardBody className='padding_profile_top card_Body_none'>
            <CardSubtitle tag='h6' className='mb-2  amigo '>
              OverView
            </CardSubtitle>
            <div>
              <Row className='padding_profile_top'>
                <p className='workinghour1'>Working Hours</p>
                <p className='workinghour2'>
                  <MaterialIcon
                    size='14px'
                    color='var(--token-2a633678-f86b-4ab5-94be-ee4f65254cde, rgb(150, 168, 182)) '
                    icon='schedule'
                    stretch={true}
                  />{" "}
                  <span className=' padding_left_9px'>
                    {rawData && rawData.FromWorkingHours
                      ? formatTime(rawData && rawData.FromWorkingHours)
                      : ""}{" "}
                    To{" "}
                    {rawData && rawData.ToWorkingHours
                      ? formatTime(rawData && rawData.ToWorkingHours)
                      : ""}
                  </span>
                </p>
              </Row>
              <Row className='padding_profile_top'>
                <p className='workinghour1'>F&B Offers</p>
                <p className='workinghour2'>
                  <MaterialIcon
                    color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) '
                    icon='local_cafe'
                    size='14px'
                    stretch={true}
                  />{" "}
                  <span className=' padding_left_9px'>
                    {(rawData && rawData.FandBOthers) || ""}{" "}
                  </span>
                </p>
              </Row>
              <Row className='padding_profile_top'>
                <p className='workinghour1'>Metro Connectivity</p>
                <p className='workinghour2'>
                  <MaterialIcon
                    color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) '
                    icon='train'
                    size='14px'
                    stretch={true}
                  />{" "}
                  <span className=' padding_left_9px'>
                    {(rawData && rawData.mertoConnectivity) || ""}
                  </span>
                </p>
              </Row>
              <Row className='padding_profile_top'>
                <p className='workinghour1'>Booking Charges</p>
                <p className='workinghour2'>
                  <MaterialIcon
                    color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161))'
                    icon='credit_card'
                    size='14px'
                    stretch={true}
                  />{" "}
                  <span className=' padding_left_9px'>
                    RS.
                    {(rawData && rawData.bookingCharges) || ""}
                    (3Hrs)
                  </span>
                </p>
              </Row>
              <Row className='padding_profile_top'>
                <p className='workinghour1'>Contact Details</p>
                <p className='workinghour2'>
                  <MaterialIcon
                    color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) '
                    icon='call'
                    size='14px'
                    stretch={true}
                  />{" "}
                  <span className=' padding_left_9px'>
                    {(rawData && rawData.mobilenumber) || ""}
                  </span>
                </p>
              </Row>
              <Row className='padding_profile_top'>
                <p className='workinghour1'>Address</p>
                <p className='workinghour2'>
                  <MaterialIcon
                    color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) '
                    icon='location_on'
                    stretch={true}
                    size='14px'
                  />{" "}
                  <span className=' padding_left_9px'>
                    {(rawData && rawData.locality) || ""}{" "}
                  </span>
                </p>
              </Row>
              <Row className='padding_profile_top'>
                <img src={googleMap2} />
                {/* <SequentialLocationMap
  anonymousStyle="mapbox://styles/mapbox/streets-v10"
  transitionDuration={4038}
  // Using default values:
  accessToken=""
  accessTokenURL="https://account.mapbox.com/access-tokens/?pluginName=FramerX"
  authenticatedStyle="mapbox://styles/mapbox/light-v9"
  autoplay={true}
  autoplayDelay={1500}
  repetition={0}
  showLocationText={false}
  userStyle=""
/> */}
              </Row>

              <Row className='padding_profile_top '>
                <CardSubtitle tag='h6' className='mb-2  amigo '>
                  More About Amigo
                </CardSubtitle>
                <p className='workinghour2'>
                  {" "}
                  As They Name Suggested, This is your Next Door Friendly Darto
                  Space with Morden Yet Simple Interier
                </p>
              </Row>
            </div>
          </CardBody>
        </Card>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      {noticeModal && (
        <NoticeModal
          noticeModal={noticeModal}
          noticeModalHeader={noticeModalHeaderMsg}
          noticeModalErrMsg={noticeModalErrMsg}
          closeModal={closeNoticeModal}
        />
      )}
    </>
  );
};
export default ArenaProfile;
