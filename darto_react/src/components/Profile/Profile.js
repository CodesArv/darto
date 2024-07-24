import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import { CgProfile } from "react-icons/cg";
import { FiEdit } from "react-icons/fi";
import { FaUserGraduate } from "react-icons/fa";
import { GiMale } from "react-icons/gi";
import { FaRegSmile } from "react-icons/fa";
import ReactRoundedImage from "react-rounded-image";
import "./Profile.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { endpoint } from "../../../src/assets/api/endpoint";
import { apiHandler } from "../../../src/assets/api";
import NoticeModal from "../AdminDashboard/NoticeModal/NoticeModal";
import MaterialIcon from "react-google-material-icons";
import darto_avatar from "../../assets/darto_avatar.jpg";
import commonProfile from "../../themes/commonProfile.css";

const Profile = ({
  name,
  age,
  gender,
  education,
  dateofbirth,
  rank,
  score,
  totalmatch,
  skilllevel,
  dartdetails,
  phone,
  email,
}) => {
  //  const history = useHistory();
  //  const [rawData, setRawData] = useState([]);
  const history = useHistory();
  const [rawData, setRawData] = useState({});
  const [noticeModal, setNoticeModal] = useState(false);
  const [noticeModalErrMsg, setNoticeModalErrMsg] = useState("");
  const [noticeModalHeaderMsg, setNoticeModalHeaderMsg] = useState("");
   const { id } = useSelector((state) => state.login.userData);
   const [dartoProfile,setDartoProfile] =useState({});
  const closeNoticeModal = () => {
    setNoticeModal(false);
    setNoticeModalErrMsg("");
    setNoticeModalHeaderMsg("");
  };
  const editProfile = () => {
    history.push("/profileedit");
  };
  
  //  useEffect(() => {
  //   GetProfile();
  // }, []);
  // const GetProfile = async () => {
  //   const result = await apiHandler({
  //     url: endpoint.GET_USERPROFILE,
  //     method: "GET",
  //     data: null,
  //   });

  //   console.log(result.data);
  //   setRawData(result.data);
  // };
   const parseDate = (weekDate) => {
      if (weekDate === null || weekDate === "") return null;

      let dateObj = new Date(weekDate);

      var month =
          (dateObj.getMonth() + 1 < 10 ? "0" : "") + (dateObj.getMonth() + 1);
      var date = (dateObj.getDate() < 10 ? "0" : "") + dateObj.getDate();
      return dateObj.getFullYear() + "-" + month + "-" + date;
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
    setRawData(res.data.response);
    // let id = res.data.userProfile[0].id;
    // const result = await apiHandler({
    //   url: endpoint.GET_USERPROFILEBYID + id,
    //   method: "GET",
    //   data: null,
    // });
    // if (result.data.status === 404) {
    //   setNoticeModalHeaderMsg("Error");
    //   setNoticeModalErrMsg(result.data.message);
    //   setNoticeModal(true);
    // } else {
    //   if (result.data.length === 0) {
    //     setNoticeModalHeaderMsg("Error");
    //     setNoticeModalErrMsg("No Record Found");
    //     setNoticeModal(true);
    //   } else {
    //     console.log("getbyid", result.data.response);
    //     setRawData(res.data.users);
      
    //   }
    //  }
  };
  useEffect(() => {
      GetDartoProfileData();
  }, []);

  const GetDartoProfileData = async () => {
      const result = await apiHandler({
          url: endpoint.GETBYID_DARTOPROFILE + id,
          method: "GET",
          data: null,
      });
      if (result.data.status === 500) {
          setNoticeModalHeaderMsg("Error");
          setNoticeModalErrMsg(result.data.message);
          setNoticeModal(true);
      } else {
          if (result.data.length === 0) {
              setNoticeModalHeaderMsg("Error");
              setNoticeModalErrMsg("No Record Found");
              setNoticeModal(true);
          } else {
              console.log(result.data);
              setDartoProfile(result.data.response);
              console.log("Record");
          }
      }

      //let obj= {...setRawData}
  };
  return (
      <div className="detailcardcompo width_60_media padding_bottom_nine9">
          <br />

          <div className="padding-profile-df">
              <div className="links-tab-dv">
                  <div className="stack-links-tab-dv">
                      <span className="MaterialIcon_ic_def">
                          <MaterialIcon icon="assignment_ind" stretch={false} />
                      </span>

                      <div className="_my_profile_it">My Profile</div>
                  </div>
                  <button className="edit_ed_pro" onClick={() => editProfile()}>
                      <span className="MaterialIcon_ic_def1">
                          <MaterialIcon
                              color="var(--token-dcfc1000-f350-494d-bd15-7f017b76226e, rgb(255, 255, 255))"
                              icon="edit"
                              stretch={false}
                          />
                      </span>
                      <span className="ed_bt_t_d">Edit</span>
                  </button>
              </div>

              <Row>
                  <Col className="">
                      <br />
                      <div className="stack-profile-menu">
                          <div className="stack-profile-menu1 padding_profile_bottom">
                              <div className="size-manage">
                                  <span>
                                      {rawData && rawData.image ? (
                                          <>
                                              <img
                                                  src={rawData && rawData.image}
                                                  className="size_of_img_ninty_nine"
                                              />
                                          </>
                                      ) : (
                                          <>
                                              <img
                                                  src={darto_avatar}
                                                  className="size_of_img_ninty_nine"
                                              />
                                          </>
                                      )}
                                  </span>
                              </div>
                          </div>
                      </div>
                  </Col>
              </Row>

              <Row>
                  <Col style={{ display: "flex" }}>
                      <spam>
                          <p className="font_Blue_twenty">
                              {rawData && rawData.firstName
                                  ? rawData && rawData.firstName
                                  : ""}{" "}
                              {rawData && rawData.lastName
                                  ? rawData && rawData.lastName
                                  : ""}
                          </p>
                      </spam>
                  </Col>
              </Row>

              <Row>
                  <Col>
                      <p className="font_Style_Common">
                          {" "}
                          {rawData && rawData.tagName
                              ? rawData && rawData.tagName
                              : ""}
                          {/* {rawData && rawData.userProfileid.tagName} */}
                      </p>
                  </Col>
              </Row>

              <Row>
                  <Col className="skycolour aligin_devider" xs="8">
                      <span className="logo_Style_Common ">
                          <MaterialIcon
                              className="logo_Style_Common"
                              color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161))"
                              icon="school"
                              stretch={true}
                          />{" "}
                      </span>
                      <span className="font_Style_Common">
                          <span className="padding_Common_Line"> | </span>
                          {/* B.teach{" "} */}
                          {rawData && rawData.nameOfInstitution}
                      </span>
                  </Col>
              </Row>
              <Row>
                  <Col className="skycolour aligin_devider" xs="8">
                      <span className="logo_Style_Common">
                          <MaterialIcon
                              className="logo_Style_Common"
                              color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161))"
                              icon="male"
                              stretch={true}
                          />{" "}
                      </span>
                      <span className="font_Style_Common">
                          {" "}
                          <span className="padding_Common_Line"> | </span>
                          {rawData && rawData.gender
                              ? rawData && rawData.gender
                              : ""}{" "}
                      </span>
                  </Col>
              </Row>
              <Row>
                  <Col className="skycolour aligin_devider" xs="8">
                      <span className="logo_Style_Common">
                          <MaterialIcon
                              className="logo_Style_Common"
                              color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161))"
                              icon="mood"
                              stretch={true}
                          />{" "}
                      </span>
                      <span className="font_Style_Common">
                          <span className="padding_Common_Line"> | </span>{" "}
                          {rawData && rawData.ageGroup
                              ? rawData && rawData.ageGroup
                              : ""}{" "}
                      </span>
                  </Col>
              </Row>
              <Row className="padding_profile_bottom">
                  <Col className="skycolour aligin_devider" xs="8">
                      <span className="logo_Style_Common">
                          <MaterialIcon
                              className="logo_Style_Common"
                              color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) "
                              icon="cake"
                              stretch={true}
                          />{" "}
                      </span>
                      <span className="font_Style_Common">
                          <span className="padding_Common_Line">|</span>
                          {rawData && parseDate(rawData.dob)
                              ? rawData && parseDate(rawData.dob)
                              : ""}
                      </span>
                  </Col>
              </Row>
              <br />
              <Row>
                  <Col className="profilemenu"> </Col>
              </Row>
              <br />
              <Row>
                  <Col className=" profiledetails">
                      <div>
                          <br />
                          <h2 className="common_Font_Style_Gray ">Rank</h2>
                          <h1 className="rankk">0</h1>
                      </div>
                  </Col>
                  <Col className="profiledetails middiv">
                      <div>
                          <br />
                          <h2 className="common_Font_Style_Gray">Score</h2>
                          <h1 className="scoree">0</h1>
                      </div>
                  </Col>
                  <Col className="profiledetails">
                      <div>
                          <br />
                          <h2 className="common_Font_Style_Gray">
                              Total Match
                          </h2>
                          <h1 className="totalmatchh">0</h1>
                      </div>
                  </Col>
              </Row>
              <br />
              <Row className="padding_profile_bottom">
                  <Col className="profilemenu"> </Col>
              </Row>
              <br />
              <Row>
                  <Col className="greyicon" xs="8">
                      <span className="logo_Style_Common">
                          <MaterialIcon
                              className="logo_Style_Common"
                              color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161))"
                              icon="stars"
                              stretch={true}
                          />{" "}
                      </span>{" "}
                      <span className="common_Font_Style_Gray padding_left_9px">
                          {" "}
                          Skill{" "}
                      </span>
                      <span className="common_Font_Style_Gray">
                          {" "}
                          {/* {dartoProfile.skilllevel || ""}{" "} */}
                      </span>
                  </Col>
              </Row>
              <Row>
                  <Col className="font_Style_Common" xs="8">
                      {" "}
                      {dartoProfile.skilllevel || ""}{" "}
                  </Col>
              </Row>
              <Row className="padding_profile_bottom">
                  <Col className="greyicon" xs="8">
                      <span className="logo_Style_Common">
                          <MaterialIcon
                              className="logo_Style_Common"
                              color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) "
                              icon="ads_click"
                              stretch={true}
                          />{" "}
                      </span>{" "}
                      <span className="common_Font_Style_Gray padding_left_9px">
                          Darts Details{" "}
                      </span>
                  </Col>
              </Row>

              <Row>
                  <Col className="skycolour" xs="1">
                      {" "}
                      {dartoProfile.steeltip}
                  </Col>
                  <Col className="skycolour" xs="1">
                      {" "}
                      {dartoProfile.dartoBrandName}
                  </Col>
                  <Col className="skycolour" xs="1">
                      {" "}
                      {dartoProfile.weight}
                  </Col>
                  <Col className="skycolour" xs="1">
                      {" "}
                      {dartoProfile.length}
                  </Col>
                
              </Row>
          </div>
          <div className="profile_defin_pagec">
              <Row>
                  <Col className="profilemenu"> </Col>
              </Row>

              {/* <div className="title-won-dis padding_profile_top padding_profile_bottom">
                  <div className="logo_Style_Common">
                      <MaterialIcon
                          className="logo_Style_Common"
                          color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) "
                          icon="military_tech"
                          stretch={true}
                      />
                  </div>

                  <div className="common_Font_Style_Gray ">Title Won</div>
              </div> */}

              {/* <div className="profile-t-name ">
                  <span className="logo_Style_Common">
                      <MaterialIcon
                          className="logo_Style_Common"
                          color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161))"
                          icon="stars"
                          stretch={true}
                      />
                  </span>
                  <div className="tournament-name-full padding_left_9px">
                      <div className="tournament-name-it ">tournament</div>
                      <div className="stack-full-sta">
                          <div className="commn_FontSize_white">
                               Winner 
                          </div>
                          <div className="color_Gray_Twelve">
                               date-20-dec-2021 
                          </div>
                      </div>
                  </div>
              </div> */}
              {/* <div className="profile-t-name">
                  <span className="logo_Style_Common">
                      <MaterialIcon
                          className="logo_Style_Common"
                          color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161))"
                          icon="stars"
                          stretch={true}
                      />
                  </span>
                  <div className="tournament-name-full padding_left_9px">
                      <div className="tournament-name-it ">tournament</div>
                      <div className="stack-full-sta">
                          <div className="commn_FontSize_white">
                              Winner
                          </div>
                          <div className="color_Gray_Twelve">
                              date-20-dec-2021
                          </div>
                      </div>
                  </div>
              </div> */}
              {/* <div className="profile-t-name">
                  <span className="logo_Style_Common">
                      <MaterialIcon
                          className="logo_Style_Common"
                          color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161))"
                          icon="stars"
                          stretch={true}
                      />
                  </span>
                  <div className="tournament-name-full padding_left_9px">
                      <div className="tournament-name-it ">tournament</div>
                      <div className="stack-full-sta">
                          <div className="commn_FontSize_white">Winner</div>
                          <div className="color_Gray_Twelve">
                              date-20-dec-2021
                          </div>
                      </div>
                  </div>
              </div> */}
              <div className="stack-iam">
                  <div className="stack-iam2">
                      <div className="common_Font_Style_Gray">
                          i am <span className="padding_Common_Line"> | </span>{" "}
                      </div>
                      <div className="commn_FontSize_white padding_left_9px">
                          {" "}
                          {(rawData && rawData.organization) || ""}
                      </div>
                  </div>
                  <div className="stack-modern-school">
                      <span className="logo_Style_Common">
                          <MaterialIcon
                              className="logo_Style_Common"
                              color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) "
                              icon="domain"
                              stretch={false}
                          />{" "}
                      </span>{" "}
                      <div className="commn_FontSize_white padding_left_9px">
                          {rawData && rawData.nameOfInstitution
                              ? rawData && rawData.nameOfInstitution
                              : ""}
                      </div>
                  </div>
              </div>
              <div className="stack-contact-detail">
                  <div className="common_Font_Style_Gray bottom_9px_padding">
                      Contact Details
                  </div>
                  <div className="stack-contact-detail-no">
                      <div className="stack-num-define-dt">
                          <span className="logo_Style_Common">
                              <MaterialIcon
                                  className="logo_Style_Common"
                                  color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161))"
                                  icon="phone_enabled"
                                  stretch={false}
                              />{" "}
                          </span>
                          <div className="commn_FontSize_white padding_left_9px">
                              {" "}
                              {rawData && rawData.mobileNumber
                                  ? rawData && rawData.mobileNumber
                                  : ""}
                          </div>
                      </div>
                      <div className="matl-icn-de">
                          <span className="Materi_al_Icon1">
                              <MaterialIcon
                                  className="logo_Style_Common"
                                  color="var(--token-95ce18c7-cfcb-4ba5-9af9-6888ca0cea28, rgb(135, 192, 2)) "
                                  icon="verified"
                                  stretch={false}
                              />
                          </span>
                          <div className="common_Font_Style_Gray padding_left_9px">
                              Verified
                          </div>
                      </div>
                  </div>
                  <div className="stack-contact-detail-no">
                      <div className="stack-num-define-dt">
                          <span className="logo_Style_Common">
                              <MaterialIcon
                                  className="logo_Style_Common"
                                  color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) "
                                  icon="email"
                                  stretch={false}
                              />{" "}
                          </span>
                          <div className="commn_FontSize_white padding_left_9px">
                              {" "}
                              {rawData && rawData.email
                                  ? rawData && rawData.email
                                  : ""}
                          </div>
                      </div>
                      <div className="matl-icn-de">
                          <span className="Materi_al_Icon1">
                              <MaterialIcon
                                  color="var(--token-95ce18c7-cfcb-4ba5-9af9-6888ca0cea28, rgb(135, 192, 2)) "
                                  icon="verified"
                                  stretch={false}
                              />
                          </span>
                          <div className="common_Font_Style_Gray padding_left_9px">
                              Verified
                          </div>
                      </div>
                  </div>
              </div>
              <div className="stack-contact-detail">
                  <div className="common_Font_Style_Gray bottom_9px_padding">
                      Location
                  </div>
                  <div
                      className="padding_profile_bottom "
                      style={{ display: "flex" }}
                  >
                      <div className="logo_Style_Common">
                          <MaterialIcon
                              color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) "
                              icon="location_on"
                              stretch={true}
                          />
                      </div>
                      <span className="font_Style_Common ">
                          <span className="coolo_size_text_iconn">
                              {" "}
                              {(rawData && rawData.country) || ""}{" "}
                          </span>{" "}
                          <span className="padding_Common_Line"> | </span>{" "}
                          <span className="coolo_size_text_iconn">
                              {" "}
                              {(rawData && rawData.state) || ""}{" "}
                          </span>{" "}
                          <span className="padding_Common_Line"> | </span>{" "}
                          <span className="coolo_size_text_iconn">
                              {" "}
                              {(rawData && rawData.city) || ""}{" "}
                          </span>{" "}
                          {/* <span className="padding_Common_Line"> | </span>{" "}
                          <span className="coolo_size_text_iconn">
                              {" "}
                              {(rawData && rawData.street) || ""}{" "}
                          </span> */}
                          <span className="padding_Common_Line"> | </span>
                          <span className="coolo_size_text_iconn">
                              {" "}
                              {(rawData && rawData.pincode) || ""}{" "}
                          </span>
                      </span>
                  </div>
              </div>
          </div>

          {noticeModal && (
              <NoticeModal
                  noticeModal={noticeModal}
                  noticeModalHeader={noticeModalHeaderMsg}
                  noticeModalErrMsg={noticeModalErrMsg}
                  closeModal={closeNoticeModal}
              />
          )}
      </div>
  );
};
export default Profile;
