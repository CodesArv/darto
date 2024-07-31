import React, { useState } from "react";
import { AiOutlineMenu, AiFillHome } from "react-icons/ai";
import { FaUsers, FaRegChartBar, FaCogs } from "react-icons/fa";
import { MdLocalCafe } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarHeader,
  SubMenu,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

const SideNavigation = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation(); // get the current route

  // handle collapsing of sidebar
  const onClickMenuIcon = () => {
    setCollapsed(!collapsed);
  };

  // added styles
  const styles = {
    sideBarHeight: {
      height: "100%",
      background: "red",
    },
    menuIcon: {
      backgroundColor: "#33a4ff",
      color: "#fff",
      padding: "10px 40px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
    },
    menuItem: {
      backgroundColor: "#10142c",
      color: "white",
      padding: "5px 5px",
      textDecoration: "none",
      display: "flex",
      alignItems: "center",
    },
    activeMenuItem: {
      backgroundColor: "#1c1f3a",
      color: "white",
    },
    menuContainer: {
      backgroundColor: "#10142c",
      height: "100%",
    },
    header: {
      backgroundColor: "#10142c",
      textAlign: "center",
      cursor: "pointer",
    },
  };

  return (
    <div style={{ backgroundColor: "white" }}>
      <ProSidebar style={styles.sideBarHeight} collapsed={collapsed}>
      <SidebarHeader style={styles.header}>
          <div style={styles.menuIcon} onClick={onClickMenuIcon}>
            <h1 style={{ margin: 0 }}>Menu</h1> 
            {/* <AiOutlineMenu fontSize="2rem" /> */}
          </div>
        </SidebarHeader>
        <Menu iconShape="square" style={styles.menuContainer}>
          <div>
            <MenuItem
              style={{
                ...styles.menuItem,
                ...(location.pathname === "/admin" && styles.activeMenuItem),
              }}
            >
              <AiFillHome style={{ marginRight: "15px", fontSize:"40px",padding:"7px", borderRadius:"20% 20%", backgroundColor:"#33a4ff" }} />
              <Link to="/admin" style={{ color: "inherit" }}>
                Tournament & Event
              </Link>
            </MenuItem>
          </div>
          <div>
            <MenuItem
              style={{
                ...styles.menuItem,
                ...(location.pathname === "/teamadmin" && styles.activeMenuItem),
              }}
            >
              <FaUsers style={{ marginRight: "15px", fontSize:"40px",padding:"7px", borderRadius:"20% 20%", backgroundColor:"#33a4ff" }} />
              <Link to="/teamadmin" style={{ color: "inherit" }}>
                Teams
              </Link>
            </MenuItem>
          </div>
          <div>
            <MenuItem
              style={{
                ...styles.menuItem,
                ...(location.pathname === "/clubadmin" && styles.activeMenuItem),
              }}
            >
              <FaRegChartBar style={{ marginRight: "15px", fontSize:"40px",padding:"7px", borderRadius:"20% 20%", backgroundColor:"#33a4ff" }} />
              <Link to="/clubadmin" style={{ color: "inherit" }}>
                Clubs
              </Link>
            </MenuItem>
          </div>
          <div>
            <MenuItem
              style={{
                ...styles.menuItem,
                ...(location.pathname === "/cafebaradmin" &&
                  styles.activeMenuItem),
              }}
            >
              <MdLocalCafe style={{ marginRight: "15px", fontSize:"40px",padding:"7px", borderRadius:"20% 20%", backgroundColor:"#33a4ff" }} />
              <Link to="/cafebaradmin" style={{ color: "inherit" }}>
                Centers and Cafe & Bars
              </Link>
            </MenuItem>
          </div>
          <div>
            <MenuItem
              style={{
                ...styles.menuItem,
                ...(location.pathname === "/footeradmin" &&
                  styles.activeMenuItem),
              }}
            >
              <FaCogs style={{ marginRight: "15px", fontSize:"40px",padding:"7px", borderRadius:"20% 20%", backgroundColor:"#33a4ff" }} />
              <Link to="/footeradmin" style={{ color: "inherit" }}>
                Footer
              </Link>
            </MenuItem>
          </div>
          <div>
            <MenuItem           
              
              style={{
                ...styles.menuItem,
                ...(location.pathname === "/slider" && styles.activeMenuItem),
              }}
            >
                <AiOutlineMenu style={{ marginRight: "15px", fontSize:"40px",padding:"7px", borderRadius:"20% 20%", backgroundColor:"#33a4ff" }} />
                  
                  <Link to="/slider" style={{ color: "inherit" }}>
                Slider
              </Link>
              {/* <MenuItem style={styles.menuItem}>Slider Setting</MenuItem> */}
            </MenuItem>
          </div>
          <div>
            <MenuItem
              style={{
                ...styles.menuItem,
                ...(location.pathname === "/state" && styles.activeMenuItem),
              }}
            >
              <FaCogs style={{ marginRight: "15px", fontSize:"40px",padding:"7px", borderRadius:"20% 20%", backgroundColor:"#33a4ff" }} />
              <Link to="/state" style={{ color: "inherit" }}>
                Council
              </Link>
            </MenuItem>
          </div>
          <div>
            <MenuItem
              style={{
                ...styles.menuItem,
                ...(location.pathname === "/userstate" &&
                  styles.activeMenuItem),
              }}
            >
              <FaUsers style={{ marginRight: "15px", fontSize:"40px",padding:"7px", borderRadius:"20% 20%", backgroundColor:"#33a4ff" }} />
              <Link to="/userstate" style={{ color: "inherit" }}>
                User
              </Link>
            </MenuItem>
          </div>
          <div>
            <MenuItem
              style={{
                ...styles.menuItem,
                ...(location.pathname === "/adminpartners" &&
                  styles.activeMenuItem),
              }}
            >
              <FaUsers style={{ marginRight: "15px", fontSize:"40px",padding:"7px", borderRadius:"20% 20%", backgroundColor:"#33a4ff" }} />
              <Link to="/adminpartners" style={{ color: "inherit" }}>
                Partners
              </Link>
            </MenuItem>
          </div>
        </Menu>
      </ProSidebar>
    </div>
  );
};

export default SideNavigation;
