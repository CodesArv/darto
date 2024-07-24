import React, { useState, useEffect } from "react";

import "../TeamUpdate/TeamUpdate.css";

import { BsFacebook } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";

import CommonUpdateCard from "../CommonUpdateCard/CommonUpdateCard";
import { useHistory } from "react-router-dom";
import { apiHandler } from "../../../assets/api";
import { endpoint } from "../../../assets/api/endpoint";
import MaterialIcon from "react-google-material-icons";
import ShareItem from "../../../containers/ShareItem/ShareItems/ShareItems";
import { Modal } from "react-bootstrap";
import tshirt_front from "./tshirt_front.png";
import tshirt_back from "./tshirt_back.png";

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

const ClubUpdateDetail = ({ recordByid }) => {
  const history = useHistory();
  const [modalShows, setModalShows] = React.useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  const [rawData, setRawData] = useState({});
  const editProfile = () => {
    history.push("/profileedit");
  };
  const clubDetail = () => {
    history.push("/clubmember");
  };
  const joinedA = () => {
    history.push("/arena/:id");
  };
  useEffect(() => {
    GetTeam(recordByid);
  }, [recordByid]);
  console.log(" recordByid", recordByid);
  const GetTeam = async (recordByid) => {
    // let id = recordByid;
    const result = await apiHandler({
      url: endpoint.GETBYID_User_CLUB + recordByid,
      method: "GET",
      data: null,
    });
    console.log(result.data);
    setRawData(result.data.response);
  };
  return (
    <>
      <div className='stackupdate'>
        <h1 className='Darts-style'>{rawData && rawData.nameofclub}</h1>
        {/* <div className="stackupdate1"> */}
        {/* <div className="stackupdate2"> */}
        {/* <h1 className="stackupdate3">Club</h1> */}

        {/* <div className="members-list">
         <h1 >Team</h1>
         </div> */}
        {/* </div> */}
        {/* 
          <div className="stackupdate4">
            <h1 className="members-list"  onClick={() =>clubDetail()}>Members List</h1>
          </div> */}
        {/* <div className="editstack">
            <button className="editstack2" onClick={() => editProfile()}>
              Edit
            </button>
          </div>
        </div> */}

        <div className='slider-image1'>
          <img className='slider-image1' src={rawData.image} />
        </div>
        <br />
        <div className='stake-top-channel-i-d5'>
          <div className='stack-profile'>
            <div>
              <img className='l-o-g-o-b-r-a-n-d' src={rawData.image} />
            </div>
            <div className='stake-verified'>
              <div className='verified2'>
                <p className='verified'>
                  <span>
                    <MaterialIcon
                      color='var(--token-a23514c0-d291-45a7-a6d4-86d49c549881, rgb(0, 187, 255)) '
                      icon='verified'
                      // Using default values:
                      stretch={false}
                      size='18px'
                    />{" "}
                  </span>
                  <span className='padding_left_Club'>Verified</span>
                </p>
              </div>
              <div className='verified2'>
                <p className='verified'>
                  {" "}
                  <MaterialIcon
                    color='var(--token-2a633678-f86b-4ab5-94be-ee4f65254cde, rgb(120, 144, 161)) '
                    icon='verified_user'
                    stretch={true}
                    size='18px'
                  />{" "}
                  <span className='padding_left_Club'>Trusted</span>
                </p>
              </div>

              <div className='stake-share'>
                <span
                  className='stake-favorite'
                  onClick={() => setModalShow(true)}
                >
                  <MaterialIcon
                    color='var(--token-d983c132-e015-4177-baf8-441dbe84f948, rgb(0, 187, 255)) '
                    icon='share'
                    stretch={true}
                  />
                </span>
                <p className='_50k-share'>50k share</p>
              </div>
            </div>
          </div>

          <div className='stake-top-channel-i-d'>
            <div className='stake-top-channel-i-d1'>
              <span className='Darts-style1'> Members Limit 300</span>
              <span className='Darts-style1'> Registered: 9 Month ago</span>
              <span className='Darts-style1'>
                {" "}
                Catagory: {rawData && rawData.occupation}
              </span>
            </div>

            <div className='Darts-style2'>
              <div className='joined'>
                <button
                  className='joined'
                  style={{ fontSize: "2rem" }}
                  onClick={() => joinedA()}
                >
                  Joined
                </button>
              </div>
              <div className='joined1'>
                <span className='joined1'>
                  {" "}
                  My Status{" "}
                  <span className='joined2' style={{ marginLeft: "4px" }}>
                    {" "}
                    Member{" "}
                  </span>
                </span>
              </div>
              <div className='joined1'>
                <span className='joined1'>
                  {" "}
                  joined Member{" "}
                  <span className='joined2' style={{ marginLeft: "4px" }}>
                    {" "}
                    {rawData && rawData.clubMembers}{" "}
                  </span>
                </span>
              </div>
            </div>
          </div>
          {/* <div className="tshirt-dsign">
        
       
         </div> */}
          <span className='Darts-style1'> Club Tshirt</span>
          <div class='flex-container'>
            <div class='flex-child magenta'>
              <div>
                {" "}
                <img
                  className='img5'
                  src={
                    // rawData.image ||
                    tshirt_front
                  }
                />
              </div>
              <div className='Darts-style9'> Front</div>
            </div>

            <div class='flex-child green'>
              <div>
                <img
                  className='img5'
                  src={
                    // rawData.image ||
                    tshirt_back
                  }
                />
              </div>
              <div className='Darts-style9'>Back</div>
            </div>
          </div>
          <div className='stacklocate1'>
            <span className='location'>Location</span>
            <span className='location1'>
              <MaterialIcon
                color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161))'
                icon='place'
                stretch={true}
                size='18px'
              />
              {rawData && rawData.locality}
            </span>
          </div>
          <div className='stackabout'>
            <h1 className='stackabout1'>About</h1>
            <p className='stackabout2'>
              {" "}
              {rawData && rawData.about}
              <span className='stackabout3'> More...</span>
            </p>
          </div>
          <div className='stackiconstyle'>
            <div>
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
            <div>
              <a
                href='https://www.youtube.com'
                className='social_Media_Handling'
                target='_blank'
              >
                <AiFillYoutube
                  className='stake-favorite'
                  style={{ fontSize: "6rem", textAlign: "center" }}
                />
                <p className='stake-favorite5' style={{ textAlign: "center" }}>
                  youtube
                </p>
              </a>
            </div>
            <div>
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
            <div>
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
          <div>
            <CommonUpdateCard
              memberClub={rawData && rawData.image}
              Member={rawData && rawData.nameofclub}
              Age='Age : 34'
            />
            {/* <CommonUpdateCard
              memberClub={tournament}
              Member="Name Of The Member"
              Age="Age : 34"
            />
            <CommonUpdateCard
              memberClub={tournament}
              Member="Name Of The Member"
              Age="Age : 34"
            />
            <CommonUpdateCard
              memberClub={tournament}
              Member="Name Of The Member"
              Age="Age : 34"
            /> */}
          </div>
          <div className='round'>
            <button className='update'>Update</button>
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
export default ClubUpdateDetail;
