import React, { useState, useEffect } from "react";
import "./SearchBar.css";
import logos from "../SearchBar/logos.png";
import MaterialIcon from "react-google-material-icons";
import { useHistory, Link } from "react-router-dom";

import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Col, Row, Container } from "reactstrap";
import { endpoint } from "../../../src/assets/api/endpoint";
import { apiHandler } from "../../../src/assets/api";
import NoticeModal from "../AdminDashboard/NoticeModal/NoticeModal";

import Tournamentcard from "../../components/Tournamentcard/Tournamentcard";
import TeamClubItem from "../TeamAndClub/TeamItem/TeamItem";
import ClubItem from "../TeamAndClub/ClubItem/ClubItem";

import { AiOutlineArrowLeft } from "react-icons/ai";
import Council from "../Council/Council";

export const parseDate = (weekDate) => {
  if (weekDate === null || weekDate === "") return null;

  let dateObj = new Date(weekDate);

  var month =
    (dateObj.getMonth() + 1 < 10 ? "0" : "") + (dateObj.getMonth() + 1);
  var date = (dateObj.getDate() < 10 ? "0" : "") + dateObj.getDate();
  return dateObj.getFullYear() + "-" + month + "-" + date;
};

const INITAL_VIEW_COUNT = 6;
const INITAL_VIEW_TOURNMANTCOUNT = 4;
const SearchBar = () => {
  const history = useHistory();
  const [rawData, setRawData] = useState({});
  const [rawDataclub, setRawDataClub] = useState([]);
  const [rawDataTournament, setRawDataTournament] = useState([]);
  const [rawDataTeam, setRawDataTeam] = useState([]);
  const [filteredTournamnetData, setFilteredTournamnetData] = useState([]);
  const [noticeModal, setNoticeModal] = useState(false);
  const [noticeModalErrMsg, setNoticeModalErrMsg] = useState("");
  const [noticeModalHeaderMsg, setNoticeModalHeaderMsg] = useState("");
  const [searchBy, setSearchBy] = useState("");
  const [isSearchResult, setIsSearchResult] = useState(false);
  const [isSearchResultTeam, setIsresultTeam] = useState(false);
  const [isSearchResultTournament, setIsresultTouanemnt] = useState(false);
  const [isSearchResultsBoard, setIsresultTouanemntBoard] = useState(false);
  const [isSearchResultWithoutbutton, setIsSearchResultWithoutbutton] =
    useState(true);
  const [isMoreDetails, setIsMoreDetails] = useState(false);
  const [moreDetails, setMoreDetails] = useState(6);
  const [isMoreDetailsTeam, setIsMoreDetailsTeam] = useState(false);
  const [moreDetailsTeam, setMoreDetailsTeam] = useState(6);
  const [isMoreDetailsTournament, setIsMoreDetailsTournament] = useState(false);
  const [moreDetailsTournament, setMoreDetailsTournament] = useState(6);
  const [rawDataBoradAss, setRawDataBoradAss] = useState([]);
  const [getstateList, setGETSTATELIST] = useState("");
  const [rawDataTeamandClub, setRawDataTeamandClub] = useState("");
  const [rawDataTournmanet, setRawDataTournmanet] = useState("");
  const [rawDataBoardName, setRawDataBoardName] = useState([]);
  const [searchAuto, setSearchAuto] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  // const { authToken } = useSelector((state) => state.login.authData);
  const stateList = [
    "Andaman and Nicobar",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chandigarh",
    "Chhattisgarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Ladakh",
    "Lakshadweep",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Orissa",
    "Puducherry",
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
  const TournamentCategoryList = [
    "Professional | Sr.(18+yrs)",
    "Clubs",
    "Nationals",
    "Corporates",
    "Champonship",
    "Junior School (Under 18 yrs upto 8 yrs)",
    "Sub junior (under 8 yrs)",
    "India World cups",
  ];
  const stateAndAssicateList = [
    "Darto of Andhra Pradesh",
    "Darto of Arunachal Pradesh",
    "Darto of Assam",
    "Darto of Andaman and Nicobar Islands",
    "Darto of Bihar",
    "Darto of Chandigarh",
    "Darto of Chhattisgarh",
    "Darto of Goa",
    "Darto of Gujarat",
    "Darto of Haryana",
    "Darto of Himachal Pradesh",
    "Darto of Jharkhand",
    "Darto of Karnataka",
    "Darto of Kerala",
    "Darto of Madhya Pradesh",
    "Darto of Maharashtra",
    "Darto of Manipur",
    "Darto of Meghalaya",
    "Darto of Mizoram",
    "Darto of Nagaland",
    "Darto of Odisha",
    "Darto of Punjab",
    "Darto of Rajasthan",
    "Darto of Sikkim",
    "Darto of Tamil Nadu",
    "Darto of Telangana",
    "Darto of Tripura",
    "Darto of Uttar Pradesh",
    "Darto of Uttarakhand",
    "Darto of West Bengal",
    "Darto of Delhi",
    "Darto of Jammu",
    "Darto of Kashmir",
    "Darto of Puducherry",

    "Darto of Dadra and Nagar Haveli",
    "Darto of Daman and Diu",
    "Darto of Lakshadweep",
    "Darto of Ladakh",
  ];
  const closeNoticeModal = () => {
    setNoticeModal(false);
    setNoticeModalErrMsg("");
    setNoticeModalHeaderMsg("");
  };
  // GET_User_CLUB_STATE
  //TOURNAMENT_GETTOURNAMENTState

  useEffect(() => {
    GetStateData();
  }, []);

  const GetStateData = async () => {
    const result = await apiHandler({
      url: endpoint.GET_BOARD,
      method: "GET",
      data: null,
    });
    console.log(result.data);
    // if (result.data.status === 500) {
    //   setNoticeModalHeaderMsg("Error");
    //   setNoticeModalErrMsg(result.data.message);
    //   setNoticeModal(true);
    // } else if (result.data.length === 0) {
    //   setNoticeModalHeaderMsg("Error");
    //   setNoticeModalErrMsg("Please Provide data");
    //   setNoticeModal(true);
    // }
    let data = result.data.boards.sort((a, b) => (a.name > b.name ? 1 : -1));

    setRawDataBoardName(data);
    //let obj= {...setRawData}
  };
  const GetSearchData = async (query) => {
    const res = await apiHandler({
      url: endpoint.STATE_GETALL + query,
      method: "GET",
      data: null,
    });
    if (res.data.status === 200) {
      if (res.data.length === 0) {
        setNoticeModalHeaderMsg("Error");
        setNoticeModalErrMsg("No Record Found");
        setNoticeModal(true);
      } else {
        console.log("state", res.data.result);
        setRawData(res.data.result);
        //setFilteredTournamnetData(result.data);
      }
    } else {
      setNoticeModalHeaderMsg("Error");
      setNoticeModalErrMsg(res.data.message);
      setNoticeModal(true);
    }
  };

  const onSearch = (text) => {
     setRawDataBoradAss([]);
    console.log("searchauto", text);
    setSearchInput(text);
    if (isSearchResult) {
      if (text.length > 2) {
        if (searchBy === "city") {
          const query = "?" + searchBy + "=" + text;
          console.log("query - ", query);
          onSearchAuto(query);
        } else if (searchBy === "pincode") {
          const query = "?" + searchBy + "=" + text;
          console.log("query - ", query);
          onSearchAuto(query);
        } else if (searchBy === "district") {
          const query = "?" + searchBy + "=" + text;
          console.log("query - ", query);
          onSearchAuto(query);
        } else {
          const query = "?" + searchBy + "=" + text;
          GetSearchData(query);
        }
      }
    }
    //     else {
    //     if(isSearchResult && searchBy !== "state") {
    //         const query = "?" + searchBy + "=" + text;
    //         GetSearchData(query);
    //     }
    // }
  };
  const handleSearchByOption = (searchOption) => {
    setSearchBy(searchOption);
    setIsSearchResult(true);
    setIsSearchResultWithoutbutton(false);
  };
  const onSearchState = (state) => {
    const query = "?state=" + state;
    setGETSTATELIST(state);
     setRawDataBoradAss([]);
    GetSearchData(query);
    setIsresultTeam(true);
    setIsresultTouanemnt(true);
    setIsresultTouanemntBoard(true);
    setSearchBy("");
  };
  const onSearchAutoResult = (query) => {
    // setGETSTATELIST(state);
    GetSearchData(query);
     setRawDataBoradAss([]);
    setIsresultTeam(true);
    setIsresultTouanemnt(true);
    setIsresultTouanemntBoard(true);
    setSearchBy("");
  };
  const GetDetailsTournament = (id) => {
    history.push("/tournament/detail/" + id);
  };
  const onback = () => {
    setSearchBy("");
    setIsSearchResult(false);
  };
  // GET_TEAMANDCLUB
  const GetSearchTEAMData = async (query) => {
     setRawDataBoradAss([]);
    const res = await apiHandler({
      url: endpoint.GET_TEAMANDCLUB + query,
      method: "GET",
      data: null,
    });
    if (res.data.status === 200) {
      if (res.data.length === 0) {
        setNoticeModalHeaderMsg("Error");
        setNoticeModalErrMsg("No Record Found");
        setNoticeModal(true);
      } else {
        console.log("state", res.data.result);
        setRawData(res.data.result);
         
        //setFilteredTournamnetData(result.data);
      }
    } else {
      setNoticeModalHeaderMsg("Error");
      setNoticeModalErrMsg(res.data.message);
      setNoticeModal(true);
    }
  };
  const onsearchTypeTeam = (state) => {
    const query = "?state=" + state;
    setGETSTATELIST(state);
    GetSearchTEAMData(query);
     setRawDataBoradAss([]);
    setIsSearchResult(true);
    setIsresultTeam(true);
    setIsresultTouanemnt(false);
    setIsresultTouanemntBoard(false);
    setIsSearchResultWithoutbutton(false);
  };
  //GET_TOURMANENT
  const GETSEARCHTournamnetData = async (query) => {
     setRawDataBoradAss([]);
    const res = await apiHandler({
      url: endpoint.GET_TOURMANENT + query,
      method: "GET",
      data: null,
    });
    if (res.data.status === 200) {
      if (res.data.length === 0) {
        setNoticeModalHeaderMsg("Error");
        setNoticeModalErrMsg("No Record Found");
        setNoticeModal(true);
      } else {
        console.log("state", res.data.result);
        setRawData(res.data.result);
         
        //setFilteredTournamnetData(result.data);
      }
    } else {
      setNoticeModalHeaderMsg("Error");
      setNoticeModalErrMsg(res.data.message);
      setNoticeModal(true);
    }
  };
  const onsearchTypeTournment = (state) => {
    const query = "?category=" + state;
    setGETSTATELIST(state);
    setRawDataBoradAss([]);
    GETSEARCHTournamnetData(query);
    setIsSearchResult(true);
    setIsresultTeam(false);
    setIsresultTouanemnt(true);
    setIsresultTouanemntBoard(false);
    setIsSearchResultWithoutbutton(false);
  };
  const SearchParam = (state) => {
    let query = "";
    if (state !== "") {
      if (query !== "") query = query + "&";
      query = query + "?nameofTeam=" + state;
    }
    if (state !== "") {
      if (query !== "") query = query + "&";
      query = query + "?nameofClub=" + state;
    }
    return query;
  };
  //GET_SEARCH_BOARD
  const GETSEARCHBOARDData = async (query) => {
    const res = await apiHandler({
      url: endpoint.GET_SEARCH_BOARD + query,
      method: "GET",
      data: null,
    });
    if (res.data.status === 200) {
      if (res.data.length === 0) {
        setNoticeModalHeaderMsg("Error");
        setNoticeModalErrMsg("No Record Found");
        setNoticeModal(true);
      } else {
        console.log("state", res.data.result);
        setRawDataBoradAss(res.data.result);
        //setFilteredTournamnetData(result.data);
      }
    } else {
      setNoticeModalHeaderMsg("Error");
      setNoticeModalErrMsg(res.data.message);
      setNoticeModal(true);
    }
  };
  const onSearchTypeBoard = (state) => {
    const query = "?name=" + state;
    setGETSTATELIST(state);
    GETSEARCHBOARDData(query);
    setIsSearchResult(true);
    setIsresultTeam(false);
    setIsresultTouanemnt(false);
    setIsresultTouanemntBoard(true);
    setIsSearchResultWithoutbutton(false);
  };

  const onSearchAuto = async (query) => {
     setRawDataBoradAss([]);
    const res = await apiHandler({
      url: endpoint.GET_AUTO_SEARCH + query,
      method: "GET",
      data: null,
    });
    if (res.data.status === 500) {
      setSearchAuto([]);
    } else {
      console.log("AutoSearch", res.data);
      setSearchAuto(res.data);
       
    }
  };

  // const myteamup = () => {
  //     history.push("/searchdynamic");
  // };
  const Ccarousal = () => {
    history.go(-1);
  };
  const backHome = () => {
    history.push("/home");
  };

  return (
    <>
      {/* <SearchTopNavigation/> */}
      <div className='stake-back  width_60_media padding_bottom_45px  heade_subheader_Define_DT'>
        {!isSearchResult && (
          <div
            className='stake-back1 sub_navigation_bar'
            style={{ cursor: "pointer" }}
          >
            <span className='update-opt'>
              {" "}
              <AiOutlineArrowLeft onClick={() => Ccarousal()} />{" "}
            </span>{" "}
          </div>
        )}
        {isSearchResult && (
          <div>
            <div className='sub_navigation_bar' style={{ cursor: "pointer" }}>
              <span style={{ color: "white", fontSize: 21 }}>
                {" "}
                <AiOutlineArrowLeft onClick={() => onback()} />{" "}
              </span>{" "}
            </div>
          </div>
        )}
        <div
          className='darto-logo5 align_Logo_Manage sub_navigation_bar'
          style={{ cursor: "pointer" }}
        >
          <img className='darto-logo5' src={logos} onClick={() => backHome()} />
        </div>
      </div>
      <div className='search_pADDING_21PX_left_r width_60_media'>
        {(!isSearchResult ||
          searchBy === "city" ||
          searchBy === "pincode" ||
          searchBy === "district") && (
          <div
            className='stack-search row'
            // onClick={() => myteamup()}
          >
            <div className='col-1'>
              <span className='display_flex_alignc_nter'>
                <MaterialIcon
                  color='var(--token-62d928f7-b29b-49a5-a425-bbc990e69ba9, rgb(255, 255, 255)) '
                  icon='search'
                  // Using default values:
                  stretch={false}
                />
              </span>
            </div>
            <div className='col-11'>
              <span>
                {" "}
                <input
                  type='search'
                  className='serchinput-n'
                  id='gsearch'
                  name='gsearch'
                  value={searchInput}
                  onChange={(event) => onSearch(event.target.value)}
                  placeholder='Search by Name, Category'
                ></input>
              </span>
            </div>
            {searchAuto.length > 0 && (
              <div
                className='search_Country col-12'
                style={{
                  background: "#FFF",
                  height: 200,
                  overflow: "auto",
                }}
              >
                {searchAuto &&
                  searchAuto.map((row) => (
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setSearchInput(row[searchBy]);
                        setSearchAuto([]);
                        const query = "?" + searchBy + "=" + row[searchBy];
                        onSearchAutoResult(query);
                      }}
                    >
                      {row[searchBy]}
                    </div>
                  ))}
              </div>
            )}
          </div>
        )}

        {!isSearchResult && (
          <>
            <div className='stack-area-serch'>
              <div className='browse-by-search2'>
                <h1 className='browse-by-search2'>Browse By</h1>
              </div>
              <Container className='container_State '>
                <Row
                  className='margin-search-item'
                  style={{ marginTop: "10px" }}
                >
                  <Col
                    className='display_flex'
                    //   className='.col-sm-auto .offset-sm-1'
                  >
                    <button
                      className='margin_auto_left_r'
                      id='first'
                      style={{ border: "none" }}
                      onClick={() => handleSearchByOption("state")}
                    >
                      State
                    </button>
                  </Col>
                  <Col
                    className='display_flex'
                    //   className='.col-sm-auto .offset-sm-1 margin_RState'
                  >
                    <button
                      className='margin_auto_left_r'
                      id='first'
                      style={{ border: "none" }}
                      onClick={() => handleSearchByOption("city")}
                    >
                      City
                    </button>
                  </Col>
                </Row>
                <Row
                  className='margin-search-item'
                  style={{ marginTop: "10px" }}
                >
                  <Col
                    className='display_flex'
                    //    className='.col-sm-auto .offset-sm-1'
                  >
                    <button
                      className='margin_auto_left_r'
                      id='first'
                      style={{ border: "none" }}
                      onClick={() => handleSearchByOption("district")}
                    >
                      District
                    </button>
                  </Col>
                  <Col
                    className='display_flex'
                    //    className='.col-sm-auto .offset-sm-1 margin_RState'
                  >
                    <button
                      className='margin_auto_left_r'
                      id='first'
                      style={{ border: "none" }}
                      onClick={() => handleSearchByOption("pincode")}
                    >
                      Pin Code
                    </button>
                  </Col>
                </Row>
                <Row
                  className='margin-search-item'
                  style={{ marginTop: "10px" }}
                >
                  <Col
                    className='display_flex'
                    //   className='.col-sm-auto .offset-sm-1'
                  >
                    <button
                      className='margin_auto_left_r'
                      id='first'
                      style={{ border: "none" }}
                    >
                      Name
                    </button>
                  </Col>
                  <Col
                    className='display_flex'
                    //    className='.col-sm-auto .offset-sm-1 margin_RState'
                  >
                    <button
                      className='margin_auto_left_r'
                      id='first'
                      style={{ border: "none" }}
                    >
                      Centers
                    </button>
                  </Col>
                </Row>
              </Container>
            </div>
          </>
        )}
        {!isSearchResult ? (
          <>
            <div>
              <div className=''>
                <div className='general-info' style={{ marginTop: "20px" }}>
                  <h1 className='general-info'>State Teams & Clubs </h1>
                </div>
                {stateList &&
                  stateList.map((item, index) => (
                    <>
                      {index < INITAL_VIEW_COUNT || isMoreDetailsTeam ? (
                        <div
                          className='list-serach1_search_Bar'
                          onClick={() => onsearchTypeTeam(item)}
                        >
                          <p className='about-darto'>{item}</p>
                          <MdOutlineArrowForwardIos className='about-darto' />
                          {/* {isMoreDetails ||
                                                      (index < moreDetails && (
                                                      ))} */}
                        </div>
                      ) : null}
                    </>
                  ))}
                <button
                  className='color_Search_Bar'
                  onClick={() => setIsMoreDetailsTeam(!isMoreDetailsTeam)}
                >
                  {isMoreDetailsTeam ? "Less" : "See More"}
                </button>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
        {!isSearchResult ? (
          <div>
            <div className=''>
              <div className='general-info' style={{ marginTop: "20px" }}>
                <h1 className='general-info'>Tournaments </h1>
              </div>
              {TournamentCategoryList &&
                TournamentCategoryList.map((item, index) => (
                  <>
                    {index < INITAL_VIEW_TOURNMANTCOUNT ||
                    isMoreDetailsTournament ? (
                      <div
                        className='list-serach1_search_Bar'
                        onClick={() => onsearchTypeTournment(item)}
                      >
                        <p className='about-darto'>{item}</p>
                        <MdOutlineArrowForwardIos className='about-darto' />
                      </div>
                    ) : null}
                  </>
                ))}
              <button
                className='color_Search_Bar'
                onClick={() =>
                  setIsMoreDetailsTournament(!isMoreDetailsTournament)
                }
              >
                {isMoreDetailsTournament ? "Less" : "See More"}
              </button>
            </div>
          </div>
        ) : (
          <></>
        )}
        {!isSearchResult && (
          <div>
            <div>
              <div className='general-info' style={{ marginTop: "20px" }}>
                <h1 className='general-info'>States Boards & Associations </h1>
              </div>
              {rawDataBoardName &&
                rawDataBoardName.map((item, index) => (
                  <>
                    {index < INITAL_VIEW_COUNT || isMoreDetails ? (
                      <div
                        className='list-serach1_search_Bar'
                        onClick={() => onSearchTypeBoard(item.name)}
                      >
                        <p className='about-darto'>{item.name}</p>
                        <MdOutlineArrowForwardIos className='about-darto' />
                      </div>
                    ) : null}
                  </>
                ))}
              <button
                className='color_Search_Bar'
                //   style={{
                //       width: "5%",
                //       fontSize: "medium",
                //   }}
                onClick={() => setIsMoreDetails(!isMoreDetails)}
              >
                {isMoreDetails ? "Less" : "See More"}
              </button>
            </div>
          </div>
        )}
        {isSearchResult && (
          <>
            {searchBy === "state" ? (
              <div>
                <div className='search-padding-space'>
                  <div className='general-info' style={{ marginTop: "20px" }}>
                    <h1 className='general-info'>List of available State </h1>
                  </div>
                  {stateList &&
                    stateList.map((item) => (
                      <>
                        <div
                          className='list-serach1_search_Bar'
                          // style={{ cursor: "pointer" }}
                          onClick={() => onSearchState(item)}
                        >
                          <p className='about-darto'>{item}</p>
                          <MdOutlineArrowForwardIos className='about-darto' />
                        </div>
                      </>
                    ))}
                </div>
              </div>
            ) : (
              <div>
                <div className='search-padding-space'>
                  {isSearchResultTournament && (
                    <>
                      <div
                        className='general-info'
                        style={{ marginTop: "20px" }}
                      >
                        <h1>
                          {
                            <h1
                              className='general-info'
                              style={{
                                textAlign: "center",
                              }}
                            >
                              {getstateList}
                            </h1>
                          }
                        </h1>

                        {/* <h1 className="serch_item_color_12pc">
                                                    {" "}
                                                    Tournament
                                                </h1> */}
                      </div>
                      {rawData &&
                        rawData.resulttournament &&
                        rawData.resulttournament.map((item, index) => (
                          <>
                            {/* {isMoreDetails ||
                                                  (index < moreDetails && ( */}
                            <div className='col-md-auto col-lg-6'>
                              <>
                                <div>
                                  <Tournamentcard
                                    title={item.name}
                                    body={item.description}
                                    recordId={item.id}
                                    //  stadium={item.loaction.locality}
                                    detail={item?.image}
                                    fromdate={
                                      item && item.fromDate
                                        ? parseDate(item.fromDate)
                                        : ""
                                    }
                                    todate={
                                      item && item.toDate
                                        ? parseDate(item.toDate)
                                        : ""
                                    }
                                    age='18+'
                                    profession=''
                                    status={(item && item.status) || ""}
                                    // status={item && item.fromDate ? formatDate(item.fromDate) : ""} fromdate,todate,age,profession
                                    // status= {item && item.toDate ? formatDate(item.toDate) : ""}
                                    stadium={(item && item.locality) || ""}
                                    city={(item && item.city) || ""}
                                    district={(item && item.district) || ""}
                                    state={(item && item.state) || ""}
                                    country={(item && item.country) || ""}
                                    pincode={(item && item.pincode) || ""}
                                    // detail={item && item.image && item.image.tournamentImage || ""}city,district,state,country,pincode<td></td>
                                    GetDetailsTournament={GetDetailsTournament}
                                  />
                                </div>
                              </>
                            </div>
                            {/* ))} */}
                          </>
                        ))}
                    </>
                  )}
                  {isSearchResultTeam && (
                    <>
                      <div
                        className='general-info'
                        style={{ marginTop: "20px" }}
                      >
                        {/* <h1 className="serch_item_color_12px">
                                                    Team & Club
                                                </h1> */}
                      </div>
                      <div className="row">
                      <div className="col-lg-6">
                      {rawData &&
                        rawData.resultclub &&
                        rawData.resultclub.map((data) => (
                        
                          <ClubItem
                            teamClub={data.image || ""}
                            recordId={data.id}
                            TeamName={data.nameofclub || ""}
                            More='More...'
                            locality={data.locality || ""}
                            Member={data.clubMembers || ""}
                            Club='Club'
                            locate={data.locality || ""}
                          />
                         
                        ))}
                        </div>
                       <div className="col-lg-6">
                      {rawData &&
                        rawData.resultteam &&
                        rawData.resultteam.map((data) => (
                          <TeamClubItem
                            teamClub={data.image || ""}
                            recordId={data.id}
                            TeamName={data.nameofTeam || ""}
                            tagname={data.tagsName || ""}
                            Member={data.totalMembers || ""}
                            More='More...'
                            Team='Team'
                            locate={data.locality || ""}
                          />
                        ))}
                        </div>
                        </div>
                    </>
                  )}
                  {isSearchResultsBoard && (
                    <>
                      <div
                        className='general-info'
                        style={{ marginTop: "20px" }}
                      >
                        {/* <h1 className="serch_item_color_12px">
                                                    States Boards & Associations
                                                </h1> */}
                      </div>
                      {rawDataBoradAss &&
                        rawDataBoradAss.nameBorad &&
                        rawDataBoradAss.nameBorad.map((item, index) => (
                          <>
                            <Council
                              key={index}
                              CouncilName={item.name}
                              recordId={item.id}
                              CouncilImage={item.image || ""}
                              EmailId={item.email}
                              Country={item.country}
                              State={item.state}
                              City={item.city}
                              Pincode={item.pincode}
                            />
                          </>
                        ))}
                    </>
                  )}
                </div>
              </div>
            )}

            {/* <button onClick={() => setIsMoreDetails(!isMoreDetails)}>
                          {isMoreDetails ? "More" : "Less"}
                      </button> */}
          </>
        )}

        {noticeModal && (
          <NoticeModal
            noticeModal={noticeModal}
            noticeModalHeader={noticeModalHeaderMsg}
            noticeModalErrMsg={noticeModalErrMsg}
            closeModal={closeNoticeModal}
          />
        )}
      </div>
    </>
  );
};
export default SearchBar;
