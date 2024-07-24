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
const SearchButton = () => {
  const [rawData, setRawData] = useState({});
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
  const [stateListObj, setstateListObj] = useState("");
  const [searchBy, setSearchBy] = useState("");
  const [isSearchAvaliable, setIsSearchAvaliable] = useState(false);
  const [isSearchAvaliableResult, setIsSearchAvaliableResult] = useState(false);
  // const { authToken } = useSelector((state) => state.login.authData);

  const closeNoticeModal = () => {
    setNoticeModal(false);
    setNoticeModalErrMsg("");
    setNoticeModalHeaderMsg("");
  };
  // GET_User_CLUB_STATE
  //TOURNAMENT_GETTOURNAMENTState
  useEffect(() => {
    GetState();
    GetClubState();
    GetTournament();
  }, []);
  const GetState = async () => {
    const result = await apiHandler({
      url: endpoint.STATE_GETALL,
      method: "GET",
      data: null,
    });
    if (result.data.status === 200) {
      if (result.data.length === 0) {
        setNoticeModalHeaderMsg("Error");
        setNoticeModalErrMsg("No Record Found");
        setNoticeModal(true);
      } else {
        console.log("state", result.data);
        setRawData(result.data);
        setFilteredTournamnetData(result.data);
      }
    } else {
      setNoticeModalHeaderMsg("Error");
      setNoticeModalErrMsg(result.data.message);
      setNoticeModal(true);
    }
  };
  const GetClubState = async () => {
    const result = await apiHandler({
      url: endpoint.GET_User_CLUB_STATE,
      method: "GET",
      data: null,
    });
    if (result.data.status === 200) {
      if (result.data.length === 0) {
        setNoticeModalHeaderMsg("Error");
        setNoticeModalErrMsg("No Record Found");
        setNoticeModal(true);
      } else {
        console.log("stateClub", result.data);
        setRawDataClub(result.data);
      }
    } else {
      setNoticeModalHeaderMsg("Error");
      setNoticeModalErrMsg(result.data.message);
      setNoticeModal(true);
    }
  };
  const GetTournament = async () => {
    const result = await apiHandler({
      url: endpoint.TOURNAMENT_GETTOURNAMENTState,
      method: "GET",
      data: null,
    });
    if (result.data.status === 200) {
      if (result.data.length === 0) {
        setNoticeModalHeaderMsg("Error");
        setNoticeModalErrMsg("No Record Found");
        setNoticeModal(true);
      } else {
        console.log("stateTournmanet", result.data);
        setRawDataTournament(result.data);
      }
    } else {
      setNoticeModalHeaderMsg("Error");
      setNoticeModalErrMsg(result.data.message);
      setNoticeModal(true);
    }
  };
  const onSearch = (event) => {
    // console.log(event.target.value, rawData);
    const filteredData = rawData.filter((row) => {
      const val = event.target.value;
      return row.state.toLowerCase().includes(val.toLowerCase());
    });
    // console.log(filteredData, rawData);
    filteredTournamnetData(filteredData);
  };
  const onstateList = () => {
    setIsSearchAvaliable(true);
    setstateListObj(stateList);
  };
  const onsearchdata = () => {
    setIsSearchAvaliableResult(false);
  };
  return (
    <>
      <div className="search-padding-space">
        <div className="general-info" style={{ marginTop: "20px" }}>
          <h1 className="general-info"> Team</h1>
        </div>
        {stateList &&
          stateList.map((item) => (
            <>
              <div className="list-serach1" onClick={() => onsearchdata()}>
                <p className="about-darto">{item}</p>
                <MdOutlineArrowForwardIos className="about-darto" />
              </div>
            </>
          ))}

        <div className="general-info" style={{ marginTop: "20px" }}>
          <h1 className="general-info">Tournaments</h1>
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
export default SearchButton;
