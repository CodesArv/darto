import React, { useState, useEffect } from "react";
import "./SearchBar.css";
import logos from "../SearchBar/logos.png";
import MaterialIcon from "react-google-material-icons";
import { useHistory } from "react-router-dom";

import { endpoint } from "../../../src/assets/api/endpoint";
import { apiHandler } from "../../../src/assets/api";
import NoticeModal from "../AdminDashboard/NoticeModal/NoticeModal";
import SearchStateList from "./SearchStateList";
import SearchButton from "./SearchButton";
import Tournaments from "../../containers/Tournaments/Tournaments";
import Tournamentcard from "../../components/Tournamentcard/Tournamentcard";
import TeamClubItem from "../TeamAndClub/TeamItem/TeamItem";
import ClubItem from "../TeamAndClub/ClubItem/ClubItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { AiOutlineArrowLeft } from "react-icons/ai";
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
const Search = () => {
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
  const [isSearchResultWithoutbutton, setIsSearchResultWithoutbutton] =
    useState(true);
  const [isMoreDetails, setIsMoreDetails] = useState(false);
  const [moreDetails, setMoreDetails] = useState(6);
  const [isMoreDetailsTeam, setIsMoreDetailsTeam] = useState(false);
  const [moreDetailsTeam, setMoreDetailsTeam] = useState(6);
  const [isMoreDetailsTournament, setIsMoreDetailsTournament] = useState(false);
  const [moreDetailsTournament, setMoreDetailsTournament] = useState(6);
  const [getstateList, setGETSTATELIST] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [searchAuto, setSearchAuto] = useState([]);
  const [searchVar, setSearchVar] = useState([
    {
      Country: "Saitual",
    },
    {
      Country: "JAPAN",
    },
    {
      Country: "RASIA",
    },
    {
      Country: "USA",
    },
  ]);
  // const { authToken } = useSelector((state) => state.login.authData);

  const closeNoticeModal = () => {
    setNoticeModal(false);
    setNoticeModalErrMsg("");
    setNoticeModalHeaderMsg("");
  };

 
  
  const onSearchdistrict = async (text) => {
      if (text.length > 2) {
          const query =
              "?district =" + text + "&state=" + text + "&country=" + text;
          const result = await apiHandler({
              url: endpoint.GET_AUTO_SEARCH + query,
              method: "GET",
              data: null,
          });
          if (result.data.status === 200) {
              if (result.data.length === 0) {
                  setNoticeModalHeaderMsg("Error");
                  setNoticeModalErrMsg("No Record Found");
                  setNoticeModal(true);
              } else {
                  console.log("AutoSearch", result.data);
                  setSearchAuto(result.data);
              }
          } else {
              setNoticeModalHeaderMsg("Error");
              setNoticeModalErrMsg(result.data.message);
              setNoticeModal(true);
          }
          //setSearchInput(text);
          // if (text.length > 2) {
          //   const query = "?state=" + text;
          //   GetSearchData(query);
          // }
      }
      // else {
      //   setNoticeModalHeaderMsg("Error");
      //   setNoticeModalErrMsg("plz provide valide 3less than 3 text length");
      //   setNoticeModal(true);
      // }
  };
  // const onSearchdistrict = (text) => {
  //   console.log("text");
  //   //  if (!isSearchResult ) {
  //   // const query = "?district=" + text;
  // onSearch(text);
  //   //  }
  // };
  // const onSearch = (text) => {
  //     console.log("text");
  //     //  if (!isSearchResult ) {
  //     const query = SearchParam(text);
  //     GetSearchData(query);
  //     //  }
  // };

  const GetDetailsTournament = (id) => {
    history.push("/tournament/detail/" + id);
  };
  const onback = () => {
    setSearchBy("");
    setIsSearchResult(false);
  };

  

  return (
      <>
          <div className="search_pADDING_21PX_left_r width_60_media">
              {!isSearchResult && (
                  <div className="stack-search row">
                      <div className="col">
                          <span>
                              {" "}
                              <input
                                  type="search"
                                  className="serchinput-n"
                                  id="gsearch"
                                  name="gsearch"
                                  value={searchInput}
                                  onChange={(event) => {
                                      onSearchdistrict(event.target.value);
                                  }}
                                  placeholder="Search by Name, Category"
                              ></input>
                          </span>
                      </div>
                  </div>
              )}

              <div className="search_Country">
                  {searchAuto &&
                      searchAuto.map((row) => (
                          <div onClick={() => setSearchInput(row["Country"])}>
                              {row["Country"]}
                          </div>
                      ))}
              </div>
              {/* {isSearchResult && ( */}
              <div>
                  <div className="search-padding-space">
                      {/* <div
                              className="general-info"
                              style={{ marginTop: "20px" }}
                          >
                              <h1 className="general-info"> Tournament</h1>
                          </div> */}
                      {rawData &&
                          rawData.tournaments &&
                          rawData.tournaments.map((item, index) => (
                              <>
                                  {/* {isMoreDetails ||
                                                  (index < moreDetails && ( */}
                                  <div className="col-md-auto col-lg-6">
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
                                                          ? parseDate(
                                                                item.fromDate
                                                            )
                                                          : ""
                                                  }
                                                  todate={
                                                      item && item.toDate
                                                          ? parseDate(
                                                                item.toDate
                                                            )
                                                          : ""
                                                  }
                                                  age="18+"
                                                  profession=""
                                                  status={
                                                      (item && item.status) ||
                                                      ""
                                                  }
                                                  // status={item && item.fromDate ? formatDate(item.fromDate) : ""} fromdate,todate,age,profession
                                                  // status= {item && item.toDate ? formatDate(item.toDate) : ""}
                                                  stadium={
                                                      (item && item.locality) ||
                                                      ""
                                                  }
                                                  city={
                                                      (item && item.city) || ""
                                                  }
                                                  district={
                                                      (item && item.district) ||
                                                      ""
                                                  }
                                                  state={
                                                      (item && item.state) || ""
                                                  }
                                                  country={
                                                      (item && item.country) ||
                                                      ""
                                                  }
                                                  pincode={
                                                      (item && item.pincode) ||
                                                      ""
                                                  }
                                                  // detail={item && item.image && item.image.tournamentImage || ""}city,district,state,country,pincode<td></td>
                                                  GetDetailsTournament={
                                                      GetDetailsTournament
                                                  }
                                              />
                                          </div>
                                      </>
                                  </div>
                                  {/* ))} */}
                              </>
                          ))}
                      {/* <div
                              className="general-info"
                              style={{ marginTop: "20px" }}
                          >
                              <h1 className="general-info">Team & Club</h1>
                          </div> */}
                      {rawData &&
                          rawData.club &&
                          rawData.club.map((data) => (
                              <ClubItem
                                  teamClub={data.image || ""}
                                  recordId={data.id}
                                  TeamName={data.nameofclub || ""}
                                  More="More..."
                                  locality={data.locality || ""}
                                  Member={data.clubMembers || ""}
                                  Club="Club"
                                  locate={data.locality || ""}
                              />
                          ))}
                      {rawData &&
                          rawData.team &&
                          rawData.team.map((data) => (
                              <TeamClubItem
                                  teamClub={data.image || ""}
                                  recordId={data.id}
                                  TeamName={data.nameofTeam || ""}
                                  tagname={data.tagsName || ""}
                                  Member={data.totalMembers || ""}
                                  More="More..."
                                  Team="Team"
                                  locate={data.locality || ""}
                              />
                          ))}
                      <div
                          className="general-info"
                          style={{ marginTop: "20px" }}
                      >
                          {/* <h1 className="general-info">
                                  States Boards & Associations
                              </h1> */}
                      </div>
                      {rawData &&
                          rawData.club &&
                          rawData.club.map((data) => (
                              <ClubItem
                                  teamClub={data.image || ""}
                                  recordId={data.id}
                                  TeamName={data.nameofclub || ""}
                                  More="More..."
                                  locality={data.loaction.locality || ""}
                                  Member={data.clubMembers || ""}
                                  Club="Club"
                                  locate={data.loaction.locality || ""}
                              />
                          ))}
                      {rawData &&
                          rawData.team &&
                          rawData.team.map((data) => (
                              <TeamClubItem
                                  teamClub={data.image || ""}
                                  recordId={data.id}
                                  TeamName={data.nameofTeam || ""}
                                  tagname={data.tagsName || ""}
                                  Member={data.totalMembers || ""}
                                  More="More..."
                                  Team="Team"
                                  locate={data.loaction.locality || ""}
                              />
                          ))}
                  </div>
              </div>
              {/* )} */}
              {isSearchResult && (
                  <div>
                      <div>
                          <span style={{ color: "white", fontSize: 21 }}>
                              {" "}
                              <AiOutlineArrowLeft
                                  onClick={() => onback()}
                              />{" "}
                          </span>{" "}
                      </div>
                  </div>
              )}
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
export default Search;
