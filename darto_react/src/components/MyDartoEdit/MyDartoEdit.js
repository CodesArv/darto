import React, { useState, useEffect } from "react";
import "./MyDartoEdit.css";
import logos from "./logos.png";
import { useHistory } from "react-router-dom";
import { apiHandler } from "../../assets/api";
import { endpoint } from "../../assets/api/endpoint";
import { Col, Container, Row } from "reactstrap";
import PropTypes from "prop-types";
import NoticeModal from "../AdminDashboard/NoticeModal/NoticeModal";
import MaterialIcon from "react-google-material-icons";
import { useDispatch, useSelector } from "react-redux";
const MyDartoEdit = ({ closeModal }) => {
  let history = useHistory();
  const { id } = useSelector((state) => state.login.userData);
  // const [selectedOption, setSelectedOption] = useState("");
  const [steeltip, setSteeltip] = useState();
  const [weight, setWeight] = useState("");
  const [size, setSize] = useState("");
  const [skilllevel, setskilllevel] = useState("");
  const [rawDataedit, setRawDataEdit] = useState({});
  const [other, setOther] = useState("");
  const [rawData, setRawData] = useState({});
  const [darstname, setDartosname] = useState("");
  const [noticeModal, setNoticeModal] = useState(false);
  const [noticeModalErrMsg, setNoticeModalErrMsg] = useState("");
  const [noticeModalHeaderMsg, setNoticeModalHeaderMsg] = useState("");
  // const { authToken } = useSelector((state) => state.login.authData);
  const closeNoticeModal = () => {
    setNoticeModal(false);
    setNoticeModalErrMsg("");
    setNoticeModalHeaderMsg("");
  };
  // const onChangeSelection = () => {
  //   setSelectedOption(e.target.value);
  // }
  useEffect(() => {
    GetByIdProfileData();
  }, []);

  const GetByIdProfileData = async () => {
    const response = await apiHandler({
        url: endpoint.GETBYID_DARTOPROFILE + id,
        method: "GET",
        data: null,
    });
    if (response.data.status === 500) {
      setNoticeModalHeaderMsg("Error");
      setNoticeModalErrMsg(response.data.message);
      setNoticeModal(true);
    } else {
      if (response.data.length === 0) {
        setNoticeModalHeaderMsg("Error");
        setNoticeModalErrMsg("No Record Found");
        setNoticeModal(true);
      } else {
        console.log("data", response.data);
        setRawData(response.data.response);
        setSteeltip(
            response.data &&
                response.data.response &&
                response.data.response.steeltip
                ? response.data &&
                      response.data.response &&
                      response.data.response.steeltip
                : ""
        );
        setWeight(
            response.data &&
                response.data.response &&
                response.data.response.weight
                ? response.data &&
                      response.data.response &&
                      response.data.response.weight
                : ""
        );
        setDartosname(
            response.data &&
                response.data.response &&
                response.data.response.dartoBrandName
                ? response.data &&
                      response.data.response &&
                      response.data.response.dartoBrandName
                : ""
        );
         setOther(
             response.data &&
                 response.data.response &&
                 response.data.response.other
                 ? response.data &&
                       response.data.response &&
                       response.data.response.other
                 : ""
         );
        setskilllevel(
            response.data &&
                response.data.response &&
                response.data.response.skilllevel
                ? response.data &&
                      response.data.response &&
                      response.data.response.skilllevel
                : ""
        );
        setSize(
            response.data &&
                response.data.response &&
                response.data.response.length
                ? response.data &&
                      response.data.response &&
                      response.data.response.length
                : ""
        );
      }
    }

    //let obj= {...setRawData}
  };
  const onEdit = async () => {

    const result = await apiHandler({
        url: endpoint.CREATE_DARTOPROFILE,
        method: "POST",
        data: {
            dartoBrandName: darstname,
            steeltip: steeltip,
            other:other,
            weight: weight,
            length: size,
            userId: id,
            skilllevel: skilllevel,
        },
    });
    console.log(result);
    if (result.data.status === 500) {
        setNoticeModalHeaderMsg("Error");
        setNoticeModalErrMsg(result.data.message);
        setNoticeModal(true);

        //history.push("/profile")
    } else {
        console.log("Resultput - ", result.data);
        //closeModal();
       history.push("/dartp");
    }
    
  };

  return (
      <>
          <div className="width_60_media">
              <div className="all-profile-details">
                  <div className="all-profile-details1">
                      {/* <div className="profile-avatar-darto">
           <img className="profile-avatar-darto" src={logos}/>
        </div> */}
                  </div>
                  <div className="mydarto-button">
                      {/* <div className="mydarto-button1"> */}
                      <span
                          className="mydarto-button1"
                          onClick={() => setSteeltip("Steel tip")}
                          value={steeltip}
                          id={"Steel tip"}
                          style={{
                              color: "white",
                              fontSize: "16px",
                              backgroundColor:
                                  steeltip === "Steel tip" ? "#fa0043" : "",
                          }}
                      >
                          Steel tip
                      </span>
                      {/* </div> */}
                      {/* <div className="mydarto-button1"> */}
                      <span
                          className="mydarto-button1"
                          onClick={() => setSteeltip("Soft tip")}
                          value={steeltip}
                          id={"Soft tip"}
                          style={{
                              color: "white",
                              fontSize: "16px",
                              backgroundColor:
                                  steeltip === "Soft tip" ? "#fa0043" : "",
                          }}
                      >
                          Soft tip
                      </span>
                      {/* </div> */}
                  </div>
                  <div className="border-botton1">
                     
                          <div className="team-divided">
                              <div className="margin-form">
                                  {/* <input  className="form-input-style margin-form" type="text" placeholder="Enter" /> */}

                                  <select
                                      className="form-input-style margin-form "
                                      placeholder="Enter"
                                      value={darstname}
                                      onChange={(e) =>
                                          setDartosname(e.target.value)
                                      }
                                  >
                                      <option value="">Darts Brand Name</option>
                                      <option value="Target">Target</option>
                                      <option value="Harrows">Harrows</option>
                                      <option value="Unicorn">Unicorn</option>
                                      <option value="Bottelsen">
                                          Bottelsen
                                      </option>
                                      <option value="Voks">Voks</option>
                                      <option value="Winmau">Winmau</option>
                                      <option value="Arachnid">Arachnid</option>
                                      <option value="Nodor">Nodor</option>
                                      <option value="Others">Others</option>
                                  </select>
                              </div>
                          </div>
                           {darstname === "Others" && (
                          <>
                              <div className="team-divided">
                                  <div className="margin-form">
                                      {/* <input  className="form-input-style margin-form" type="text" placeholder="Enter" /> */}

                                      <input
                                          className="form-input-style margin-form"
                                          type="text"
                                          placeholder="Others "
                                          // id={"other"}
                                          value={other}
                                          onChange={(e) =>
                                              setOther(e.target.value)
                                          }
                                      />
                                  </div>
                              </div>
                          </>
                      ) }
                     
                      {/* <div className='team-divided'>
              <div className='margin-form'>
                <input
                  className='form-input-style margin-form'
                  type='text'
                  placeholder='Others '
                  id={"other"}
                  value={Other}
                  onChange={(e) => setOther(e.target.value)}
                />
              </div>
            </div> */}
                      <div className="team-divided">
                          <div className="margin-form">
                              {/* <input  className="form-input-style margin-form" type="text" placeholder="Enter" /> */}

                              <input
                                  className="form-input-style margin-form"
                                  type="text"
                                  placeholder="Weight (10g-90g)"
                                  onChange={(e) => setWeight(e.target.value)}
                                  value={weight}
                              />
                          </div>
                      </div>
                      <div className="team-divided">
                          <div className="margin-form">
                              {/* <input  className="form-input-style margin-form" type="text" placeholder="Enter" /> */}

                              <input
                                  className="form-input-style margin-form"
                                  type="text"
                                  placeholder="Total Length (mm)"
                                  onChange={(e) => setSize(e.target.value)}
                                  value={size}
                              />
                          </div>
                      </div>
                  </div>
                  <hr />
                  <h1 className="tag-team">Skill Levels</h1>
                  <div className="mydarto-button">
                      <div
                          className="mydarto-button1"
                          onClick={() => setskilllevel("Begginers")}
                          value={skilllevel}
                          id={"Begginers"}
                          style={{
                              backgroundColor:
                                  skilllevel === "Begginers" ? "#fa0043" : "",
                          }}
                      >
                          Begginers
                      </div>
                      <div
                          className="mydarto-button1"
                          onClick={() => setskilllevel("Intermidiate")}
                          value={skilllevel}
                          id={"Intermidiate"}
                          style={{
                              backgroundColor:
                                  skilllevel === "Intermidiate"
                                      ? "#fa0043"
                                      : "",
                          }}
                      >
                          Intermidiate
                      </div>
                      <div
                          className="mydarto-button1"
                          onClick={() => setskilllevel("Professional")}
                          value={skilllevel}
                          id={"Professional"}
                          style={{
                              backgroundColor:
                                  skilllevel === "Professional"
                                      ? "#fa0043"
                                      : "",
                          }}
                      >
                          Professional
                      </div>
                  </div>
                  {rawData &&
                      rawData.titleswon &&
                      rawData.titleswon.map((won) => (
                          <div
                              className="mydart-style"
                              style={{ marginTop: "20px" }}
                          >
                              <div className="titles-won">Title Won</div>
                              <div className="profile-avatar-edi">
                                  <div className="tournament-name">
                                      {" "}
                                      {won && won.tournamentName}
                                  </div>

                                  <div className="winner-style ">
                                      <div className="winner-style2">
                                          Winner
                                      </div>
                                      <div className="date-20-dec-2021 ">
                                          {won && won.winner}
                                      </div>
                                  </div>
                              </div>
                              {/* <div className="profile-avatar-edi">
                <div className="tournament-name">Tournament Name</div>

                <div className="winner-style ">
                  <div className="winner-style2">Winner</div>
                  <div className="date-20-dec-2021 ">winnwe</div>
                </div>
              </div>
              <div className="profile-avatar-edi">
                <div className="tournament-name">Tournament Name</div>

                <div className="winner-style ">
                  <div className="winner-style2">Winner</div>
                  <div className="date-20-dec-2021 ">winnwe</div>
                </div>
              </div> */}
                          </div>
                      ))}
                  {/* <Row className="padding_profile_top">
                      <Col className=" greyicon">
                        

                          <span className="padding_left_9px">Title Won</span>
                      </Col>
                  </Row> */}
                  {rawData &&
                      rawData.titleswon &&
                      rawData.titleswon.map((won) => (
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
                              {/* <div className="profile-t-name">
                <span className="Materi_al_Icon">
                  <MaterialIcon
                    color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161))"
                    icon="stars"
                    stretch={true}
                  />
                </span>
                <div className="tournament-name-full">
                  <div className="tournament-name-it ">tournament</div>
                  <div className="stack-full-sta">
                    <div className="stack-full-title-won">Winner</div>
                    <div className="date-20-dec-2021">date-20-dec-2021</div>
                  </div>
                </div>
              </div>
              <div className="profile-t-name">
                <span className="Materi_al_Icon">
                  <MaterialIcon
                    className="Materi_al_Icon"
                    color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161))"
                    icon="stars"
                    stretch={true}
                  />
                </span>
                <div className="tournament-name-full">
                  <div className="tournament-name-it ">tournament</div>
                  <div className="stack-full-sta">
                    <div className="stack-full-title-won">Winner</div>
                    <div className="date-20-dec-2021">date-20-dec-2021</div>
                  </div>
                </div>
              </div> */}
                          </>
                      ))}
                  <div
                      className="floating-left flot-flot"
                      style={{ marginTop: "20px" }}
                  >
                      <button
                          className="style-team-buttons2 button2"
                          onClick={() => onEdit()}
                      >
                          Apply
                      </button>
                  </div>
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
  MyDartoEdit.propTypes = {
    closeModal: PropTypes.func.isRequired,
  };
};
export default MyDartoEdit;
