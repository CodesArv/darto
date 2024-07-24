import React, { useState, useEffect } from "react";
import "./SearchBar.css";
import logos from "../SearchBar/logos.png";
import MaterialIcon from "react-google-material-icons";
import { MdKeyboardVoice } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Col, Row } from "reactstrap";
import { endpoint } from "../../../src/assets/api/endpoint";
import { apiHandler } from "../../../src/assets/api";
import NoticeModal from "../AdminDashboard/NoticeModal/NoticeModal";
const SearchStateList = () => {
  const [rawData, setRawData] = useState([]);
  const [rawDataclub, setRawDataClub] = useState([]);
  const [rawDataTournament, setRawDataTournament] = useState([]);
  const [filteredTournamnetData, setFilteredTournamnetData] = useState([]);
  const [noticeModal, setNoticeModal] = useState(false);
  const [noticeModalErrMsg, setNoticeModalErrMsg] = useState("");
  const [noticeModalHeaderMsg, setNoticeModalHeaderMsg] = useState("");
  const stateList = [
    "Andaman and Nicobar (UT)",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chandigarh (UT)",
    "Chhattisgarh",
    "Dadra and Nagar Haveli (UT)",
    "Daman and Diu (UT)",
    "Delhi (UT)",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir (UT)",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Ladakh (UT)",
    "Lakshadweep (UT)",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Orissa",
    "Puducherry (UT)",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];
  const closeNoticeModal = () => {
    setNoticeModal(false);
    setNoticeModalErrMsg("");
    setNoticeModalHeaderMsg("");
  };
  // GET_User_CLUB_STATE
  //TOURNAMENT_GETTOURNAMENTState
  //   useEffect(() => {
  //     GetStateAllList();
  //   }, []);
  //   const GetStateAllList = async () => {
  //     const result = await apiHandler({
  //       url: endpoint.STATE_LISTALL,
  //       method: "GET",
  //       data: null,
  //     });
  //     if (result.data.status === 200) {
  //       if (result.data.length === 0) {
  //         setNoticeModalHeaderMsg("Error");
  //         setNoticeModalErrMsg("No Record Found");
  //         setNoticeModal(true);
  //       } else {
  //         console.log("state", result.data);
  //         setRawData(result.data.stateList);
  //         //setFilteredTournamnetData(result.data);
  //       }
  //     } else {
  //       setNoticeModalHeaderMsg("Error");
  //       setNoticeModalErrMsg(result.data.message);
  //       setNoticeModal(true);
  //     }
  //   };

  return (
    <>
      <div className="search-padding-space">
        <div className="general-info" style={{ marginTop: "20px" }}>
          <h1 className="general-info">Team </h1>
        </div>
        {stateList &&
          stateList.map((item) => (
            <>
              <div className="list-serach1">
                <p className="about-darto">{item}</p>
                <MdOutlineArrowForwardIos className="about-darto" />
              </div>
            </>
          ))}

        <div className="general-info" style={{ marginTop: "20px" }}>
          <h1 className="general-info"> Tournament</h1>
        </div>
        {stateList &&
          stateList.map((item) => (
            <div className="list-serach1">
              <p className="about-darto">{item}</p>
              <MdOutlineArrowForwardIos className="about-darto" />
            </div>
          ))}

        <div className="general-info" style={{ marginTop: "20px" }}>
          <h1 className="general-info">Club</h1>
        </div>
        {stateList &&
          stateList.map((item) => (
            <div className="list-serach1">
              <p className="about-darto">{item}</p>
              <MdOutlineArrowForwardIos className="about-darto" />
            </div>
          ))}
        <div className="general-info" style={{ marginTop: "20px" }}>
          <h1 className="general-info">States Boards & Associations</h1>
        </div>
        {stateList &&
          stateList.map((item) => (
            <div className="list-serach1">
              <p className="about-darto">{item}</p>
              <MdOutlineArrowForwardIos className="about-darto" />
            </div>
          ))}
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
export default SearchStateList;
