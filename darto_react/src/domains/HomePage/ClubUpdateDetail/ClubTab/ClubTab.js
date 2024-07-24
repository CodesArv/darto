import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink, Row } from "reactstrap";
//import classnames from 'classnames';
import MyTeamClubTab from "../../../../containers/MyTeamClubTab/MyTeamClubTab.css";
import ClubUpdateDetail from "../ClubUpdateDetail";
import "./ClubTab.css";

import MaterialIcon from "react-google-material-icons";
import ClubMemberDetail from "../../../../components/ClubMemberDetail/ClubMemberDetail";
import { useHistory, useParams } from "react-router-dom";

const ClubTab = () => {
  const params = useParams();
  const [activeTab, setActiveTab] = useState("1");
  const [recordByid, setRecordById] = useState(params.id);
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  const history = useHistory();
  const [rawData, setRawData] = useState({});
  const editProfile = () => {
   console.log("gg",params.id)
    history.push("/editclub/"+params.id);
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
                color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) '
                icon='hub'
                size='12px'
                stretch={false}
              />
            </span>{" "}
            <div className='stackupdate2'>
              <h1 className='stackupdate3'>Club</h1>
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
                color='var(--token-d983c132-e015-4177-baf8-441dbe84f948, rgb(0, 187, 255))'
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
          <ClubUpdateDetail recordByid={recordByid} />
        </TabPane>
        <TabPane tabId='2' style={{ backgroundColor: "#10142c" }}>
          <Row>
            <ClubMemberDetail recordByid={recordByid} />
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default ClubTab;
