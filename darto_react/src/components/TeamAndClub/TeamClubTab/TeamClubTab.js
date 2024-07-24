import React, { useState, useEffect } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";
import TeamDetail from "../TeamDetail/TeamDetail";
import "./TeamClubTab.css";
//import classnames from 'classnames';
import "../../../containers/MyTeamClubTab/MyTeamClubTab.css";
// import MyTeam from "../MyTeam/MyTeam";
// import MyClub from "../../domains/HomePage/Club/MyClub";
// import CreateTeamButton from "../../domains/HomePage/CreateTeamClub/CreateTeamButton/CreateTeamButton";

import MaterialIcon from "react-google-material-icons";
import ClubDetail from "../ClubDetail/ClubDetail";
import TeamClubItem from "../TeamItem/TeamItem";
import { Link, useHistory } from "react-router-dom";
import ClubItem from "../ClubItem/ClubItem";
import MobileHeader from "../../../containers/Layout/MobileHeader/MobileHeader";
import NoticeModal from "../../../components/AdminDashboard/NoticeModal/NoticeModal";
import { apiHandler } from "../../../assets/api";
import { endpoint } from "../../../../src/assets/api/endpoint";
const TeamClubTab = () => {
  const [rawData, setRawData] = useState([]);
  const [rawDataClub, setRawDataClub] = useState([]);
  const [noticeModal, setNoticeModal] = useState(false);
  const [noticeModalErrMsg, setNoticeModalErrMsg] = useState("");
  const [noticeModalHeaderMsg, setNoticeModalHeaderMsg] = useState("");

  // const [activeTab, setActiveTab] = useState("1");

  // const toggle = (tab) => {
  //   if (activeTab !== tab) setActiveTab(tab);
  // };
  const closeNoticeModal = () => {
    setNoticeModal(false);
    setNoticeModalErrMsg("");
    setNoticeModalHeaderMsg("");
  };
  useEffect(() => {
    GetTeamData();
    GetClubData();
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
      let data = resp.data.teams.sort((a, b) =>
        a.nameofTeam > b.nameofTeam ? 1 : -1
      );
      setRawData(data);
    }
    //let obj= {...setRawData}
  };
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
      console.log(resp.data.Clubusers);
      let data = resp.data.Clubusers.sort((a, b) =>
        a.nameofclub > b.nameofclub ? 1 : -1
      );
      setRawDataClub(data);
    }
  };
  return (
    <div className='padding-tab-club1 width_60_media'>
      <div className='team_ClubBlock'>
        <div className='logo_With_Content'>
          <span className='logo_Tc_color'>
            <MaterialIcon
              color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) '
              icon='hub'
              stretch={true}
              size='14px'
            />{" "}
          </span>{" "}
          <span className='common_Font_Style_Gray padding_left_9px'>
            {" "}
            Teams
          </span>
        </div>
        <div className='logo_With_Content padding_left_18px'>
          <span className='logo_Tc_color'>
            <MaterialIcon
              color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) '
              icon='stream'
              stretch={true}
              size='14px'
            />
          </span>
          <span className='common_Font_Style_Gray padding_left_9px '>
            {" "}
            Clubs{" "}
          </span>
        </div>
      </div>
      <div className='padding-lef-20px-padding-right-20px'>
        <div className='row'>
          {rawDataClub &&
            rawDataClub.map((data) => (
              <div className='col-lg-6'>
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
              </div>
            ))}

          {rawData &&
            rawData.map((data) => (
              <div className='col-lg-6'>
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
              </div>
            ))}
        </div>
      </div>
      {window.innerWidth <= 768 && <MobileHeader />}
      {noticeModal && (
        <NoticeModal
          noticeModal={noticeModal}
          noticeModalHeader={noticeModalHeaderMsg}
          noticeModalErrMsg={noticeModalErrMsg}
          closeModal={closeNoticeModal}
        />
      )}
    </div>
  );
};

export default TeamClubTab;
