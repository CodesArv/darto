import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./ScoreCard.css";
import MaterialIcon from "react-google-material-icons";
import { apiHandler } from "../../../../assets/api";
import { endpoint } from "../../../../assets/api/endpoint";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import logos from "../../../LivePlay/CommonMatchCard/ScoreCard/logos.png";
import NoticeModal from "../../../AdminDashboard/NoticeModal/NoticeModal";
import { useDispatch, useSelector } from "react-redux";

function DiscardBox({ mStart, mDiscard, ...props }) {
  return (
    <Modal
      {...props}
      size='sm'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Body>
        <div className='confirmation_Popup'>
          Are you sure you want to leave game?
        </div>
        <div onClick={props.onHide} className='yes_Or_No'>
          <div>
            <button className='yes_No_popup_button' onClick={mStart}>
              No
            </button>
          </div>
          <div>
            <button className='yes_No_popup_button_red' onClick={mDiscard}>
              Yes
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
function MyVerticallyCenteredModal({ nexts, ...props }) {
  return (
    <Modal
      {...props}
      size='sm'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Body>
        <div onClick={props.onHide}>
          <button
            onClick={nexts}
            className='stack-name-second1 next-button'
            style={{
              fontWeight: "bold",
            }}
          >
            Next Leg
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
function GameOverModal({ gameOverFinal, ...props }) {
  return (
    <Modal
      {...props}
      size='sm'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Body className='gameOverBgcolor'>
        <div onClick={props.onHide}>
          <div className='game_Over'>Game Over</div>
          <button
            onClick={gameOverFinal}
            className='stack-game-over game-over-first'
            style={{
              fontWeight: "bold",
            }}
          >
            Continue
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
const data = [
  {
    player1Score: 201,
    player2Score: 201,
  },
];
const ScoreCard = ({
  totalLeg,
  totalSet,
  mode,
  star,
  out,
  playerid1,
  playerid2,
  PlayerActive,
  namePlayer1,
  namePlayer2,
  scoreDiscard,
  hideGameType,
  cancelItem,
  showMatchId,
  clrTeamData,
}) => {
    const [modalShow, setModalShow] = React.useState(false);
    const [gameOver, setGameOver] = React.useState(false);
    const { id } = useSelector((state) => state.login.userData);
    const [discardModalShow, setDiscardModalShow] = React.useState(false);
    const [num1, setNum1] = React.useState(0);

    const [hideBoard, setHideBoard] = useState(true);
    //   Structures for Darto Score page
    const [maxScore, setMaxScore] = useState(501);
    const [p1Details, setP1Details] = useState({
        Name: namePlayer1,
        score: 0,
        s1: "",
        s2: "",
        s3: "",
    });
    const [p2Details, setP2Details] = useState({
        Name: namePlayer2,
        score: 0,
        s1: "",
        s2: "",
        s3: "",
    });
    const [legStatus, setLegStatus] = useState({});
    const [setsStatus, setSetsStatus] = useState({});
    const [currentLeg, setCurrentLeg] = useState(1);
    const [currentSet, setCurrentSet] = useState(1);

    const [p1Scores, setP1Scores] = useState([]);
    const [p2Scores, setP2Scores] = useState([]);
    const [firstPlayerSelected, setFirstPlayerSelected] = useState(true);
    const [p1SetWinner, setP1SetWinner] = useState("0");
    const [p1LegWinner, setP1LegWinner] = useState("0");
    const [p2SetWinner, setP2SetWinner] = useState("0");
    const [p2LegWinner, setP2LegWinner] = useState("0");
    const [winner, setWinner] = useState("");
    const [start, setStart] = useState(true);
    const [switchHide, setSwitchHide] = useState(true);
    const [p1NoOfDart, setP1NoOfDart] = useState(0);
    const [p2NoOfDart, setP2NoOfDart] = useState(0);
    const [noticeModal, setNoticeModal] = useState(false);
    const [noticeModalErrMsg, setNoticeModalErrMsg] = useState("");
    const [noticeModalHeaderMsg, setNoticeModalHeaderMsg] = useState("");
    const [timer,setTimer] = useState(null);
   const [ActivetotalLeg, setTotalLeg] = useState(totalLeg);
   const [ActivetotalSet, setTotalSet] = useState(0);
   const [matchScoreId,setMatchScoreId] =useState("");
   const [p1maxScore ,setP1MaxScore] =useState(501);
   const [p2maxScore ,setP2MaxScore] =useState(501);
   const [clearScore ,setClearScore] =useState(true);

    const closeNoticeModal = () => {
        setNoticeModal(false);
        setNoticeModalErrMsg("");
        setNoticeModalHeaderMsg("");
    };
    const setMathchPoints = (val) => {
        let score = Number(val);
        setNum1(score);
        setHideBoard(false);
        setSwitchHide(false);
    };
    console.log("playerid:",playerid1,"playerid2:",playerid2);
    const Matchestournamnet = () => {
        setHideBoard(true);
    };
    // useEffect(() => {
    //     activePlayer1Data();
    // }, []);
    // const activePlayer1Data = async () => {
    //     const result = await apiHandler({
    //         url: endpoint.GET_ACTIVEPLAYER + id,
    //         method: "GET",
    //         data: null,
    //     });

    //     //let obj= {...setRawData}
    //     if (result.data.status === 500) {
    //         setNoticeModalHeaderMsg("Error");
    //         setNoticeModalErrMsg(result.data.message);
    //         setNoticeModal(true);
    //     } else {
    //         console.log(result.data, result.data.activePlayer);
    //         if (result.data.activePlayer === true){ setStart(true);
    //          setSwitchHide(false);
    //          setTeamMatchId(""+result.data.id);
    //          GetMatchLsitData();
    //         }
    //     }
    // };

    useEffect(() => {
        if (PlayerActive) {
            setStart(false);
            setSwitchHide(false);
            setP1NoOfDart(0);
            setP2NoOfDart(0);
        }
    }, [PlayerActive]);
    //  useEffect(() => {
    //    let currentPlayerId = firstPlayerSelected ? playerid1 : playerid2;
    //    if (id !== currentPlayerId) {
    //        getLatestScrore(playerid1, playerid2);
    //    }
    //  }, [playerid1, playerid2, firstPlayerSelected]);
     useEffect(() => {
 
         GetMatchLsitData(playerid1, playerid2);
         return () => {
             if (timer) {
                 console.log(`clearing interval`);
                 clearInterval(timer);
                 setTimer(null);
             }
         };
     }, [playerid1, playerid2, firstPlayerSelected]);
     const GetMatchLsitData = (playerid1, playerid2) => {
         //  if (!timer) {
         let currentPlayerId = firstPlayerSelected ? playerid1 : playerid2;
            if (id !== currentPlayerId) {
                getLatestScrore(playerid1, playerid2);
            }
            
            if (playerid1 !== "" && playerid2 !=="") {
                 console.log(
                     `initializing interval = `,
                     playerid1,
                     playerid2,
                     firstPlayerSelected,
                     timer
                 );
                if (timer !== null) {
                    clearInterval(timer);
                    setTimer(null);
                }
                const interval = setInterval(async () => {
                    getLatestScrore(playerid1, playerid2);
                }, 10000);
                console.log("interval :", interval);
                setTimer(interval);
            }
        //  console.log("interval :", interv);
         //  }
     };
     const getLatestScrore = async (playerid1, playerid2) => {
         console.log("getLatestScrore");
         if (showMatchId === "") return;

         let currentPlayerId = firstPlayerSelected ? playerid1 : playerid2;
         console.log("curentid:", playerid1, playerid2);
         if (id === currentPlayerId) return;

         const result = await apiHandler({
             url: endpoint.GET_LATESTSCORE + showMatchId,
             method: "GET",
         });
         //let obj= {...setRawData}
         if (result.data.status === 500) {
             setNoticeModalHeaderMsg("Error");
             setNoticeModalErrMsg(result.data.message);
             setNoticeModal(true);
         } 
         else if (result.data.status === 403) {
             setNoticeModalHeaderMsg("Error");
             setNoticeModalErrMsg(result.data.message);
             setNoticeModal(true);
             if (timer) {
                 console.log(`clearing interval`);
                 clearInterval(timer);
                 setTimer(null);
             }
             cancelItem();
             clrTeamData();
         } else {
             console.log("lastesScore", result.data);
             parseMatchScoreDate(result.data);
         }
     };
     const parseMatchScoreDate = async(data) => {
         //    setPlDet(data && data.player1Name);
         //    setPlayer2(data && data.player2Name);
        //  if(data.firstPlayerSelected){
        //   let sumP1 = data.p1Scores.reduce(
        //       (partialSum, a) => Number(partialSum) + Number(a),
        //       0
        //   );
        //    if (data.p1s1 !== "" && data.p1s2 !== "" && data.p1s3 !== "") {
        //       let p1MaxScore = Number(maxScore) - Number(sumP1);
        //       setP1MaxScore(p1MaxScore);
        //    } else {
        //       let p1MaxScore =
        //            Number(maxScore) -
        //            Number(sumP1) -
        //            Number(data.p1s1) -
        //            Number(data.p1s2) -
        //            Number(data.p1s3)
        //        ;
        //        setP1MaxScore(p1MaxScore);
        //    }
        // }
        // else {
        //     let sumP2 = data.p2Scores.reduce(
        //         (partialSum, a) => Number(partialSum) + Number(a),
        //         0
        //     );
        //      if (data.p2s1 !== "" && data.p2s2 !== "" && data.p2s3 !== "") {
        //          let p2MaxScore = Number(maxScore) - Number(sumP2);
        //          setP2MaxScore(p2MaxScore);
        //      } else {
        //          let p2MaxScore =
        //              Number(maxScore) -
        //              Number(sumP2) -
        //              Number(data.p2s1) -
        //              Number(data.p2s2) -
        //              Number(data.p2s3);
        //          setP2MaxScore(p2MaxScore);
        //      }

           
        // }
        //  let sumP1 = data.p1Scores.reduce(
        //       (partialSum, a) => Number(partialSum) + Number(a),
        //       0
        //   );
        //  let p1MaxScore =
        //      Number(maxScore) -
        //      Number(sumP1)-
        //      Number(data.p1s1) -
        //      Number(data.p1s2) -
        //      Number(data.p1s3);
        // setP1MaxScore(p1MaxScore);

        // let sumP2 = data.p2Scores.reduce(
        //     (partialSum, a) => Number(partialSum) + Number(a),
        //     0
        // );
        // let p2MaxScore =
        //     Number(maxScore) -
        //     Number(sumP2)-
        //     Number(data.p2s1) -
        //     Number(data.p2s2) -
        //     Number(data.p2s3);
        //  setP2MaxScore(p2MaxScore);

        await setLegStatus(JSON.parse(data.legStatus));
        await setSetsStatus(JSON.parse(data.setsStatus));
        await setCurrentLeg(Number(data.leg));
        await setCurrentSet(Number(data.set));

        await setP1Scores(data.p1Scores);
        await setP2Scores(data.p2Scores);
        await setFirstPlayerSelected(data.firstPlayerSelected);
        await setP1SetWinner(data.p1SetWinner);
        await setP1LegWinner(data.p1LegWinner);
        await setP2SetWinner(data.p2SetWinner);
        await setP2LegWinner(data.p2LegWinner);
        await setWinner(data.winner);
        await setP1NoOfDart(Number(data.p1NoOfDart));
        await setP2NoOfDart(Number(data.p2NoOfDart));
        await setTotalLeg(data.totalLeg);
        await setTotalSet(data.totalSet);
        await setP1MaxScore(data.p1Max);
         await setP2MaxScore(data.p2Max);
        await setNum1(Number(data.num1));
        await setP1Details({
             Name: data.player1Name,
             score: data.p1Score,
             s1: data.p1s1,
             s2: data.p1s2,
             s3: data.p1s3,
         });
        await setP2Details({
             Name: data.player2Name,
             score: data.p2Score,
             s1: data.p2s1,
             s2: data.p2s2,
             s3: data.p2s3,
         });
        await setMatchScoreId(data.id);
           
           await setSwitchHide(false);
        //  setHideGameType(data.gameType);
     };
    const calculateSetWinner = () => {
        let p1Count = 0;
        let p2Count = 0;
        Object.values(legStatus).forEach((p) => {
            if (p === "P1") {
                p1Count++;
            } else if (p === "P2") {
                p2Count++;
            }
        });
        return p1Count > p2Count ? "P1" : "P2";
    };
    // UPDATE_SCORE
    useEffect(() => {
        let p1Count = 0;
        let p2Count = 0;
        Object.values(legStatus).forEach((p) => {
            if (p === "P1") {
                p1Count++;
            } else if (p === "P2") {
                p2Count++;
            }
        });
        setP1LegWinner(p1Count);
        setP2LegWinner(p2Count);

        p1Count = 0;
        p2Count = 0;
        Object.values(setsStatus).forEach((p) => {
            if (p === "P1") {
                p1Count++;
            } else if (p === "P2") {
                p2Count++;
            }
        });
        setP1SetWinner(p1Count);
        setP2SetWinner(p2Count);
    }, [legStatus, setsStatus]);
    const switchPlayer = (flag) => {
        if (hideGameType && hideGameType !== "Practice") {
            setFirstPlayerSelected(flag);
        }
    };
    const scoreBusted = (totalScore, s1, s2, s3) => {
        if (firstPlayerSelected) {
            setP1Details({ ...p1Details, s1, s2, s3 });
            if (hideGameType && hideGameType !== "Practice") {
                setP2Details({ ...p2Details, s1: "", s2: "", s3: "" });
            } else {
                setP1Details({ ...p1Details, s1: "", s2: "", s3: "" });
            }
            setP1Scores([...p1Scores, "" + totalScore]);
            // switchPlayer(false);
        } else {
            setP2Details({ ...p2Details, s1, s2, s3 });
            setP1Details({ ...p1Details, s1: "", s2: "", s3: "" });
            setP2Scores([...p2Scores, "" + totalScore]);
            // switchPlayer(true);
        }
    };
    const isScoreBusted = (sum, balanceTillNow, type, score) => {
        if (maxScore - sum < 176) {
            if (balanceTillNow === 0) {
                if (type === "DB") {
                    // Game Over
                    setWinner(firstPlayerSelected ? "P1" : "P2");
                    // switchPlayer(!firstPlayerSelected);
                    if (firstPlayerSelected) {
                        setP1Scores([...p1Scores, score]);
                    } else {
                        setP2Scores([...p2Scores, score]);
                    }
                    setModalShow(true);
                    return false;
                } else {
                    return true;
                }
            } else if (balanceTillNow === 1 || balanceTillNow < 0 ) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    };
    const updateScore = async (e, score, type) => {
         let currentPlayerId = firstPlayerSelected ? playerid1 : playerid2;
         console.log("curentid:", currentPlayerId, playerid1, playerid2);
         if (id !== currentPlayerId) return; // if not a current player then return

        setHideBoard(true);
        setNum1(score);
        setSwitchHide(false);
        let dataToBeSave = {
            teamMatch_id: showMatchId,
            p1NoOfDart: p1NoOfDart,
            p2NoOfDart: p2NoOfDart,
            player1Name: p1Details.Name,
            player2Name: p2Details.Name,
            p1Score: p1Details.score ? p1Details.score : 0,
            p2Score: p2Details.score ? p2Details.score : 0,
            gameType: hideGameType ? hideGameType : "",
            totalSet: totalSet ? totalSet : 0,
            totalLeg: ActivetotalLeg ? ActivetotalLeg : 0,
            winner: winner ? winner : null,
            leg: currentLeg,
            set: currentSet,
            p1Scores: p1Scores,
            p2Scores: p2Scores,
            p1SetWinner: p1SetWinner,
            p1LegWinner: p1LegWinner,
            p2SetWinner: p2SetWinner,
            p2LegWinner: p2LegWinner,
            p1Max: p1maxScore,
            p2Max: p2maxScore,
            num1: num1,
            firstPlayerSelected: firstPlayerSelected,
            p1s1: p1Details.s1,
            p1s2: p1Details.s2,
            p1s3: p1Details.s3,
            p2s1: p2Details.s1,
            p2s2: p2Details.s2,
            p2s3: p2Details.s3,
            legStatus: legStatus,
            setsStatus: setsStatus,
        };

        if (firstPlayerSelected) {
            const sum = p1Scores.reduce(
                (partialSum, a) => Number(partialSum) + Number(a),
                0
            );
            setP1NoOfDart(p1NoOfDart + 1);
            dataToBeSave.p1NoOfDart = p1NoOfDart + 1;

            if (p1Details.s1 === "") {
                const balanceTillNow =
                    Number(maxScore) - Number(sum) - Number(score);
                     setP1MaxScore(balanceTillNow < 0 ? p1maxScore : balanceTillNow);
                     dataToBeSave.p1Max =
                         balanceTillNow < 0 ? p1maxScore : balanceTillNow;
                if (isScoreBusted(sum, balanceTillNow, type, Number(score))) {
                    scoreBusted(0, 0, 0, 0);
                     dataToBeSave.firstPlayerSelected = !firstPlayerSelected;
                } else {
                    setP1Details({ ...p1Details, s1: score });
                    dataToBeSave.p1s1 = score;
                }
            } else if (p1Details.s2 === "") {
                const balanceTillNow =
                    Number(maxScore) -
                    Number(sum) -
                    Number(p1Details.s1) -
                    Number(score);
                     setP1MaxScore(
                         balanceTillNow < 0 ? p1maxScore : balanceTillNow
                     );
                     dataToBeSave.p1Max =
                         balanceTillNow < 0 ? p1maxScore : balanceTillNow;
                if (
                    isScoreBusted(
                        sum,
                        balanceTillNow,
                        type,
                        Number(p1Details.s1) + Number(score)
                    )
                ) {
                    scoreBusted(0, p1Details.s1, 0, 0);
                    dataToBeSave.firstPlayerSelected = !firstPlayerSelected;
                } else {
                    setP1Details({ ...p1Details, s2: score });
                    dataToBeSave.p1s2 = score;
                }
            } else {
                const balanceTillNow =
                    Number(maxScore) -
                    Number(sum) -
                    Number(p1Details.s1) -
                    Number(p1Details.s2) -
                    Number(score);
                     setP1MaxScore(
                         balanceTillNow < 0 ? p1maxScore : balanceTillNow
                     );
                     dataToBeSave.p1Max =
                         balanceTillNow < 0 ? p1maxScore : balanceTillNow;
                if (
                    isScoreBusted(
                        sum,
                        balanceTillNow,
                        type,
                        Number(p1Details.s1) +
                            Number(p1Details.s2) +
                            Number(score)
                    )
                ) {
                    scoreBusted(0, p1Details.s1, p1Details.s2, 0);
                    dataToBeSave.firstPlayerSelected = !firstPlayerSelected;
                    if (hideGameType && hideGameType !== "Practice") {
                        dataToBeSave.p2s1 = "";
                        dataToBeSave.p2s2 = "";
                        dataToBeSave.p2s3 = "";
                    } else {
                        dataToBeSave.p1s1 = "";
                        dataToBeSave.p1s2 = "";
                        dataToBeSave.p1s3 = "";
                    }
                    dataToBeSave.p1Scores = [...p1Scores, "0"];
                } else {
                    setP1Details({ ...p1Details, s3: score });
                    dataToBeSave.p1s3 = score;
                    setP1Scores([
                        ...p1Scores,
                        Number(p1Details.s1) +
                            Number(p1Details.s2) +
                            Number(score),
                    ]);
                    dataToBeSave.p1Scores =
                        dataToBeSave.p1NoOfDart === 3
                            ? [
                                  Number(p1Details.s1) +
                                      Number(p1Details.s2) +
                                      Number(score),
                              ]
                            : [
                                  ...p1Scores,
                                  Number(p1Details.s1) +
                                      Number(p1Details.s2) +
                                      Number(score),
                              ];
                    // switchPlayer(false);
                    dataToBeSave.firstPlayerSelected = false;
                    if (hideGameType && hideGameType !== "Practice") {
                        setP2Details({ ...p2Details, s1: "", s2: "", s3: "" });
                        dataToBeSave.p2s1 = "";
                        dataToBeSave.p2s2 = "";
                        dataToBeSave.p2s3 = "";
                    } else {
                        setP1Details({ ...p1Details, s1: "", s2: "", s3: "" });
                        dataToBeSave.p1s1 = "";
                        dataToBeSave.p1s2 = "";
                        dataToBeSave.p1s3 = "";
                    }
                    setP2Details({ ...p2Details, s1: "", s2: "", s3: "" });
                    dataToBeSave.p2s1 = "";
                    dataToBeSave.p2s2 = "";
                    dataToBeSave.p2s3 = "";
                }
            }
        } else {
            setHideBoard(true);
            const sum = p2Scores.reduce(
                (partialSum, a) => Number(partialSum) + Number(a),
                0
            );
            setP2NoOfDart(p2NoOfDart + 1);
            dataToBeSave.p2NoOfDart = p2NoOfDart + 1;
            if (p2Details.s1 === "") {
                const balanceTillNow =
                    Number(maxScore) - Number(sum) - Number(score);
                    // setP2MaxScore(balanceTillNow);
                     setP2MaxScore(
                         balanceTillNow < 0 ? p2maxScore : balanceTillNow
                     );
                     dataToBeSave.p2Max =
                         balanceTillNow < 0 ? p2maxScore : balanceTillNow;
                if (isScoreBusted(sum, balanceTillNow, type, Number(score))) {
                    scoreBusted(0, 0, 0, 0);
                    dataToBeSave.firstPlayerSelected = !firstPlayerSelected;
                } else {
                    setP2Details({ ...p2Details, s1: score });
                    dataToBeSave.p2s1 = score;
                }
            } else if (p2Details.s2 === "") {
                const balanceTillNow =
                    Number(maxScore) -
                    Number(sum) -
                    Number(p2Details.s1) -
                    Number(score);
                      setP2MaxScore(
                          balanceTillNow < 0 ? p2maxScore : balanceTillNow
                      );
                      dataToBeSave.p2Max =
                          balanceTillNow < 0 ? p2maxScore : balanceTillNow;
                if (
                    isScoreBusted(
                        sum,
                        balanceTillNow,
                        type,
                        Number(p2Details.s1) + Number(score)
                    )
                ) {
                    scoreBusted(0, p2Details.s1, 0, 0);
                    dataToBeSave.firstPlayerSelected = !firstPlayerSelected;
                } else {
                    setP2Details({ ...p2Details, s2: score });
                    dataToBeSave.p2s2 = score;
                }
            } else {
                const balanceTillNow =
                    Number(maxScore) -
                    Number(sum) -
                    Number(p2Details.s1) -
                    Number(p2Details.s2) -
                    Number(score);
                      setP2MaxScore(
                          balanceTillNow < 0 ? p2maxScore : balanceTillNow
                      );
                      dataToBeSave.p2Max =
                          balanceTillNow < 0 ? p2maxScore : balanceTillNow;
                if (
                    isScoreBusted(
                        sum,
                        balanceTillNow,
                        type,
                        Number(p2Details.s1) +
                            Number(p2Details.s2) +
                            Number(score)
                    )
                ) {
                    scoreBusted(0, p2Details.s1, p2Details.s2, 0);
                    dataToBeSave.firstPlayerSelected = !firstPlayerSelected;
                    dataToBeSave.p1s1 = "";
                    dataToBeSave.p1s2 = "";
                    dataToBeSave.p1s3 = "";
                    dataToBeSave.p2Scores = [...p2Scores, "0"];
                } else {
                    setP2Details({ ...p2Details, s3: score });
                    dataToBeSave.p2s3 = score;
                    // switchPlayer(true);
                    dataToBeSave.firstPlayerSelected = true;
                    setP1Details({ ...p1Details, s1: "", s2: "", s3: "" });
                    dataToBeSave.p1s1 = "";
                    dataToBeSave.p1s2 = "";
                    dataToBeSave.p1s3 = "";
                    setP2Scores([
                        ...p2Scores,
                        Number(p2Details.s1) +
                            Number(p2Details.s2) +
                            Number(score),
                    ]);
                    dataToBeSave.p2Scores =
                        dataToBeSave.p2NoOfDart === 3
                            ? [
                                  Number(p2Details.s1) +
                                      Number(p2Details.s2) +
                                      Number(score),
                              ]
                            : [
                                  ...p2Scores,
                                  Number(p2Details.s1) +
                                      Number(p2Details.s2) +
                                      Number(score),
                              ];
                }
            }
        }
        updateScoreinDB(dataToBeSave);
    };
    const updateScoreinDB = async(data) => {
        console.log('UPDATE DATA - ', data);
        const result = await apiHandler({
            url: endpoint.UPDATE_SCORE + matchScoreId,
            method: "PUT",
            data:data,
        });
        console.log(result.data);
        if (result.data.status === 403) {
            setNoticeModalHeaderMsg("Error");
            setNoticeModalErrMsg(result.data.message);
            setNoticeModal(true);
             cancelItem();
             clrTeamData();

        }
        setFirstPlayerSelected(data.firstPlayerSelected);
    };
    // const getCurrentScore = (player) => {
    //     if (player === "P1") {
    //         const sum = p1Scores.reduce(
    //             (partialSum, a) => Number(partialSum) + Number(a),
    //             0
    //         );
    //         if (
    //             p1Details.s1 !== "" &&
    //             p1Details.s2 !== "" &&
    //             p1Details.s3 !== ""
    //         ) {
    //             return Number(maxScore) - Number(sum);
    //         } else {
    //             return (
    //                 Number(maxScore) -
    //                 Number(sum) -
    //                 Number(p1Details.s1) -
    //                 Number(p1Details.s2) -
    //                 Number(p1Details.s3)
    //             );
    //         }
    //     } else {
    //         const sum = p2Scores.reduce(
    //             (partialSum, a) => Number(partialSum) + Number(a),
    //             0
    //         );
    //         if (
    //             p2Details.s1 !== "" &&
    //             p2Details.s2 !== "" &&
    //             p2Details.s3 !== ""
    //         ) {
    //             return Number(maxScore) - Number(sum);
    //         } else {
    //             return (
    //                 Number(maxScore) -
    //                 Number(sum) -
    //                 Number(p2Details.s1) -
    //                 Number(p2Details.s2) -
    //                 Number(p2Details.s3)
    //             );
    //         }
    //     }
    // };

    const undos = () => {
        if (firstPlayerSelected) {
            if (p1Details.s3 !== "") {
                setP1Details({ ...p1Details, s3: "" });
                // setP1MaxScore("");
            } else if (p1Details.s2 !== "") {
                setP1Details({ ...p1Details, s2: "" });
                //  setP1MaxScore("");
            } else if (p1Details.s1 !== "") {
                setP1Details({ ...p1Details, s1: "" });
                //  setP1MaxScore("");
            } else {
                setP2Details({ ...p2Details, s3: "" });
                //  setP2MaxScore("");
                switchPlayer(!firstPlayerSelected);
                // p2Scores = p2Scores.slice(0, -1);
                p2Scores.pop();
            }
        } else {
            if (p2Details.s3 !== "") {
                setP2Details({ ...p2Details, s3: "" });
                //  setP2MaxScore("");
            } else if (p2Details.s2 !== "") {
                setP2Details({ ...p2Details, s2: "" });
                //  setP2MaxScore("");
            } else if (p2Details.s1 !== "") {
                setP2Details({ ...p2Details, s1: "" });
                //  setP2MaxScore("");
            } else {
                setP1Details({ ...p1Details, s3: "" });
                //  setP1MaxScore("");
                switchPlayer(!firstPlayerSelected);

                p1Scores.pop();
            }
        }
    };

    const nextButton = async (e) => {
        let dataToCreateRecord = {
            teamMatch_id: showMatchId,
            p1NoOfDart: 0,
            p2NoOfDart: 0,
            player1Name: p1Details.Name,
            player2Name: p2Details.Name,
            firstPlayerSelected: true,
            p1Score: 0,
            p2Score: 0,
            gameType: hideGameType ? hideGameType : "",
            totalSet: totalSet ? totalSet : 0,
            totalLeg: ActivetotalLeg ? ActivetotalLeg : 0,
            winner: null,
            leg: currentLeg,
            set: currentSet,
            p1Max: maxScore,
            p2Max: maxScore,
            p1Scores: [],
            p2Scores: [],
            p1SetWinner: p1SetWinner,
            p1LegWinner: p1LegWinner,
            p2SetWinner: p2SetWinner,
            p2LegWinner: p2LegWinner,
            num1: num1,
            p1s1: "",
            p1s2: "",
            p1s3: "",
            p2s1: "",
            p2s2: "",
            p2s3: "",
            legStatus: legStatus,
            setsStatus: setsStatus,
        };
        //update leg
        setLegStatus({
            ...legStatus,
            [currentLeg]: firstPlayerSelected ? "P1" : "P2",
        });
        dataToCreateRecord.legStatus = {
            ...legStatus,
            [currentLeg]: firstPlayerSelected ? "P1" : "P2",
        };
        //is last leg
        if (currentLeg === ActivetotalLeg) {
            //update set
            const pl = calculateSetWinner();
            setSetsStatus({ ...setsStatus, [currentSet]: pl });
            dataToCreateRecord.setsStatus = { ...setsStatus, [currentSet]: pl };

            //reset leg
            setCurrentLeg(1);
            dataToCreateRecord.leg = 1;
            setLegStatus({});
            dataToCreateRecord.legStatus = {};
            if (currentSet >= totalSet) {
                //is last set
                //reset set and leg
                //finish game
                setGameOver(true);
            } else {
                setCurrentSet(currentSet + 1);
                dataToCreateRecord.set = currentSet + 1;
            }
        } else {
            setCurrentLeg(currentLeg + 1);
            dataToCreateRecord.leg = currentLeg + 1;
        }
        setP1Details({
            ...p1Details,
            score: 0,
            s1: "",
            s2: "",
            s3: "",
        });
        setP2Details({
            ...p2Details,
            score: 0,
            s1: "",
            s2: "",
            s3: "",
        });
        setWinner("");
        setP1MaxScore(maxScore);
        setP2MaxScore(maxScore);
        setP1Scores([]);
        setP2Scores([]);
        switchPlayer(true);
        setSwitchHide(true);
        setP1NoOfDart(0);
        setP2NoOfDart(0);
        createMatchScoreInDb(dataToCreateRecord);
    };
    const matchStart = () => {
        setStart(false);
        setSwitchHide(false);
        setP1NoOfDart(0);
        setP2NoOfDart(0);
        setP1MaxScore(maxScore);
        setP2MaxScore(maxScore);
        createMatchScoreInDb({
            teamMatch_id: showMatchId,
            p1NoOfDart: 0,
            p2NoOfDart: 0,
            player1Name: p1Details.Name ? p1Details.Name : "",
            player2Name: p2Details.Name ? p2Details.Name : "",
            firstPlayerSelected: firstPlayerSelected,
            winner: winner ? winner : null,
            leg: currentLeg ? currentLeg : 0,
            set: currentSet ? currentSet : 0,
            p1Scores: p1Scores ? p1Scores : [],
            p2Scores: p2Scores ? p2Scores : [],
            p1SetWinner: p1SetWinner,
            p1Max: maxScore,
            p2Max: maxScore,
            p1Score: p1Details.score ? p1Details.score : 0,
            p2Score: p2Details.score ? p2Details.score : 0,
            gameType: hideGameType ? hideGameType : "",
            totalSet: totalSet ? totalSet : 0,
            totalLeg: ActivetotalLeg ? ActivetotalLeg : 0,
            p1LegWinner: p1LegWinner,
            p2SetWinner: p2SetWinner,
            p2LegWinner: p2LegWinner,
            num1: num1 ? num1 : 0,
            p1s1: p1Details.s1,
            p1s2: p1Details.s2,
            p1s3: p1Details.s3,
            p2s1: p2Details.s1,
            p2s2: p2Details.s2,
            p2s3: p2Details.s2,
            legStatus: legStatus,
            setsStatus: setsStatus,
        });
    };
    const createMatchScoreInDb = async (data) => {
        const result = await apiHandler({
            url: endpoint.MATCH_CREATE,
            method: "POST",
            data: data,
        });
        console.log("scoreCard", result.data);
        if (result.data.status === 403) {
            setNoticeModalHeaderMsg("Error");
            setNoticeModalErrMsg(result.data.message);
            setNoticeModal(true);
             cancelItem();
             clrTeamData();
        }
        setMatchScoreId(result.data.id);
    };
    const matchDiscard = () => {
        scoreDiscard();
        clrTeamData();
    };
    const onselect = () => {
        hideGameType();
    };
    const discarModalPopUp = () => {
        setDiscardModalShow(true);
        clrTeamData();
    };

    const cButton = () => {
        cancelItem();
        clrTeamData();
    };
    // const gameOverfn =() =>{
    //   setP1Details({
    //     ...p1Details,
    //     score: 0,
    //     s1: "",
    //     s2: "",
    //     s3: "",
    //   });
    //   setP2Details({
    //     ...p2Details,
    //     score: 0,
    //     s1: "",
    //     s2: "",
    //     s3: "",
    //   });
    // }

    const updateMatchScore = async () => {
        const result = await apiHandler({
            url: endpoint.TEAMMATCH_UPDATEBYID + showMatchId,
            method: "PUT",
            data: {
                id: showMatchId,
            },
        });
        console.log("jgjgj", result.data);
        cancelItem();
        clrTeamData();
    };
    return (
        <>
            {start ? (
                <>
                    <div className="stake-back  heade_subheader_Define_DT_live padding-left-right-sc-h">
                        <div className="logo_width_scoreCard">
                            <img className="logo_Score" src={logos} />
                        </div>
                        <div
                            className="backgrounf-cross"
                            onClick={() => cButton()}
                        >
                            <MaterialIcon
                                color=" rgb(120, 144, 161) "
                                icon="close"
                                stretch={false}
                            />
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="stake-back  heade_subheader_Define_DT_live padding-left-right-sc-h">
                        <div className="logo_width_scoreCard">
                            <img className="logo_Score" src={logos} />
                        </div>
                        <div
                            className="backgrounf-cross"
                            onClick={() => discarModalPopUp()}
                        >
                            <MaterialIcon
                                color=" rgb(120, 144, 161) "
                                icon="close"
                                stretch={false}
                            />
                        </div>
                    </div>
                </>
            )}
            <div className="stack-score width_60_media ">
                <div className="stack-card  padding_bottom_nine9">
                    <div className="stack-score-card">
                        <div className="stack-card-int ">
                            <div className="stack-in-game">
                                <div className="stack-inside">In Game</div>
                                <div className="game-name">
                                    {mode} ({star},{out})
                                </div>
                            </div>
                            <div className="">
                                <div className="">
                                    <span className="visibility_fix_icon">
                                        <MaterialIcon
                                            icon="visibility"
                                            stretch={false}
                                        />
                                    </span>
                                </div>
                                <div className="">
                                    <span className="visibility_fix_icon_text">
                                        122K
                                    </span>
                                </div>
                                <div className="">
                                    <span className="visibility_fix_icon_text">
                                        {id}
                                    </span>
                                </div>
                            </div>
                            <div>
                                <>
                                    {PlayerActive === true ? (
                                        <>
                                            <div></div>
                                        </>
                                    ) : (
                                        <>
                                            {start ? (
                                                <button
                                                    className="stack-butn-score1 stack-name-second1"
                                                    style={{
                                                        fontWeight: "bold",
                                                    }}
                                                    onClick={(e) =>
                                                        matchStart(e)
                                                    }
                                                >
                                                    START
                                                </button>
                                            ) : (
                                                <button
                                                    className="stack-butn-score1 stack-name-second1"
                                                    style={{
                                                        fontWeight: "bold",
                                                    }}
                                                    onClick={() =>
                                                        discarModalPopUp()
                                                    }
                                                >
                                                    DISCARD
                                                </button>
                                            )}
                                        </>
                                    )}
                                </>
                            </div>
                            {PlayerActive === true ? (
                                <>
                                    <div></div>
                                </>
                            ) : (
                                <>
                                    {switchHide ? (
                                        <>
                                            <button
                                                className="stack-butn-score stack-name-second"
                                                onClick={() =>
                                                    switchPlayer(
                                                        !firstPlayerSelected
                                                    )
                                                }
                                            >
                                                Switch Player
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <button
                                                className="stack-butn-score stack-name-second"
                                                onClick={() =>
                                                    switchPlayer(
                                                        !firstPlayerSelected
                                                    )
                                                }
                                                disabled
                                            >
                                                Switch Player
                                            </button>
                                        </>
                                    )}
                                </>
                            )}
                        </div>
                        <div className="display_flex_number ">
                            <div className=" border_class_define1">
                                <div className="stack-inside1">Total Leg</div>

                                <div className="stack-calc-bt1 justify-content-start">
                                    {Array.apply(null, {
                                        length:
                                             ActivetotalLeg
                                                ,
                                    }).map((e, i) => (
                                        <button
                                            className={
                                                legStatus[i + 1] &&
                                                legStatus[i + 1] === "P1"
                                                    ? "frame-buton-calc1  pl1win"
                                                    : legStatus[i + 1] &&
                                                      legStatus[i + 1] === "P2"
                                                    ? "frame-buton-calc1 pl2win"
                                                    : "frame-buton-calc1"
                                            }
                                        >
                                            {i + 1}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="  border_class_define2">
                                <div className="stack-inside2">Total Sets</div>
                                <div className="stack-calc-bt1  justify-content-end">
                                    {Array.apply(null, {
                                        length:
                                            PlayerActive === true
                                                ? ActivetotalSet
                                                : totalSet,
                                    }).map((e, i) => (
                                        <button
                                            className={
                                                setsStatus[i + 1] &&
                                                setsStatus[i + 1] === "P1"
                                                    ? "frame-buton-calc1  pl1win "
                                                    : setsStatus[i + 1] &&
                                                      setsStatus[i + 1] === "P2"
                                                    ? "frame-buton-calc1 pl2win"
                                                    : "frame-buton-calc1"
                                            }
                                        >
                                            {i + 1}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div
                            className="  borde_bottom_top_1px "
                            style={{ width: "100%" }}
                        >
                            <div
                                className="stack-player-one  style_padding_right"
                                style={{ width: "100%" }}
                            >
                                <div style={{ width: "100%", padding: "5px" }}>
                                    {PlayerActive === true ? (
                                        <>
                                            <div
                                                className="stack-player-style padding_bottom_9px "
                                                style={{ color: "#02f276" }}
                                            >
                                                P1 : {p1Details.Name}
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            {start ? (
                                                <div
                                                    className="stack-player-style padding_bottom_9px "
                                                    style={{ color: "#02f276" }}
                                                >
                                                    P1 :
                                                </div>
                                            ) : (
                                                <div
                                                    className="stack-player-style padding_bottom_9px "
                                                    style={{ color: "#02f276" }}
                                                >
                                                    P1 : {p1Details.Name}
                                                </div>
                                            )}
                                        </>
                                    )}
                                    <div className="frame1_dEfine"></div>
                                    <div
                                        style={{
                                            width: "100%",
                                            padding: "5px",
                                        }}
                                        className={
                                            firstPlayerSelected
                                                ? "cont "
                                                : "stack-player-style3 border_1pxsolid"
                                        }
                                    >
                                        <div className="stack-stack-file">
                                            <div className="frame-stack-player-one1">
                                                { p1maxScore
                                                    }
                                            </div>
                                            <div className="subtract-sign-design">
                                                {" "}
                                                <span className="number-stack-team">
                                                    {" "}
                                                    -{" "}
                                                </span>
                                            </div>
                                            <div className="number-stack-team">
                                                {Number(p1Details.s1) +
                                                    Number(p1Details.s2) +
                                                    Number(p1Details.s3)}
                                            </div>
                                        </div>

                                        <div className="stack-s-file">
                                            <div className="stack-file-num">
                                                <div className="stack-file-num2">
                                                    {Number(p1Details.s1)}{" "}
                                                </div>
                                                <div className="stack-file-num2">
                                                    {Number(p1Details.s2)}{" "}
                                                </div>
                                                <div className="stack-file-num2">
                                                    {Number(p1Details.s3)}{" "}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stack_player1_2">
                                    <div className="possible-outs ">
                                        possible Outs
                                    </div>
                                    <div className="row display_flex_number_width100">
                                        <div className="col">
                                            {" "}
                                            <table className="color_and_fonsize">
                                                <tr className="border_design">
                                                    <td>T0</td>
                                                    <td>T0</td>
                                                    <td>T0</td>
                                                </tr>
                                                <tr className="border_design">
                                                    <td>T0</td>
                                                    <td>T0</td>
                                                    <td>T0</td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className="col">
                                            {" "}
                                            <table className="color_and_fonsize">
                                                <tr className="border_design">
                                                    <td>T0</td>
                                                    <td>T0</td>
                                                    <td>T0</td>
                                                </tr>

                                                <tr className="border_design">
                                                    <td>T0</td>
                                                    <td>T0</td>
                                                    <td>T0</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="stack-player-one  border_left_right_1px"
                                style={{ width: "100%" }}
                            >
                                <div className="stack-player-style_midd">
                                    DARTS
                                </div>
                                <div className="stack-player-style_padding_table">
                                    <div className="stack-s-file scroll-table-data">
                                        <table className="color_and_fonsize ">
                                            {Array.apply(null, {
                                                length: 11,
                                            }).map((item, j) => (
                                                <tbody>
                                                    <tr
                                                        className={
                                                            j === 0
                                                                ? "border_design"
                                                                : ""
                                                        }
                                                    >
                                                        <td>
                                                            {j === 0
                                                                ? maxScore
                                                                : p1Scores[
                                                                      j - 1
                                                                  ]
                                                                ? p1Scores[
                                                                      j - 1
                                                                  ]
                                                                : ""}
                                                        </td>
                                                        <td className="border_left_right_1px_table ">
                                                            {j * 3}
                                                        </td>
                                                        <td>
                                                            {j === 0
                                                                ? maxScore
                                                                : p2Scores[
                                                                      j - 1
                                                                  ]
                                                                ? p2Scores[
                                                                      j - 1
                                                                  ]
                                                                : ""}
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            ))}
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className="stack-player-one style_padding_left">
                                <div style={{ width: "100%", padding: "5px" }}>
                                    {PlayerActive === true ? (
                                        <>
                                            <div
                                                className="stack-player-style padding_bottom_9px "
                                                style={{ color: "#dca204" }}
                                            >
                                                P2 : {p2Details.Name}
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            {start ? (
                                                <div
                                                    className="stack-player-style padding_bottom_9px"
                                                    style={{
                                                        color: " #dca204",
                                                    }}
                                                >
                                                    P2 :
                                                </div>
                                            ) : (
                                                <div
                                                    className="stack-player-style padding_bottom_9px"
                                                    style={{
                                                        color: " #dca204",
                                                    }}
                                                >
                                                    P2 : {p2Details.Name}
                                                </div>
                                            )}
                                        </>
                                    )}
                                    <div className="frame2_dEfine"></div>
                                    <div
                                        style={{
                                            width: "100%",
                                            padding: "5px",
                                        }}
                                        className={
                                            !firstPlayerSelected
                                                ? "cont"
                                                : "stack-player-style3 border_1pxsolid"
                                        }
                                    >
                                        <div className="stack-stack-file">
                                            <div className="frame-stack-player-one2">
                                                { p2maxScore
                                                    }
                                            </div>{" "}
                                            <div className="subtract-sign-design">
                                                {" "}
                                                <span className="number-stack-team">
                                                    {" "}
                                                    -{" "}
                                                </span>
                                            </div>
                                            <div className="number-stack-team">
                                                {Number(p2Details.s1) +
                                                    Number(p2Details.s2) +
                                                    Number(p2Details.s3)}
                                            </div>
                                        </div>

                                        <div className="stack-s-file">
                                            <div className="stack-file-num">
                                                <div className="stack-file-num2">
                                                    {Number(p2Details.s1)}
                                                </div>
                                                <div className="stack-file-num2">
                                                    {Number(p2Details.s2)}
                                                </div>
                                                <div className="stack-file-num2">
                                                    {Number(p2Details.s3)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {hideBoard ? (
                            <div
                                className="width_100  border_bottom_define"
                                style={{ marginTop: "9px", display: "flex" }}
                            >
                                <div className="col-3 display-flex-align-item-center">
                                    {/* {PlayerActive === true ? (
                                        <>
                                            <div></div>
                                        </>
                                    ) : (
                                        <> */}
                                            <button
                                                onClick={() => undos()}
                                                className="stack-butn-score1 stack-name-second1 "
                                                style={{
                                                    fontWeight: "bold",
                                                    fontSize: "14px",
                                                }}
                                            >
                                                UNDO
                                            </button>
                                        {/* </>
                                    )} */}
                                </div>
                                <div className="col-4 text_align_centerm padding-left-12px">
                                    <div className="sets-numbers-left">
                                        First To{" "}
                                    </div>
                                    {PlayerActive === true ? (
                                        <>
                                            <div className="numbers_9_with_name">
                                                {p1Details.Name}
                                            </div>
                                            <div className="numbers_6_with_name">
                                                {p2Details.Name}
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            {start ? (
                                                <></>
                                            ) : (
                                                <div className="numbers_9_with_name">
                                                    {p1Details.Name}
                                                </div>
                                            )}
                                            {start ? (
                                                <></>
                                            ) : (
                                                <div className="numbers_6_with_name">
                                                    {p2Details.Name}
                                                </div>
                                            )}
                                        </>
                                    )}
                                </div>
                                <div className="col-2 text_align_centerm">
                                    <div className="sets-numbers">Sets</div>
                                    <div className="numbers_9">
                                        {p1SetWinner}
                                    </div>

                                    <div className="numbers_6">
                                        {p2SetWinner}
                                    </div>
                                </div>
                                <div className="col-2 text_align_centerm">
                                    <div className="sets-numbers">Legs</div>
                                    <div className="numbers_9">
                                        {p1LegWinner}
                                    </div>

                                    <div className="numbers_6">
                                        {p2LegWinner}
                                    </div>
                                </div>
                                <div className="col-1"></div>
                            </div>
                        ) : (
                            <>
                                {num1 == 50 || num1 == 25 || num1 == 0 ? (
                                    <div
                                        className="width-100-padding-t-b-18px  border_bottom_define"
                                        style={{
                                            marginTop: "18px",
                                            display: "flex",
                                        }}
                                    >
                                        <div
                                            className="s20-final-round"
                                            onClick={(e) =>
                                                updateScore(e, num1, "SG")
                                            }
                                        >
                                            <div className="define-60-color">
                                                {num1}
                                            </div>
                                        </div>
                                        <div
                                            className="backgrounf-cross"
                                            onClick={(e) =>
                                                Matchestournamnet(
                                                    e.target.value
                                                )
                                            }
                                        >
                                            <MaterialIcon
                                                color=" rgb(120, 144, 161) "
                                                icon="close"
                                                stretch={false}
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <div
                                        className="width-100-padding-t-b-18px  border_bottom_define"
                                        style={{
                                            marginTop: "9px",
                                            display: "flex",
                                        }}
                                    >
                                        <div
                                            className="t20-button-60s"
                                            onClick={(e) =>
                                                updateScore(
                                                    e,
                                                    num1 + num1 + num1,
                                                    "TR"
                                                )
                                            }
                                        >
                                            <div className="define-60-color">
                                                {num1 + num1 + num1}
                                            </div>
                                            <div className="define-t20-color">
                                                T{num1}
                                            </div>
                                        </div>
                                        <div
                                            className="d20-butoon-40s"
                                            onClick={(e) =>
                                                updateScore(
                                                    e,
                                                    num1 + num1,
                                                    "DB"
                                                )
                                            }
                                        >
                                            <div className="define-60-color">
                                                {num1 + num1}
                                            </div>
                                            <div className="define-t20-color">
                                                D{num1}
                                            </div>
                                        </div>
                                        <div
                                            className="s20-final-round"
                                            onClick={(e) =>
                                                updateScore(e, num1, "SG")
                                            }
                                        >
                                            <div className="define-60-color">
                                                {num1}
                                            </div>
                                        </div>
                                        <div
                                            className="backgrounf-cross"
                                            onClick={(e) =>
                                                Matchestournamnet(
                                                    e.target.value
                                                )
                                            }
                                        >
                                            <MaterialIcon
                                                color=" rgb(120, 144, 161) "
                                                icon="close"
                                                stretch={false}
                                            />
                                        </div>
                                    </div>
                                )}
                            </>
                        )}
                        {start ? (
                            <>
                                <div className="stack-calc-bt">
                                    <button className="frame-buton-calc_spl calcBoardActive">
                                        0
                                    </button>
                                    {Array.apply(null, { length: 7 }).map(
                                        (e, i) => (
                                            <button
                                                id="myDIV"
                                                className="frame-buton-calc calcBoardActive"
                                            >
                                                {i + 1}
                                            </button>
                                        )
                                    )}
                                </div>
                                <div className="stack-calc-bt">
                                    {Array.apply(null, { length: 8 }).map(
                                        (e, i) => (
                                            <button className="frame-buton-calc calcBoardActive">
                                                {i + 8}
                                            </button>
                                        )
                                    )}
                                </div>
                                <div className="stack-calc-bt">
                                    {Array.apply(null, { length: 5 }).map(
                                        (e, i) => (
                                            <button className="frame-buton-calc calcBoardActive">
                                                {i + 16}
                                            </button>
                                        )
                                    )}

                                    <button className="frame-buton-calc_spl calcBoardActive">
                                        25
                                    </button>
                                    <button className="frame-buton-calc_spl calcBoardActive">
                                        50
                                    </button>
                                    <button className="frame-buton-calc_spl calcBoardActive">
                                        C
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="stack-calc-bt">
                                    <button
                                        className={
                                            num1 === 0
                                                ? "frame-buton-calc_spl_num"
                                                : "frame-buton-calc_spl"
                                        }
                                        value={num1}
                                        onClick={(e) => updateScore(e, 0)}
                                    >
                                        0
                                    </button>

                                    {Array.apply(null, { length: 7 }).map(
                                        (e, i) => (
                                            <button
                                                className={
                                                    num1 === i + 1
                                                        ? "frame-buton-calc_NUM"
                                                        : "frame-buton-calc calcBoardActive"
                                                }
                                                value={num1}
                                                onClick={(e) =>
                                                    setMathchPoints(i + 1)
                                                }
                                            >
                                                {i + 1}
                                            </button>
                                        )
                                    )}
                                </div>
                                <div className="stack-calc-bt">
                                    {Array.apply(null, { length: 8 }).map(
                                        (e, i) => (
                                            <button
                                                className={
                                                    num1 === i + 8
                                                        ? "frame-buton-calc_NUM"
                                                        : "frame-buton-calc calcBoardActive"
                                                }
                                                value={num1}
                                                onClick={(e) =>
                                                    setMathchPoints(i + 8)
                                                }
                                            >
                                                {i + 8}
                                            </button>
                                        )
                                    )}
                                </div>
                                <div className="stack-calc-bt">
                                    {Array.apply(null, { length: 5 }).map(
                                        (e, i) => (
                                            <button
                                                className={
                                                    num1 === i + 16
                                                        ? "frame-buton-calc_NUM"
                                                        : "frame-buton-calc calcBoardActive"
                                                }
                                                value={num1}
                                                onClick={(e) =>
                                                    setMathchPoints(i + 16)
                                                }
                                            >
                                                {i + 16}
                                            </button>
                                        )
                                    )}

                                    <button
                                        className={
                                            num1 === 25
                                                ? "frame-buton-calc_spl_num"
                                                : "frame-buton-calc_spl"
                                        }
                                        value={num1}
                                        onClick={(e) => updateScore(e, 25)}
                                    >
                                        25
                                    </button>
                                    <button
                                        value={num1}
                                        className={
                                            num1 === 50
                                                ? "frame-buton-calc_spl_num"
                                                : "frame-buton-calc_spl"
                                        }
                                        onClick={(e) => updateScore(e, 50)}
                                    >
                                        50
                                    </button>
                                    <button
                                        className="frame-buton-calc_spl"
                                        onClick={() => undos()}
                                    >
                                        C
                                    </button>
                                </div>
                                <div></div>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <DiscardBox
                show={discardModalShow}
                onHide={() => setDiscardModalShow(false)}
                mStart={matchStart}
                mDiscard={matchDiscard}
            />
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                nexts={nextButton}
            />
            <GameOverModal
                show={gameOver}
                onHide={() => setGameOver(false)}
                gameOverFinal={updateMatchScore}
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
export default ScoreCard;
