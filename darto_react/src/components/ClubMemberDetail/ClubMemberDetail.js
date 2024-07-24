import React, { useState, useEffect } from "react";
import CommonUpdateCard from "../../domains/HomePage/CommonUpdateCard/CommonUpdateCard";

import NoticeModal from "../../components/AdminDashboard/NoticeModal/NoticeModal";
import { apiHandler } from "../../assets/api";
import { endpoint } from "../../../src/assets/api/endpoint";
const ClubMemberDetail = () => {
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
    GetClubData();
  }, []);
  const GetClubData = async () => {
    const resp = await apiHandler({
      url: endpoint.GET_User_CLUB,
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
      console.log(resp.data.clubs);
      setRawDataClub(resp.data.clubs);
    }
  };
  return (
    <>
      {rawDataClub &&
        rawDataClub.map((data) => (
          <CommonUpdateCard
            memberClub={data.image || ""}
            Member={data.nameofclub || ""}
            Age='30'
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
export default ClubMemberDetail;
