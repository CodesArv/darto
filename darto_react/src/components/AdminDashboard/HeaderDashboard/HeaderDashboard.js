import React from "react";
import logos from "./logos.png";
import { AiOutlineUser } from "react-icons/ai";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavItem,
  NavLink,
} from "reactstrap";
import SideNavigation from "../SideNavigation/SideNavigation";

const HeaderDashboard = () => {
  return (
    <div>
      <Navbar
        color='black'
        light
        expand='md'
        class='mb-0'
        style={{ marginBottom: "0" }}
      >
        <NavbarBrand href='/'>
          {" "}
          <img src={logos} alt='Logo' style={{ width: "20%", height: "10%" }} />
          ;
        </NavbarBrand>
        <NavbarText></NavbarText>
      </Navbar>
    </div>
  );
};

export default HeaderDashboard;
