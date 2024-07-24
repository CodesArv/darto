import React, { useState } from "react";
import "./Navbar.css";
import { GrHome } from "react-icons/gr";
import { Container, Row, Col } from "reactstrap";
import logos from "./logos.png";
import { Link, useHistory } from "react-router-dom";
import DartoArena from "../../DartoArena/DartoArena";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AdjustIcon from "@mui/icons-material/Adjust";
import MaterialIcon from "react-google-material-icons";
import SearchBar from "../../../components/SearchBar/SearchBar";
import logoDarto from "../../../assets/images/logoDarto.png";
function Navbar() {
  const history = useHistory();
  const [selectedId, setSelectedId] = useState("home");

  const updateLink = (str) => {
    console.log("update link");
    setSelectedId(str);
  };

  const acivatePage = (url) => {
    setSelectedId(url);
    history.push(url);
  };

  return (
    <>
      <div className='header_FixwithSubheader  sub_Home_Header .header_with_sub'>
        <div className='navbar1 navbarHeader_Home'>
          <div className='left_Align_Media'>
            {" "}
            <button className='buttonLogo'>
              <img
                src={logoDarto}
                className='logo1'
                alt='Logo'
                onClick={() => acivatePage("/home")}
              />{" "}
            </button>
          </div>
          {window.innerWidth > 768 && (
            <div className='space-lo'>
              <div
                style={{ cursor: "pointer" }}
                className={
                  selectedId === "/home" ? "flex-dir  active" : "flex-dir "
                }
                onClick={() => acivatePage("/home")}
              >
                <span>
                  <MaterialIcon
                    color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) '
                    icon='other_houses'
                    // Using default values:
                    stretch={false}
                    size='20px'
                  />{" "}
                </span>
                <span className='fonsize_Header'>Home</span>
              </div>
              <div
                style={{ cursor: "pointer" }}
                className={
                  selectedId === "/search" ? "flex-dir active" : "flex-dir "
                }
                onClick={() => acivatePage("/search")}
              >
                <span>
                  <MaterialIcon
                    color='var(--token-2a633678-f86b-4ab5-94be-ee4f65254cde, rgb(150, 168, 182)) '
                    icon='search'
                    // Using default values:
                    stretch={false}
                    size='20px'
                  />{" "}
                </span>
                <span className='fonsize_Header'>Find</span>
              </div>
              <div
                style={{ cursor: "pointer" }}
                className={
                  selectedId === "/darto" ? "flex-dir active" : "flex-dir "
                }
                onClick={() => acivatePage("/darto")}
              >
                <span>
                  {" "}
                  <MaterialIcon
                    color='var(--token-a23514c0-d291-45a7-a6d4-86d49c549881, rgb(0, 187, 255)) '
                    icon='adjust'
                    stretch={true}
                    size='20px'
                  />
                </span>
                <span className='fonsize_Header'>
                  Darto
                  <span style={{ color: "#10142c" }}>_</span>
                  Center
                </span>
              </div>
              <div
                style={{ cursor: "pointer" }}
                className={
                  selectedId === "/profileitem"
                    ? "flex-dir active"
                    : "flex-dir "
                }
                onClick={() => acivatePage("/profileitem")}
              >
                {" "}
                <span>
                  <MaterialIcon
                    color='var(--token-a23514c0-d291-45a7-a6d4-86d49c549881, rgb(0, 187, 255)) '
                    icon='account_circle'
                    stretch={true}
                    size='20px'
                  />
                </span>
                <span className='fonsize_Header'>Me</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default Navbar;
