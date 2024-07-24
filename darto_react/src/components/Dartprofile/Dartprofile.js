import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";

import "./Dartprofile.css";
import { endpoint } from "../../../src/assets/api/endpoint";
import { apiHandler } from "../../../src/assets/api";
import { useHistory } from "react-router-dom";
import NoticeModal from "../AdminDashboard/NoticeModal/NoticeModal";
import MaterialIcon from "react-google-material-icons";
import MobileHeader from "../../containers/Layout/MobileHeader/MobileHeader";
import { useDispatch, useSelector } from "react-redux";
const Dartprofile = ({
  steeltip,
  target,
  dartdetail,
  weight,
  size,
  rank,
  score,
  totalmatch,
  skilllevel,
  dartdetails,
  phone,
  email,
}) => {
  const history = useHistory();
  const [rawData, setRawData] = useState({});
  const [noticeModal, setNoticeModal] = useState(false);
  const [noticeModalErrMsg, setNoticeModalErrMsg] = useState("");
  const [noticeModalHeaderMsg, setNoticeModalHeaderMsg] = useState("");
   const { id } = useSelector((state) => state.login.userData);
  const closeNoticeModal = () => {
    setNoticeModal(false);
    setNoticeModalErrMsg("");
    setNoticeModalHeaderMsg("");
  };
  const editProfile = () => {
    history.push("/mydartoedit");
  };

  useEffect(() => {
    GetByIdProfileData();
  }, []);

  const GetByIdProfileData = async () => {
    const result = await apiHandler({
      url: endpoint.GETBYID_DARTOPROFILE + id,
      method: "GET",
      data: null,
    });
    if (result.data.status === 500) {
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
        console.log("Record");
      }
    }

    //let obj= {...setRawData}
  };

  return (
      <>
          <div className="width_60_media">
              <div style={{ padding: "10px" }}>
                  <br />
                  <div className="links-tab-dv">
                      <div className="stack-links-tab-dv">
                          <span className="MaterialIcon_ic_def">
                              <MaterialIcon
                                  color="var(--token-d983c132-e015-4177-baf8-441dbe84f948, rgb(0, 187, 255)) "
                                  icon="ads_click"
                                  // Using default values:
                                  stretch={false}
                              />
                          </span>

                          <div className="_my_profile_it">My Darto</div>
                      </div>
                      <button
                          className="edit_ed_pro"
                          onClick={() => editProfile()}
                      >
                          <span className="MaterialIcon_ic_def1">
                              <MaterialIcon
                                  color="var(--token-dcfc1000-f350-494d-bd15-7f017b76226e, rgb(255, 255, 255))"
                                  icon="edit"
                                  // Using default values:
                                  stretch={false}
                              />
                          </span>
                          <span className="ed_bt_t_d">Edit</span>
                      </button>
                  </div>
                  {/* <Row>
          <Col className="profilemenu" xs="11">
            <CgProfile className="profileicon" />
            <b> My Darto </b>
          </Col>
          <Col xs="1">
            <button className="btnprofile verify" onClick={() => editProfile()}>
              {" "}
              <FiEdit className="profileicon" />
              Edit
            </button>
          </Col>
        </Row> */}

                  <Row>
                      <Col className="profiledetails">
                          <div>
                              <br />
                              <h2 className="common_Font_Style_Gray">Rank</h2>
                              <h1 className="rankk">
                                  {rawData && rawData.rank
                                      ? rawData && rawData.rank
                                      : 0}
                              </h1>
                          </div>
                      </Col>
                      <Col className="profiledetails middiv">
                          <div>
                              <br />
                              <h2 className="common_Font_Style_Gray ">Score</h2>
                              <h1 className="scoree">
                                  {rawData && rawData.score
                                      ? rawData && rawData.score
                                      : 0}
                              </h1>
                          </div>
                      </Col>
                      <Col className="profiledetails">
                          <div>
                              <br />
                              <h2 className="common_Font_Style_Gray">
                                  Total Match
                              </h2>
                              <h1 className="totalmatchh">
                                  {rawData && rawData.totalmatch
                                      ? rawData && rawData.totalmatch
                                      : 0}
                              </h1>
                          </div>
                      </Col>
                  </Row>
                  {/* ))} */}

                  <pre></pre>

                  <Row>
                      <Col className="greyicon responsive" xs="8">
                          <span className="Materi_al_Icon">
                              <MaterialIcon
                                  color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) "
                                  icon="ads_click"
                                  stretch={true}
                              />{" "}
                          </span>
                          <span className="common_Font_Style_Gray padding_left_9px">
                              Darts Details{" "}
                          </span>
                      </Col>
                  </Row>
                  {/* {rawData &&
          rawData.dartsDetails &&
          rawData.dartsDetails.map((item) => ( */}
                  <>
                      <Row>
                          <Col className="skycolour aligin_devider" xs="8">
                              <span className="logo_Style_Common">
                                  <MaterialIcon
                                      color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161))"
                                      icon="push_pin"
                                      stretch={true}
                                  />{" "}
                              </span>
                              <span className="padding_Common_Line"> | </span>{" "}
                              <span className="font_Style_Common">
                                  {" "}
                                  {(rawData && rawData.steeltip) || ""}{" "}
                              </span>
                              {/* {item.dartsDetails.steeltip} */}
                              {/* | steeltip{" "} */}
                          </Col>
                      </Row>
                      <Row>
                          <Col className="skycolour aligin_devider" xs="8">
                              <span className="logo_Style_Common">
                                  <MaterialIcon
                                      color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) "
                                      icon="category"
                                      stretch={true}
                                  />{" "}
                              </span>
                              <span className="padding_Common_Line"> | </span>{" "}
                              <span className="font_Style_Common">
                                  {(rawData && rawData.dartoBrandName) || ""}{" "}
                              </span>
                          </Col>
                      </Row>
                      <Row>
                          <Col className="skycolour aligin_devider" xs="8">
                              <span className="logo_Style_Common">
                                  <MaterialIcon
                                      color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) "
                                      icon="branding_watermark"
                                      stretch={true}
                                  />{" "}
                              </span>
                              <span className="padding_Common_Line"> | </span>{" "}
                              {/* <span className='font_Style_Common'> dartdetail </span> */}
                          </Col>
                      </Row>

                      {/* {rawData &&
          rawData.dartsDetails &&
          rawData.dartsDetails.map((item) => ( */}
                      <>
                          {/* {event && event.dartsDetails && event.dartsDetails.map(item => (
          <> */}
                          <Row>
                              <Col className="skycolour aligin_devider" xs="8">
                                  <span className="logo_Style_Common">
                                      <MaterialIcon
                                          color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) "
                                          icon="monitor_weight"
                                          stretch={true}
                                      />{" "}
                                  </span>
                                  <span className="padding_Common_Line">
                                      {" "}
                                      |{" "}
                                  </span>{" "}
                                  <span className="font_Style_Common">
                                      {(rawData && rawData.weight) || ""}{" "}
                                      {/* {(item && item.weight) || ""}{" "} */}
                                  </span>
                              </Col>
                          </Row>
                          <Row>
                              <Col className="skycolour aligin_devider" xs="8">
                                  <span className="logo_Style_Common">
                                      <MaterialIcon
                                          color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) "
                                          icon="straighten"
                                          stretch={true}
                                      />{" "}
                                  </span>
                                  <span className="padding_Common_Line">
                                      {" "}
                                      |{" "}
                                  </span>{" "}
                                  <span className="font_Style_Common">
                                      {" "}
                                      {(rawData && rawData.length) || ""}{" "}
                                      {/* {(item && item.size) || ""}{" "} */}
                                  </span>
                              </Col>
                          </Row>
                          {/* </>
        ))} */}
                      </>
                      {/* ))} */}

                      <br />
                      <Row>
                          <Col className="profilemenu"> </Col>
                      </Row>

                      <pre></pre>

                      <Row>
                          <Col className="greyicon" xs="8">
                              <span className="logo_Style_Common">
                                  <MaterialIcon
                                      color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) "
                                      icon="stars"
                                      stretch={true}
                                  />
                              </span>{" "}
                              <span className="padding_left_9px">Skills</span>{" "}
                          </Col>
                      </Row>

                      <Row>
                          <Col className="skycolour" xs="8">
                              {" "}
                              {(rawData && rawData.skilllevel) || ""} 
                          </Col>
                      </Row>
                  </>
                  {/* ))} */}
                  {/* <pre></pre> */}

                  {/* <Row>
                      <Col className="profilemenu"> </Col>
                  </Row> */}
                  {/* ////////////////////////////////////////////////////////////////////////////////////////// */}
                  {/* <Row className="padding_profile_top">
                      <Col className=" greyicon">
                          <span className="logo_Style_Common">
                              <MaterialIcon
                                  color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) "
                                  icon="military_tech"
                                  stretch={true}
                              />
                          </span>

                          <span className="padding_left_9px">Title Won</span>
                      </Col>
                  </Row>
                  {rawData &&
                      rawData.DartoProfiles &&
                      rawData.DartoProfiles.map((won) => (
                          <>
                              <div className="profile-t-name">
                                  <span className="logo_Style_Common">
                                      <MaterialIcon
                                          color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161))"
                                          icon="stars"
                                          stretch={true}
                                      />
                                  </span>
                                  <div className="tournament-name-full">
                                      <div className="font_Dart_blue ">
                                          {won && won.tournamentName}
                                      </div>
                                      <div className="stack-full-sta">
                                          <div className="commn_FontSize_white">
                                              {won && won.winner}
                                          </div>
                                          <div className="color_Gray_Twelve">
                                              {won && won.date}
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </>
                      ))} */}

                  <pre></pre>

                  {window.innerWidth <= 768 && <MobileHeader />}
              </div>
              {noticeModal && (
                  <NoticeModal
                      noticeModal={noticeModal}
                      noticeModalHeader={noticeModalHeaderMsg}
                      noticeModalErrMsg={noticeModalErrMsg}
                      closeModal={closeNoticeModal}
                  />
              )}
          </div>
      </>
  );
};
export default Dartprofile;
