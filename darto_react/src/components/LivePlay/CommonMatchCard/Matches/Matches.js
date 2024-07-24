import React, { useState, useEffect } from "react";
import "./Matches.css";
import { Link, useHistory } from "react-router-dom";
import { apiHandler } from "../../../../assets/api";
import { endpoint } from "../../../../assets/api/endpoint";
import NoticeModal from "../../../AdminDashboard/NoticeModal/NoticeModal";

const matchHistory = [
  {
    player1AverageScore: "91.41",
    player1Name: "player1",
    setPlayer1: "5",
    setPlayer2: "3",
    player2Name: "player2",
    player2AverageScore: "91.41",
  },

  {
    player1AverageScore: "91.41",
    player1Name: "player1",
    setPlayer1: "5",
    setPlayer2: "3",
    player2Name: "player2",
    player2AverageScore: "91.41",
  },
  {
    player1AverageScore: "91.41",
    player1Name: "player1",
    setPlayer1: "5",
    setPlayer2: "3",
    player2Name: "player2",
    player2AverageScore: "91.41",
  },
  {
    player1AverageScore: "91.41",
    player1Name: "player1",
    setPlayer1: "5",
    setPlayer2: "3",
    player2Name: "player2",
    player2AverageScore: "91.41",
  },
  {
    player1AverageScore: "91.41",
    player1Name: "player1",
    setPlayer1: "5",
    setPlayer2: "3",
    player2Name: "player2",
    player2AverageScore: "91.41",
  },
];
const Matches = ({ Name, Dates }) => {
  const history = useHistory();
  const [rawData, setRawData] = useState(matchHistory);
  const [rawDatas, setRawDatas] = useState([]);
  const [noticeModal, setNoticeModal] = useState(false);
  const [noticeModalErrMsg, setNoticeModalErrMsg] = useState("");
  const [noticeModalHeaderMsg, setNoticeModalHeaderMsg] = useState("");
  const [matchHisoryData, setMatchHisoryData] = useState([]);
  // const editProfile = () => {
  //   history.push("/mydartoedit");
  // };
  const closeNoticeModal = () => {
    setNoticeModal(false);
    setNoticeModalErrMsg("");
    setNoticeModalHeaderMsg("");
  };
  // MATCHLIST
  useEffect(() => {
    GetMatchLsitData();
  }, []);

  const GetMatchLsitData = async () => {
    const result = await apiHandler({
      url: endpoint.MATCHLIST,
      method: "GET",
      data: null,
    });

    //let obj= {...setRawData}
    if (result.data.status === 404) {
      setNoticeModalHeaderMsg("Error");
      setNoticeModalErrMsg(result.data.message);
      setNoticeModal(true);
    }
    // else if (result.data.length === 0) {
    //   setNoticeModalHeaderMsg("Error");
    //   setNoticeModalErrMsg("Please Provide data");
    //   setNoticeModal(true);
    // }
    else {
      console.log(result.data);
      setRawDatas(result.data);
      historyMatch(result.data);
    }
  };
  const historyMatch = (data) => {
    let matchObj = {};
    let matchList = [];
    console.log("data", data);
    data &&
      data.forEach((match) => {
        console.log("match", match);
        // let macthScores =
        //     match.matchStatus === "ACTIVE" ? "LIVE" : match.matchStatus;
        let scores = match && match.matchscore && match.matchscore;
        // let p1Averages = scores.p1Scores.reduce(function (p, c, i, a) {
        //     return p + c / a.length;
        // }, 0);
        // let p2Averages = scores.p2Scores.reduce(function (p, c, i, a) {
        //     return p + c / a.length;
        // }, 0);
        console.log("scores :", scores);
        let p1MaxScore =
          scores.winner === "P1"
            ? 501
            : scores.p1Scores.reduce(function (p, c, i, a) {
                return Number(p) + Number(c);
              });
        let p2MaxScore =
          scores.winner === "P2"
            ? 501
            : scores.p2Scores.reduce(function (p, c, i, a) {
                return Number(p) + Number(c);
              });
        console.log("maxscor", p1MaxScore, p2MaxScore);

        let p1Averages = scores.p1NoOfDart
          ? (p1MaxScore / scores.p1NoOfDart) * 3
          : 0;
        console.log("average", p1Averages);
        let p2Averages = scores.p2NoOfDart
          ? (p2MaxScore / scores.p2NoOfDart) * 3
          : 0;
        console.log("avg", p2Averages);
        if (matchObj[match.id]) {
          matchObj[match.id] = {
            ...matchObj[match.id],
            p1Averages: [...matchObj[match.id].p1Averages, p1Averages],
            p2Averages: [...matchObj[match.id].p2Averages, p2Averages],
            setPlayer1:
              match.matchscore && match.matchscore.winner === "P1"
                ? matchObj[match.id].setPlayer1 + 1
                : matchObj[match.id].setPlayer1,
            setPlayer2:
              match.matchscore && match.matchscore.winner === "P2"
                ? matchObj[match.id].setPlayer2 + 1
                : matchObj[match.id].setPlayer2,
          };
        } else {
          matchObj[match.id] = {
            id: match.id,
            startDate: match.startDate,
            gameMode: match.gameMode,
            matchStatus:
              match.matchStatus === "ACTIVE" ? "LIVE" : match.matchStatus,
            player1Name:
              match.matchscore && match.matchscore.player1Name
                ? match.matchscore.player1Name
                : "",
            player2Name:
              match.matchscore && match.matchscore.player2Name
                ? match.matchscore.player2Name
                : "",
            p1Averages: [p1Averages],
            p2Averages: [p2Averages],
            setPlayer1:
              match.matchscore && match.matchscore.winner === "P1" ? 1 : 0,
            setPlayer2:
              match.matchscore && match.matchscore.winner === "P2" ? 1 : 0,
          };
        }
      });
    console.log("matchObj - ", matchObj);
    const response = Object.values(matchObj).map((match) => {
      return {
        ...match,
        // p1Averages,
        player1AverageScore: match.p1Averages.reduce(function (p, c, i, a) {
          return Number(p) + Number(c) / a.length;
        }, 0),
        player2AverageScore: match.p2Averages.reduce(function (p, c, i, a) {
          return Number(p) + Number(c) / a.length;
        }, 0),
      };
    });
    let list = response.filter((a) => a.matchStatus === "COMPLETE");
    let completelist = response.filter((a) => a.matchStatus === "LIVE");
    console.log("jv", list, completelist);
    matchList = [...completelist, ...list];
    console.log("REsponse", response);
    //   let player1Name =
    //       match && match.matchscore && match.matchscore.player1Name
    //           ? match.matchscore.player1Name
    //           : "";
    //   let player2Name =
    //       match && match.matchscore && match.matchscore.player2Name
    //           ? match.matchscore.player2Name
    //           : "";
    //   let player1_id =
    //       match && match.matchscore && match.matchscore.player1_id
    //           ? match.matchscore.player1_id
    //           : "";

    //   let player2_id =
    //       match && match.matchscore && match.matchscore.player1_id
    //           ? match.matchscore.player1_id
    //           : "";

    //   let p1AvgList = [];
    //   let p2AvgList = [];
    //   let setStatus = {};
    //   let score =
    //       match &&
    //       match.matchscore &&
    //       match.matchscore;
    //       console.log("score", score);
    //               p1AvgList.push(
    //                   score.p1Scores.reduce(function (p, c, i, a) {
    //                       return p + c / a.length;
    //                   }, 0)
    //               );
    //               p2AvgList.push(
    //                   score.p2Scores.reduce(function (p, c, i, a) {
    //                       return p + c / a.length;
    //                   }, 0)
    //               );
    //               if (setStatus[score.set]) {
    //                   setStatus[score.set][score.leg] = score.winner;
    //               } else {
    //                   setStatus[score.set] = {
    //                       [score.leg]: score.winner,
    //                   };
    //               }

    //             const player1AverageScore = p1AvgList.reduce(function (
    //                 p,
    //                 c,
    //                 i,
    //                 a
    //             ) {
    //                 return p + c / a.length;
    //             },
    //             0);
    //             const player2AverageScore = p2AvgList.reduce(function (
    //                 p,
    //                 c,
    //                 i,
    //                 a
    //             ) {
    //                 return p + c / a.length;
    //             },
    //             0);
    //             let setPlayer1 = 0;
    //             let setPlayer2 = 0;
    //             console.log("Set Status - ", setStatus);
    //             Object.keys(setStatus).forEach((s) => {
    //                 let p1Win = 0,
    //                     p2Win = 0;
    //                 Object.keys(setStatus[s]).forEach((l) => {
    //                     if (setStatus[s][l] === "P1") p1Win++;
    //                     else if (setStatus[s][l] === "P2") p2Win++;
    //                 });
    //                 if (p1Win > p2Win) setPlayer1++;
    //                 else setPlayer2++;
    //             });

    //             response.push({
    //                 id: match.id,
    //                 startDate: match.startDate,
    //                 player1Name,
    //                 player2Name,
    //                 player1_id,
    //                 player2_id,
    //                 player1AverageScore,
    //                 player2AverageScore,
    //                 setPlayer1,
    //                 setPlayer2,
    //             });
    console.log("response - ", matchList);
    setMatchHisoryData(matchList);
  };
  console.log("matcvhscore", matchHisoryData);
  const onMatchDetails = (event, id,status) => {
    event.stopPropagation();
    event.preventDefault();
    if(status === "COMPLETE"){
    history.push("/matchdetail/" + id);
    }
    else{
      history.push("/livescorecard/" +id);
    }
  };
// const livescore =(id)=>{
  

// }
  return (
    <>
      <div className='bporder_top_and_down width_60_media row padding_bottom_99px_btm'>
        <>
          {matchHisoryData.length > 0 ? (
            <>
              {matchHisoryData &&
                matchHisoryData.map((item, i) => (
                  <>
                    <div
                      className='padding-10px-history curser-pointer'
                      onClick={(event) => onMatchDetails(event, item.id,item.matchStatus)}
                    >
                      <div className='row border-matches'>
                        <div className='col-2 player-score-text-color'>
                          {item.player1AverageScore.toFixed(2)}
                        </div>
                        <div className='col-8 display-flex-history'>
                          <div>
                            <span className='player-score-text-color'>
                              {" "}
                              {item.player1Name}
                            </span>
                            <span>flag</span>
                          </div>
                          <div>
                            <span className='player-score-text-color'>
                              {item.setPlayer1}
                            </span>
                            <span className='player-score-text-color'> - </span>
                            <span className='player-score-text-color'>
                              {item.setPlayer2}
                            </span>
                          </div>
                          <div>
                            <span>flag</span>
                            <span className='player-score-text-color'>
                              {" "}
                              {item.player2Name}
                            </span>
                          </div>
                          <div>
                            <span>flag</span>
                            {item.matchStatus === "LIVE" ? (
                              <>
                                <span className='player-score-text-color-LIVE ' >
                                  {" "}
                                  {item.matchStatus}
                                </span>
                              </>
                            ) : (
                              <>
                                <span className='player-score-text-color-Over '>
                                  {" "}
                                  {item.matchStatus}
                                </span>
                              </>
                            )}
                          </div>
                        </div>
                        <div className='col-2 player-score-text-color text-align-end'>
                          {item.player2AverageScore.toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </>
                ))}
            </>
          ) : (
            <>
              <div
                style={{
                  textAlign: "center",
                  color: "white",
                  fontSize: "5rem",
                }}
              >
                No Record Found
              </div>
            </>
          )}
        </>
      </div>
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
export default Matches;
