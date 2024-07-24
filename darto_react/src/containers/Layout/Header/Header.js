import React, { useState } from "react";
import { Container, Row } from "reactstrap";
//import logos from './logos.png';
import "./Header.css";
import "./headerHome.css";
import "./scrollbar.css";
import { Link, useHistory } from "react-router-dom";
import { darkScrollbar } from "@material-ui/core";
import { MDBContainer } from "mdbreact";
// import ScrollIndicator from "./ScrollIndicator";
function Header() {
  const history = useHistory();
  const [selectedId, setSelectedId] = useState("home");
  // const onSerach =()=>{
  //  history.push('/home');
  // }
  const updateLink = (str) => {
    console.log("update link");
    setSelectedId(str);
  };
  return (
    <>
      {/* <ScrollIndicator/> */}
      <header class='header header_Home_Devided'>
        <MDBContainer className='bg_main_color'>
          <div class='navbar1 scrollbar scrollbar-primary  mt-5 mx-auto'>
            <ul
              class='nav-menu'
              style={{ position: "relative", marginBottom: "0px" }}
            >
              <li class='nav-item background_Nav'>
                <Link
                  to='/home'
                  onClick={() => updateLink("home")}
                  className={
                    selectedId === "home"
                      ? "nav-link nav-link-paddi active"
                      : "nav-link nav-link-paddi "
                  }
                >
                  Home
                </Link>
              </li>
              <li class='nav-item background_Nav'>
                <Link
                  to='/tournament'
                  onClick={() => updateLink("tournament")}
                  className={
                    selectedId === "tournament"
                      ? "nav-link nav-link-paddi active"
                      : "nav-link nav-link-paddi "
                  }
                >
                  Tournament & Event
                </Link>
              </li>
              {/* <li class="nav-item" style={{ backgroundColor: "#10142c" }}>
              <Link
                to="/gallery"
                class="nav-link nav-link-paddi"
                style={{ color: "#5c778a" }}
              >
                Clubs & Teams
              </Link>
            </li> */}
              <li class='nav-item background_Nav'>
                <Link
                  onClick={() => updateLink("club")}
                  to='/teamclub'
                  className={
                    selectedId === "club"
                      ? "nav-link nav-link-paddi active"
                      : "nav-link nav-link-paddi  "
                  }
                >
                  Clubs & Teams
                </Link>
              </li>
              {/* <li class="nav-item background_Nav">
              <Link
                to="/page"
                onClick={() => updateLink("store")}
                className={
                  selectedId === "store"
                    ? "nav-link nav-link-paddi active"
                    : "nav-link nav-link-paddi "
                }
              >
                Store
              </Link>
            </li> */}

              <li class='nav-item background_Nav'>
                <Link
                  to='/liveplay'
                  onClick={() => updateLink("play")}
                  className={
                    selectedId === "play"
                      ? "nav-link nav-link-paddi active"
                      : "nav-link nav-link-paddi "
                  }
                >
                  Live Play
                </Link>
              </li>
              <li class='nav-item background_Nav'>
                <Link
                  to='/match'
                  onClick={() => updateLink("match")}
                  className={
                    selectedId === "contact"
                      ? "nav-link nav-link-paddi active"
                      : "nav-link nav-link-paddi "
                  }
                >
                  Matches
                </Link>
              </li>
              <li class='nav-item background_Nav'>
                <Link
                  to='/offer'
                  onClick={() => updateLink("offers")}
                  className={
                    selectedId === "offers"
                      ? "nav-link nav-link-paddi active"
                      : "nav-link nav-link-paddi "
                  }
                >
                  Offers
                </Link>
              </li>
              <li class='nav-item background_Nav'>
                <Link
                  onClick={() => updateLink("gallery")}
                  to='/gallery'
                  className={
                    selectedId === "gallery"
                      ? "nav-link nav-link-paddi active"
                      : "nav-link nav-link-paddi "
                  }
                >
                  Gallery
                </Link>
              </li>
              {/* <li class="nav-item background_Nav">
              <Link
                to="page"
                onClick={() => updateLink("news")}
                className={
                  selectedId === "news"
                    ? "nav-link nav-link-paddi active"
                    : "nav-link nav-link-paddi "
                }
              >
                News & Calendar
              </Link>
            </li> */}
              <li class='nav-item background_Nav'>
                <Link
                  to='/parteners'
                  onClick={() => updateLink("/parteners")}
                  className={
                    selectedId === "partener"
                      ? "nav-link nav-link-paddi active"
                      : "nav-link nav-link-paddi "
                  }
                >
                  Partners & Franchies
                </Link>
              </li>
              <li class='nav-item background_Nav'>
                <Link
                  to='/spacelist'
                  onClick={() => updateLink("space")}
                  className={
                    selectedId === "contact"
                      ? "nav-link nav-link-paddi active"
                      : "nav-link nav-link-paddi "
                  }
                >
                  Open Darto Center
                </Link>
              </li>
            </ul>
          </div>
        </MDBContainer>
      </header>
    </>
  );
}
export default Header;
