import React, { useState, useEffect } from "react";
import CommonUpdateCard from "../../domains/HomePage/CommonUpdateCard/CommonUpdateCard";
import tournament from "./tournament.jpg";
import NoticeModal from "../../components/AdminDashboard/NoticeModal/NoticeModal";
import { apiHandler } from "../../assets/api";
import { endpoint } from "../../../src/assets/api/endpoint";
const TeamMemberDetail = () => {
  const [rawData, setRawData] = useState([]);
  const [rawDataClub, setRawDataClub] = useState([]);
  const [noticeModal, setNoticeModal] = useState(false);
  const [noticeModalErrMsg, setNoticeModalErrMsg] = useState("");
  const [noticeModalHeaderMsg, setNoticeModalHeaderMsg] = useState("");

  const closeNoticeModal = () => {
    setNoticeModal(false);
    setNoticeModalErrMsg("");
    setNoticeModalHeaderMsg("");
  };
  useEffect(() => {
    GetTeamData();
  }, []);

  const GetTeamData = async () => {
    const resp = await apiHandler({
      url: endpoint.GET_TEAMS,
      method: "GET",
    });
    if (resp.data.status === 500) {
      setNoticeModalHeaderMsg("Error");
      setNoticeModalErrMsg(resp.data.message);
      setNoticeModal(true);
    } else if (resp.data.length === 0) {
      setNoticeModalHeaderMsg("Error");
      setNoticeModalErrMsg("Please Provide data");
      setNoticeModal(true);
    } else {
      console.log(resp.data.teams);
     // setRawData(resp.data.teams);
    
     let data = resp.data.teams.sort((a, b) =>
     a.nameofTeam > b.nameofTeam ? 1 : -1
   );
    setRawData(data);
    }
    //let obj= {...setRawData}
  };
  return (
    <>
      {rawData &&
        rawData.map((data) => (
          <CommonUpdateCard
            memberClub={data.image || ""}
            Member={data.nameofTeam || ""}
            // Age='30'
          />
        ))}

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
export default TeamMemberDetail;
