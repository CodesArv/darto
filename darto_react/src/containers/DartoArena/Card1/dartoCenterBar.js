import React, { useState } from "react";
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
import "../../MyTeamClubTab/MyTeamClubTab.css";
// import MyTeam from "../MyTeam/MyTeam";
// import MyClub from "../../domains/HomePage/Club/MyClub";
// import CreateTeamButton from "../../domains/HomePage/CreateTeamClub/CreateTeamButton/CreateTeamButton";
import { FaPen } from "react-icons/fa";
import { AiFillCodepenCircle } from "react-icons/ai";
import { RiTeamFill } from "react-icons/ri";
import MaterialIcon from "react-google-material-icons";
import DartoArena from "../DartoArena";

const MyTeamClubTab = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className='padding-tab-club1 detailcardcompo width_60_media'>
      <Nav tabs className=''>
        <NavItem className=''>
          <NavLink
            className={{ active: activeTab === "1" }}
            style={{ backgroundColor: "! #04AA6D", display: "flex" }}
            onClick={() => {
              toggle("1");
            }}
          >
            <div className='fapen '>
              <span>
                {/* <MaterialIcon
                color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) "
                icon="hub"
              
                // Using default values:
                stretch={false}
              /> */}
              </span>{" "}
              <span className='icon_color_not_define '> All </span>
            </div>
          </NavLink>
        </NavItem>
        <NavItem className='background_All_Tab'>
          <NavLink
            className={{ active: activeTab === "2" }}
            onClick={() => {
              toggle("2");
            }}
          >
            <div className='fapen'>
              <span className=''>
                <MaterialIcon
                  color='var(--token-d983c132-e015-4177-baf8-441dbe84f948, rgb(0, 187, 255))'
                  icon='apartment'
                  // Using default values:
                  stretch={false}
                />
              </span>{" "}
              <span className='icon_color_not_define'>Centers</span>
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
            <div className='fapen'>
              <span>
                <MaterialIcon
                  color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161))'
                  icon='local_bar'
                  // Using default values:

                  stretch={false}
                />
              </span>{" "}
              <span className=' icon_color_not_define'>Cafe & Bars</span>
            </div>
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId='1' style={{ backgroundColor: "#10142c" }}>
          {/* <MyTeam /> */}
        </TabPane>
        <TabPane tabId='2' style={{ backgroundColor: "#10142c" }}>
          <Row>
            <DartoArena />
          </Row>
        </TabPane>
        <TabPane tabId='3' style={{ backgroundColor: "#10142c" }}>
          <Row>{/* <CreateTeamButton /> */}</Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default MyTeamClubTab;
