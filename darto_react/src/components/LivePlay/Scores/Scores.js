import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { apiHandler } from "../../../assets/api";
import { endpoint } from "../../../assets/api/endpoint";
import NoticeModal from "../../AdminDashboard/NoticeModal/NoticeModal";
const matchscore = [
  {
    set: 1,
    leg: 1,
    player1Name: "Shubham",
    player2Name: "Arun",
    p1Scores: [20, 30, 50, 10, 72],
    p2Scores: [20, 30, 50, 10, 72],
  },
  {
    set: 1,
    leg: 2,
    player1Name: "Shubham",
    player2Name: "Arun",
    p1Scores: [20, 30, 50, 10, 72],
    p2Scores: [20, 30, 50, 10, 72],
  },
  {
    set: 1,
    leg: 3,
    player1Name: "Shubham",
    player2Name: "Arun",
    p1Scores: [20, 30, 50, 10, 72],
    p2Scores: [20, 30, 50, 10, 72],
  },
];

const Scores = () => {
  const params = useParams();
  const [rawData, setRawData] = useState(matchscore);
  const [maxScore, setMaxScore] = useState(501);
  const [p1Scores, setP1Scores] = useState([]);
  const [p2Scores, setP2Scores] = useState([]);
  const history = useHistory();
  const MatReturn = () => {
    history.go(-1);
  };
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

      onMatchDetails(result.data);
    }
  };
  const onMatchDetails = (data) => {
    let matchObj = {};
    let response = [];
    console.log("data", data);
    data &&
      data.forEach((match) => {
        response.push({
          player1Name: match.matchscore.player1Name,
          player2Name: match.matchscore.player2Name,
          p1Scores: match.matchscore.p1Scores,
          p2Scores: match.matchscore.p2Scores,
          leg: match.matchscore.leg,
          set: match.matchscore.set,
        });
        //        responses.push([
        //       player1Name = match.player1Name,
        //       player2Name = match.player2Name,
        //      set = match.totalSet,
        //       leg = match.totalLeg,
        //     //   let maxscore
        //     //   scores = match && match.matchscore && match.matchscore,
        //     //     p2Scores = scores.p1Scores.reduce(function (p, c, i, a) {
        //     //        return p + c + a;
        //     //    }, 0),
        //     //       p2Scores = scores.p2Scores.reduce(function (p, c, i, a) {
        //     //        return p + c +a;
        //     //    }, 0),
        //     //   ])
        //     //  let p1Scores = ;
        //     //    console.log("match", match);
        //     //    //let scores = match && match.matchscore && match.matchscore;
        //     //    let p1Averages = scores.p1Scores.reduce(function (p, c, i, a) {
        //     //        return p + c / a.length;
        //     //    }, 0);
        //     //    let p2Averages = scores.p2Scores.reduce(function (p, c, i, a) {
        //     //        return p + c / a.length;
        //     //    }, 0);
        //     //    if (matchObj[match.id]) {
        //     //        matchObj[match.id] = {
        //     //            ...matchObj[match.id],
        //     //            p1Averages: [
        //     //                ...matchObj[match.id].p1Averages,
        //     //                p1Averages,
        //     //            ],
        //     //            p2Averages: [
        //     //                ...matchObj[match.id].p2Averages,
        //     //                p2Averages,
        //     //            ],
        //     //            setPlayer1:
        //     //                match.matchscore && match.matchscore.winner === "P1"
        //     //                    ? matchObj[match.id].setPlayer1 + 1
        //     //                    : matchObj[match.id].setPlayer1,
        //     //            setPlayer2:
        //     //                match.matchscore && match.matchscore.winner === "P2"
        //     //                    ? matchObj[match.id].setPlayer2 + 1
        //     //                    : matchObj[match.id].setPlayer2,
        //     //        };
        //     //    } else {
        //     //        matchObj[match.id] = {
        //     //            id: match.id,
        //     //            startDate: match.startDate,
        //     //            gameMode: match.gameMode,
        //     //            player1Name:
        //     //                match.matchscore && match.matchscore.player1Name
        //     //                    ? match.matchscore.player1Name
        //     //                    : "",
        //     //            player2Name:
        //     //                match.matchscore && match.matchscore.player2Name
        //     //                    ? match.matchscore.player2Name
        //     //                    : "",
        //     //            p1Averages: [p1Averages],
        //     //            p2Averages: [p2Averages],
        //     //            setPlayer1:
        //     //                match.matchscore && match.matchscore.winner === "P1"
        //     //                    ? 1
        //     //                    : 0,
        //     //            setPlayer2:
        //     //                match.matchscore && match.matchscore.winner === "P2"
        //     //                    ? 1
        //     //                    : 0,
        //     //        };
        //     //    }
        //    });
      });
    console.log("response - ", response);
    setRawData(response);
  };
  const MatchStats = () => {
    history.push("/matchdetail/" + params.id);
  };
  return (
    <>
      <div className='padding_18px_left_right width_60_media'>
        <div className='bporder_top_and_down_d'>
          <div className='matches_set_Detail display_flex_detail'>
            <div className='col align_item_center'>
              <div className='stack-darto_mat'>
                <button className='adminbutton' onClick={() => MatReturn()}>
                  Return
                </button>
              </div>
            </div>
            <div className='Matches_Stat col'>
              <div>Scores</div>
              <div>(First To Legs)</div>
            </div>
            <div className='col align_item_center'>
              <div className='stack-darto_mat '>
                <button className='adminbutton' onClick={() => MatchStats()}>Stats</button>
              </div>
            </div>
          </div>
          {rawData &&
            rawData.map((item) => (
              <>
                <div className='padding_botton_19px'>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div className='withdt_100_text'>{item.player1Name}</div>
                    <div className='withdt_100_text'>Set:{item.set}</div>
                    <div className='withdt_100_text'>Leg:{item.leg}</div>
                    <div className='withdt_100_text'>{item.player2Name}</div>
                  </div>

                  <div className='stack-player-style_padding_table'>
                    <div className='stack-s-file'>
                      <table className='color_and_fonsize'>
                        <tr className='border_design matches_set_Detail'>
                          <td>Score</td>
                          {/* <td>To Go</td> */}
                          <td></td>
                          <td>Scored</td>
                          {/* <td>To Go</td> */}
                        </tr>
                        {Array.apply(null, {
                          length: 10,
                        }).map((d, j) => (
                          <>
                            <tr>
                              <td>
                                {" "}
                                {j === 0
                                  ? maxScore
                                  : item.p1Scores[j - 1]
                                  ? item.p1Scores[j - 1]
                                  : ""}
                              </td>
                              {/* <td>{}</td> */}
                              <td>{j * 3}</td>
                              <td>
                                {" "}
                                {j === 0
                                  ? maxScore
                                  : item.p2Scores[j - 1]
                                  ? item.p2Scores[j - 1]
                                  : ""}
                              </td>
                              {/* <td>{}</td> */}
                            </tr>
                          </>
                        ))}
                      </table>
                    </div>
                  </div>
                </div>
              </>
            ))}
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
export default Scores;
