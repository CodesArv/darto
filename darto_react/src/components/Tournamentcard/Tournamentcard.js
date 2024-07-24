import React, { useState, useEffect } from "react";
import "./Style.css";
import MaterialIcon from "react-google-material-icons";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

import { Link, useHistory } from "react-router-dom";

import ParticipateForm from "../../containers/ParticipateForm/ParticipateForm";

import { Modal } from "react-bootstrap";

import PropTypes from "prop-types";

import ShareItem from "../../containers/ShareItem/ShareItems/ShareItems";
import MobileHeader from "../../containers/Layout/MobileHeader/MobileHeader";

function ShareItemModal({ GetByObj, onHide, ...ShareItems }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onclose = () => {
    onHide();
  };
  return (
    <Modal
      show={show}
      onHide={handleClose}
      {...ShareItems}
      size='lg-aria-labelledby=contained-modal-title-vcenter'
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
      <Modal.Body
        style={{
          backgroundColor: "#23354d",
        }}
      >
        <ShareItem onHide={handleClose} />
      </Modal.Body>
    </Modal>
  );
}

const ParticipateModal = ({ onHide, ...props }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onclose = () => {
    onHide();
  };
  return (
    <Modal
      show={show}
      onHide={handleClose}
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
};
const Tournamentcard = ({
  title,
  recordId,
  body,
  fromdate,
  todate,
  age,
  profession,
  stadium,
  city,
  district,
  state,
  country,
  pincode,
  detail,
  status,
  comingfield,
  GetDetailsTournament,
}) => {
  const history = useHistory();
  const [imageModalShow, setImageModalShow] = React.useState(false);

  // const editProfile =()=>{

  //  history.push('');
  // }
  const Participate = () => {
    history.push("/participate");
  };
  const Share = () => {
    history.push("/shareitem");
  };
  // const onClose=()=>{
  //   const [show, setShow] = useState(false);
  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);
  // }

  const [showShareItem, setshowShareItem] = React.useState(false);
  const [showparticipate, setShowParticipate] = React.useState(false);

  function ImagePopup(props) {
    return (
      <Modal
        {...props}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header>
          <Button className='cross-color-modal' onClick={props.onHide}>
            {" "}
            <MaterialIcon
              color=' rgb(120, 144, 161)'
              icon='close'
              
              size='28px'
              stretch={false}
            />
          </Button>
        </Modal.Header>
        <Modal.Body className='image-modal-body'>
          <CardImg
            top
            width='100%'
            src={detail}
            // className='Imagetour'
            alt='Card image cap'
          />
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <div>
      <div className='padding_From_Left_right'>
        <>
          <Card
            className='border_Color_box'
            style={{
              backgroundColor: "#10142c",
            }}
          >
            <div className='row padding_profile_bottom  '>
              <div
                className='col-md-auto col-lg-6 padding_profile_bottom  curser-pointer'
                onClick={() => setImageModalShow(true)}
              >
                <CardImg
                  top
                  width='100%'
                  src={detail}
                  // className='Imagetour'
                  alt='Card image cap'
                />
              </div>
              {comingfield === "true" && (
                <div className='col-md-auto col-lg-6'>
                  <CardBody
                    className='card_Body_none1'
                    style={{
                      backgroundColor: "#10142c",
                    }}
                  >
                    <div className='zxcv'>
                      <CardSubtitle className='font_Blue_twenty'>
                        {" "}
                        Coming Soon{" "}
                      </CardSubtitle>{" "}
                    </div>{" "}
                  </CardBody>{" "}
                </div>
              )}
              {comingfield === "false" && (
                <div className='col-md-auto col-lg-6'>
                  <CardBody
                    className='card_Body_none1'
                    style={{
                      backgroundColor: "#10142c",
                    }}
                  >
                    <div className='zxcv'>
                      <CardSubtitle className='font_Blue_twenty'>
                        {" "}
                        {title}{" "}
                      </CardSubtitle>{" "}
                      {/* <ShareIcon style={{fontSize:'20px',color:'var(--token-d983c132-e015-4177-baf8-441dbe84f948, #00bbff)'}}  /> */}{" "}
                      <div onClick={() => setshowShareItem(true)}>
                        <MaterialIcon
                          // style={{color:'rgb(120, 144, 161)'}}

                          color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161))'
                          icon='share'
                          // Using default values:
                          size='18px'
                          stretch={false}
                        />{" "}
                      </div>{" "}
                    </div>{" "}
                    <CardText className='commn_FontSize_white card_margin_0px bottom_9px_padding'>
                      {" "}
                      {body}{" "}
                    </CardText>{" "}
                    <CardText className='common_Gray_Eleven card_margin_0px padding_bottom_3px'>
                      {" "}
                      {fromdate} - {todate} {status}
                      <span className='padding_Common_Line'> | </span>
                      {age}
                      <span className='padding_Common_Line'> | </span>
                      {profession}{" "}
                    </CardText>{" "}
                    <CardText className='tournamentdetailscardtour alignrightt4 bottom_9px_padding'>
                      {stadium}, {city}, {district}, {state}, {country},{" "}
                      {pincode}{" "}
                    </CardText>{" "}
                    <div class='btndiv'>
                      <button
                        className='btnparticipate alignrightt'
                        style={{
                          fontSize: "12px",
                        }}
                        onClick={() => setShowParticipate(true)}
                      >
                        {" "}
                        Participate{" "}
                      </button>{" "}
                      <button
                        className='btnmoredetail alignrightt'
                        onClick={() => GetDetailsTournament(recordId)}
                        style={{ fontSize: "12px" }}
                      >
                        {" "}
                        More Details...{" "}
                      </button>{" "}
                    </div>{" "}
                  </CardBody>{" "}
                </div>
              )}
            </div>
            <br />
          </Card>{" "}
          <ImagePopup
            show={imageModalShow}
            onHide={() => setImageModalShow(false)}
          />
          <ParticipateModal
            show={showparticipate}
            onHide={() => setShowParticipate(false)}
          />{" "}
          <ShareItemModal
            show={showShareItem}
            onHide={() => setshowShareItem(false)}
          />{" "}
        </>
      </div>
      {window.innerWidth <= 768 && <MobileHeader />}
    </div>
  );
};
Tournamentcard.propTypes = {
  GetByObj: PropTypes.object,
};
export default Tournamentcard;
