import React, { useState } from "react";
import "./MobileHeader.css";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import SearchIcon from "@mui/icons-material/Search";
import AdjustIcon from "@mui/icons-material/Adjust";
import MaterialIcon from "react-google-material-icons";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link, useHistory } from "react-router-dom";

const MobileHeader = () => {
  const history = useHistory();
  const [selectedId, setSelectedId] = useState("home");
  // const onSerach =()=>{
  //  history.push('/home');
  // }
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
      <div className='mobile-Header'>
        <div
          className={
            selectedId === "/home"
              ? "_1-frame-home home-row-fun active"
              : "_1-frame-home home-row-fun "
          }
          onClick={() => acivatePage("/home")}
        >
          <div className=''>
            <MaterialIcon
              color='var(--token-2a633678-f86b-4ab5-94be-ee4f65254cde, rgb(120, 144, 161)) '
              icon='other_houses'
              // Using default values:
              stretch={false}
            />
            {/* <OtherHousesIcon style={{fontSize:'32px'}} /> */}
          </div>
          <div className=''>Home</div>
        </div>
        <div
          className={
            selectedId === "/search"
              ? "_1-frame-home home-row-fun active"
              : "_1-frame-home home-row-fun "
          }
          onClick={() => acivatePage("/search")}
        >
          <div className=''>
            <MaterialIcon
              color='var(--token-2a633678-f86b-4ab5-94be-ee4f65254cde, rgb(150, 168, 182)) '
              icon='search'
              // Using default values:
              stretch={false}
            />
          </div>
          <div className=''>Find</div>
        </div>
        <div
          className={
            selectedId === "/centerbar"
              ? "_1-frame-home home-row-fun active"
              : "_1-frame-home home-row-fun "
          }
          onClick={() => acivatePage("/centerbar")}
        >
          <div className=''>
            <MaterialIcon
              color='var(--token-a23514c0-d291-45a7-a6d4-86d49c549881, rgb(0, 187, 255)) '
              icon='adjust'
              stretch={true}
            />
          </div>
          <div className=''>Darto Arena</div>
        </div>
        <div
          className={
            selectedId === "/profileitem"
              ? "_1-frame-home home-row-fun active"
              : "_1-frame-home home-row-fun "
          }
          onClick={() => acivatePage("/profileitem")}
        >
          <div className=''>
            <MaterialIcon
              color='var(--token-a23514c0-d291-45a7-a6d4-86d49c549881, rgb(0, 187, 255)) '
              icon='account_circle'
              stretch={true}
            />
          </div>
          <div className=''>Me</div>
        </div>
      </div>
    </>
  );
};
export default MobileHeader;
