import React from "react";
import "../../../domains/HomePage/Team/Team.css";


import { Link, useHistory } from "react-router-dom";

import { CgProfile } from "react-icons/cg";
import MaterialIcon from "react-google-material-icons";

import "./TeamCommonCard2.css";
import { Modal } from "react-bootstrap";
import ShareItem from "../../../containers/ShareItem/ShareItems/ShareItems";

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
          color=" rgb(150, 168, 182) "
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


const TeamCommonCard2 = ({
  TeamNames,
  ClubName,
  TotalMembers,
  ClubImg,
  location,
  Member,
}) => {
  const history = useHistory();
  const [modalShows, setModalShows] = React.useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <div className="stake-avator" >
        <div className="stacks1 bottom_9px_padding">
          <div className="team-joined">
            <p>Team Joined</p>
          </div>
        </div>
        <div className="team-one">
          <div>
            <img className="team_club_img_128_72" src={ClubImg} />
          </div>

          <div className="stake-team-details1">
            <div className="textpara1">
              <p> {TeamNames}</p>
            </div>
            {/* <div className="stackline">
              <p className="total-members-10">
                {" "}
                <span>
                <MaterialIcon
                  color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161))"
                  icon="groups"
                  size="13px"
                  stretch={true}
                />
                </span>
                <span className="padding_left_Club">
                {TotalMembers}
                </span>
              </p>
            </div> */}
            <div className="stackline">
              <p className="total-members-10">
                {" "}
                <span>
                <MaterialIcon
                  color="rgb(120, 144, 161)"
                  icon="location_on"
                  size="13px"
                  stretch={true}
                />
                </span>
                <span className="padding_left_Club">
                {location}
                </span>
              </p>
            </div>
            <div className="stackline">
              <p className="total-members-10">
               {" "}<CgProfile /> <CgProfile /> <CgProfile />  {Member}
              </p>
            </div>
          </div>
          <div
          className="curser-pointer"
            style={{
              color:
                "rgb(0, 187, 255)", 
            }}
            onClick={() => setModalShow(true)} >
            <MaterialIcon icon="share" stretch={true} />
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

export default TeamCommonCard2;
