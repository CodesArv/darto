import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import "../../../domains/HomePage/TeamUpdate/TeamUpdate.css";
import img2 from "../../../assets/images/logo_files/img2.jpg";
// import imgb from "./imgb.jpg";
import { FcShare } from "react-icons/fc";
import { GoVerified } from "react-icons/go";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { ImLocation } from "react-icons/im";
import { BsFacebook } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsShareFill } from "react-icons/bs";
// import CommonUpdateCard from "../CommonUpdateCard/CommonUpdateCard";
import { useHistory, useParams } from "react-router-dom";
import { apiHandler } from "../../../assets/api";
import { endpoint } from "../../../assets/api/endpoint";
import MaterialIcon from "react-google-material-icons";
import { Modal } from "react-bootstrap";
import ShareItem from "../../../containers/ShareItem/ShareItems/ShareItems";
import SocialFooter from "../../../components/SocialFooter/SocialFooter";
function MyVerticallyCenteredModal({ onHide, ...show }) {
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
      <Modal.Body style={{ backgroundColor: "#23354d" }} >
        <ShareItem onHide={onHide} {...show} />
      </Modal.Body>
    </Modal>
  );
}
const TeamDetail = ({ rawDatateam, recordByid }) => {
  const params = useParams();
  console.log(params);
  const history = useHistory();
  const [rawDataTeams, setRawDataTeam] = useState("");
  const [modalShows, setModalShows] = React.useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  const [rawData, setRawData] = useState({});
  console.log("recordByid", recordByid);
  const joinedA = () => {
    history.push("/moredetail");
  };
  useEffect(() => {
    GetTeam();
  }, [recordByid]);

  const GetTeam = async () => {
    const resp = await apiHandler({
      url: endpoint.GET_TEAMS,
      method: "GET",
    });

    console.log(resp.data.teams);
    setRawDataTeam(resp.data.teams);
    //let id = rawDataTeams && rawDataTeams.id;
    const result = await apiHandler({
      url: endpoint.GETBYID_TEAM + params.recordByid,
      method: "GET",
      data: null,
    });
    console.log(result.data);
    setRawData(result.data.teamid);
  };
  return (
    <>
      <div className="stackupdate">
        <h1 className="Darts-style">Delhi Dons</h1>

        <div className="row">
          <div className="slider-image1 col-md-auto col-lg-6">
            <img className="slider-image1" src={img2} />
          </div>
          <br />
          <div className="stake-top-channel-i-d5 col-md-auto col-lg-6">
            <div className="stack-profile">
              <div>
                <img className="l-o-g-o-b-r-a-n-d" src={img2} />
              </div>
              <div className="stake-verified">
                <div className="verified2">
                  <div className="verified">
                    <span>
                      <MaterialIcon
                        color="var(--token-a23514c0-d291-45a7-a6d4-86d49c549881, rgb(0, 187, 255)) "
                        icon="verified"
                        // Using default values:
                        stretch={false}
                      />{" "}
                    </span>
                    Verified
                  </div>
                </div>
                <div className="verified2">
                  <div className="verified">
                    {" "}
                    <span>
                      <MaterialIcon
                        color="var(--token-2a633678-f86b-4ab5-94be-ee4f65254cde, rgb(120, 144, 161)) "
                        icon="verified_user"
                        stretch={true}
                      />{" "}
                    </span>
                    Trusted
                  </div>
                </div>

                <div className="stake-share">
                  {/* <FcShare style={{ fontSize: "4rem" }} /> */}
                  <span
                    className="stake-favorite"
                    onClick={() => setModalShow(true)}
                  >
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
                {/* <h1 className="Darts-style">Delhi Dons</h1> */}
                <p className="Darts-style1"> Members Limit 300</p>
                <p className="Darts-style1"> Registered: 9 Month ago</p>
                <p className="Darts-style1">
                  {" "}
                  Catagory: Sr./Senior/Professional
                </p>
              </div>

              <div className="Darts-style2">
                <div className="joined">
                  <button
                    className="joined"
                    style={{ fontSize: "2rem" }}
                    onClick={() => joinedA()}
                  >
                    More Detail
                  </button>
                </div>
                <div className="joined1">
                  <div className="joined1">
                    <span> My Status </span>{" "}
                    <span className="joined2" style={{ marginLeft: "4px" }}>
                      {" "}
                      Member{" "}
                    </span>
                  </div>
                </div>
                <div className="joined1">
                  <div className="joined1">
                    {" "}
                    <span> joined Member </span>{" "}
                    <span className="joined2" style={{ marginLeft: "4px" }}>
                      {" "}
                      200{" "}
                    </span>
                  </div>
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
export default TeamDetail;
