import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink, Row } from "reactstrap";

import MyTeamClubTab from "../../../../containers/MyTeamClubTab/MyTeamClubTab.css";
import "./TeamTab.css";
import TeamUpdate from "../TeamUpdate";

import MaterialIcon from "react-google-material-icons";
import TeamMemberDetail from "../../../../components/TeamMemberDetail/TeamMemberDetail";

import { useHistory, useParams } from "react-router-dom";

const TeamTab = () => {
  const parmas = useParams();
  console.log("parmas", parmas);
  const [activeTab, setActiveTab] = useState("1");
  const [recordByid, setRecordById] = useState(parmas.id);
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  const history = useHistory();
  const [rawData, setRawData] = useState({});
  const editProfile = () => {
    history.push("/editteam/" + parmas.id);
  };
  return (
    <div className='padding-tab-club1 width_60_media'>
      <Nav tabs className='padding-tab-club2'>
        <NavItem>
          <NavLink
            className={{ active: activeTab === "1" }}
            style={{ backgroundColor: "! #04AA6D", display: "flex" }}
            onClick={() => {
              toggle("1");
            }}
          >
            <span className='fCLUBOPN'>
              <MaterialIcon
                color=' rgb(120, 144, 161) '
                icon='hub'
                size='12px'
                // Using default values:
                stretch={false}
              />
            </span>{" "}
            <div className='stackupdate2'>
              <h1 className='stackupdate3'>Team</h1>

              {/* <div className="members-list">
         <h1 >Team</h1>
         </div> */}
            </div>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            style={{ display: "flex" }}
            className={{ active: activeTab === "2" }}
            onClick={() => {
              toggle("2");
            }}
          >
            <span className='fCLUBOPN'>
              <MaterialIcon
                color='rgb(0, 187, 255)'
                icon='stream'
                size='12px'
                stretch={false}
              />
            </span>{" "}
            <div className='stackupdate2'>
              <h1 className='stackupdate3'>Members List</h1>
            </div>
          </NavLink>
        </NavItem>
        <NavItem style={{ float: "right" }}>
          <div className='stackupdate1'>
            <div className='editstack'>
              <button className='editstack2' onClick={() => editProfile()}>
                Edit
              </button>
            </div>
          </div>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId='1' style={{ backgroundColor: "#10142c" }}>
          <TeamUpdate recordByid={recordByid} />
        </TabPane>
        <TabPane tabId='2' style={{ backgroundColor: "#10142c" }}>
          <Row>
            <TeamMemberDetail recordByid={recordByid} />
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default TeamTab;
