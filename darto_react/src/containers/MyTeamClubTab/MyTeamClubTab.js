import React, { useState,useEffect } from "react";
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
//import classnames from 'classnames';
import "./MyTeamClubTab.css";
import MyTeam from "../MyTeam/MyTeam";
import MyClub from "../../domains/HomePage/Club/MyClub";
import CreateTeamButton from "../../domains/HomePage/CreateTeamClub/CreateTeamButton/CreateTeamButton";
import { FaPen } from "react-icons/fa";
import { AiFillCodepenCircle } from "react-icons/ai";
import { RiTeamFill } from "react-icons/ri";
import MaterialIcon from "react-google-material-icons";
import { apiHandler } from "../../../src/assets/api/index";
import { endpoint } from  "../../../src/assets/api/endpoint";
import { useDispatch, useSelector } from "react-redux";
import NoticeModal from "../../../src/components/AdminDashboard/NoticeModal/NoticeModal";

const MyTeamClubTab = () => {
  const [activeTab, setActiveTab] = useState("1");
   const [rawData, setRawData] = useState([]);
   const { id } = useSelector((state) => state.login.userData);
   const [rawDataClub,setRawDataClub] =useState([]);
   const [rawDataTeam,setRawDataTeam] =useState([]);
   const [noticeModal, setNoticeModal] = useState(false);
   const [noticeModalErrMsg, setNoticeModalErrMsg] = useState("");
   const [noticeModalHeaderMsg, setNoticeModalHeaderMsg] = useState("");

   // const { authToken } = useSelector((state) => state.login.authData);

   const closeNoticeModal = () => {
       setNoticeModal(false);
       setNoticeModalErrMsg("");
       setNoticeModalHeaderMsg("");
   };
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
   useEffect(() => {
       GetClub();
       GetTeam();
   }, []);
   const GetClub = async () => {
       const result = await apiHandler({
           url: endpoint.GETBYUSERID_User_CLUB + id,
           method: "GET",
           data: null,
       });
       if (result.data.status === 404) {
           setNoticeModalHeaderMsg("Error");
           setNoticeModalErrMsg(result.data.message);
           setNoticeModal(true);
       } else {
           // if (result.data.length === 0) {
           //   setNoticeModalHeaderMsg("Error");
           //   setNoticeModalErrMsg("Please Provide data");
           //   setNoticeModal(true);
           // } else {
           console.log(result.data);
           setRawDataClub(result.data);
           // }
       }
   };
  
   const GetTeam = async () => {
       const result = await apiHandler({
           url: endpoint.GETBYUSERID_TEAM + id,
           method: "GET",
           data: null,
       });
       if (result.data.status === 404) {
           setNoticeModalHeaderMsg("Error");
           setNoticeModalErrMsg(result.data.message);
           setNoticeModal(true);
       } else {
           // if (result.data.length === 0) {
           //   setNoticeModalHeaderMsg("Error");
           //   setNoticeModalErrMsg("Please Provide data");
           //   setNoticeModal(true);
           // } else {
           console.log("hrtteam", result.data);
           setRawDataTeam(result.data);
           // }
       }
   };
  return (
      <div className="padding-tab-club1 detailcardcompo width_60_media">
          <Nav tabs className="">
              <NavItem>
                  <NavLink
                      className={{ active: activeTab === "1" }}
                      style={{ backgroundColor: "! #04AA6D", display: "flex" }}
                      onClick={() => {
                          toggle("1");
                      }}
                  >
                      <div className="fapen">
                          <span>
                              <MaterialIcon
                                  color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) "
                                  icon="hub"
                                  // Using default values:
                                  stretch={false}
                              />
                          </span>{" "}
                          <span className="icon_color_not_define">
                              {" "}
                              My Team{" "}
                          </span>
                      </div>
                  </NavLink>
              </NavItem>
              <NavItem className="background_All_Tab">
                  <NavLink
                      className={{ active: activeTab === "2" }}
                      onClick={() => {
                          toggle("2");
                      }}
                  >
                      <div className="fapen">
                          <span className="">
                              <MaterialIcon
                                  color="var(--token-d983c132-e015-4177-baf8-441dbe84f948, rgb(0, 187, 255))"
                                  icon="stream"
                                  // Using default values:
                                  stretch={false}
                              />
                          </span>{" "}
                          <span className="icon_color_not_define">
                              {" "}
                              My Club{" "}
                          </span>
                      </div>
                  </NavLink>
              </NavItem>
              <NavItem>
                  <NavLink
                      className={{ active: activeTab === "3" }}
                      onClick={() => {
                          toggle("3");
                      }}
                  >
                      <div className="fapen">
                          <span>
                              <MaterialIcon
                                  color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161))"
                                  icon="create"
                                  stretch={false}
                              />
                          </span>{" "}
                          <span className=" icon_color_not_define">
                              {" "}
                              Team & Club
                          </span>
                      </div>
                  </NavLink>
              </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
              <TabPane tabId="1" style={{ backgroundColor: "#10142c" }}>
                  <MyTeam rawDataTeam={rawDataTeam} />
              </TabPane>
              <TabPane tabId="2" style={{ backgroundColor: "#10142c" }}>
                  <Row>
                      <MyClub rawDataClub={rawDataClub} />
                  </Row>
              </TabPane>
              <TabPane tabId="3" style={{ backgroundColor: "#10142c" }}>
                  <Row>
                      <CreateTeamButton
                          rawDataTeam={rawDataTeam}
                          rawDataClub={rawDataClub}
                      />
                  </Row>
              </TabPane>
          </TabContent>
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

export default MyTeamClubTab;
