import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./LivePlays.css";
import { Link, useHistory } from "react-router-dom";
import { apiHandler } from "../../../assets/api";
import { endpoint } from "../../../assets/api/endpoint";
import scoreCard from "../CommonMatchCard/ScoreCard/ScoreCard";
import ScoreCard from "../CommonMatchCard/ScoreCard/ScoreCard";
import MobileHeader from "../../../containers/Layout/MobileHeader/MobileHeader";
import { AiOutlineArrowLeft } from "react-icons/ai";
import logos from "../../LivePlay/LivePlays/logos.png";
import MaterialIcon from "react-google-material-icons";
import saveScoreDetails from "../../../stores/reducers/login/LoginSlice";
import Modal from "react-bootstrap/Modal";
import NoticeModal from "../../AdminDashboard/NoticeModal/NoticeModal";
function ValidationModal({ mStart, mDiscard, ...props }) {
  return (
    <Modal
      {...props}
      size='sm'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Body>
        <div className='confirmation_Popup'>Please Register</div>
      </Modal.Body>
    </Modal>
  );
}
export const parseDateTime = (weekDate) => {
  if (weekDate === null || weekDate === "") return null;

  let dateObj = new Date(weekDate);

  var month =
    (dateObj.getMonth() + 1 < 10 ? "0" : "") + (dateObj.getMonth() + 1);
  var date = (dateObj.getDate() < 10 ? "0" : "") + dateObj.getDate();
  var today = new Date();
  var min = today.getMinutes();
  if (min < 10) {
    min = "0" + min;
  }
  var time = today.getHours() + ":" + min;

  return dateObj.getFullYear() + "-" + month + "-" + date + " " + time;
};

