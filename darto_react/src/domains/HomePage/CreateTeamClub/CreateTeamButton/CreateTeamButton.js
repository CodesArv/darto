import React, { useState } from "react";
import { Button } from "reactstrap";
import "./CreateTeamButton.css";
import { Link, useHistory } from "react-router-dom";
import CreateTeams from "../CreateTeams/CreateTeams";
import CreateClub from "../CreateClub/CreateClub";
import tshirt_back from "./tshirt_back.png";
import tshirt_front from "./tshirt_front.png";
import dp_team from "./dp_team.png";
import MaterialIcon from "react-google-material-icons";
import dp_club from "./dp_club.png";
import { Modal } from "react-bootstrap";
import Croppers from "./Croppers";
import UploadImageCrop from "../../../../components/AdminDashboard/TournamentAdmin/AddAdminData/UploadImageCrop";
const CreateTeamButton = ({ rawDataTeam ,rawDataClub}) => {
  const [showSearchTeam, setShowSearchTeam] = useState(true);
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [showindex, setShowIndex] = useState(false);
  const [imagedata1, setImageData1] = useState("");
  const [imagedata2, setImageData2] = useState("");
  const [imagedata3, setImageData3] = useState("");
  const [imagedata4, setImageData4] = useState("");
  const [imagedata5, setImageData5] = useState("");
  const [imagedata6, setImageData6] = useState("");
  const [imagedata7, setImageData7] = useState("");
  const [imagedata8, setImageData8] = useState("");
  const [imagedata9, setImageData9] = useState("");
  const [imagedata10, setImageData10] = useState("");
  const [imagedata11, setImageData11] = useState("");
  const [imagedata12, setImageData12] = useState("");
  const [imagedata13, setImageData13] = useState("");
    const [imagedataclub1, setImageDataClub1] = useState("");
    const [imagedataclub2, setImageDataClub2] = useState("");
    const [imagedataclub3, setImageDataClub3] = useState("");
    const [imagedataclub4, setImageDataClub4] = useState("");
    const [imagedataclub5, setImageDataClub5] = useState("");
    const [imagedataclub6, setImageDataClub6] = useState("");
    const [imagedataclub7, setImageDataClub7] = useState("");
    const [imagedataclub8, setImageDataClub8] = useState("");
    const [imagedataclub9, setImageDataClub9] = useState("");
    const [imagedataclub10, setImageDataClub10] = useState("");
    const [imagedataclub11, setImageDataClub11] = useState("");
    const [imagedataclub12, setImageDataClub12] = useState("");
    const [imagedataclub13, setImageDataClub13] = useState("");
  const [imageValue, setImageValue] = useState("");
  const [imageVal,setImageVal] =useState("")
  const [type,setType] =useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   const [show, setShow] = useState(false);
  const history = useHistory();
  const onSerach = () => {
    setShowSearchTeam(true);
    setShowSearchBox(false);
    setShowIndex(true);
    //  history.push('/createteams');
  };
  const onSerachClub = () => {
    setShowSearchBox(true);
    setShowSearchTeam(false);
    setShowIndex(false);
    // history.push('/createclubs');
  };
   const onUpload = (value,type) => {
       setImageValue(value);
        setType(type);
       setShow(true);
   };
   const onUploadimge = (val) => {
    //    type="team"
    //    console.log("fhf", val);
    //    setImageVal(val);
    //       console.log("imagedata1", imagedata1);
       
            // setType("team");
          switch (imageValue ) {
              case "image1":
                  return setImageData1(val);
              case "image2":
                  return setImageData2(val);
              case "image3":
                  return setImageData3(val);
              case "image4":
                  return setImageData4(val);
              case "image5":
                  return setImageData5(val);
              case "image6":
                  return setImageData6(val);
              case "image7":
                  return setImageData7(val);
              case "image8":
                  return setImageData8(val);
              case "image9":
                  return  setImageData9(val);
              case "image10":
                  return  setImageData10(val);
              case "image11":
                  return setImageData11(val);
              case "image12":
                  return setImageData12(val);
              case "image13":
                  return setImageData13(val);
              case "imageclub1":
                  return  setImageDataClub1(val);
              case "imageclub2":
                  return setImageDataClub2(val);
              case "imageclub3":
                  return  setImageDataClub3(val);
              case "imageclub4":
                  return  setImageDataClub4(val);
              case "imageclub5":
                  return  setImageDataClub5(val);
              case "imageclub6":
                  return  setImageDataClub6(val);
              case "imageclub7":
                  return  setImageDataClub7(val);
              case "imageclub8":
                  return  setImageDataClub8(val);
              case "imageclub9":
                  return setImageDataClub9(val);
              case "imageclub10":
                  return setImageDataClub10(val);
              case "imageclub11":
                  return setImageDataClub11(val);
              case "imageclub12":
                  return  setImageDataClub12(val);
              case "imageclub13":
                  return setImageDataClub13(val);
                  default :
                   return setImageData1(val);

          }
    //    }
          
   };
   // const onImageData =()=>{
   //   onImageData
   // }
   const onRemoveImage = () => {
       setImageData11("");
   };
  return (
      <>
          {showSearchTeam && (
              <div>
                  <div className="stackupdate_Create_tc ">
                      <div className="border_Bottom_1px">
                          <span className="Darts-style1">Add Photo</span>
                          <div className="row gap_16px_Devide padding_profile_bottom">
                              <div
                                  className="border_profile_Add_item col"
                                  onClick={() => onUpload("image1")}
                              >
                                  {imagedata1 === "" ? (
                                      <>
                                          {" "}
                                          <MaterialIcon
                                              color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) "
                                              icon="add"
                                              stretch={true}
                                          />
                                      </>
                                  ) : (
                                      <>
                                          <img
                                              src={imagedata1}
                                              width={100}
                                              height={100}
                                          />
                                      </>
                                  )}
                              </div>
                              <div
                                  className="border_profile_Add_item col"
                                  onClick={() => onUpload("image2")}
                              >
                                  {imagedata2 === "" ? (
                                      <>
                                          {" "}
                                          <MaterialIcon
                                              color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) "
                                              icon="add"
                                              stretch={true}
                                          />
                                      </>
                                  ) : (
                                      <>
                                          <img
                                              src={imagedata2}
                                              width={100}
                                              height={100}
                                          />
                                      </>
                                  )}
                              </div>
                              <div
                                  className="border_profile_Add_item col"
                                  onClick={() => onUpload("image3")}
                              >
                                  {imagedata3 === "" ? (
                                      <>
                                          {" "}
                                          <MaterialIcon
                                              color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) "
                                              icon="add"
                                              stretch={true}
                                          />
                                      </>
                                  ) : (
                                      <>
                                          <img
                                              src={imagedata3}
                                              width={100}
                                              height={100}
                                          />
                                      </>
                                  )}
                              </div>
                              <div
                                  className="border_profile_Add_item col"
                                  onClick={() => onUpload("image4")}
                              >
                                  {imagedata4 === "" ? (
                                      <>
                                          {" "}
                                          <MaterialIcon
                                              color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) "
                                              icon="add"
                                              stretch={true}
                                          />
                                      </>
                                  ) : (
                                      <>
                                          <img
                                              src={imagedata4}
                                              width={100}
                                              height={100}
                                          />
                                      </>
                                  )}
                              </div>
                              <div
                                  className="border_profile_Add_item col"
                                  onClick={() => onUpload("image5")}
                              >
                                  {imagedata5 === "" ? (
                                      <>
                                          {" "}
                                          <MaterialIcon
                                              color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) "
                                              icon="add"
                                              stretch={true}
                                          />
                                      </>
                                  ) : (
                                      <>
                                          <img
                                              src={imagedata5}
                                              width={100}
                                              height={100}
                                          />
                                      </>
                                  )}
                              </div>
                          </div>
                          <span className="Darts-style1">
                              For Premium Member
                          </span>
                          <div className="row gap_16px_Devide">
                              <div
                                  className="border_profile_Add_item col"
                                  onClick={() => onUpload("image6")}
                              >
                                  {imagedata6 === "" ? (
                                      <>
                                          {" "}
                                          <MaterialIcon
                                              color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) "
                                              icon="add"
                                              stretch={true}
                                          />
                                      </>
                                  ) : (
                                      <>
                                          <img
                                              src={imagedata6}
                                              width={100}
                                              height={100}
                                          />
                                      </>
                                  )}
                              </div>
                              <div
                                  className="border_profile_Add_item col"
                                  onClick={() => onUpload("image7")}
                              >
                                  {imagedata7 === "" ? (
                                      <>
                                          {" "}
                                          <MaterialIcon
                                              color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) "
                                              icon="add"
                                              stretch={true}
                                          />
                                      </>
                                  ) : (
                                      <>
                                          <img
                                              src={imagedata7}
                                              width={100}
                                              height={100}
                                          />
                                      </>
                                  )}
                              </div>
                              <div
                                  className="border_profile_Add_item col"
                                  onClick={() => onUpload("image8")}
                              >
                                  {imagedata8 === "" ? (
                                      <>
                                          {" "}
                                          <MaterialIcon
                                              color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) "
                                              icon="add"
                                              stretch={true}
                                          />
                                      </>
                                  ) : (
                                      <>
                                          <img
                                              src={imagedata8}
                                              width={100}
                                              height={100}
                                          />
                                      </>
                                  )}
                              </div>
                              <div
                                  className="border_profile_Add_item col"
                                  onClick={() => onUpload("image9")}
                              >
                                  {imagedata9 === "" ? (
                                      <>
                                          {" "}
                                          <MaterialIcon
                                              color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) "
                                              icon="add"
                                              stretch={true}
                                          />
                                      </>
                                  ) : (
                                      <>
                                          <img
                                              src={imagedata9}
                                              width={100}
                                              height={100}
                                          />
                                      </>
                                  )}
                              </div>
                              <div
                                  className="border_profile_Add_item col"
                                  onClick={() => onUpload("image10")}
                              >
                                  {imagedata10 === "" ? (
                                      <>
                                          {" "}
                                          <MaterialIcon
                                              color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) "
                                              icon="add"
                                              stretch={true}
                                          />
                                      </>
                                  ) : (
                                      <>
                                          <img
                                              src={imagedata10}
                                              width={100}
                                              height={100}
                                          />
                                      </>
                                  )}
                              </div>
                          </div>
                      </div>
                      {/* <div className="stackupdate1">
          <div className="stackupdate2">
            <h1 className="stackupdate3">Team</h1>

          
          </div>

          <div className="stackupdate4">
            <h1 className="members-list">Members List</h1>
          </div>
          <div className="editstack">
            <button className="editstack2" onClick={() => editProfile()}>
              Edit
            </button>
          </div>
        </div> */}

                      <div className="stake-top-channel-i-d5">
                          <div className="stack-profile">
                              <div className=" my-profile1">
                                  <div className="my-profile2">
                                      <div className="my-profile-img">
                                          {imagedata11 === "" ? (
                                              <>
                                                  <img
                                                      src={dp_team}
                                                      style={{ width: "75px" }}
                                                  />
                                              </>
                                          ) : (
                                              <>
                                                  <img
                                                      src={imagedata11}
                                                      style={{ width: "75px" }}
                                                  />
                                              </>
                                          )}
                                      </div>
                                      {/* <div className="be_button_de  _d_color_de"> */}
                                      <span
                                          className="be_button_de curser-pointer"
                                          onClick={() => onRemoveImage()}
                                      >
                                          <MaterialIcon
                                              color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) "
                                              icon="delete"
                                              // Using default values:
                                              stretch={false}
                                          />{" "}
                                          Remove
                                          {/* <button className="button-fixed1 button-fixed">Remove</button> */}
                                      </span>
                                      {/* </div> */}
                                      <span
                                          className="be_button_de curser-pointer "
                                          onClick={() => onUpload("image11")}
                                      >
                                          <MaterialIcon
                                              color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161))"
                                              icon="cloud_upload"
                                              // Using default values:
                                              stretch={false}
                                          />{" "}
                                          Upload
                                          {/* <button className="button-fixed1 button-fixed">Upload</button> */}
                                      </span>
                                  </div>
                              </div>
                              <div className="stake-verified">
                                  {/* <div className='verified2'>
                <div className='verified'>
                  <span>
                    <MaterialIcon
                      color='var(--token-a23514c0-d291-45a7-a6d4-86d49c549881, rgb(0, 187, 255)) '
                      icon='verified'
                   
                      stretch={false}
                    />{" "}
                  </span>
                  Verified
                </div>
              </div>
              <div className='verified2'>
                <div className='verified'>
                  {" "}
                  <span>
                    <MaterialIcon
                      color='var(--token-2a633678-f86b-4ab5-94be-ee4f65254cde, rgb(120, 144, 161)) '
                      icon='verified_user'
                      stretch={true}
                    />{" "}
                  </span>
                  Trusted
                </div>
              </div> */}

                                  {/* <div className='stake-share'>
             
                <span className='stake-favorite'>
                  <MaterialIcon
                    color='var(--token-d983c132-e015-4177-baf8-441dbe84f948, rgb(0, 187, 255)) '
                    icon='share'
                    stretch={true}
                  />
                </span>
                <p className='_50k-share'>50k share</p>
              </div> */}
                              </div>
                          </div>

                          {/* <div className="tshirt-dsign">
        
       
         </div> */}
                          <div>
                              <h1 className="age-group1">Team T-Shirt</h1>
                          </div>
                          <div class="flex-container">
                              <div
                                  class="flex-child magenta"
                                  onClick={() => onUpload("image12")}
                              >
                                  {imagedata12 === "" ? (
                                      <>
                                          <img
                                              className="img5"
                                              src={tshirt_front}
                                          />
                                          <div className="">
                                              <span className="color_Define_Always_Depend">
                                                  <MaterialIcon
                                                      color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) "
                                                      icon="delete"
                                                      stretch={true}
                                                      size="16px"
                                                  />
                                              </span>
                                              <span className="Darts-style9">
                                                  {" "}
                                                  Front
                                              </span>
                                          </div>
                                      </>
                                  ) : (
                                      <>
                                          <img
                                              src={imagedata11}
                                              className="img5"
                                          />
                                      </>
                                  )}
                              </div>

                              <div
                                  class="flex-child green "
                                  onClick={() => onUpload("image13")}
                              >
                                  {imagedata13 === "" ? (
                                      <>
                                          <img
                                              className="img5"
                                              src={tshirt_back}
                                          />
                                          <div className="">
                                              <span className="color_Define_Always_Depend">
                                                  <MaterialIcon
                                                      color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) "
                                                      icon="delete"
                                                      stretch={true}
                                                      size="16px"
                                                  />
                                              </span>
                                              <span className="Darts-style9">
                                                  {" "}
                                                  back
                                              </span>
                                          </div>
                                      </>
                                  ) : (
                                      <>
                                          <img
                                              src={imagedata13}
                                              className="img5"
                                          />
                                      </>
                                  )}
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="magn-side">
                      <div className="Profile-Avatar">
                          <div className="profile-avatar2">
                              {" "}
                              <MaterialIcon
                                  color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) "
                                  icon="hub"
                                  stretch={true}
                                  size="36px"
                              />
                          </div>
                          <div className="profile-avatar3">
                              <div className="create-your-own-club">
                                  <h1 className="stackh1">
                                      {" "}
                                      create your own team
                                  </h1>
                                  <h2 className="stackh2">
                                      You Can Create maximum 3 teams and 1 clubs
                                  </h2>
                                  {/* <div className="teamleft">
                <p className="stackp1">Created Team:</p>
                <div className="roundstack1">
                  <p className="roundstack">2</p>
                </div>
                <div className="roundstack1">
                  <p className="roundstack">2</p>
                </div>
                <div className="roundstack1">
                  <p className="roundstack">2</p>
                </div>
                <div className="roundstack1">
                  <p className="roundstack3">2 Left</p>
                </div>
              </div> */}
                                  {/* <div className="teamleft">
                <p className="stackp1">Created Club:</p>
                <div className="roundstack1">
                  <p className="roundstack">96</p>
                </div>
               
                <div className="roundstack1">
                  <p className="roundstack3">2 Left</p>
                </div>
              </div> */}
                              </div>
                          </div>
                      </div>

                      <div className="createbutton">
                          <div>
                              {/* <div className="stack-create-team"> */}
                              <span
                                  style={{
                                      hover: "red",
                                      backgroungColor: "red",
                                  }}
                                  className="be_button_de1 curser-pointer"
                                  onClick={() => onSerach()}
                              >
                                  Create team
                              </span>

                              {/* </div> */}
                              <p className="team-parra"> Member Limit: 12</p>
                          </div>
                          <div>
                              {/* <div className="stack-create-team button-team"> */}
                              <span
                                  className="be_button_de1 curser-pointer"
                                  onClick={() => onSerachClub()}
                              >
                                  Create Club
                              </span>

                              {/* </div> */}
                              <p className="team-parra"> Member Limit: 96</p>
                          </div>
                      </div>
                  </div>
                  <CreateTeams
                      imagedata1={imagedata1}
                      imagedata2={imagedata2}
                      imagedata3={imagedata3}
                      imagedata4={imagedata4}
                      imagedata5={imagedata5}
                      imagedata6={imagedata6}
                      imagedata7={imagedata7}
                      imagedata8={imagedata8}
                      imagedata9={imagedata9}
                      imagedata10={imagedata10}
                      imagedata11={imagedata11}
                      imagedata12={imagedata12}
                      imagedata13={imagedata13}
                      rawDataTeam={rawDataTeam}
                  />
              </div>
          )}
          {showSearchBox && (
              <div>
                  <div className="stackupdate_Create_tc ">
                      <div className="border_Bottom_1px">
                          <span className="Darts-style1">Add Photo</span>
                          <div className="row gap_16px_Devide padding_profile_bottom">
                              <div
                                  className="border_profile_Add_item col"
                                  onClick={() => onUpload("imageclub1")}
                              >
                                  {imagedataclub1 === "" ? (
                                      <>
                                          {" "}
                                          <MaterialIcon
                                              color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) "
                                              icon="add"
                                              stretch={true}
                                          />
                                      </>
                                  ) : (
                                      <>
                                          <img
                                              src={imagedataclub1}
                                              width={100}
                                              height={100}
                                          />
                                      </>
                                  )}
                              </div>
                              <div
                                  className="border_profile_Add_item col"
                                  onClick={() => onUpload("imageclub2")}
                              >
                                  {imagedataclub2 === "" ? (
                                      <>
                                          {" "}
                                          <MaterialIcon
                                              color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) "
                                              icon="add"
                                              stretch={true}
                                          />
                                      </>
                                  ) : (
                                      <>
                                          <img
                                              src={imagedataclub2}
                                              width={100}
                                              height={100}
                                          />
                                      </>
                                  )}
                              </div>
                              <div
                                  className="border_profile_Add_item col"
                                  onClick={() => onUpload("imageclub3")}
                              >
                                  {imagedataclub3 === "" ? (
                                      <>
                                          {" "}
                                          <MaterialIcon
                                              color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) "
                                              icon="add"
                                              stretch={true}
                                          />
                                      </>
                                  ) : (
                                      <>
                                          <img
                                              src={imagedataclub3}
                                              width={100}
                                              height={100}
                                          />
                                      </>
                                  )}
                              </div>
                              <div
                                  className="border_profile_Add_item col"
                                  onClick={() => onUpload("imageclub4")}
                              >
                                  {imagedataclub4 === "" ? (
                                      <>
                                          {" "}
                                          <MaterialIcon
                                              color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) "
                                              icon="add"
                                              stretch={true}
                                          />
                                      </>
                                  ) : (
                                      <>
                                          <img
                                              src={imagedataclub4}
                                              width={100}
                                              height={100}
                                          />
                                      </>
                                  )}
                              </div>
                              <div
                                  className="border_profile_Add_item col"
                                  onClick={() => onUpload("imageclub5")}
                              >
                                  {imagedataclub5 === "" ? (
                                      <>
                                          {" "}
                                          <MaterialIcon
                                              color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) "
                                              icon="add"
                                              stretch={true}
                                          />
                                      </>
                                  ) : (
                                      <>
                                          <img
                                              src={imagedataclub5}
                                              width={100}
                                              height={100}
                                          />
                                      </>
                                  )}
                              </div>
                          </div>
                          <span className="Darts-style1">
                              For Premium Member
                          </span>
                          <div className="row gap_16px_Devide">
                              <div
                                  className="border_profile_Add_item col"
                                  onClick={() => onUpload("imageclub6")}
                              >
                                  {imagedataclub6 === "" ? (
                                      <>
                                          {" "}
                                          <MaterialIcon
                                              color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) "
                                              icon="add"
                                              stretch={true}
                                          />
                                      </>
                                  ) : (
                                      <>
                                          <img
                                              src={imagedataclub6}
                                              width={100}
                                              height={100}
                                          />
                                      </>
                                  )}
                              </div>
                              <div
                                  className="border_profile_Add_item col"
                                  onClick={() => onUpload("imageclub7")}
                              >
                                  {imagedataclub7 === "" ? (
                                      <>
                                          {" "}
                                          <MaterialIcon
                                              color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) "
                                              icon="add"
                                              stretch={true}
                                          />
                                      </>
                                  ) : (
                                      <>
                                          <img
                                              src={imagedataclub7}
                                              width={100}
                                              height={100}
                                          />
                                      </>
                                  )}
                              </div>
                              <div
                                  className="border_profile_Add_item col"
                                  onClick={() => onUpload("imageclub8")}
                              >
                                  {imagedataclub8 === "" ? (
                                      <>
                                          {" "}
                                          <MaterialIcon
                                              color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) "
                                              icon="add"
                                              stretch={true}
                                          />
                                      </>
                                  ) : (
                                      <>
                                          <img
                                              src={imagedataclub8}
                                              width={100}
                                              height={100}
                                          />
                                      </>
                                  )}
                              </div>
                              <div
                                  className="border_profile_Add_item col"
                                  onClick={() => onUpload("imageclub9")}
                              >
                                  {imagedataclub9 === "" ? (
                                      <>
                                          {" "}
                                          <MaterialIcon
                                              color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) "
                                              icon="add"
                                              stretch={true}
                                          />
                                      </>
                                  ) : (
                                      <>
                                          <img
                                              src={imagedataclub9}
                                              width={100}
                                              height={100}
                                          />
                                      </>
                                  )}
                              </div>
                              <div
                                  className="border_profile_Add_item col"
                                  onClick={() => onUpload("imageclub10")}
                              >
                                  {imagedataclub10 === "" ? (
                                      <>
                                          {" "}
                                          <MaterialIcon
                                              color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) "
                                              icon="add"
                                              stretch={true}
                                          />
                                      </>
                                  ) : (
                                      <>
                                          <img
                                              src={imagedataclub10}
                                              width={100}
                                              height={100}
                                          />
                                      </>
                                  )}
                              </div>
                          </div>
                      </div>
                      {/* <div className="stackupdate1">
          <div className="stackupdate2">
            <h1 className="stackupdate3">Team</h1>

          
          </div>

          <div className="stackupdate4">
            <h1 className="members-list">Members List</h1>
          </div>
          <div className="editstack">
            <button className="editstack2" onClick={() => editProfile()}>
              Edit
            </button>
          </div>
        </div> */}

                      <div className="stake-top-channel-i-d5">
                          <div className="stack-profile">
                              <div className=" my-profile1">
                                  <div className="my-profile2">
                                      <div className="my-profile-img">
                                          {imagedataclub11 === "" ? (
                                              <>
                                                  <img
                                                      src={dp_club}
                                                      style={{ width: "75px" }}
                                                  />
                                              </>
                                          ) : (
                                              <>
                                                  <img
                                                      src={imagedataclub1}
                                                      style={{ width: "75px" }}
                                                  />
                                              </>
                                          )}
                                      </div>
                                      {/* <div className="be_button_de  _d_color_de"> */}
                                      <span className="be_button_de curser-pointer">
                                          <MaterialIcon
                                              color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) "
                                              icon="delete"
                                              // Using default values:
                                              stretch={false}
                                          />{" "}
                                          Remove
                                      </span>
                                      {/* </div> */}
                                      <span
                                          className="be_button_de curser-pointer"
                                          onClick={() =>
                                              onUpload("imageclub11")
                                          }
                                      >
                                          <MaterialIcon
                                              style={{ paddingRight: "6px" }}
                                              color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161))"
                                              icon="cloud_upload"
                                              // Using default values:
                                              stretch={false}
                                          />{" "}
                                          Upload
                                      </span>
                                  </div>
                              </div>
                              <div className="stake-verified"></div>
                          </div>

                          <div>
                              <h1 className="age-group1">Club T-Shirt</h1>
                          </div>
                          <div class="flex-container">
                              <div
                                  class="flex-child magenta"
                                  onClick={() => onUpload("imageclub12")}
                              >
                                  {imagedataclub12 === "" ? (
                                      <>
                                          <img
                                              className="img5"
                                              src={tshirt_front}
                                          />
                                          <div className="">
                                              <span className="color_Define_Always_Depend">
                                                  <MaterialIcon
                                                      color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) "
                                                      icon="delete"
                                                      stretch={true}
                                                      size="16px"
                                                  />
                                              </span>
                                              <span className="Darts-style9">
                                                  {" "}
                                                  Front
                                              </span>
                                          </div>
                                      </>
                                  ) : (
                                      <>
                                          <img
                                              src={imagedataclub12}
                                              className="img5"
                                          />
                                          <div className="">
                                              <span className="color_Define_Always_Depend">
                                                  <MaterialIcon
                                                      color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) "
                                                      icon="delete"
                                                      stretch={true}
                                                      size="16px"
                                                  />
                                              </span>
                                              <span className="Darts-style9">
                                                  {" "}
                                                  Front
                                              </span>
                                          </div>
                                      </>
                                  )}
                              </div>

                              <div
                                  class="flex-child green"
                                  onClick={() => onUpload("imageclub13")}
                              >
                                  {imagedataclub13 === "" ? (
                                      <>
                                          <img
                                              className="img5"
                                              src={tshirt_back}
                                          />
                                          <div className="">
                                              <span className="color_Define_Always_Depend">
                                                  <MaterialIcon
                                                      color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) "
                                                      icon="delete"
                                                      stretch={true}
                                                      size="16px"
                                                  />
                                              </span>
                                              <span className="Darts-style9">
                                                  {" "}
                                                  back
                                              </span>
                                          </div>
                                      </>
                                  ) : (
                                      <>
                                          <img
                                              src={imagedataclub13}
                                              className="img5"
                                          />
                                          <div className="">
                                              <span className="color_Define_Always_Depend">
                                                  <MaterialIcon
                                                      color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) "
                                                      icon="delete"
                                                      stretch={true}
                                                      size="16px"
                                                  />
                                              </span>
                                              <span className="Darts-style9">
                                                  {" "}
                                                  back
                                              </span>
                                          </div>
                                      </>
                                  )}
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="magn-side">
                      <div className="Profile-Avatar">
                          <div className="profile-avatar2">
                              {" "}
                              <MaterialIcon
                                  color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) "
                                  icon="stream"
                                  stretch={true}
                                  size="36px"
                              />
                          </div>
                          <div className="profile-avatar3">
                              <div className="create-your-own-club">
                                  <h1 className="stackh1">
                                      {" "}
                                      create your own team
                                  </h1>
                                  <h2 className="stackh2">
                                      You Can Create maximum 3 teams and 1 clubs
                                  </h2>
                                  {/* <div className="teamleft">
                <p className="stackp1">Created Team:</p>
                <div className="roundstack1">
                  <p className="roundstack">2</p>
                </div>
                <div className="roundstack1">
                  <p className="roundstack">2</p>
                </div>
                <div className="roundstack1">
                  <p className="roundstack">2</p>
                </div>
                <div className="roundstack1">
                  <p className="roundstack3">2 Left</p>
                </div>
              </div> */}
                                  {/* <div className="teamleft">
                <p className="stackp1">Created Club:</p>
                <div className="roundstack1">
                  <p className="roundstack">96</p>
                </div>
               
                <div className="roundstack1">
                  <p className="roundstack3">2 Left</p>
                </div>
              </div> */}
                              </div>
                          </div>
                      </div>

                      <div className="createbutton">
                          <div>
                              {/* <div className="stack-create-team"> */}
                              <span
                                  style={{
                                      hover: "red",
                                      backgroungColor: "red",
                                  }}
                                  className="be_button_de1 curser-pointer"
                                  onClick={() => onSerach()}
                              >
                                  Create team
                              </span>

                              {/* </div> */}
                              <p className="team-parra"> Member Limit: 12</p>
                          </div>
                          <div>
                              {/* <div className="stack-create-team button-team"> */}
                              <span
                                  className="be_button_de1 curser-pointer"
                                  onClick={() => onSerachClub()}
                              >
                                  Create Club
                              </span>

                              {/* </div> */}
                              <p className="team-parra"> Member Limit: 96</p>
                          </div>
                      </div>
                  </div>
                  <CreateClub
                      imagedataclub1={imagedataclub1}
                      imagedataclub2={imagedataclub2}
                      imagedataclub3={imagedataclub3}
                      imagedataclub4={imagedataclub4}
                      imagedataclub5={imagedataclub5}
                      imagedataclub6={imagedataclub6}
                      imagedataclub7={imagedataclub7}
                      imagedataclub8={imagedataclub8}
                      imagedataclub9={imagedataclub9}
                      imagedataclub10={imagedataclub10}
                      imagedataclub11={imagedataclub11}
                      imagedataclub12={imagedataclub12}
                      imagedataclub13={imagedataclub13}
                      rawDataClub={rawDataClub}
                  />
              </div>
          )}

          <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton className="image_modal1">
                  <Modal.Title className="image_modal1">
                      Upload Image
                  </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  {/* <UploadImageCrop image={onUploadimge} type="team" /> */}
                  <Croppers
                      setimage={onUploadimge}
                      type={showSearchBox ? "club" : "team"}
                      handleClose={handleClose}
                      // mincropHeight={100}
                      // mincropWidth={100}
                      // responsive={false}
                  />
              </Modal.Body>
              {/* <Modal.Footer>
                  <Button
                      variant="secondary"
                      onClick={handleClose}
                      className="image_modal1"
                  >
                      Close
                  </Button>
                  <Button
                      variant="primary"
                      onClick={handleClose}
                      className="image_modal1"
                  >
                      Save Changes
                  </Button>
              </Modal.Footer> */}
          </Modal>
      </>
  );
};
export default CreateTeamButton;
