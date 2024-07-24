import React, { useState, useEffect } from "react";
import "./ProfileItem.css";
import Button from "react-bootstrap/Button";
import { CgProfile } from "react-icons/cg";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { ImProfile } from "react-icons/im";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import ReduceCapacityIcon from "@mui/icons-material/ReduceCapacity";
import PaymentIcon from "@mui/icons-material/Payment";
import QrCodeIcon from "@mui/icons-material/QrCode";
import PublicIcon from "@mui/icons-material/Public";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import MaterialIcon from "react-google-material-icons";
import Setting from "../../containers/Setting/Setting";
import { Link, useHistory } from "react-router-dom";
import MobileHeader from "../../containers/Layout/MobileHeader/MobileHeader";
import darto_avatar from "../../assets/darto_avatar.jpg";
import { useDispatch, useSelector } from "react-redux";
import { endpoint } from "../../../src/assets/api/endpoint";
import { apiHandler } from "../../../src/assets/api";
import NoticeModal from "../AdminDashboard/NoticeModal/NoticeModal";

const ProfileItem = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useSelector((state) => state.login.userData);
  // const onSerach =()=>{
  const { authToken } = useSelector((state) => state.login.authData);
  const { status } = useSelector((state) => state.login.userData);
  const [firstname, setfirstName] = useState("");
  const [email, setEmail] = useState("");
  const [middlename, setmiddleName] = useState("");
  const [lastname, setlastName] = useState("");
  const [imageData,setImageData] =useState("");
  //  history.push('/home');
  // }
  const myprofile = () => {
    history.push("/profile");
  };
  useEffect(() => {
    GetByIdProfileData();
  }, []);

  const GetByIdProfileData = async () => {
    const res = await apiHandler({
      url: endpoint.GETBYID_USER + id,
      method: "GET",
      data: null,
    });
    console.log(res.data.response);
    setImageData(res.data && res.data.response && res.data.response.image ? res.data && res.data.response && res.data.response.image :"");
    setfirstName(
      (res.data && res.data.response && res.data.response.firstName) || ""
    );
    setlastName(
      (res.data && res.data.response && res.data.response.lastName) || ""
    );
    setEmail(
      (res.data && res.data.response && res.data.response.email) || ""
    );
  };
  //    const dartoProfile =() =>{
  //        history.push('/Arena');
  //    };
  const update = () => {
    history.push("/updatedarto");
  };
  const MyTeamClubTab = () => {
    history.push("/tabclub");
  };
  const payment = () => {
    history.push("/paymentPlan");
  };
  const scoreDef = () => {
    history.push("/score");
  };
  const mymembership = () => {
    history.push("/membership");
  };
  const socialconnect = () => {
    history.push("/socialConnect");
  };
  const howtoUse = () => {};
  const Setting = () => {
    history.push("/setting");
  };
  // const logOut = () => {
  //   history.push("/home");
  // };
  const Dartprofile = () => {
    history.push("/dartp");
  };
  const howplay = () => {
    history.push("/playcontent");
  };

  const handleLogout = () => {
    dispatch({ type: "SIGNOUT" });
    history.push("/login");
  };
  const historymatch = () =>{
    history.push("/history");  
  }


  return (
      <>
          <div className="padding-px detailcardcompo width_60_media">
              <div className="stack-profile-menu">
                  <div
                      className="stack-profile-menu1-with"
                      style={{ justifyContent: "space-between" }}
                  >
                      <div className="size-manage ">
                          <span>
                              <img
                                  src={
                                      imageData === ""
                                          ? darto_avatar
                                          : imageData
                                  }
                                  className="size_of_img_ninty_nine"
                              />
                          </span>
                      </div>
                      <div className=" profileStyleMedia">
                          {status === 200 ? (
                              <div className="">
                                  {/* {firstname + " " + lastname} */}
                                  <div className="stack-profile-menu">
                                      <div className="stack-profile-menu1_user">
                                          <div>
                                              <p className="size-manage1_fname">
                                                  {" "}
                                                  {firstname + " " + lastname}
                                              </p>
                                          </div>
                                          <div>
                                              <p className="size-manage1_email">
                                                  {" "}
                                                  {email + ""}
                                              </p>
                                          </div>
                                      </div>
                                  </div>
                                  {/* <Button
                    block
                    size='lg'
                    style={{
                      justifyContent: "space-between",
                      border: "#00bbff",
                      padding: "9px",
                      fontSize: "18px",
                      width: "120px",
                      fontWeight: "bold",
                      backgroundColor: "#00bbff",
                      borderRadius: "6px",
                      display:"flex"
                    }}
                    type='submit'
                    onClick={() => handleLogout()}
                  >
                    <span>
                      {" "}
                      <MaterialIcon
                        color='var(--token-2a633678-f86b-4ab5-94be-ee4f65254cde, rgb(120, 144, 161))'
                        icon='logout'
                        // Using default values:
                        stretch={false}
                      />{" "}
                    </span>
                    <span>
                    Logout
                    </span>
                  </Button> */}
                              </div>
                          ) : (
                              <div
                                  className="padding_top_18px_define_reg_profile"
                                  style={{ float: "right",paddingLeft:'100px' }}
                              >
                                  <Button
                                      block
                                      size="lg"
                                      style={{
                                          border: "#fa0043",
                                          padding: "14px",
                                          fontSize: "3rem",
                                          width: "200px",
                                          marginTop: "20px",
                                          backgroundColor: "#fa0043",
                                          borderRadius: "63px",
                                          fontWeight: "bold",
                                          textTransform: "uppercase",
                                      }}
                                      type="submit"
                                      onClick={() => handleLogout()}
                                  >
                                      Log in
                                  </Button>
                              </div>
                          )}
                      </div>
                  </div>
              </div>
              <button className="link-update" onClick={() => myprofile()}>
                  <span>
                      <img src={darto_avatar} className="size_of_img_fix" />
                  </span>
                  <span className="text-manage-i">My Profile</span>{" "}
                  <span>
                      <NavigateNextIcon className="size-manage2 size-manage3" />{" "}
                  </span>
              </button>

              <button className="link-update" onClick={() => Dartprofile()}>
                  <span>
                      {" "}
                      <MaterialIcon
                          color="var(--token-2a633678-f86b-4ab5-94be-ee4f65254cde, rgb(120, 144, 161))"
                          icon="ads_click"
                          // Using default values:
                          stretch={false}
                      />{" "}
                  </span>
                  <span className="text-manage-i">Darto Profiles</span>{" "}
                  <span>
                      <NavigateNextIcon className="size-manage2 size-manage3" />{" "}
                  </span>
              </button>
              {/* <div className="link-update" onClick={() => update()}>
          <span>
            {" "}
            <MaterialIcon
              color="var(--token-2a633678-f86b-4ab5-94be-ee4f65254cde, rgb(120, 144, 161))"
              icon="tips_and_updates"
         
              stretch={false}
            />{" "}
          </span>{" "}
          <span className="text-manage-i">Update</span>{" "}
          <span>
            <NavigateNextIcon
              className="size-manage2 size-manage3"
           
            />{" "}
          </span>
        </div> */}
              <button className="link-update" onClick={() => MyTeamClubTab()}>
                  <span>
                      {" "}
                      <MaterialIcon
                          color="var(--token-2a633678-f86b-4ab5-94be-ee4f65254cde, rgb(120, 144, 161)) "
                          icon="reduce_capacity"
                          // Using default values:
                          stretch={false}
                      />{" "}
                  </span>{" "}
                  <span className="text-manage-i">My Team & Clubs</span>{" "}
                  <span>
                      {" "}
                      <NavigateNextIcon className="size-manage2 size-manage3" />{" "}
                  </span>
              </button>
              {/* <div className="link-update" onClick={() => scoreDef()}>
          <span>
            {" "}
            <MaterialIcon
              color="var(--token-2a633678-f86b-4ab5-94be-ee4f65254cde, rgb(120, 144, 161)) "
              icon="margin"
           
              stretch={false}
            />{" "}
          </span>{" "}
          <span className="text-manage-i">Score Board</span>{" "}
          <span>
            {" "}
            <NavigateNextIcon
              className="size-manage2 size-manage3"
           
            />{" "}
          </span>
        </div> */}
              {/* <div className="link-update" onClick={() => payment()}>
          <span>
            {" "}
            <MaterialIcon
              color="var(--token-2a633678-f86b-4ab5-94be-ee4f65254cde, rgb(120, 144, 161))"
              icon="payment"
             
              stretch={false}
            />{" "}
          </span>{" "}
          <span className="text-manage-i">Payment & Plans</span>{" "}
          <span>
            {" "}
            <NavigateNextIcon
              className="size-manage2 size-manage3"
            
            />{" "}
          </span>
        </div> */}
              <button className="link-update" onClick={() => mymembership()}>
                  <span>
                      {" "}
                      <MaterialIcon
                          color="var(--token-2a633678-f86b-4ab5-94be-ee4f65254cde, rgb(120, 144, 161)) "
                          icon="qr_code"
                          // Using default values:
                          stretch={false}
                      />{" "}
                  </span>{" "}
                  <span className="text-manage-i">My MemberShip Card</span>{" "}
                  <span>
                      {" "}
                      <NavigateNextIcon className="size-manage2 size-manage3" />{" "}
                  </span>
              </button>
              <button className="link-update" onClick={() => howplay()}>
                  <span>
                      <MaterialIcon
                          color="var(--token-2a633678-f86b-4ab5-94be-ee4f65254cde, rgb(120, 144, 161))"
                          icon="live_help"
                          // Using default values:
                          stretch={false}
                      />{" "}
                  </span>{" "}
                  <span className="text-manage-i">How to Play</span>{" "}
                  <span>
                      {" "}
                      <NavigateNextIcon className="size-manage2 size-manage3" />{" "}
                  </span>
              </button>
              <button className="link-update" onClick={() => socialconnect()}>
                  <span>
                      <MaterialIcon
                          color="var(--token-2a633678-f86b-4ab5-94be-ee4f65254cde, rgb(120, 144, 161))"
                          icon="public"
                          // Using default values:
                          stretch={false}
                      />{" "}
                  </span>{" "}
                  <span className="text-manage-i">Social Connect</span>{" "}
                  <span>
                      {" "}
                      <NavigateNextIcon className="size-manage2 size-manage3" />{" "}
                  </span>
              </button>
              <button className="link-update" onClick={() => historymatch()}>
                  <span>
                      <MaterialIcon
                          color="var(--token-2a633678-f86b-4ab5-94be-ee4f65254cde, rgb(120, 144, 161))"
                          icon="history"
                          // Using default values:
                          stretch={false}
                      />{" "}
                  </span>{" "}
                  <span className="text-manage-i">History</span>{" "}
                  <span>
                      {" "}
                      <NavigateNextIcon className="size-manage2 size-manage3" />{" "}
                  </span>
              </button>
              <button className="link-update" onClick={() => Setting()}>
                  <span>
                      {" "}
                      <MaterialIcon
                          color="var(--token-2a633678-f86b-4ab5-94be-ee4f65254cde, rgb(120, 144, 161)) "
                          icon="settings"
                          // Using default values:
                          stretch={false}
                      />{" "}
                  </span>{" "}
                  <span className="text-manage-i">Setting</span>{" "}
                  <span>
                      {" "}
                      <NavigateNextIcon className="size-manage2 size-manage3" />{" "}
                  </span>
              </button>
              <div>
                  {status === 200 ? (
                      <div>
                          <button
                              className="link-update"
                              onClick={() => handleLogout()}
                          >
                              <span>
                                  {" "}
                                  <MaterialIcon
                                      color="var(--token-2a633678-f86b-4ab5-94be-ee4f65254cde, rgb(120, 144, 161)) "
                                      icon="logout"
                                      // Using default values:
                                      stretch={false}
                                  />{" "}
                              </span>{" "}
                              <span className="text-manage-i">Logout</span>{" "}
                              <span>
                                  {" "}
                                  <NavigateNextIcon className="size-manage2 size-manage3" />{" "}
                              </span>
                          </button>
                      </div>
                  ) : (
                      <>
                          {/* <button className='link-update' onClick={() => handleLogout()}>
              <span>
                {" "}
                <MaterialIcon
                  color='var(--token-2a633678-f86b-4ab5-94be-ee4f65254cde, rgb(120, 144, 161)) '
                  icon='login'
                  // Using default values:
                  stretch={false}
                />{" "}
              </span>{" "}
              <span className='text-manage-i'>Login</span>{" "}
              <span>
                {" "}
                <NavigateNextIcon className='size-manage2 size-manage3' />{" "}
              </span>
            </button> */}
                      </>
                  )}
              </div>
          </div>

          {window.innerWidth <= 768 && <MobileHeader />}
      </>
  );
};
export default ProfileItem;
