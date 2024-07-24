import React from "react";
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
import Carousel from "react-bootstrap/Carousel";
import "./Card1.css";
import imgn from "../../../assets/images/logo_files/imgn.jpg";
import ScheduleIcon from "@mui/icons-material/Schedule";
import TrainIcon from "@mui/icons-material/Train";
import ShareIcon from "@mui/icons-material/Share";
import { AiOutlineArrowRight } from "react-icons/ai";
import ArenaProfile from "../../ArenaProfile/ArenaProfile";
import { Link, useHistory } from "react-router-dom";
import ShareItem from "../../ShareItem/ShareItems/ShareItems";
import { Modal } from "react-bootstrap";
import MaterialIcon from "react-google-material-icons";
import { RiShowersFill } from "react-icons/ri";

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

const Card1 = ({
  img,
  Subtitle,
  KmAway,
  Coworking,
  Address,
  FromWorkingHours,
  ToWorkingHours,
  MetroConnectivity,
  Time,
  Address1,
  ReserveSpace,
  GetArena,
  recordArena,
}) => {
  const history = useHistory();
  const onSerach = () => {
    history.push("/arena");
  };
  const share = () => {
    history.push("/shareitem");
  };

  const [modalShows, setModalShows] = React.useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <Card className='border_Color_box padding_Darto_Arena_card'>
        <div className='row'>
          <div className='col-md-auto col-lg-6'>
            <CardImg
              onClick={() => GetArena(recordArena)}
              style={{ width: "100%" }}
              src={img}
              alt='Card image cap'
            />
          </div>
          <div className='col-md-auto col-lg-6'>
            <CardBody>
              <CardSubtitle tag='h6' className='mb-2 '>
                <span className='font_Dart_blue'> {Subtitle} </span>
                <span className='spn1'> {KmAway}</span>
              </CardSubtitle>
              <CardText className='txtcolor3'>
                <span className='color_Gray_Twelve upper_case_define'>
                  {Coworking}
                </span>{" "}
                <span className='padding_Common_Line'> | </span>{" "}
                <span className='color_Gray_Twelve color_light_gray'>
                  {" "}
                  {Address}
                </span>
              </CardText>
              <div>
                <div>
                  <div className='style_darto_display_f'>
                    <div className='txtcolor1st display_flex_align_center'>
                      <span className='color_gray_Ten'>Working Hours</span>
                    </div>

                    <div className='txtcolor2nd'>
                      <span className='color_gray_Ten display_flex_align_center'>
                        Metro Connectivity
                      </span>
                      {MetroConnectivity}
                    </div>
                  </div>
                  <div className='style_darto_display_f'>
                    <div className='txtcolor1st display_flex_align_center'>
                      <MaterialIcon
                        color='var(--token-2a633678-f86b-4ab5-94be-ee4f65254cde, rgb(150, 168, 182)) '
                        icon='schedule'
                        size='16px'
                        stretch={true}
                      />{" "}
                      <span className='common_Font_Style_Gray padding_left_9px'>
                        {" "}
                        {FromWorkingHours} To {ToWorkingHours}
                      </span>
                    </div>
                    <div
                      className='txtcolor2nd display_flex_align_center'
                      style={{ marginLeft: "23px" }}
                    >
                      <MaterialIcon
                        // color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161))'
                        icon='train'
                        size='16px'
                        stretch={true}
                      />{" "}
                      <span className='common_Font_Style_Gray padding_left_9px'>
                        {Address1}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div class='button-container-div12'></div> */}
            </CardBody>
            <CardBody className=''>
              <CardText className='txtcolor3b paddin_top_9px padding_profile_bottom'>
                {ReserveSpace}
                <span className='arrow_define_size'>
                  {" "}
                  <AiOutlineArrowRight />
                </span>
                <span className='mdshare' onClick={() => setModalShow(true)}>
                  <MaterialIcon
                    color='var(--token-d983c132-e015-4177-baf8-441dbe84f948, rgb(0, 187, 255)) '
                    icon='share'
                    stretch={true}
                    size='18px'
                  />
                </span>
              </CardText>
            </CardBody>
          </div>
        </div>
      </Card>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};
export default Card1;
