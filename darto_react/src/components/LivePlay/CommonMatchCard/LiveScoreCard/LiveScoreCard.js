import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiHandler } from "../../../../assets/api";
import { endpoint } from "../../../../assets/api/endpoint";
import NoticeModal from "../../../AdminDashboard/NoticeModal/NoticeModal";
import { useHistory } from "react-router-dom";
import "../../CommonMatchCard/ScoreCard/ScoreCard.css";
import MaterialIcon from "react-google-material-icons";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import logos from "../../../LivePlay/CommonMatchCard/ScoreCard/logos.png";

import { useDispatch, useSelector } from "react-redux";
function DiscardBox({ mStart, mDiscard, ...props }) {
    return (
        <Modal
            {...props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <div className="confirmation_Popup">
                    Are you sure you want to leave game?
                </div>
                <div onClick={props.onHide} className="yes_Or_No">
                    <div>
                        <button
                            className="yes_No_popup_button"
                            onClick={mStart}
                        >
                            No
                        </button>
                    </div>
                    <div>
                        <button
                            className="yes_No_popup_button_red"
                            onClick={mDiscard}
                        >
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
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <div onClick={props.onHide}>
                    <button
                        onClick={nexts}
                        className="stack-name-second1 next-button"
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
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className="gameOverBgcolor">
                <div onClick={props.onHide}>
                    <div className="game_Over">Game Over</div>
                    <button
                        onClick={gameOverFinal}
                        className="stack-game-over game-over-first"
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
const LiveScoreCard = ({
    
    // mode,
    // star,
    // out,
    // namePlayer1,
    // namePlayer2,
    // scoreDiscard,
    // hideGameType,
    // cancelItem,
    // showMatchId,
    // clrTeamData,
}) => {
     const parmas = useParams();
    const [modalShow, setModalShow] = React.useState(false);
    const [gameOver, setGameOver] = React.useState(false);

    const [discardModalShow, setDiscardModalShow] = React.useState(false);
    const [num1, setNum1] = React.useState(0);

    const [hideBoard, setHideBoard] = useState(true);
    //   Structures for Darto Score page
    const [maxScore, setMaxScore] = useState(501);
    const [p1Details, setP1Details] = useState({
        Name: "",
        score: 263,
        s1: "",
        s2: "",
        s3: "",
    });
    const [p2Details, setP2Details] = useState({
        Name: "",
        score: 255,
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
    const [ids, setId] = useState("");
    const [totalLeg,setTotalLeg] =useState(0);
    const [totalSet,setTotalSet] =useState(0);
    const [hideGameType,setHideGameType]=useState("");
    const [noticeModal, setNoticeModal] = useState(false);
    const [noticeModalErrMsg, setNoticeModalErrMsg] = useState("");
    const [noticeModalHeaderMsg, setNoticeModalHeaderMsg] = useState("");

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
       //GET_LATESTSCORE
  useEffect(() => {
    console.log(`initializing interval`);
    const interval = setInterval(() => {
        GetMatchLsitData();
    }, 10000);

    return () => {
        console.log(`clearing interval`);
        clearInterval(interval);
    };
    }, []);
     const GetMatchLsitData = async () => {
         const result = await apiHandler({
             url: endpoint.HISTORY_SCORE + parmas.id,
             method: "GET",
             data: null,
         });

         //let obj= {...setRawData}
         if (result.data.status === 404) {
             setNoticeModalHeaderMsg("Error");
             setNoticeModalErrMsg(result.data.message);
             setNoticeModal(true);
         }
         else {
             console.log(result.data);

           parseMatchScoreDate(result.data);
         }
     };
     const parseMatchScoreDate = (data) => {
    //    setPlDet(data && data.player1Name);
    //    setPlayer2(data && data.player2Name);
     
       setP2Scores( data.p2Scores);
       setWinner( data.winner);
       setCurrentLeg(Number( data.leg));
       setCurrentSet(Number( data.set));
       setFirstPlayerSelected( data.firstPlayerSelected);
       setLegStatus(JSON.parse(data.legStatus));
       setNum1(Number( data.num1));
       setP1LegWinner( data.p1LegWinner);
       setP1NoOfDart(Number( data.p1NoOfDart));
          setP1Scores( data.p1Scores);
          setP1SetWinner( data.p1SetWinner);
          setP1Details({
              Name:  data.player1Name,
              score :  data.p1Score,
              s1:  data.p1s1,
              s2:  data.p1s2,
              s3:  data.p1s3,
          });
          setP2Details({
              Name:  data.player2Name,
              score:  data.p2Score,
              s1:  data.p2s1,
              s2:  data.p2s2,
              s3:  data.p2s3,
          });
       setP2NoOfDart(Number( data.p2NoOfDart));
       setSetsStatus(JSON.parse(data.setsStatus));
       setTotalLeg( data.totalLeg);
        setTotalSet( data.totalSet);
        setHideGameType( data.gameType);

       

     };
     console.log("gjgk", setsStatus, legStatus);
    const Matchestournamnet = () => {
        setHideBoard(true);
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
            switchPlayer(false);
        } else {
            setP2Details({ ...p2Details, s1, s2, s3 });
            setP1Details({ ...p1Details, s1: "", s2: "", s3: "" });
            setP2Scores([...p2Scores, "" + totalScore]);
            switchPlayer(true);
        }
    };
    const isScoreBusted = (sum, balanceTillNow, type, score) => {
        if (maxScore - sum < 176) {
            if (balanceTillNow === 0) {
                if (type === "DB") {
                    // Game Over
                    setWinner(firstPlayerSelected ? "P1" : "P2");
                    switchPlayer(!firstPlayerSelected);
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
            } else if (balanceTillNow === 1 || balanceTillNow < 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    };
    const updateScore = async (e, score, type) => {
        setHideBoard(true);
        setNum1(score);
        setSwitchHide(false);
        if (firstPlayerSelected) {
            const sum = p1Scores.reduce(
                (partialSum, a) => Number(partialSum) + Number(a),
                0
            );
            setP1NoOfDart(p1NoOfDart + 1);
            if (p1Details.s1 === "") {
                const balanceTillNow =
                    Number(maxScore) - Number(sum) - Number(score);
                if (isScoreBusted(sum, balanceTillNow, type, Number(score))) {
                    scoreBusted(0, 0, 0, 0);
                } else {
                    setP1Details({ ...p1Details, s1: score });
                }
            } else if (p1Details.s2 === "") {
                const balanceTillNow =
                    Number(maxScore) -
                    Number(sum) -
                    Number(p1Details.s1) -
                    Number(score);
                if (
                    isScoreBusted(
                        sum,
                        balanceTillNow,
                        type,
                        Number(p1Details.s1) + Number(score)
                    )
                ) {
                    scoreBusted(0, p1Details.s1, 0, 0);
                } else {
                    setP1Details({ ...p1Details, s2: score });
                }
            } else {
                const balanceTillNow =
                    Number(maxScore) -
                    Number(sum) -
                    Number(p1Details.s1) -
                    Number(p1Details.s2) -
                    Number(score);
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
                } else {
                    setP1Details({ ...p1Details, s3: score });
                    setP1Scores([
                        ...p1Scores,
                        Number(p1Details.s1) +
                            Number(p1Details.s2) +
                            Number(score),
                    ]);
                    switchPlayer(false);
                    if (hideGameType && hideGameType !== "Practice") {
                        setP2Details({ ...p2Details, s1: "", s2: "", s3: "" });
                    } else {
                        setP1Details({ ...p1Details, s1: "", s2: "", s3: "" });
                    }
                    setP2Details({ ...p2Details, s1: "", s2: "", s3: "" });
                }
            }
        } else {
            setHideBoard(true);
            const sum = p2Scores.reduce(
                (partialSum, a) => Number(partialSum) + Number(a),
                0
            );
            setP2NoOfDart(p2NoOfDart + 1);
            if (p2Details.s1 === "") {
                const balanceTillNow =
                    Number(maxScore) - Number(sum) - Number(score);
                if (isScoreBusted(sum, balanceTillNow, type, Number(score))) {
                    scoreBusted(0, 0, 0, 0);
                } else {
                    setP2Details({ ...p2Details, s1: score });
                }
            } else if (p2Details.s2 === "") {
                const balanceTillNow =
                    Number(maxScore) -
                    Number(sum) -
                    Number(p2Details.s1) -
                    Number(score);
                if (
                    isScoreBusted(
                        sum,
                        balanceTillNow,
                        type,
                        Number(p2Details.s1) + Number(score)
                    )
                ) {
                    scoreBusted(0, p2Details.s1, 0, 0);
                } else {
                    setP2Details({ ...p2Details, s2: score });
                }
            } else {
                const balanceTillNow =
                    Number(maxScore) -
                    Number(sum) -
                    Number(p2Details.s1) -
                    Number(p2Details.s2) -
                    Number(score);
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
                } else {
                    setP2Details({ ...p2Details, s3: score });
                    switchPlayer(true);
                    setP1Details({ ...p1Details, s1: "", s2: "", s3: "" });
                    setP2Scores([
                        ...p2Scores,
                        Number(p2Details.s1) +
                            Number(p2Details.s2) +
                            Number(score),
                    ]);
                }
            }
        }
        
    };
    const getCurrentScore = (player) => {
        if (player === "P1") {
            const sum = p1Scores.reduce(
                (partialSum, a) => Number(partialSum) + Number(a),
                0
            );
            if (
                p1Details.s1 !== "" &&
                p1Details.s2 !== "" &&
                p1Details.s3 !== ""
            ) {
                return Number(maxScore) - Number(sum);
            } else {
                return (
                    Number(maxScore) -
                    Number(sum) -
                    Number(p1Details.s1) -
                    Number(p1Details.s2) -
                    Number(p1Details.s3)
                );
            }
        } else {
            const sum = p2Scores.reduce(
                (partialSum, a) => Number(partialSum) + Number(a),
                0
            );
            if (
                p2Details.s1 !== "" &&
                p2Details.s2 !== "" &&
                p2Details.s3 !== ""
            ) {
                return Number(maxScore) - Number(sum);
            } else {
                return (
                    Number(maxScore) -
                    Number(sum) -
                    Number(p2Details.s1) -
                    Number(p2Details.s2) -
                    Number(p2Details.s3)
                );
            }
        }
    };

    const undos = (player) => {
        if (firstPlayerSelected) {
            if (p1Details.s3 !== "") {
                setP1Details({ ...p1Details, s3: "" });
            } else if (p1Details.s2 !== "") {
                setP1Details({ ...p1Details, s2: "" });
            } else if (p1Details.s1 !== "") {
                setP1Details({ ...p1Details, s1: "" });
            } else {
                setP2Details({ ...p2Details, s3: "" });
                switchPlayer(!firstPlayerSelected);
                // p2Scores = p2Scores.slice(0, -1);
                p2Scores.pop();
            }
        } else {
            if (p2Details.s3 !== "") {
                setP2Details({ ...p2Details, s3: "" });
            } else if (p2Details.s2 !== "") {
                setP2Details({ ...p2Details, s2: "" });
            } else if (p2Details.s1 !== "") {
                setP2Details({ ...p2Details, s1: "" });
            } else {
                setP1Details({ ...p1Details, s3: "" });
                switchPlayer(!firstPlayerSelected);

                p1Scores.pop();
            }
        }
    };

    const nextButton = async (e) => {
        //update score in db
      
        //update leg
        setLegStatus({ ...legStatus, [currentLeg]: winner });
        //is last leg
        if (currentLeg === totalLeg) {
            //update set
            const pl = calculateSetWinner();
            setSetsStatus({ ...setsStatus, [currentSet]: pl });

            //reset leg
            setCurrentLeg(1);
            setLegStatus({});
            if (currentSet >= totalSet) {
                //is last set
                //reset set and leg
                //finish game
                setGameOver(true);
            } else {
                setCurrentSet(currentSet + 1);
            }
        } else {
            setCurrentLeg(currentLeg + 1);
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
        setP1Scores([]);
        setP2Scores([]);
        switchPlayer(true);
        setSwitchHide(true);
        setP1NoOfDart(0);
        setP2NoOfDart(0);
        // setGameOver(true);
    };
    const matchStart = async () => {
        setStart(false);
        setSwitchHide(false);
        setP1NoOfDart(0);
        setP2NoOfDart(0);
       
    };
    
    const matchDiscard = () => {
        // scoreDiscard();
        // clrTeamData();
    };
    const onselect = () => {
        hideGameType();
    };
    const discarModalPopUp = () => {
        setDiscardModalShow(true);
        // clrTeamData();
    };

    const cButton = () => {
        // cancelItem();
        // clrTeamData();
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
        // cancelItem();
        // clrTeamData();
    };
    return (
        <>
           
            <div className="stack-score width_60_media ">
                <div className="stack-card  padding_bottom_nine9">
                    <div className="stack-score-card">
                       
                        <div className="display_flex_number ">
                            <div className=" border_class_define1">
                                <div className="stack-inside1">Total Leg</div>

                                <div className="stack-calc-bt1 justify-content-start">
                                    {Array.apply(null, {
                                        length: totalLeg,
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
                                        length: totalSet,
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
                                   
                                        <div
                                            className="stack-player-style padding_bottom_9px "
                                            style={{ color: "#02f276" }}
                                        >
                                            P1 : {p1Details.Name}
                                        </div>
                                   
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
                                                {getCurrentScore("P1")}
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
                                                    {p1Details.s1}{" "}
                                                </div>
                                                <div className="stack-file-num2">
                                                    {p1Details.s2}{" "}
                                                </div>
                                                <div className="stack-file-num2">
                                                    {p1Details.s3}{" "}
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
                                   
                                        <div
                                            className="stack-player-style padding_bottom_9px"
                                            style={{ color: " #dca204" }}
                                        >
                                            P2 : {p2Details.Name}
                                        </div>
                                   
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
                                                {getCurrentScore("P2")}
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
                                                    {p2Details.s1}
                                                </div>
                                                <div className="stack-file-num2">
                                                    {p2Details.s2}
                                                </div>
                                                <div className="stack-file-num2">
                                                    {p2Details.s3}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* {hideBoard ? ( */}
                            <div
                                className="width_100  border_bottom_define"
                                style={{ marginTop: "9px", display: "flex" }}
                            >
                                <div className="col-3 display-flex-align-item-center">
                                    {/* <button
                                        // onClick={() => undos()}
                                        className="stack-butn-score1 stack-name-second1 "
                                        style={{
                                            fontWeight: "bold",
                                            fontSize: "14px",
                                        }}
                                    >
                                        UNDO
                                    </button> */}
                                </div>
                                <div className="col-4  padding-left-12px">
                                    <div className="sets-numbers-left">
                                        First To{" "}
                                    </div>
                                   
                                        <div className="numbers_9_with_name">
                                            {p1Details.Name}
                                        </div>
                                   
                                   
                                        <div className="numbers_6_with_name">
                                            {p2Details.Name}
                                        </div>
                                   
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
                                <div className="col-3"></div>
                            </div>
                        {/* ) : ( */}
                            {/* <>
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
                            </> */}
                        {/* )} */}
                        {/* {start ? (
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
                        )} */}
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
export default LiveScoreCard;
