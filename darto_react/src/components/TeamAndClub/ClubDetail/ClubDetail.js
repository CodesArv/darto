import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import "../../../domains/HomePage/TeamUpdate/TeamUpdate.css";

// import image from "./image.jpg";
import imgb from "./imgb.jpg";
// import tournament from "./tournament.jpg";


import { useHistory } from "react-router-dom";
import { apiHandler } from "../../../assets/api";
import { endpoint } from "../../../assets/api/endpoint";
import MaterialIcon from "react-google-material-icons";
import ShareItem from "../../../containers/ShareItem/ShareItems/ShareItems";
import { Modal } from "react-bootstrap";

function MyVerticallyCenteredModal({onHide,...show}) {
  const onclose = () => {
  onHide();
};
return (
  <Modal
    {...show}
    onHide={onHide}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
   <Modal.Header
      onClick={() => onclose()}
      style={{ position: "relative", height: 29 }}
    >
     <span style={{ right: 10, position: "absolute" }} className="curser-pointer">
        <MaterialIcon
          color="var(--token-2a633678-f86b-4ab5-94be-ee4f65254cde, rgb(150, 168, 182)) "
          icon="close"
          stretch={true}
        />
      </span>
      <Modal.Title></Modal.Title>
    </Modal.Header>
    <Modal.Body style={{ backgroundColor: "#23354d" }}>
      <ShareItem onHide={onHide} {...show}/>
    </Modal.Body>
  </Modal>
);
}

const ClubDetail = () => {
  const history = useHistory();
  const [modalShows, setModalShows] = React.useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  const [rawData, setRawData] = useState({});

  const joinedA = () => {
    history.push("/clubdetailMore");
  };
  return (
    <>
      <div className="stackupdate"  style={{padding:'20px'}}>
        <h1 className="Darts-style"> Delhi Darts</h1>

<div className="row">
        <div className="slider-image1 col-md-auto col-lg-6">
          <img className="slider-image1" src={imgb} />
        </div>
        {/* <br /> */}
        <div className="stake-top-channel-i-d5 col-md-auto col-lg-6">
          <div className="stack-profile" style={{marginTop:'10px'}}>
            <div>
              <img className="l-o-g-o-b-r-a-n-d" src={imgb} />
            </div>
            <div className="stake-verified">
              <div className="verified2">
                <p className="verified">
                  <span>
                    <MaterialIcon
                      color="var(--token-a23514c0-d291-45a7-a6d4-86d49c549881, rgb(0, 187, 255)) "
                      icon="verified"
                      // Using default values:
                      stretch={false}
                      size="18px"
                    />{" "}
                  </span>
                  Verified
                </p>
              </div>
              <div className="verified2">
                <p className="verified">
                  {" "}
                  <MaterialIcon
                    color="var(--token-2a633678-f86b-4ab5-94be-ee4f65254cde, rgb(120, 144, 161)) "
                    icon="verified_user"
                    stretch={true}
                    size="18px"
                  />{" "}
                  Trusted
                </p>
              </div>

              <div className="stake-share">
                <span className="stake-favorite"  onClick={() => setModalShow(true)}>
                  <MaterialIcon
                    color="var(--token-d983c132-e015-4177-baf8-441dbe84f948, rgb(0, 187, 255)) "
                    icon="share"
                    stretch={true}
                  />
                </span>
                <p className="_50k-share">50k share</p>
              </div>
            </div>
          </div>

          <div className="stake-top-channel-i-d">
            <div className="stake-top-channel-i-d1">
              <p className="Darts-style1"> Members Limit 300</p>
              <p className="Darts-style1"> Registered: 9 Month ago</p>
              <p className="Darts-style1"> Catagory: Sr./Senior/Professional</p>
            </div>

            <div className="Darts-style2">
              <div className="joined">
                <button className="joined" style={{ fontSize: "2rem" }} onClick={() => joinedA()}>
                  More Detail
                </button>
              </div>
              <div className="joined1">
                <p className="joined1">
                  {" "}
                  My Status <span className="joined2" style={{marginLeft:'4px'}}> Member </span>
                </p>
              </div>
              <div className="joined1">
                <p className="joined1">
                  {" "}
                  joined Member <span className="joined2" style={{marginLeft:'4px'}}> 200 </span>
                </p>
              </div>
            </div>
          </div>
       
        
       
         
        </div>
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};
export default ClubDetail;
