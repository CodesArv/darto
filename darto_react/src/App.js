import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ProtectedRoute from "./hocs/ProtectedRoute/ProtectedRoute";
import UserProtected from "./hocs/ProtectedRoute/UserProtected";
import Layout from "./containers/Layout/Index";

import "./App.css";


import DartoArena from "../src/containers/DartoArena/DartoArena";
import ArenaProfile from "./containers/ArenaProfile/ArenaProfile";
import MyTeam from "./containers/MyTeam/MyTeam";

import Ccarousal from "./components/Ccarousel/Ccarousel";
import MyClub from "./domains/HomePage/Club/MyClub";
import TeamUpdate from "./domains/HomePage/TeamUpdate/TeamUpdate";
import ClubUpdateDetail from "./domains/HomePage/ClubUpdateDetail/ClubUpdateDetail";
import CreateTeamButton from "./domains/HomePage/CreateTeamClub/CreateTeamButton/CreateTeamButton";

import Tournaments from "../src/containers/Tournaments/Tournaments";

import Profile from "./components/Profile/Profile";
import SocialConnect from "./containers/SocialConnect/SocialConnect";
import Setting from "./containers/Setting/Setting";
import DetailsTournaments from "../src/components/DetailsTournaments/DetailsTournament";

import EditProfile from "./components/EditProfile/EditProfile";
import Membership from "./components/Membership/Membership";

import Gallery from "./domains/HomePage/Gallery/Gallery";
import PaymentPlan from "./containers/PaymentandPlan/PaymentPlan";
import CreateTeams from "./domains/HomePage/CreateTeamClub/CreateTeams/CreateTeams";
import CreateClub from "./domains/HomePage/CreateTeamClub/CreateClub/CreateClub";
import ProfileItem from "./components/ProfileItem/ProfileItem";
import MyProfileEdit from "./components/MyProfileEdit/MyProfileEdit";
import UpdateDarto from "./containers/UpdateDarto/UpdateDarto";
import PageConstruction from "./containers/PageConstruction/PageConstruction";
import SearchBar from "./components/SearchBar/SearchBar";
import MyTeamClubTab from "./containers/MyTeamClubTab/MyTeamClubTab";
import ParticipateForm from "./containers/ParticipateForm/ParticipateForm";
import TappingLogin from "./containers/TappingLogin/TappingLogin";
import ShareItem from "./containers/ShareItem/ShareItems/ShareItems";
import Dartprofile from "./components/Dartprofile/Dartprofile";
import HowToPlay from "./containers/HowToPlay/HowToPlay";
import LoginPhoneNumber from "./containers/TappingLogin/LoginPhoneNumber/LoginPhoneNumber";
import GalleryParticipate from "./components/DetailsTournaments/GalleryParticipate";
import MyDartoEdit from "./components/MyDartoEdit/MyDartoEdit";
import Admin from "./components/AdminDashboard/TournamentAdmin/Admin";
import TableView from "./components/AdminDashboard/TournamentAdmin/TournamentView/TournamentView";

import LoginUser from "./containers/TappingLogin/Login/UserForm/LoginUser/LoginUser";
import ForgotPassword from "./containers/TappingLogin/Login/UserForm/ForgotPassword/ForgotPassword";

import LoginAdmin from "./components/AdminDashboard/AdminForm/LoginAdmin/LoginAdmin";

import AdminRegisterPage from "./components/AdminDashboard/AdminForm/AdminRegisterPage/AdminRegisterPage";

import AdminForgotPassword from "./components/AdminDashboard/AdminForm/ForgotPassword/AdminForgotPassword";

