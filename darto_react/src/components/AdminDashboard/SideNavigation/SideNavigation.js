import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaGem, FaHeart } from "react-icons/fa";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import TourIcon from "@mui/icons-material/Tour";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ApartmentIcon from "@mui/icons-material/Apartment";
import "./SideNavigation.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarHeader,
  SubMenu,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

import { AiOutlineUser } from "react-icons/ai";
import MaterialIcon from "react-google-material-icons";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavItem,
  NavLink,
} from "reactstrap";
import { Container, Row, Col } from "react-bootstrap";

const SideNavigation = () => {
  const history = useHistory();
  const sliders = () => {
    history.push("/slider");
  };
  const [collapsed, setCollapsed] = useState(false);

  // added styles
  const styles = {
    sideBarHeight: {
      height: "100%",
      background: "red",
    },
    menuIcon: {
      float: "right",
      margin: "10px",
    },
  };
  const onClickMenuIcon = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div style={{ backgroundColor: "white" }}>
      <ProSidebar style={styles.sideBarHeight} collapsed={collapsed}>
        <SidebarHeader style={{ backgroundColor: "#10142c" }}>
          <div style={styles.menuIcon} onClick={onClickMenuIcon}>
            <AiOutlineMenu fontSize='3rem' />
          </div>
        </SidebarHeader>
        <Menu
          iconShape='square'
          style={{ backgroundColor: "#10142c", height: "100%" }}
        >
          <div className='border_top_left_right'>
            <MenuItem className='nav_bg_col'>
              {/* <MaterialIcon
              color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161))'
              icon='ads_click'
              stretch={true}
              size='16px'
            /> */}
              <Link to='/admin'>Tournament & Event</Link>
            </MenuItem>
          </div>
          <div className='border_top_left_right'>
            <MenuItem className='nav_bg_col'>
              {/* <MaterialIcon
              color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161))'
              icon='hub'
              stretch={true}
              size='16px'
            /> */}
              <Link to='/teamadmin'>Teams</Link>
            </MenuItem>
          </div>
          {/* <div className="border_top_left_right">
            <MenuItem className='nav_bg_col'>
          
              <Link to=''>Admin</Link>
            </MenuItem>
          </div> */}
          <div className='border_top_left_right'>
            <MenuItem className='nav_bg_col'>
              {/* <MaterialIcon
              color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161))'
              icon='stream'
              stretch={true}
              size='16px'
            /> */}
              <Link to='/clubadmin'>Clubs</Link>
            </MenuItem>
          </div>
          <div className='border_top_left_right'>
            <MenuItem className='nav_bg_col'>
              {/* <MaterialIcon
              color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161))'
              icon='apartment'
              stretch={true}
              size='16px'
            /> */}
              <Link to='/cafebaradmin'>Centers and Cafe & Bars</Link>
            </MenuItem>
          </div>
          <div className='border_top_left_right'>
            <MenuItem className='nav_bg_col'>
              {/* <MaterialIcon
              color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161))'
              icon='ads_click'
              stretch={true}
              size='16px'
            /> */}
              <Link to='/footeradmin'>Footer</Link>
            </MenuItem>
          </div>
          {/* <MenuItem icon={<LocalBarIcon style={{fontSize:'3rem', backgroundColor:'#10142c'}} />} >
                    <Link to="/slider" style={{backgroundColor:'#10142c'}}>Slider</Link>
               </MenuItem>
               */}
          <div className='border_top_left_right'>
            <SubMenu title='Slider' onClick={() => sliders()}>
              {/* <MaterialIcon
              color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161))'
              icon='ads_click'
              stretch={true}
              size='16px'
            /> */}
              <MenuItem>Slider Setting</MenuItem>
            </SubMenu>
          </div>
          <div className='border_top_left_right'>
            <MenuItem className='nav_bg_col'>
              {/* <MaterialIcon
              color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161))'
              icon='ads_click'
              stretch={true}
              size='16px'
            /> */}
              <Link to='/state'>Council</Link>
            </MenuItem>
          </div>
          <div className='border_top_left_right'>
            <MenuItem className='nav_bg_col'>
              {/* <MaterialIcon
              color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161))'
              icon='ads_click'
              stretch={true}
              size='16px'
            /> */}
              <Link to='/userstate'>User</Link>
            </MenuItem>
          </div>
          <div className='border_top_left_right'>
            <MenuItem className='nav_bg_col'>
              {/* <MaterialIcon
              color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161))'
              icon='ads_click'
              stretch={true}
              size='16px'
            /> */}
              <Link to='/adminpartners'>Partners</Link>
            </MenuItem>
          </div>
        </Menu>
      </ProSidebar>
    </div>
  );
};

export default SideNavigation;