const LivePlays = () => {
  const dispatch = useDispatch();
  const [matchId, setMatchId] = useState("");
  const history = useHistory();
  const { id } = useSelector((state) => state.login.userData);
  console.log("ll",id)
  // const { id } = useSelector((state) => state.login.userData);
  // const onSerach =()=>{
  const { authToken } = useSelector((state) => state.login.authData);
  const { status } = useSelector((state) => state.login.userData);

  const [rawData, setRawData] = useState([]);
  const [number1, setNumber1] = useState(1);
  const [number2, setNumber2] = useState(3);
  const [number3, setNumber3] = useState(0);

  const [total, setTotal] = useState(number1 * number2);
  const [score, setScore] = useState(true);
  const [hideBoard, setHideBoard] = useState(true);
  const [hideTeam, setHideTeam] = useState(false);
  const [hideTorunament, setHideTorunamnet] = useState(false);
  const [gameType, setGameType] = useState("");
  const [gameMode, setGameMode] = useState("X01");
  const [starPoint, setStarPoint] = useState(501);
  const [checkOut, setCheckOut] = useState("Double Out");
  const [player2, setPlayer2] = useState("");
  const [player1, setPlayer1] = useState("");
  const [addPlayer, setAddPlayer] = useState("");
  const [coachName, setCoachNamee] = useState("");
  const [coachId, setCoachId] = useState("");
  const [player1id, setPlayer1Id] = useState("");
  const [player2id, setPlayer2Id] = useState("");
  const [matchStatus, setMatchStatus] = useState("");
  const [validatePlayer, setValidatePlayer] = useState({});
  const [practiceMatchActive, setPractiveMatchActive] = useState("Practice");

  const [hideHeader, setHideHeader] = useState(true);
  const [singleMatch, setSingleMatch] = useState(true);
  const [searchAuto, setSearchAuto] = useState([]);
  const [hideAutoSearch, setHideAutoSearch] = useState(false);
  const [hideAutoSearchCoach, setHideAutoSearchCoach] = useState(false);
  const [showValidModal, setShowValidModal] = React.useState(false);
  const [noticeModal, setNoticeModal] = useState(false);
  const [noticeModalErrMsg, setNoticeModalErrMsg] = useState("");
  const [noticeModalHeaderMsg, setNoticeModalHeaderMsg] = useState("");
  const [activePlayer,setActivePlayer] =useState(false);
  const [activePlayer1,setActivePlayer1] =useState("");
  const [activePlayer2, setActivePlayer2] = useState("");
   const [activePlayergameType, setActivePlayerGameType] = useState("");
   const [activePlayergameMode, setActivePlayerGameMode] = useState("X01");
   const [activePlayerstarPoint, setActivePlayerStarPoint] = useState(501);
   const [activePlayercheckOut, setActivePlayerCheckOut] =
       useState("Double Out");
    const [activePlayerTotalset, setActivePlayerTotalset] = useState(1);
    const [activePlayerTotalleg, setActivePlayerTotalleg] = useState(3);  
    const [activePlayer1Id,setActivePlayer1Id] =useState("");
    const [activePlayer2Id, setActivePlayer2Id] = useState("");
  

  const closeNoticeModal = () => {
    setNoticeModal(false);
    setNoticeModalErrMsg("");
    setNoticeModalHeaderMsg("");
  };
   useEffect(() => {
       activePlayer1Data(id);
   }, [id]);
   const activePlayer1Data = async (id) => {
       const result = await apiHandler({
           url: endpoint.GET_ACTIVEPLAYER + id,
           method: "GET",
           data: null,
       });

       //let obj= {...setRawData}
       if (result.data.status === 500) {
           setNoticeModalHeaderMsg("Error");
           setNoticeModalErrMsg(result.data.message);
           setNoticeModal(true);
       } else {
           console.log(result.data, result.data.activePlayer);
           if (result.data.activePlayer === true) {
               setMatchId("" + result.data.id);
               setScore(false);
               setActivePlayer(result.data.activePlayer);
               setActivePlayer1(result.data.player1Name);
               setActivePlayer2(result.data.player2Name);
               setActivePlayer1Id(result.data.player1_id);
               setActivePlayer2Id(result.data.player2_id);
               setActivePlayerGameType(result.data.gameType);
               setActivePlayerStarPoint(result.data.startPoint);
               setActivePlayerTotalset(result.data.totalSet);
               setActivePlayerTotalleg(result.data.totalLeg);
               setActivePlayerCheckOut(result.data.checkOut);
               setActivePlayerGameMode(result.data.gameMode);
               // history.push("/score");
               setHideHeader(false);
           }
           else{
            alert("ggg")
              GetByIdProfileData(); 
           }
       }
   };
//   useEffect(() => {
//     GetByIdProfileData();
//   }, []);
  //TEAMMATCH_CREATE
  const GetByIdProfileData = async () => {
    if(activePlayer === true) return
    const res = await apiHandler({
      url: endpoint.GETBYID_USER + id,
      method: "GET",
      data: null,
    });
    console.log(res.data.response);
    setPlayer1(
      res.data.response.firstName + " " + res.data.response.lastName || ""
    );
    setPlayer1Id(
      res.data && res.data.response && res.data.response.id
        ? res.data && res.data.response && res.data.response.id
        : ""
    );
    // setValidatePlayer1(false);
      checkActivePlayer(res.data && res.data.response && res.data.response.id);
    console.log("player name", player1);
  };
  const validate = () => {
    if (player1 === "") {
      setNoticeModalHeaderMsg("Error");
      setNoticeModalErrMsg("Please Select Player A ");
      setNoticeModal(true);
      return false;
    }
    if (player1 !== "" && player1id === "") {
      setNoticeModalHeaderMsg("Error");
      setNoticeModalErrMsg("Please  Select Correct Player Name");
      setNoticeModal(true);
      return false;
    }
    if (validatePlayer[player1id]) {
        setNoticeModalHeaderMsg("Error");
        setNoticeModalErrMsg(player1 + " is already playing another match");
        setNoticeModal(true);
        return false;
    }
    if (coachName !== "") {
      if (validatePlayer[coachId]) {
          setNoticeModalHeaderMsg("Error");
          setNoticeModalErrMsg(coachName + " is already playing another match");
          setNoticeModal(true);
          return false;
      }
    }
    if (gameType === "Match") {
      if (player2 === "") {
        setNoticeModalHeaderMsg("Error");
        setNoticeModalErrMsg("Please Select Player B ");
        setNoticeModal(true);
        return false;
      }
      if (player2 !== "" && player2id === "") {
        setNoticeModalHeaderMsg("Error");
        setNoticeModalErrMsg("Please  Select Correct Player Name ");
        setNoticeModal(true);
        return false;
      }
      if (validatePlayer[player2id]) {
          setNoticeModalHeaderMsg("Error");
          setNoticeModalErrMsg(player2 + " is already playing another match");
          setNoticeModal(true);
          return false;
      }
    }
   
    return true;
   
  };
  

    const checkActivePlayer = async (id) => {
       if (activePlayer === true) return;
        const result = await apiHandler({
            url: endpoint.GET_PLAYERID + id,
            method: "GET",
        });
        console.log(result.data, result.data && result.data.length > 0);
        setValidatePlayer({
            ...validatePlayer,
            [id]: result.data && result.data.length > 0,
        });
    };
  const GetPlayer = async (text, value) => {
     if (activePlayer === true) return;
    setPlayer2(text);
    console.log("pl2", text);
    if (text.length > 2) {
      const result = await apiHandler({
        url: endpoint.GET_PLAYER + text,
        method: "GET",
      });
      if (result.data && result.data[0] && result.data[0].firstName) {
        console.log(result.data);

        setSearchAuto(result.data);
        setHideAutoSearch(true);
      }
    }
  };

  const GetCoach = async (text, value) => {
     if (activePlayer === true) return;
    setCoachNamee(text);
    if (text.length > 2) {
      const result = await apiHandler({
        url: endpoint.GET_PLAYER + text,
        method: "GET",
      });
      if (result.data && result.data[0] && result.data[0].firstName) {
        console.log(result.data);

        setSearchAuto(result.data);
        setHideAutoSearchCoach(true);
      }
    }
  };
  const Calc = async () => {
    if (validate()) {
      const result = await apiHandler({
        url: endpoint.TEAMMATCH_CREATE,
        method: "POST",
        data: {
          player1_id: player1id,
          player2_id: player2id ? player2id : null,
          player1Name: player1,
          player2Name: player2,
          // matchStatus: matchStatus,
          totlLeg: number1,
          totalSet: number2,
          coachName: coachName,
          coach_id: coachId ? coachId : null,

          gameMode: gameMode,

          gameType: gameType,
          startDate: parseDateTime(new Date()),
          checkOut: checkOut,
          startPoint: starPoint,
        },
      });
      console.log("scoreCard", result.data);

      setMatchId(result.data.id);
      setScore(false);
      // history.push("/score");
      setHideHeader(false);
    }
  };

  const devide = (e) => {
    setNumber3(Math.ceil(Number(e.target.value) / 2));
  };
  const onclose = () => {
    setScore(true);
    setHideHeader(true);
  };

  const calculateTotal = (e) => {
    setNumber2(e.target.value);
    setTotal(number1 * Number(e.target.value));
    devide(e);
  };

  const Mode = (e, value) => {
    setGameType(value);
    setPractiveMatchActive(value);
    setGameMode(false);

    switch (value) {
      case "Practice":
        return Practice();
      case "Match":
        return Matches();
      case "Tournament":
        return Matchestournamnet();
      default:
        return;
    }
  };
  const Practice = () => {
    setHideBoard(true);
    setHideTeam(false);
    setHideTorunamnet(false);
  };
  const Matches = (e) => {
    setHideTeam(true);
    setHideBoard(false);
    setHideTorunamnet(false);
  };
  const Matchestournamnet = () => {
    setHideTeam(false);
    setHideBoard(false);
    setHideTorunamnet(true);
  };

  const Ccarousal = () => {
    history.go(-1);
  };
  const backHome = () => {
    history.push("/home");
  };
  const cancelButton = () => {
    setScore(true);
    setHideHeader(true);
  };
  const singlePracticeMatch = () => {
    setSingleMatch(false);
  };
  const clearTeamData = () => {
    setPlayer2("");
    // setPlayer1("");
    setCoachNamee("");
  };
  const onPlayer2 = (data, id) => {
    setPlayer2(data);
    setPlayer2Id(id);
    checkActivePlayer(id);
    setHideAutoSearch(false);
  };
  const onCoach2 = (data, id) => {
    setCoachNamee(data);
    setCoachId(id);
     checkActivePlayer(id);
    setHideAutoSearchCoach(false);
  };

 

  console.log("pldata", rawData);
  return (
      <>
          {hideHeader ? (
              <>
                  <div className="stake-back  heade_subheader_Define_DT_live ">
                      <div
                          className="stake-back1 sub_navigation_bar"
                          style={{ cursor: "pointer" }}
                      >
                          <span className="update-opt">
                              {" "}
                              <AiOutlineArrowLeft
                                  onClick={() => Ccarousal()}
                              />{" "}
                          </span>{" "}
                      </div>
                      <div
                          className="darto-logo5 align_Logo_Manage sub_navigation_bar"
                          style={{ cursor: "pointer" }}
                      >
                          <img
                              className="darto-logo5"
                              src={logos}
                              onClick={() => backHome()}
                          />
                      </div>
                  </div>
              </>
          ) : (
              <>
                  {/* <div className='stake-back  heade_subheader_Define_DT_live padding-left-right-sc-h'>
            <div className='logo_width_scoreCard'>
              <img className='logo_Score' src={logos} />
            </div>
            <div className='backgrounf-cross' onClick={() => cancelButton()}>
              <MaterialIcon
                color=' rgb(120, 144, 161) '
                icon='close'
                stretch={false}
              />
            </div>
          </div> */}
              </>
          )}
          {score ? (
              <div className="stack-live-play width_60_media padding_bottom_nine9">
                  <div className="Tournament-Mode">
                      <div
                          className="League-tour"
                          value={gameType}
                          onClick={(e) => Mode(e.target.value, "Practice")}
                          style={{
                              backgroundColor:
                                  practiceMatchActive === "Practice"
                                      ? "#00bbff"
                                      : "",
                          }}
                      >
                          <span className="l-e-a-g-u-e1">Practice</span>
                      </div>

                      <div
                          className="League-tour"
                          value={gameType}
                          onClick={(e) => Mode(e.target.value, "Match")}
                          style={{
                              backgroundColor:
                                  practiceMatchActive === "Match"
                                      ? "#00bbff"
                                      : "",
                          }}
                      >
                          <span className="l-e-a-g-u-e1"> Match</span>
                      </div>

                      <div
                          className="League-tour"
                          value={gameType}
                          onClick={(e) => Mode(e.target.value, "Tournament")}
                          style={{
                              backgroundColor:
                                  practiceMatchActive === "Tournament"
                                      ? "#00bbff"
                                      : "",
                          }}
                      >
                          <span className="l-e-a-g-u-e1"> Tournament</span>
                      </div>
                  </div>

                  {hideTeam && (
                      <div className="stack-league">
                          <div className="add-players">Add Player</div>
                          <div className="add-players1">
                              <select
                                  name="cars"
                                  id="cars"
                                  value={addPlayer}
                                  onChange={(e) => setAddPlayer(e.target.value)}
                                  className="add-players2"
                              >
                                  <option value="2">2</option>
                              </select>
                          </div>
                      </div>
                  )}
                  {hideTorunament && (
                      <div className="stack-league">
                          <div className="add-players">Add Player</div>
                          <div className="add-players1">
                              <select
                                  name="cars"
                                  id="cars"
                                  value={addPlayer}
                                  onChange={(e) => setAddPlayer(e.target.value)}
                                  className="add-players2"
                              >
                                  <option value="2">2</option>
                              </select>
                          </div>
                      </div>
                  )}
                  {hideBoard ? (
                      <div className="stack-team-a">
                          <>
                              <div className="team-a">Team A</div>
                          </>

                          <div className="stack-a-b-c">
                              <input
                                  type="text"
                                  placeholder="Name"
                                  className="stack-a-b"
                                  value={player1}
                                  onChange={(e) => setPlayer1(e.target.value)}
                              />
                          </div>
                      </div>
                  ) : (
                      <div className="width_100_teamA">
                          <div className="stack-team-a">
                              <>
                                  <div className="team-a">Team A</div>
                              </>

                              <div className="stack-a-b-c">
                                  <input
                                      type="text"
                                      placeholder="Name"
                                      className="stack-a-b"
                                      value={player1}
                                      onChange={(e) =>
                                          setPlayer1(e.target.value)
                                      }
                                  />
                              </div>
                          </div>

                          <div className="stack-team-a">
                              <div
                                  className="team-a"
                                  style={{ color: "#dca204" }}
                              >
                                  Team B
                              </div>

                              <div className="stack-a-b-c">
                                  <input
                                      type="text"
                                      placeholder="Player Name By Number by batch"
                                      className="stack-a-b"
                                      value={player2}
                                      onChange={(e) =>
                                          GetPlayer(e.target.value)
                                      }
                                  />
                              </div>
                          </div>
                          {hideAutoSearch && (
                              <div className="search_Country curser-pointer">
                                  {searchAuto &&
                                      searchAuto.length > 0 &&
                                      searchAuto.map((row) => (
                                          <div
                                              onClick={() =>
                                                  onPlayer2(
                                                      row.firstName +
                                                          " " +
                                                          row.lastName,
                                                      row.id
                                                  )
                                              }
                                          >
                                              {row.firstName +
                                                  " " +
                                                  row.lastName}
                                          </div>
                                      ))}
                              </div>
                          )}
                      </div>
                  )}

                  <div className="stack-team-a">
                      <div className="team-a" style={{ color: "#dca204" }}>
                          Coach Name
                      </div>
                      <div className="stack-a-b-c">
                          <input
                              type="text"
                              placeholder="Coatch Name"
                              className="stack-a-b"
                              value={coachName}
                              onChange={(e) => GetCoach(e.target.value)}
                          />
                      </div>
                      {hideAutoSearchCoach && (
                          <div className="search_Country curser-pointer">
                              {searchAuto &&
                                  searchAuto.length > 0 &&
                                  searchAuto.map((row) => (
                                      <div
                                          onClick={() =>
                                              onCoach2(
                                                  row.firstName +
                                                      " " +
                                                      row.lastName,
                                                  row.id
                                              )
                                          }
                                      >
                                          {row.firstName + " " + row.lastName}
                                      </div>
                                  ))}
                          </div>
                      )}
                  </div>
                  <div className="display_flex-with_100">
                      <div className="game-mode ">
                          <div className="game-mode2">Game Mode</div>

                          <div className="">
                              <select
                                  className="add-players5 w-100"
                                  value={gameMode}
                                  onChange={(e) => setGameMode(e.target.value)}
                              >
                                  <option value="X01">X01</option>
                                  <option value="Cricket" disabled>
                                      Cricket
                                  </option>
                                  <option value="Around the Clock" disabled>
                                      Around the Clock
                                  </option>
                                  <option value="Shanghai" disabled>
                                      Shanghai
                                  </option>
                                  <option value="Elimination" disabled>
                                      Elimination{" "}
                                  </option>
                                  <option value="HighScore" disabled>
                                      HighScore
                                  </option>
                              </select>
                          </div>
                      </div>
                      <div className="game-mode  ">
                          <div className="game-mode2">Game</div>

                          <div className="">
                              <select
                                  className="add-players5 w-100"
                                  value={starPoint}
                                  onChange={(e) => setStarPoint(e.target.value)}
                              >
                                  <option value="501">501</option>
                                  <option value="101" disabled>
                                      101
                                  </option>
                                  <option value="301" disabled>
                                      301
                                  </option>
                                  <option value="601" disabled>
                                      601
                                  </option>
                              </select>
                          </div>
                      </div>
                  </div>
                  <div className="game-mode  ">
                      <div className="game-mode2">Check Out</div>

                      <div className="">
                          <select
                              className="add-players5 w-100"
                              value={checkOut}
                              onChange={(e) => setCheckOut(e.target.value)}
                          >
                              <option value="Double Out">Double Out</option>
                              <option value="Straight Out" disabled>
                                  Straight Out
                              </option>
                          </select>
                      </div>
                  </div>
                  <div className="display_flex-with_100">
                      <div className="game-mode ">
                          <div className="game-mode2">Legs</div>

                          <div className="">
                              <select
                                  className="add-players5 w-100"
                                  value={number2}
                                  onChange={(e) => calculateTotal(e)}
                              >
                                  <option value="3">3</option>
                                  <option value="5">5</option>
                                  <option value="7">7</option>
                                  <option value="9">9</option>
                                  <option value="11">11</option>
                                  <option value="13">13</option>
                                  <option value="15">15</option>
                                  <option value="17">17</option>
                                  <option value="19">19</option>
                                  <option value="21">21</option>
                              </select>
                          </div>
                      </div>
                      <div className="game-mode ">
                          <div className="game-mode2">Sets</div>
                          <div className="">
                              <select
                                  className="add-players5 w-100"
                                  value={number1}
                                  onChange={(e) => setNumber1(e.target.value)}
                              >
                                  <option value="1">1</option>
                                  <option value="3">3</option>
                                  <option value="5">5</option>
                                  <option value="7">7</option>
                                  <option value="9">9</option>
                                  <option value="11">11</option>
                                  <option value="13">13</option>
                                  <option value="15">15</option>
                              </select>
                          </div>
                      </div>
                  </div>
                  <hr style={{ color: "white" }} />
                  <div className="legs-name ">
                      Who Ever Player Win {number3} legs First will be winner of
                      Set
                      <hr />
                      Total Legs = Set X Legs={total}
                  </div>
                  <div className="submit-live-play">
                      <button
                          className="round-play-live"
                          onClick={() => Calc()}
                      >
                          START
                      </button>
                  </div>
              </div>
          ) : (
              <>
                  {activePlayer === true ? (
                      <>
                          <div>
                              <ScoreCard
                                  totalSet={activePlayerTotalset}
                                  totalLeg={activePlayerTotalleg}
                                  mode={activePlayergameMode}
                                  star={activePlayerstarPoint}
                                  scoreDiscard={onclose}
                                  cancelItem={cancelButton}
                                  hideGameType={activePlayergameType}
                                  out={activePlayercheckOut}
                                  namePlayer1={activePlayer1}
                                  namePlayer2={activePlayer2}
                                  singleMatchLive={singleMatch}
                                  playerid1={activePlayer1Id}
                                  playerid2={activePlayer2Id}
                                  showMatchId={matchId}
                                  PlayerActive={activePlayer}
                                  clrTeamData={clearTeamData}
                              />
                          </div>
                      </>
                  ) : (
                      <>
                          <div>
                              <ScoreCard
                                  totalSet={number1}
                                  totalLeg={number2}
                                  mode={gameMode}
                                  star={starPoint}
                                  scoreDiscard={onclose}
                                  cancelItem={cancelButton}
                                  hideGameType={gameType}
                                  out={checkOut}
                                  namePlayer1={player1}
                                  namePlayer2={player2}
                                  playerid1={player1id}
                                  playerid2={player2id}
                                  singleMatchLive={singleMatch}
                                  showMatchId={matchId}
                                  PlayerActive={activePlayer}
                                  clrTeamData={clearTeamData}
                              />
                          </div>
                      </>
                  )}
              </>
          )}
          {window.innerWidth <= 768 && <MobileHeader />}
          <ValidationModal
              show={showValidModal}
              onHide={() => setShowValidModal(false)}
          />
          {noticeModal && (
              <NoticeModal
                  noticeModal={noticeModal}
                  noticeModalHeader={noticeModalHeaderMsg}
                  noticeModalErrMsg={noticeModalErrMsg}
                  closeModal={closeNoticeModal}
              />
          )}
      </>
  );
};
export default LivePlays;