import TeamAdmin from "./components/AdminDashboard/TeamAdmin/TeamAdmin";
import ClubAdmin from "./components/AdminDashboard/ClubAdmin/ClubAdmin";
import CafeBarAdmin from "./components/AdminDashboard/CafeBars/CafeBarAdmin";
import LivePlays from "./components/LivePlay/LivePlays/LivePlays";
import ScoreCard from "./components/LivePlay/CommonMatchCard/ScoreCard/ScoreCard";
import ClubMemberDetail from "./components/ClubMemberDetail/ClubMemberDetail";
import ClubTab from "./domains/HomePage/ClubUpdateDetail/ClubTab/ClubTab";
import TeamTab from "./domains/HomePage/TeamUpdate/TeamTab/TeamTab";
import FooterTable from "./components/AdminDashboard/Footer/FooterTable/FooterTable";
import FooterAdmin from "./components/AdminDashboard/Footer/FooterAdmin";
import Content from "./components/Content/Content";
import Login from "./containers/TappingLogin/Login/Login";
import TeamClubTab from "./components/TeamAndClub/TeamClubTab/TeamClubTab";
import TeamMoreDetail from "./components/TeamAndClub/TeamMoreDetail/TeamMoreDetail";
import ClubMoreDetail from "./components/TeamAndClub/ClubMoreDetail/ClubMoreDetail";
import DesktopHeader from "./containers/Layout/DesktopHeader/DesktopHeader";
import SliderShow from "./components/AdminDashboard/SliderShow/SliderShow";
import SliderSet from "./components/AdminDashboard/SliderSetting/SliderSet/SliderSet";
import AboutContent from "./containers/Layout/FooterInfo/GeneralInfo/About/AboutContent";
import ContactUsContent from "./containers/Layout/FooterInfo/GeneralInfo/ContactUs/ContactUsContent";
import PrivacyPolicyContent from "./containers/Layout/FooterInfo/WebInfo/PrivacyPolicy/PrivacyPolicyContent";
import TearmConditionContent from "./containers/Layout/FooterInfo/GeneralInfo/General/TearmConditionContent";
import dartoCenterBar from "./containers/DartoArena/Card1/dartoCenterBar";
import listSpace from "./components/listYourSpace/listSpace";
import howPlay from "./containers/Layout/FooterInfo/GeneralInfo/howPlayContent/howPlay";
import cookiesContent from "./containers/Layout/FooterInfo/WebInfo/cookiesContent/cookiesContent";
import Partener from "./containers/partenerFrenchies/Partener";
import DartoRules from "./containers/Layout/FooterInfo/GeneralInfo/dartoRules/DartoRules";
import AdvantagesDarto from "./containers/Layout/FooterInfo/GeneralInfo/Advantages/advantagesDarto";
import OfferDarto from "./containers/offerCard/OfferDarto";
import EditTeam from "./containers/EditTeamClub/editTeam";
import EditClub from "./containers/EditTeamClub/editClub";
import Search from "./components/SearchBar/searchDynamic";
import State from "./components/AdminDashboard/stateBoard/state";
import User from "./components/AdminDashboard/User/User";
import UserRegisterPage from "./containers/TappingLogin/Login/UserForm/UserRegisterPage/UserRegisterPage";
import UserForgotPassword from "./containers/TappingLogin/Login/UserForm/ForgotPassword/ForgotPassword";
import MatchScoreDisplay from "./components/LivePlay/Match/MatchScoreDisplay";
import Stats from "./components/LivePlay/CommonMatchCard/Stats/Stats";
import Scores from "./components/LivePlay/Scores/Scores";
import History from "./components/LivePlay/History/History";
import Adminpartners from "./components/AdminDashboard/AdminPartners/AdminPartners";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LiveScoreCard from "./components/LivePlay/CommonMatchCard/LiveScoreCard/LiveScoreCard";
export default function App() {
  toast.configure({
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
	});
  return (
      <BrowserRouter>
          <div className="devider_IN_60">
              <Layout>
                  <div className="">
                      <Switch>
                          <Route exact path="/home" component={Ccarousal} />
                          <UserProtected
                              exact
                              // strict
                              path="/tournament/detail/:id/"
                              component={DetailsTournaments}
                          />
                          <Route
                              exact
                              path="/tournament"
                              component={Tournaments}
                          />
                          <Route exact path="/gallery" component={Gallery} />
                          <Route exact path="/darto" component={DartoArena} />
                          <UserProtected
                              exact
                              path="/profile"
                              component={Profile}
                          />
                          <UserProtected
                              exact
                              path="/setting"
                              component={Setting}
                          />
                          <UserProtected
                              exact
                              path="/socialConnect"
                              component={SocialConnect}
                          />
                          <Route
                              exact
                              path="/editprofile"
                              component={EditProfile}
                          />
                          <UserProtected
                              exact
                              path="/arena/:id"
                              component={ArenaProfile}
                          />
                          <UserProtected
                              exact
                              path="/membership"
                              component={Membership}
                          />
                          <Route
                              exact
                              path="/paymentPlan"
                              component={PaymentPlan}
                          />
                          <Route
                              exact
                              path="/userforgotpassword"
                              component={UserForgotPassword}
                          />
                          <Route exact path="/log" component={Login} />
                          <UserProtected
                              exact
                              path="/matchdetail/:id"
                              component={Stats}
                          />
                          <Route exact path="/team">
                              <MyTeam />
                          </Route>
                          <Route exact path="/Club" component={MyClub} />
                          <Route
                              exact
                              path="/teamupdate"
                              component={TeamUpdate}
                          />

                          <Route path="/content" component={Content} />
                          <Route
                              exact
                              path="/clubdetail"
                              component={ClubUpdateDetail}
                          />
                          <Route exact path="/createteam">
                              <CreateTeamButton />
                          </Route>
                          <Route exact path="/createteams">
                              <CreateTeams />
                          </Route>
                          <Route exact path="/createclubs">
                              <CreateClub />
                          </Route>
                          <Route
                              exact
                              path="/profileitem"
                              component={ProfileItem}
                          />
                          <Route
                              exact
                              path="/profileedit"
                              component={MyProfileEdit}
                          />
                          <Route
                              exact
                              path="/updatedarto"
                              component={UpdateDarto}
                          />
                          <Route
                              exact
                              path="/page"
                              component={PageConstruction}
                          />
                          <Route exact path="/search" component={SearchBar} />
                          <UserProtected
                              exact
                              path="/tabclub"
                              component={MyTeamClubTab}
                          />
                          <Route
                              exact
                              path="/participate"
                              component={ParticipateForm}
                          />
                          <Route
                              exact
                              path="/tapping"
                              component={TappingLogin}
                          />
                          <Route
                              exact
                              path="/shareitem"
                              component={ShareItem}
                          />
                          <UserProtected
                              exact
                              path="/dartp"
                              component={Dartprofile}
                          />
                          <Route exact path="/play" component={HowToPlay} />
                          <Route
                              exact
                              path="/aboutcontent"
                              component={AboutContent}
                          />
                          <Route
                              exact
                              path="/contactcontent"
                              component={ContactUsContent}
                          />
                          <Route
                              exact
                              path="/privacypolicycontent"
                              component={PrivacyPolicyContent}
                          />
                          <Route
                              exact
                              path="/tc"
                              component={TearmConditionContent}
                          />
                          <Route
                              exact
                              path="/centerbar"
                              component={dartoCenterBar}
                          />
                          <Route
                              exact
                              path="/spacelist"
                              component={listSpace}
                          />
                          <Route
                              exact
                              path="/detailstournament"
                              component={DetailsTournaments}
                          />
                          <Route
                              exact
                              path="/loginphonenumber"
                              component={LoginPhoneNumber}
                          />
                          <Route
                              exact
                              path="/galleryparticipate"
                              component={GalleryParticipate}
                          />
                          <Route
                              exact
                              path="/mydartoedit"
                              component={MyDartoEdit}
                          />
                          <ProtectedRoute
                              exact
                              path="/admin"
                              component={Admin}
                          />
                              exact
                              path="/table"
                              component={TableView}
                          />
                          <ProtectedRoute
                              exact
                              path="/adminpartners"
                              component={Adminpartners}
                          />
                          <Route exact path="/login" component={LoginUser} />
                          <Route
                              exact
                              path="/userregister"
                              component={UserRegisterPage}
                          />
                          {/* <Route exact path="/user" component={UserAdmin} /> */}
                          <Route
                              exact
                              path="/password"
                              component={ForgotPassword}
                          />
                          <ProtectedRoute
                              Route
                              exact
                              path="/teamadmin"
                              component={TeamAdmin}
                          />
                          <ProtectedRoute
                              Route
                              exact
                              path="/clubadmin"
                              component={ClubAdmin}
                          />
                          <ProtectedRoute
                              Route
                              exact
                              path="/cafebaradmin"
                              component={CafeBarAdmin}
                          />
                          <UserProtected
                              exact
                              path="/liveplay"
                              component={LivePlays}
                          />
                          <Route
                              exact
                              path="/match"
                              component={MatchScoreDisplay}
                          />
                          <UserProtected
                              exact
                              path="/history"
                              component={History}
                          />
                          <Route exact path="/score" component={ScoreCard} />
                          <Route
                              exact
                              path="/matchscore/:id"
                              component={Scores}
                          />
                          <Route
                              exact
                              path="/clubmember"
                              component={ClubMemberDetail}
                          />
                          <UserProtected
                              exact
                              path="/club/:id"
                              component={ClubTab}
                          />
                          <UserProtected
                              exact
                              path="/team/:id"
                              component={TeamTab}
                          />
                          <Route
                              exact
                              path="/footert"
                              component={FooterTable}
                          />
                          <ProtectedRoute
                              exact
                              path="/footeradmin"
                              component={FooterAdmin}
                          />
                          <Route
                              exact
                              path="/teamclub"
                              component={TeamClubTab}
                          />
                          <Route
                              exact
                              path="/moredetail"
                              component={TeamMoreDetail}
                          />
                          <Route
                              exact
                              path="/clubdetailMore"
                              component={ClubMoreDetail}
                          />
                          <Route
                              exact
                              path="/desktopheader"
                              component={DesktopHeader}
                          />
                          <Route exact path="/slider" component={SliderShow} />
                          <Route
                              exact
                              path="/sliderset"
                              component={SliderSet}
                          />
                          <Route
                              exact
                              path="/playcontent"
                              component={howPlay}
                          />
                          <Route
                              exact
                              path="/cookies"
                              component={cookiesContent}
                          />
                          <Route exact path="/parteners" component={Partener} />
                          <Route exact path="/rules" component={DartoRules} />
                          <Route
                              exact
                              path="/advantages"
                              component={AdvantagesDarto}
                          />
                          <Route exact path="/offer" component={OfferDarto} />
                          <Route
                              exact
                              path="/editteam/:id"
                              component={EditTeam}
                          />
                          <Route
                              exact
                              path="/editclub/:id"
                              component={EditClub}
                          />
                          <Route
                              exact
                              path="/searchdynamic"
                              component={Search}
                          />
                          <Route exact path="/state" component={State} />
                          <ProtectedRoute
                              exact
                              path="/userstate"
                              component={User}
                          />
                          <Route exact path='/adminlogin' component={LoginAdmin} /> 

                          <Route
                          
                              exact
                              path="/adminregister"
                              component={AdminRegisterPage}
                          />
                          <Route
                              exact
                              path="/adminforgotpassword"
                              component={AdminForgotPassword}
                          />
                          {/* <Route
                              exact
                              path="/adminlogin"
                              component={LoginAdmin}
                          /> */}

                          <Route
                              exact
                              path="/livescorecard/:id"
                              component={LiveScoreCard}
                          />
                          <Route
                              path="/*"
                              render={(props) => (
                                  <Redirect
                                      {...props}
                                      to={{ pathname: "/home" }}
                                  />
                              )}
                          />
                      </Switch>
                  </div>
              </Layout>
          </div>
      </BrowserRouter>
  );
}
