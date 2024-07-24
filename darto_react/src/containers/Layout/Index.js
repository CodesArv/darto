import React, { useState } from "react";
import Header from "./Header/Header";
import Footer from "../../components/InformationFooter/InformationFooter";
//import Footer from "../../components/Content/Content";
// import SideDrawer from '../../components/SideMenu/SideDrawer';
import Backdrop from "../../components/BackDrop/Backdrop";
import MobileHeader from "./MobileHeader/MobileHeader";

//import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { useLocation, useParams, useRouteMatch } from "react-router";
import Navbar from "../Layout/Navbar/Navbar";
//import Tournaments from '../../domains/HomePage/Tournaments/Tournaments';
import "./index.css";
import SubHeader from "./Header/SubHeader";
// import DesktopHeader from "./DesktopHeader/DesktopHeader";

// const GlobalStyle = createGlobalStyle`
//   body {
//     color: ${(props) => (props.whiteColor ? 'white' : 'black')};
//     font-family: ${(props) => props.theme.fontFamily};
//   }
// ;
//
const Layout = ({ children, recordId }) => {
  const location = useLocation();
  const params = useParams();
  let match = useRouteMatch("/tournament/detail/:id");
  let matchs = useRouteMatch("/arena/:id");
  let matched = useRouteMatch("/team/:id");
  let matchedClub = useRouteMatch("/club/:id");
  let matchClubId = useRouteMatch("/editclub/:id");
  let matchTeamId = useRouteMatch("/editteam/:id");
  let macthDetailsId = useRouteMatch("/matchdetail/:id");
  let macthScoreId = useRouteMatch("/matchscore/:id");
  let liveScoreId = useRouteMatch("/livescorecard/:id");

  // let match = useRouteMatch();
  const currentUrl = location.pathname;
  const currentUrls = location.pathname;
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  const backDropClickHandler = () => {
    setSideDrawerOpen(false);
  };

  let backdrop = "";
  if (sideDrawerOpen) {
    backdrop = <Backdrop click={() => backDropClickHandler()} />;
  }

  const HIDE_FOOTER_PAGES = [
    "/detailstournament",
    "/updatedarto",
    "/profile",
    "/darto",
    "/arena",
    "/profileitem",
    "/teamupdate",
    "/search",
    "/tabclub",
    "/participate",
    "/tapping",
    "/shareitem",
    "/dartp",
    "/paymentPlan",
    "/membership",
    "/socialConnect",
    "/setting",
    "/profileedit",
    "/loginphonenumber",
    "/galleryparticipate",
    "/mydartoedit",
    "/createteams",
    "/createclubs",
    "/gallery",
    "/tournament",
    "/dashboard",
    "/admin",
    "/login",
    "/register",
    "/password",
    "/user",
    "/teamadmin",
    "/clubadmin",
    "/cafebaradmin",
    "/liveplay",
    "/score",
    "/mobileheader",
    "/clubdetail",
    "/clubmember",
    // "/clubt",
    // "/teamt",
    "/content",
    "/footeradmin",
    "/tournament/detail/:id",
    "/content/About",
    "/arena/:id",
    "/adobe",
    "/homeflexo",
    "/about",
    "/privacy",
    "/general",
    "/log",
    "/forgots",
    "/teamclub",
    "/moredetail",
    "/clubdetailMore",
    "/team/:id",
    "/slider",
    "/club/:id",
    "/privacypolicycontent",
    "/aboutcontent",
    "/contactcontent",
    "/tc",
    "/centerbar",
    "/spacelist",
    "/playcontent",
    "/cookies",
    "/gallery",
    "/parteners",
    "/advantages",
    "/rules",
    "/offer",
    "/editteam",
    "/editclub",
    "/searchdynamic",
    "/state",
    "/userstate",
    "/adminlogin",
    "/adminforgotpassword",
    "/adminregister",
    "/userregister",
    "/userforgotpassword",
    "/scoredisplay",
    "/match",
    "/matchdetail/:id",
    "/matchscore/:id",
    "/history",
    "/editclub/:id",
    "/editteam/:id",
    "/adminpartners",
    "/livescorecard/:id",
  ];
  const HIDE_HEADER_PAGES = [
    "/updatedarto",
    "/profile",
    // "/darto",
    "/arena",
    // "/profileitem",
    "/teamupdate",
    // "/search",
    "/tabclub",
    "/participate",
    "/tapping",
    "/shareitem",
    "/dartp",
    "/paymentPlan",
    "/tournament/detail",
    "/membership",
    "/socialConnect",
    "/setting",
    "/profileedit",
    "/detailstournament",
    "/loginphonenumber",
    "/galleryparticipate",
    "/mydartoedit",
    "/createteams",
    "/createclubs",

    "/dashboard",
    "/admin",
    "/login",
    "/register",
    "/password",
    "/user",
    "/teamadmin",
    "/clubadmin",
    "/cafebaradmin",
    "/liveplay",
    "/score",
    "/mobileheader",
    "/clubdetail",
    "/clubmember",
    // "/clubt",
    // "/teamt",
    "/content",
    "/footeradmin",
    "/tournament/detail/:id",
    "/arena/:id",
    "/content/About",
    "/adobe",
    "/homeflexo",
    "/about",
    "/privacy",
    "/general",
    "/log",
    "/forgots",
    "/teamclub",
    "/moredetail",
    "/clubdetailMore",
    "/tournament",
    "/team/:id",
    "/slider",
    "/club/:id",
    "/privacypolicycontent",
    "/aboutcontent",
    "/contactcontent",
    "/tc",
    "/profileitem",
    "/darto",
    "/search",
    "/centerbar",
    "/spacelist",
    "/playcontent",
    "/cookies",
    "/gallery",
    "/parteners",
    "/advantages",
    "/rules",
    "/offer",
    "/editteam",
    "/editclub",
    "/searchdynamic",
    "/state",
    "/userstate",
    "/adminlogin",
    "/adminforgotpassword",
    "/adminregister",
    "/userregister",
    "/userforgotpassword",
    "/scoredisplay",
    "/match",
    "/matchdetail/:id",
    "/matchscore/:id",
    "/history",
    "/editclub/:id",
    "/editteam/:id",
    "/adminpartners",
    "/livescorecard/:id",
  ];
  const HIDE_SUBHEADER_PAGES = [
    "/home",
    // "/liveplay",
    // "/gallery",
    "/teamupdate",
    "/page",
    "/shareitem",
    "/createteams",
    "/createclubs",
    "/dashboard",
    "/admin",
    // "/login",
    "/register",
    "/password",
    "/user",
    "/teamadmin",
    "/clubadmin",
    "/cafebaradmin",
    "/mobileheader",
    // "/clubt",
    // "/tournament",
    "/adobe",
    "/arena/:id",
    "/footeradmin",
    "/homeflexo",
    // "/team&club",

    "/slider",
    "/team",
    "/state",
    "/userstate",
    "/adminlogin",
    "/adminforgotpassword",
    "/adminregister",
    "/search",
    "/liveplay",
    "/adminpartners",
    "/livescorecard/:id",
  ];

  // const showFooter =
  //   HIDE_FOOTER_PAGES.includes(currentUrl) ||
  //   HIDE_FOOTER_PAGES.includes(
  //     (match && match.path) ||
  //       (matchs && matchs.path) ||
  //       (matched && matched.path)
  //   ) ? false
  //   : true;

  const showFooter =
    HIDE_FOOTER_PAGES.includes(currentUrl) ||
    HIDE_FOOTER_PAGES.includes(
      (match && match.path) ||
        (matchs && matchs.path) ||
        (matched && matched.path) ||
        (matchedClub && matchedClub.path) ||
        (matchClubId && matchClubId.path) ||
        (matchTeamId && matchTeamId.path) ||
        (macthDetailsId && macthDetailsId.path) ||
        (macthScoreId && macthScoreId.path) ||
        (liveScoreId && liveScoreId.path)
    )
      ? false
      : true;
  const showHeader =
    HIDE_HEADER_PAGES.includes(currentUrl) ||
    HIDE_HEADER_PAGES.includes(
      (match && match.path) ||
        (matchs && matchs.path) ||
        (matched && matched.path) ||
        (matchedClub && matchedClub.path) ||
        (matchClubId && matchClubId.path) ||
        (matchTeamId && matchTeamId.path) ||
        (macthDetailsId && macthDetailsId.path) ||
        (macthScoreId && macthScoreId.path) ||
        (liveScoreId && liveScoreId.path)
    )
      ? false
      : true;

  return (
    <>
      <div className='bg-color3 '>
        {/* <ThemeProvider theme={{ fontFamily: 'Open Sans' }}> */}

        {showHeader && (
          <Navbar drawerToggleClickHandler={() => drawerToggleClickHandler()} />
        )}

        {showHeader && (
          <Header
            className='headr'
            drawerToggleClickHandler={() => drawerToggleClickHandler()}
          />
        )}

        {!HIDE_SUBHEADER_PAGES.includes(currentUrls) && <SubHeader />}
        {/* <DesktopHeader /> */}

        {/* <SideDrawer closeSideDrawer={() => drawerToggleClickHandler()} show={sideDrawerOpen} /> */}
        {/* <GlobalStyle /> */}
        {backdrop}
        {children}
        {showFooter && <Footer />}
        {window.innerWidth <= 768 && <MobileHeader />}
        {/* </ThemeProvider> */}
      </div>
    </>
  );
};

export default Layout;
