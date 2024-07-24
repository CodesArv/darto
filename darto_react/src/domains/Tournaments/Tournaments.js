import React, { useState, useEffect } from "react";

import { Link, useHistory } from "react-router-dom";
import { apiHandler } from "../../assets/api";
import { endpoint } from "../../assets/api/endpoint";

import TournamentCommonCard6 from "../HomePage/TournamentCommonCard6/TournamentCommonCard6";
import NoticeModal from "../../components/AdminDashboard/NoticeModal/NoticeModal";

const Tournaments = () => {
  const history = useHistory();
  const [rawData, setRawData] = useState([]);
  const [noticeModal, setNoticeModal] = useState(false);
  const [noticeModalErrMsg, setNoticeModalErrMsg] = useState("");
  const [noticeModalHeaderMsg, setNoticeModalHeaderMsg] = useState("");

  const closeNoticeModal = () => {
    setNoticeModal(false);
    setNoticeModalErrMsg("");
    setNoticeModalHeaderMsg("");
  };

  useEffect(() => {
    GetHomepage();
  }, []);
  const GetHomepage = async () => {
    const result = await apiHandler({
      url: endpoint.TOURNAMENT_GETTOURNAMENT,
      method: "GET",
      data: null,
    });
    if (result.data.status === 404) {
      setNoticeModalHeaderMsg("Error");
      setNoticeModalErrMsg(result.data.message);
      setNoticeModal(true);
    } else {
      if (result.data.length === 0) {
        setNoticeModalHeaderMsg("Error");
        setNoticeModalErrMsg("Please Provide data");
        setNoticeModal(true);
      } else {
        console.log(result.data);
        setRawData(result.data);
      }
    }
  };
  const ontournament = () => {
    history.push("/tournament");
  };
  return (
    <>
      <div className='bg-color3   padding-10px'>
        <div className=' text-align-center-mid'>Tournament</div>
        <div className='row'>
          {rawData &&
            rawData.tournaments &&
            rawData.tournaments.map((item, index) => (
              <>
                {index < 2 && (
                  <div className=' col-6 padding-10px'>
                    <TournamentCommonCard6
                      CommImg={item?.image}
                      Subtitles={item.name}
                      CardTexts={item.description}
                      comingfield={item.comingfeild}
                      // tournamentBt="Tournament"
                    />
                  </div>
                )}
              </>
            ))}
        </div>
        <button className='btnt' onClick={() => ontournament()}>
          Tournament More
        </button>
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
export default Tournaments;
