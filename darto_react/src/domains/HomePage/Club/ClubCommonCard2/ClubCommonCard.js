import React from "react";
// import "../../../domains/HomePage/Team/Team.css";
import "../../../../domains/HomePage/Team/Team.css";
import { Modal } from "react-bootstrap";

import { CgProfile } from "react-icons/cg";

import MaterialIcon from "react-google-material-icons";
import { Link, useHistory } from "react-router-dom";
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
const ClubCommonCard = ({
  imgClub,
  ClubName,
  Admin,
  TotalMemberClub,
  locationClub,
  MemberClub,
  ClubAdd,
}) => {
  const history = useHistory();
  const [modalShows, setModalShows] = React.useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  // const myteamup = () => {
  //   history.push("/teamupdate");
  // };
  const myclubup = () => {
    history.push("/clubt");
  };
  return (
    <>
      <div className='stake-avator'>
        <div className='stacks1'>
          <div className='textadmin'>
            <p>{ClubName}</p>
          </div>
          {/* <div className='stack-darto'>
            <button className='adminbutton' onClick={() => myclubup()}>
              {ClubAdd}
            </button>
          </div> */}
        </div>
        <div className='team-one'>
          <div>
            <img className='team_club_img_128_72' src={imgClub} />
          </div>
          <div className='stake-team-details'>
            {/* <div className='stackline'>
              <p className='total-members-10'>
                {" "}
                <span>
                <MaterialIcon
                  color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161))'
                  icon='groups'
                  size='12px'
                  stretch={true}
                />
                </span>{" "}
                <span className="padding_left_Club">
                {TotalMemberClub}
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
                    size='12px'
                    stretch={true}
                  />
                </span>
                <span className='padding_left_Club'>{locationClub}</span>
              </p>
            </div>
            <div className='stackline'>
              <p className='total-members-10'>
                {""} <CgProfile /> <CgProfile /> <CgProfile /> <CgProfile />{" "}
                {MemberClub}
              </p>
            </div>
          </div>
          <div className="curser-pointer"
            style={{
              color:
                "var(--token-d983c132-e015-4177-baf8-441dbe84f948, rgb(0, 187, 255))",
            }}
            onClick={() => setModalShow(true)}
          >
            <MaterialIcon
              color='var(--token-d983c132-e015-4177-baf8-441dbe84f948, rgb(0, 187, 255))'
              icon='share'
              stretch={true}
            />
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

export default ClubCommonCard;
