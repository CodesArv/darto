import React from "react";
import "../../../../domains/HomePage/Team/Team.css";

import { Modal } from "react-bootstrap";
import { CgProfile } from "react-icons/cg";
import MaterialIcon from "react-google-material-icons";

import "../../TeamCommonCard2/TeamCommonCard2.css";
import ShareItem from "../../../../containers/ShareItem/ShareItems/ShareItems";
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
      <Modal.Body style={{ backgroundColor: "#23354d" }}>
        <ShareItem onHide={onHide} {...show} />
      </Modal.Body>
    </Modal>
  );
}

const ClubCard3 = ({
  TeamName,
  ClubName,
  TotalMember,
  ClubImg,
  location,
  Member,
}) => {
  const [modalShows, setModalShows] = React.useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <div className='stake-avator'>
        <div className='stacks1'>
          <div className='team-joined'>
            <p>Joined Clubs</p>
          </div>
        </div>
        <div className='team-one'>
          <div>
            <img className='team_club_img_128_72' src={ClubImg} />
          </div>

          <div className='stake-team-details1'>
            <div className='textpara1'>
              <p> {ClubName}</p>
            </div>
            {/* <div className="stackline">
              <p className="total-members-10">
                {" "}
                <span>
                <MaterialIcon
                  color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161))"
                  icon="groups"
                  stretch={true}
                  size="13px"
                />
                </span>
                <span className="padding_left_Club">
                {TotalMember}
                </span>
              </p>
            </div> */}
            <div className='stackline'>
              <p className='total-members-10'>
                {" "}
                <span>
                  <MaterialIcon
                    color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161))'
                    icon='location_on'
                    stretch={true}
                    size='13px'
                  />
                </span>
                <span className='padding_left_Club'>{location}</span>
              </p>
            </div>
            <div className='stackline'>
              <p className='total-members-10'>
                {" "}
                <CgProfile /> <CgProfile /> <CgProfile /> {Member}
              </p>
            </div>
          </div>
          <div
            className='curser-pointer'
            style={{
              color:
                "var(--token-d983c132-e015-4177-baf8-441dbe84f948, rgb(0, 187, 255))",
            }}
            onClick={() => setModalShow(true)}
          >
            <MaterialIcon icon='share' stretch={true} />
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

export default ClubCard3;
