import React, { useState, useEffect } from "react";
import "./Stats.css";
import { Link, useHistory, useParams } from "react-router-dom";
import { apiHandler } from "../../../../assets/api";
import { endpoint } from "../../../../assets/api/endpoint";
import NoticeModal from "../../../AdminDashboard/NoticeModal/NoticeModal";

const MatchStats = () => {
  const STATS = {
    legs: {
      p1: 1,
      p2: 2,
    },

    n100: {
      p1: 1,
      p2: 3,
    },
    n140: {
      p1: 0,
      p2: 0,
    },
    n180: {
      p1: 1,
      p2: 2,
    },
    HighFinish: {
      p1: 1,
      p2: 2,
    },
    BestLeg: {
      p1: 1,
      p2: 2,
    },
    WorstLeg: {
      p1: 1,
      p2: 2,
    },
  };

  const AVERAGE = {
    score: {
      p1: 1,
      p2: 2,
    },
    first9: {
      p1: 1,
      p2: 2,
    },
    darts: {
      p1: 1,
      p2: 2,
    },
  };

  const STATLIST = [
    {
      name: "Legs",
    },
    {
      name: "100+",
    },
    {
      name: "140+",
    },
    {
      name: "180's",
    },
    {
      name: "High Finish",
    },

    {
      name: "Best Leg",
    },
    {
      name: "Worst Leg",
    },
  ];

  const history = useHistory();
  const params = useParams();
  const [stats, setStats] = useState({});
  const [average, setAverage] = useState(AVERAGE);
  const [statList, setStatList] = useState(STATLIST);
  const [rawData, setRawData] = useState([]);
  const [statDataList, setStatDataList] = useState({});
  const [averageList, setAverageList] = useState({});
  const [noticeModal, setNoticeModal] = useState(false);
  const [noticeModalErrMsg, setNoticeModalErrMsg] = useState("");
  const [noticeModalHeaderMsg, setNoticeModalHeaderMsg] = useState("");
  const [matchHisoryData, setMatchHisoryData] = useState([]);
  const [playerName, setPlayerName] = useState({});

  // const editProfile = () => {
  //   history.push("/mydartoedit");
  // };
  const closeNoticeModal = () => {
    setNoticeModal(false);
    setNoticeModalErrMsg("");
    setNoticeModalHeaderMsg("");
  };
  useEffect(() => {
    if (stats) {
      let list = [];
      list.push({
        p1: stats.legs && stats.legs.p1 ? stats.legs.p1 : 0,
        name: "Legs",
        p2: stats.legs && stats.legs.p2 ? stats.legs.p2 : 0,
      });
      list.push({
        p1: stats.n100 && stats.n100.p1 ? stats.n100.p1 : 0,
        name: "100+",
        p2: stats.n100 && stats.n100.p2 ? stats.n100.p2 : 0,
      });
      list.push({
        p1: stats.n140 && stats.n140.p1 ? stats.n140.p1 : 0,
        name: "140+",
        p2: stats.n140 && stats.n140.p2 ? stats.n140.p2 : 0,
      });
      list.push({
        p1: stats.n180 && stats.n180.p1 ? stats.n180.p1 : 0,
        name: "180+",
        p2: stats.n180 && stats.n180.p2 ? stats.n180.p2 : 0,
      });
      list.push({
        p1: stats.HighFinish && stats.HighFinish.p1 ? stats.HighFinish.p1 : 0,
        name: "180+",
        p2: stats.HighFinish && stats.HighFinish.p2 ? stats.HighFinish.p2 : 0,
      });
      list.push({
        p1: stats.BestLeg && stats.BestLeg.p1 ? stats.BestLeg.p1 : 0,
        name: "180+",
        p2: stats.WorstLeg && stats.WorstLeg.p2 ? stats.WorstLeg.p2 : 0,
      });
      // setStatList(list);
      // setAverageList(list);
      list = [];
    }
    if (average) {
      let list = [];
      list.push({
        p1: average.score && average.score.p1 ? average.score.p1 : 0,
        name: "score",
        p2: average.score && average.score.p2 ? average.score.p2 : 0,
      });
      list.push({
        p1: average.first9 && average.first9.p1 ? average.first9.p1 : 0,
        name: "first9",
        p2: average.first9 && average.first9.p2 ? average.first9.p2 : 0,
      });
      list.push({
        p1: average.darts && average.darts.p1 ? average.darts.p1 : 0,
        name: "darts",
        p2: average.darts && average.darts.p2 ? average.darts.p2 : 0,
      });

      setAverageList(list);
      list = [];
    }
  }, [stats, average]);
  useEffect(() => {
    GetMatchDetailsData();
  }, []);

  const GetMatchDetailsData = async () => {
    const result = await apiHandler({
      url: endpoint.MATCHBYID + params.id,
      method: "GET",
      data: null,
    });

    //let obj= {...setRawData}
    if (result.data.status === 404) {
      setNoticeModalHeaderMsg("Error");
      setNoticeModalErrMsg(result.data.message);
      setNoticeModal(true);
    } else if (result.data.length === 0) {
      setNoticeModalHeaderMsg("Error");
      setNoticeModalErrMsg("Please Provide data");
      setNoticeModal(true);
    } else {
      console.log(result.data);

      parseMatchStats(result.data);
      setRawData(result.data.matchscore);
    }
  };

  const parseMatchStats = (data) => {
    let matchStatData = {
      legs: {
        p1: 0,
        p2: 0,
      },
      100: {
        p1: 0,
        p2: 0,
      },
      140: {
        p1: 0,
        p2: 0,
      },
      180: {
        p1: 0,
        p2: 0,
      },
      highFinish: {
        p1: 0,
        p2: 0,
      },
      bestLeg: {
        p1: 0,
        p2: 0,
      },
      worstLeg: {
        p1: 0,
        p2: 0,
      },
      score: {
        p1: 0,
        p2: 0,
      },
      first9: {
        p1: 0,
        p2: 0,
      },
      darts: {
        p1: 0,
        p2: 0,
      },
      p1AvgScores: [],
      p2AvgScores: [],
      p1AvgFirst9: [],
      p2AvgFirst9: [],
      p1AvgDarts: [],
      p2AvgDarts: [],
    };

    console.log("data", data);
    data &&
      data.forEach((match) => {
        console.log("match", match);
        // Player Name
        let p1name = match && match.matchscore && match.matchscore.player1Name;
        let p2name = match && match.matchscore && match.matchscore.player2Name;

        // Player Total Statistics
        // Leg Winners
        matchStatData.legs.p1 =
          match && match.matchscore && match.matchscore.winner === "P1"
            ? matchStatData.legs.p1 + 1
            : matchStatData.legs.p1;
        matchStatData.legs.p2 =
          match && match.matchscore && match.matchscore.winner === "P2"
            ? matchStatData.legs.p2 + 1
            : matchStatData.legs.p2;

        // Total Big Scores count
        match &&
          match.matchscore &&
          match.matchscore.p1Scores &&
          match.matchscore.p1Scores.forEach((s) => {
            if (Number(s) > 179) {
              matchStatData[180].p1 = matchStatData[180].p1 + 1;
            } else if (Number(s) > 139) {
              matchStatData[140].p1 = matchStatData[140].p1 + 1;
            } else if (Number(s) > 99) {
              matchStatData[100].p1 = matchStatData[100].p1 + 1;
            }
          });
        console.log("2");
        match &&
          match.matchscore &&
          match.matchscore.p2Scores &&
          match.matchscore.p2Scores.forEach((s) => {
            if (Number(s) > 179) {
              matchStatData[180].p2 = matchStatData[180].p2 + 1;
            } else if (Number(s) > 139) {
              matchStatData[140].p2 = matchStatData[140].p2 + 1;
            } else if (Number(s) > 99) {
              matchStatData[100].p2 = matchStatData[100].p2 + 1;
            }
          });

        // High Finish
        matchStatData.highFinish.p1 =
          match &&
          match.matchscore &&
          match.matchscore.winner === "P1" &&
          match.matchscore.p1Scores.length > 0 &&
          Number(
            match.matchscore.p1Scores[match.matchscore.p1Scores.length - 1]
          ) > matchStatData.highFinish.p1
            ? Number(
                match.matchscore.p1Scores[match.matchscore.p1Scores.length - 1]
              )
            : matchStatData.highFinish.p1;
        matchStatData.highFinish.p2 =
          match &&
          match.matchscore &&
          match.matchscore.winner === "P2" &&
          match.matchscore.p2Scores.length > 0 &&
          Number(
            match.matchscore.p2Scores[match.matchscore.p2Scores.length - 1]
          ) > matchStatData.highFinish.p2
            ? Number(
                match.matchscore.p2Scores[match.matchscore.p2Scores.length - 1]
              )
            : matchStatData.highFinish.p2;

        // Best Leg
        matchStatData.bestLeg.p1 =
          match &&
          match.matchscore &&
          match.matchscore.p1NoOfDart &&
          Number(match.matchscore.p1NoOfDart) < matchStatData.bestLeg.p1
            ? Number(match.matchscore.p1NoOfDart)
            : matchStatData.bestLeg.p1;
        matchStatData.bestLeg.p2 =
          match &&
          match.matchscore &&
          match.matchscore.p2NoOfDart > 0 &&
          Number(match.matchscore.p2NoOfDart) < matchStatData.bestLeg.p2
            ? Number(match.matchscore.p2NoOfDart)
            : matchStatData.bestLeg.p2;

        // Worst Leg
        matchStatData.worstLeg.p1 =
          match &&
          match.matchscore &&
          match.matchscore.p1NoOfDart &&
          Number(match.matchscore.p1NoOfDart) > matchStatData.worstLeg.p1
            ? Number(match.matchscore.p1NoOfDart)
            : matchStatData.worstLeg.p1;
        matchStatData.worstLeg.p2 =
          match &&
          match.matchscore &&
          match.matchscore.p2NoOfDart > 0 &&
          Number(match.matchscore.p2NoOfDart) > matchStatData.worstLeg.p2
            ? Number(match.matchscore.p2NoOfDart)
            : matchStatData.worstLeg.p2;

        // Store Temp Data in Averages Array
        if (match.matchscore.p1NoOfDart) {
          let p1MaxScore =
            match.matchscore.winner === "P1"
              ? 501
              : match.matchscore.p1Scores.reduce(function (p, c, i, a) {
                  return Number(p) + Number(c);
                });
          matchStatData.p1AvgScores.push(
            match.matchscore.p1NoOfDart
              ? (p1MaxScore / match.matchscore.p1NoOfDart) * 3
              : 0
          );
          matchStatData.p1AvgDarts.push(match.matchscore.p1NoOfDart);
        } else {
          matchStatData.p1AvgScores.push(0);
          matchStatData.p1AvgDarts.push(0);
        }
        if (match.matchscore.p2NoOfDart) {
          let p2MaxScore =
            match.matchscore.winner === "P2"
              ? 501
              : match.matchscore.p2Scores.reduce(function (p, c, i, a) {
                  return Number(p) + Number(c);
                });
          matchStatData.p2AvgScores.push(
            match.matchscore.p2NoOfDart
              ? (p2MaxScore / match.matchscore.p2NoOfDart) * 3
              : 0
          );
          matchStatData.p2AvgDarts.push(match.matchscore.p2NoOfDart);
        } else {
          matchStatData.p2AvgScores.push(0);
          matchStatData.p2AvgDarts.push(0);
        }
        const first9P1Score = match.matchscore.p1Scores.filter((s, i) => i < 3);
        matchStatData.p1AvgFirst9.push(
          first9P1Score.reduce(function (p, c, i, a) {
            return (Number(p) + Number(c)) / a.length;
          }, 0)
        );
        const first9P2Score = match.matchscore.p2Scores.filter((s, i) => i < 3);
        matchStatData.p2AvgFirst9.push(
          first9P2Score.reduce(function (p, c, i, a) {
            return (Number(p) + Number(c)) / a.length;
          }, 0)
        );

        // Calculate Average Stats
        matchStatData.score.p1 = matchStatData.p1AvgScores.reduce(function (
          p,
          c,
          i,
          a
        ) {
          return (Number(p) + Number(c)) / a.length;
        },
        0);
        matchStatData.score.p1 = matchStatData.score.p1.toFixed(2);
        matchStatData.score.p2 = matchStatData.p2AvgScores.reduce(function (
          p,
          c,
          i,
          a
        ) {
          return (Number(p) + Number(c)) / a.length;
        },
        0);
        matchStatData.score.p2 = matchStatData.score.p2.toFixed(2);
        matchStatData.first9.p1 = matchStatData.p1AvgFirst9.reduce(function (
          p,
          c,
          i,
          a
        ) {
          return (Number(p) + Number(c)) / a.length;
        },
        0);
        matchStatData.first9.p1 = matchStatData.first9.p1.toFixed(2);
        matchStatData.first9.p2 = matchStatData.p2AvgFirst9.reduce(function (
          p,
          c,
          i,
          a
        ) {
          return (Number(p) + Number(c)) / a.length;
        },
        0);
        matchStatData.first9.p2 = matchStatData.first9.p2.toFixed(2);
        matchStatData.darts.p1 = matchStatData.p1AvgDarts.reduce(function (
          p,
          c,
          i,
          a
        ) {
          return (Number(p) + Number(c)) / a.length;
        },
        0);
        matchStatData.darts.p1 = matchStatData.darts.p1.toFixed(2);
        matchStatData.darts.p2 = matchStatData.p2AvgDarts.reduce(function (
          p,
          c,
          i,
          a
        ) {
          return (Number(p) + Number(c)) / a.length;
        },
        0);
        matchStatData.darts.p2 = matchStatData.darts.p2.toFixed(2);
      });

    setStatDataList(matchStatData);
    console.log("average", matchStatData);
  };

  const onMatchDetails = (data) => {
    let matchObj = {};
    console.log("data", data);
    data &&
      data.forEach((match) => {
        console.log("match", match);
        // if (stats) {
        //     let list = [];
        //     list.push({
        //         p1: match && match.matchscore.p1 ? stats.legs.p1 : 0,
        //         name: "Legs",
        //         p2: stats.legs && stats.legs.p2 ? stats.legs.p2 : 0,
        //     });
        //     list.push({
        //         p1: stats.n100 && stats.n100.p1 ? stats.n100.p1 : 0,
        //         name: "100+",
        //         p2: stats.n100 && stats.n100.p2 ? stats.n100.p2 : 0,
        //     });
        //     list.push({
        //         p1: stats.n140 && stats.n140.p1 ? stats.n140.p1 : 0,
        //         name: "140+",
        //         p2: stats.n140 && stats.n140.p2 ? stats.n140.p2 : 0,
        //     });
        //     list.push({
        //         p1: stats.n180 && stats.n180.p1 ? stats.n180.p1 : 0,
        //         name: "180+",
        //         p2: stats.n180 && stats.n180.p2 ? stats.n180.p2 : 0,
        //     });
        //     list.push({
        //         p1:
        //             stats.HighFinish && stats.HighFinish.p1
        //                 ? stats.HighFinish.p1
        //                 : 0,
        //         name: "180+",
        //         p2:
        //             stats.HighFinish && stats.HighFinish.p2
        //                 ? stats.HighFinish.p2
        //                 : 0,
        //     });
        //     list.push({
        //         p1:
        //             stats.BestLeg && stats.BestLeg.p1
        //                 ? stats.BestLeg.p1
        //                 : 0,
        //         name: "180+",
        //         p2:
        //             stats.WorstLeg && stats.WorstLeg.p2
        //                 ? stats.WorstLeg.p2
        //                 : 0,
        //     });
        //     setStatList(list);
        //     // setAverageList(list);
        //     list = [];
        // }
        // let totalleg = match && match.totalLeg;
        // let totalset = match && match.totalSet;
        let scores = match && match.matchscore && match.matchscore;
        let p1Averages = scores.p1Scores.reduce(function (p, c, i, a) {
          return p + c / a.length;
        }, 0);
        let p2Averages = scores.p2Scores.reduce(function (p, c, i, a) {
          return p + c / a.length;
        }, 0);

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
        player1AverageScore: match.p1Averages.reduce(function (p, c, i, a) {
          return p + c / a.length;
        }, 0),
        player2AverageScore: match.p2Averages.reduce(function (p, c, i, a) {
          return p + c / a.length;
        }, 0),
      };
    });
    console.log("response - ", response);
    setMatchHisoryData(response);
  };
  const Mat = () => {
    history.push("/matchscore/" + params.id);
  };
  const MatReturn = () => {
    history.go(-1);
  };
  return (
    <>
      <div className='padding_18px_left_right width_60_media'>
        <div className='bporder_top_and_down_d'>
          <div className='display_flex_detail matches_set_Detail'>
            <div className='col align_item_center'>
              <div className='stack-darto_mat'>
                <button className='adminbutton' onClick={() => MatReturn()}>
                  Return
                </button>
              </div>
            </div>
            <div className='Matches_Stat col'>
              <div>Stats</div>
              <div>(First To Legs)</div>
            </div>
            <div className='col align_item_center'>
              <div className='stack-darto_mat '>
                <button className='adminbutton' onClick={() => Mat()}>
                  Scores
                </button>
              </div>
            </div>
          </div>
          {/* {statDataList &&
            statDataList.map((statData, index) => ( */}
          <>
            <div
              className='matches_set'
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div className='withdt_100_text'>{statDataList.p1name} </div>
              <div className='withdt_100_text'>{statDataList.p2name}</div>
            </div>
            <div className='matches_set_Detail '>
              <div className='Matches_Stat '>Totals</div>
            </div>
            <div className='stack-player-style_padding_table'>
              <div className='stack-s-file'>
                <table className='color_and_fonsize'>
                  {/* {statList &&
                  statList.map((item, i) => ( */}
                  <tr className='border_design'>
                    <td>
                      {statDataList &&
                        statDataList.legs &&
                        statDataList.legs.p1}
                    </td>

                    <td>{statList && statList[0].name}</td>

                    <td>
                      {statDataList &&
                        statDataList.legs &&
                        statDataList.legs.p2}
                    </td>
                  </tr>
                  <tr className='border_design'>
                    <td>
                      {/* {statDataList.stats &&
                            statDataList.stats[100] &&
                            statDataList.stats[100].p1} */}
                      {statDataList &&
                        statDataList[100] &&
                        statDataList[100].p1}
                    </td>
                    <td>{statList && statList[1].name}</td>
                    <td>
                      {statDataList &&
                        statDataList[100] &&
                        statDataList[100].p2}
                    </td>
                  </tr>
                  <tr className='border_design'>
                    <td>
                      {statDataList &&
                        statDataList[140] &&
                        statDataList[140].p1}
                    </td>
                    <td>{statList && statList[2].name}</td>
                    <td>
                      {statDataList &&
                        statDataList[140] &&
                        statDataList[140].p2}
                    </td>
                  </tr>
                  <tr className='border_design'>
                    <td>
                      {statDataList &&
                        statDataList[180] &&
                        statDataList[180].p1}
                    </td>
                    <td>{statList && statList[3].name}</td>
                    <td>
                      {statDataList &&
                        statDataList[180] &&
                        statDataList[180].p2}
                    </td>
                  </tr>
                  <tr className='border_design'>
                    <td>
                      {statDataList &&
                        statDataList.highFinish &&
                        statDataList.highFinish.p1}
                    </td>
                    <td>{statList && statList[4].name}</td>
                    <td>
                      {statDataList &&
                        statDataList.highFinish &&
                        statDataList.highFinish.p2}
                    </td>
                  </tr>
                  <tr className='border_design'>
                    <td>
                      {statDataList &&
                        statDataList.bestLeg &&
                        statDataList.bestLeg.p1}
                    </td>
                    <td>{statList && statList[5].name}</td>
                    <td>
                      {statDataList &&
                        statDataList.bestLeg &&
                        statDataList.bestLeg.p2}
                    </td>
                  </tr>
                  <tr className='border_design'>
                    <td>
                      {statDataList &&
                        statDataList.worstLeg &&
                        statDataList.worstLeg.p1}
                    </td>
                    <td>{statList && statList[6].name}</td>
                    <td>
                      {statDataList &&
                        statDataList.worstLeg &&
                        statDataList.worstLeg.p2}
                    </td>
                  </tr>

                  {/* ))} */}
                </table>
              </div>
            </div>
            <div className='matches_set_Detail '>
              <div className='Matches_Stat '>Averages</div>
            </div>
            <div className='stack-player-style_padding_table'>
              <div className='stack-s-file'>
                <div className='color_and_fonsize'>
                  <div className='border_design row'>
                    <div className='col'>
                      {statDataList &&
                        statDataList.score &&
                        statDataList.score.p1}
                    </div>
                    <div className='col'>Score</div>

                    <div className='col'>
                      {" "}
                      {statDataList &&
                        statDataList.score &&
                        statDataList.score.p2}
                    </div>
                  </div>
                  <div className='border_design row'>
                    <div className='col'>
                      {statDataList &&
                        statDataList.first9 &&
                        statDataList.first9.p1}
                    </div>
                    <div className='col'>first9</div>

                    <div className='col'>
                      {" "}
                      {statDataList &&
                        statDataList.first9 &&
                        statDataList.first9.p2}
                    </div>
                  </div>
                  <div className='border_design row'>
                    <div className='col'>
                      {statDataList &&
                        statDataList.darts &&
                        statDataList.darts.p1}
                    </div>
                    <div className='col'>darts</div>

                    <div className='col'>
                      {" "}
                      {statDataList &&
                        statDataList.darts &&
                        statDataList.darts.p2}
                    </div>
                  </div>
                  {/* ))} */}
                </div>
              </div>
            </div>
          </>
          {/* ))} */}
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
    </>
  );
};
export default MatchStats;
