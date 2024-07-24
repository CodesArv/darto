import React, { useEffect, useState, useCallback, useRef } from "react";
import { Button } from "reactstrap";

import { Link, useHistory, useParams } from "react-router-dom";

import CreateTeams from "../../domains/HomePage/CreateTeamClub/CreateTeams/CreateTeams";
import tshirt_back from "./tshirt_back.png";
import tshirt_front from "./tshirt_front.png";
import dp_team from "./dp_team.png";
import MaterialIcon from "react-google-material-icons";
import dp_club from "./dp_club.png";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import "./Edit.css";
import { useDispatch, useSelector } from "react-redux";
import { apiHandler } from "../../assets/api";
import { endpoint } from "../../assets/api/endpoint";
import NoticeModal from "../../components/AdminDashboard/NoticeModal/NoticeModal";
import { Modal } from "react-bootstrap";
import UploadImageCrop from "./cropimage/UploadImageCrop";
import Croppers from "../../domains/HomePage/CreateTeamClub/CreateTeamButton/Croppers";
const EditClub = () => {
  const history = useHistory();
  const params = useParams();
  const { uid } = useSelector((state) => state.login.userData);
  const [ageGroup, setAgeGroup] = useState("");
  const [rawData, setRawData] = useState({});
  const [noticeModal, setNoticeModal] = useState(false);
  const [noticeModalErrMsg, setNoticeModalErrMsg] = useState("");
  const [noticeModalHeaderMsg, setNoticeModalHeaderMsg] = useState("");
  const [nameofclub, setNameofclub] = useState("");
  const [age, setAge] = useState("");
  const [clubMembers, setClubMembers] = useState("");
  const [tagsName, setTagsName] = useState("");
  const [about, setAbout] = useState("");
  const [locality, setLocality] = useState("");
  const [street, setStreet] = useState("");
  const [pincode, setPincode] = useState("");
  const [occupation, setOccupation] = useState("");
  const [address, setAddress] = useState("");
  const previewMethodsRef = useRef();

  const [countryListData, setCountryListData] = useState("");
  const [countryData, setCountryData] = useState("");
  const [stateListData, setStateListData] = useState("");
  const [districtListData, setDistrictListData] = useState("");
  const [state, setSelectedState] = useState("");
  const [district, setDistrict] = useState("");
  const [country, setCountry] = useState("");
  const [byid, setbyid] = useState("");
  //  const [clubimagedata, setClubImage] = useState([]);
  const [imagedata, setImageData] = useState("");
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
  const [imageValue, setImageValue] = useState("");
  const closeNoticeModal = () => {
    setNoticeModal(false);
    setNoticeModalErrMsg("");
    setNoticeModalHeaderMsg("");
  };
  useEffect(() => {
    GetCountryList();
    GetByIdClubData();
  }, []);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const GetByIdClubData = async () => {
    const res = await apiHandler({
      url: endpoint.GETBYID_User_CLUB + params.id,
      method: "GET",
      data: null,
    });
    console.log(res.data.response);

    setAgeGroup(res.data.response.ageGroup);

    setNameofclub(
      res.data && res.data.response && res.data.response.nameofclub
    );
    setClubMembers(
      res.data && res.data.response && res.data.response.clubMembers
    );
    setTagsName(res.data && res.data.response && res.data.response.tagsName);
    setAbout(res.data && res.data.response && res.data.response.about);
    setOccupation(
      res.data && res.data.response && res.data.response.occupation
    );
    setStreet(res.data && res.data.response && res.data.response.street);
    setPincode(res.data && res.data.response && res.data.response.pincode);
    setAddress(res.data && res.data.response && res.data.response.address);
    setSelectedState(res.data && res.data.response && res.data.response.state);
    setDistrict(res.data && res.data.response && res.data.response.district);
    setAge(res.data.response.age);
    setImageData(res.data.response.image);
    setbyid(res.data.response.id);
  };

  const GetCountryList = async () => {
    const res = await apiHandler({
      url: endpoint.GET_COUNTRY,
      method: "GET",
      data: null,
    });
    console.log(res.data);
    let countryList = res.data.Countrys.sort((a, b) =>
      a.name > b.name ? 1 : -1
    );
    let currentIndex = -1;
    const countries = countryList.find((c, i) => {
      if (c.name === "India") {
        currentIndex = i;
        return true;
      }
    });
    if (countries && currentIndex !== -1) {
      countryList.splice(currentIndex, 1);
      countryList.unshift(countries);
      onSearchCounty("India");
    }

    setCountryData(countryList);
  };
  const GetDistrictListData = async (query, type) => {
    const res = await apiHandler({
      url: endpoint.GET_DISTRICT + query,
      method: "GET",
      data: null,
    });
    console.log(res.data);
    switch (type) {
      case "C":
        let data = res.data.sort((a, b) => (a.state > b.state ? 1 : -1));
        setStateListData(data);
        break;
      case "S":
      default:
        let dataD = res.data.sort((a, b) => (a.district > b.district ? 1 : -1));
        setDistrictListData(dataD);
        break;
    }
  };
  const handleStateSelect = (event) => {
    setSelectedState(event.target.value);
    onSearchState(event.target.value);
  };
  const onSearchState = (state) => {
    const query = "?state=" + state;
    GetDistrictListData(query, "S");
  };

  const handleCountrySelect = (event) => {
    setCountry(event.target.value);
    onSearchCounty(event.target.value);
  };
  const onSearchCounty = (country) => {
    const query = "?country=" + country;
    GetDistrictListData(query, "C");
  };
  const onEdit = async () => {
    const result = await apiHandler({
      url: endpoint.UPDATE_User_CLUB + byid,
      method: "PUT",
      data: {
        nameofclub: nameofclub ? nameofclub : null,
        clubMembers: clubMembers ? clubMembers : null,
        tagsName: tagsName ? tagsName : null,
        about: about ? about : null,
        image: imagedata ? imagedata : null,
        age: age ? age : null,
        locality: locality ? locality : null,
        state: state ? state : null,
        district: district ? district : null,
        street: street ? street : null,
        pincode: pincode ? pincode : null,
        image2: imagedata ? imagedata : null,
        image3: imagedata2 ? imagedata2 : null,
        image4: imagedata3 ? imagedata3 : null,
        image5: imagedata4 ? imagedata4 : null,
        image6: imagedata5 ? imagedata5 : null,
        image7: imagedata6 ? imagedata6 : null,
        image8: imagedata7 ? imagedata7 : null,
        image9: imagedata8 ? imagedata8 : null,
        image10: imagedata9 ? imagedata9 : null,
        image11: imagedata10 ? imagedata10 : null,
        image12: imagedata11 ? imagedata11 : null,
        image13: imagedata12 ? imagedata12 : null,
        image14: imagedata13 ? imagedata13 : null,

        occupatione: occupation ? occupation : null,
      },
    });
    console.log(result);
    if (result.data.status === 500) {
      setNoticeModalHeaderMsg("Error");
      setNoticeModalErrMsg(result.data.message);
      setNoticeModal(true);

      //history.push("/profile")
    } else {
      console.log("Resultput - ", result.data);
    }
  };
  const onUpload = (value) => {
    setImageValue(value);
    setShow(true);
  };
  const onUploadimge = (val) => {
    console.log("fhf", val);
    switch (imageValue) {
      case "image1":
        return setImageData(val);
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
        return setImageData9(val);
      case "image10":
        return setImageData10(val);
      case "image11":
        return setImageData11(val);
      case "image12":
        return setImageData12(val);
      case "image13":
        return setImageData13(val);
    }
  };
  // const onImageData =()=>{
  //   onImageData
  // }
  const onRemoveImage = () => {
    setImageData11("");
  };
  return (
    <>
      <div className='padding_lef_right_20px padding_bottom_nine9 width_60_media '>
        {/* {showSearchTeam && ( */}
        <div>
          <div className='stackupdate_Create_tc '>
            <div className='border_Bottom_1px'>
              <span className='Darts-style1'>Add Photo</span>
              <div className='row gap_16px_Devide padding_profile_bottom'>
                <div
                  className='border_profile_Add_item col'
                  onClick={() => onUpload("image1")}
                >
                  {imagedata === "" ? (
                    <>
                      {" "}
                      <MaterialIcon
                        color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) '
                        icon='add'
                        stretch={true}
                      />
                    </>
                  ) : (
                    <>
                      <img src={imagedata} width={150} height={150} />
                    </>
                  )}
                </div>
                <div
                  className='border_profile_Add_item col '
                  onClick={() => onUpload("image2")}
                >
                  {imagedata2 === "" ? (
                    <>
                      {" "}
                      <MaterialIcon
                        color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) '
                        icon='add'
                        stretch={true}
                      />
                    </>
                  ) : (
                    <>
                      <img src={imagedata2} width={150} height={150} />
                    </>
                  )}
                </div>
                <div
                  className='border_profile_Add_item col'
                  onClick={() => onUpload("image3")}
                >
                  {imagedata3 === "" ? (
                    <>
                      {" "}
                      <MaterialIcon
                        color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) '
                        icon='add'
                        stretch={true}
                      />
                    </>
                  ) : (
                    <>
                      <img src={imagedata3} width={150} height={150} />
                    </>
                  )}
                </div>
                <div
                  className='border_profile_Add_item col'
                  onClick={() => onUpload("image4")}
                >
                  {imagedata4 === "" ? (
                    <>
                      {" "}
                      <MaterialIcon
                        color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) '
                        icon='add'
                        stretch={true}
                      />
                    </>
                  ) : (
                    <>
                      <img src={imagedata4} width={150} height={150} />
                    </>
                  )}
                </div>
                <div
                  className='border_profile_Add_item col'
                  onClick={() => onUpload("image5")}
                >
                  {imagedata5 === "" ? (
                    <>
                      {" "}
                      <MaterialIcon
                        color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) '
                        icon='add'
                        stretch={true}
                      />
                    </>
                  ) : (
                    <>
                      <img src={imagedata5} width={150} height={150} />
                    </>
                  )}
                </div>
              </div>
              <span className='Darts-style1'>For Premium Member</span>
              <div className='row gap_16px_Devide'>
                <div
                  className='border_profile_Add_item col'
                  onClick={() => onUpload("image6")}
                >
                  {imagedata6 === "" ? (
                    <>
                      {" "}
                      <MaterialIcon
                        color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) '
                        icon='add'
                        stretch={true}
                      />
                    </>
                  ) : (
                    <>
                      <img src={imagedata6} width={150} height={150} />
                    </>
                  )}
                </div>
                <div
                  className='border_profile_Add_item col'
                  onClick={() => onUpload("image7")}
                >
                  {imagedata7 === "" ? (
                    <>
                      {" "}
                      <MaterialIcon
                        color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) '
                        icon='add'
                        stretch={true}
                      />
                    </>
                  ) : (
                    <>
                      <img src={imagedata7} width={150} height={150} />
                    </>
                  )}
                </div>
                <div
                  className='border_profile_Add_item col'
                  onClick={() => onUpload("image8")}
                >
                  {imagedata8 === "" ? (
                    <>
                      {" "}
                      <MaterialIcon
                        color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) '
                        icon='add'
                        stretch={true}
                      />
                    </>
                  ) : (
                    <>
                      <img src={imagedata8} width={150} height={150} />
                    </>
                  )}
                </div>
                <div
                  className='border_profile_Add_item col'
                  onClick={() => onUpload("image9")}
                >
                  {imagedata9 === "" ? (
                    <>
                      {" "}
                      <MaterialIcon
                        color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) '
                        icon='add'
                        stretch={true}
                      />
                    </>
                  ) : (
                    <>
                      <img src={imagedata9} width={150} height={150} />
                    </>
                  )}
                </div>
                <div
                  className='border_profile_Add_item col'
                  onClick={() => onUpload("image10")}
                >
                  {imagedata10 === "" ? (
                    <>
                      {" "}
                      <MaterialIcon
                        color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) '
                        icon='add'
                        stretch={true}
                      />
                    </>
                  ) : (
                    <>
                      <img src={imagedata10} width={150} height={150} />
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className='stake-top-channel-i-d5'>
              <div className='stack-profile'>
                <div className=' my-profile1'>
                  <div className='my-profile2'>
                    <div className='my-profile-img'>
                      {imagedata11 === "" ? (
                        <>
                          <img src={dp_club} style={{ width: "75px" }} />
                        </>
                      ) : (
                        <>
                          <img src={imagedata11} style={{ width: "75px" }} />
                        </>
                      )}
                    </div>

                    <span
                      className='be_button_de curser-pointer'
                      onClick={() => onRemoveImage()}
                    >
                      <MaterialIcon
                        color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) '
                        icon='delete'
                        // Using default values:
                        stretch={false}
                      />{" "}
                      Remove
                    </span>
                    {/* </div> */}
                    <span
                      className='be_button_de curser-pointer'
                      onClick={() => onUpload("image11")}
                    >
                      <MaterialIcon
                        color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161))'
                        icon='cloud_upload'
                        // Using default values:

                        stretch={false}
                      />{" "}
                      Upload
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h1 className='age-group1'>Club T-Shirt</h1>
              </div>
              <div class='flex-container'>
                <div
                  class='flex-child magenta'
                  onClick={() => onUpload("image12")}
                >
                  {imagedata12 === "" ? (
                    <>
                      {" "}
                      <img className='img5' src={tshirt_front} />
                      <div className=''>
                        <span className='color_Define_Always_Depend'>
                          {" "}
                          <MaterialIcon
                            color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) '
                            icon='add'
                            stretch={true}
                          />
                        </span>
                        <span className='Darts-style9'> front</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <img className='img5' src={imagedata12} />
                      <div className=''>
                        <span className='Darts-style9'> back</span>
                      </div>
                    </>
                  )}
                </div>

                <div
                  class='flex-child green'
                  onClick={() => onUpload("image13")}
                >
                  {imagedata13 === "" ? (
                    <>
                      {" "}
                      <img className='img5' src={tshirt_back} />
                      <div className=''>
                        <span className='color_Define_Always_Depend'>
                          {" "}
                          <MaterialIcon
                            color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) '
                            icon='add'
                            stretch={true}
                          />
                        </span>
                        <span className='Darts-style9'> back</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <img className='img5' src={imagedata13} />
                      <div className=''>
                        <span className='Darts-style9'> back</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-color3'>
          <div className='stack-onclick8'>
            <div>
              <h1 className='age-group1'>Age Group</h1>
            </div>

            <div className='stack-age-group'>
              {/* <div className="floating-left"> */}
              <span
                className='be_button_de1 curser-pointer'
                onClick={() => setAgeGroup("I am 18+ Year")}
                value={ageGroup}
                style={{
                  backgroundColor:
                    ageGroup === "I am 18+ Year" ? "#fa0043" : "#23354d",
                  color: ageGroup === "I am 18+ Year" ? "white" : "",
                }}
                id={"I am 18+ Year"}
              >
                <MaterialIcon
                  color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161))'
                  icon='school'
                  stretch={true}
                />
                <span className='padding_left_Club'>I am 18+ Year</span>
              </span>
              {/* </div> */}
              <p className='parra-p1'> (Sr./Senior/Professional)</p>
            </div>
            <div className='stack-age-group'>
              {/* <div className="floating-left"> */}
              <span
                className='be_button_de1 curser-pointer'
                onClick={() => setAgeGroup("Under 18 years Up to 8 year")}
                value={ageGroup}
                style={{
                  backgroundColor:
                    ageGroup === "Under 18 years Up to 8 year"
                      ? "#fa0043"
                      : "#23354d",
                  color:
                    ageGroup === "Under 18 years Up to 8 year" ? "white" : "",
                }}
                id={"Under 18 years Up to 8 year"}
              >
                <MaterialIcon
                  color='var(--token-dcfc1000-f350-494d-bd15-7f017b76226e, rgb(255, 255, 255))'
                  icon='face_retouching_natural'
                  stretch={true}
                />
                <span className='padding_left_Club'>Under 18 Up to 8 year</span>
              </span>
              {/* </div> */}
              <p className='parra-p1'>(Jr./Junior)</p>
            </div>
            <div className='stack-age-group'>
              <span
                className='be_button_de1 curser-pointer'
                onClick={() => setAgeGroup("Under 8 years")}
                value={ageGroup}
                style={{
                  backgroundColor:
                    ageGroup === "Under 8 years" ? "#fa0043" : "#23354d",
                  color: ageGroup === "Under 8 years" ? "white" : "",
                }}
                id={"Under 8 years"}
              >
                <MaterialIcon
                  color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161))'
                  icon='child_care'
                  stretch={true}
                />
                <span className='padding_left_Club'>Under 8 years</span>
              </span>
              {/* </div> */}
              <p className='parra-p1'>(Sub Junior)</p>
            </div>
          </div>
          <div className='form-style1'>
            <input
              className='form-input-style'
              type='text'
              placeholder='Club Name'
              onChange={(e) => setNameofclub(e.target.value)}
              value={nameofclub}
            />

            <div className='margin-form'>
              {/* <input  className="form-input-style margin-form" type="text" placeholder="Enter" /> */}
              <select
                className='form-input-style margin-form '
                placeholder='Enter'
                value={clubMembers}
                onChange={(e) => setClubMembers(e.target.value)}
              >
                <option value=''>Club Member</option>
                <option value='10 member'>10 member</option>
                <option value='20 member'>20 member</option>
                <option value='30 member'>30 member</option>
              </select>
            </div>

            <div className='team-divided'>
              <h1 className='tag-team'>#Tag Team and club name Display</h1>

              <input
                className='form-input-style'
                type='text'
                placeholder='#TagClub'
                onChange={(e) => setTagsName(e.target.value)}
                value={tagsName}
              />
            </div>
          </div>
          <div className='about-club-dt-define'>
            <div className='about-club-dt-define-name '>
              <span>About Club</span>
            </div>
            <textarea
              className='text-area-dfin'
              onChange={(e) => setAbout(e.target.value)}
              value={about}
              placeholder='Discribe 150 Charcters'
              intent='primary'
              resizable='none'
              resize='none'
              theme='light'
              type='text'
            />
          </div>
          <div className=''>
            <div className='border_top_bottom_1px'>
              <div className='margin-form'>
                <select
                  className='form-input-style margin-form '
                  value={occupation}
                  onChange={(e) => setOccupation(e.target.value)}
                >
                  <option value='Occupition'>Occupition</option>
                  <option value='Student'>Student</option>
                  <option value='Professional'>Professional</option>
                  <option value='Carporate'>Carporate</option>
                </select>
              </div>
              <div className='team-divided'>
                <h1 className='tag-team'>
                  Write Name of school/college/company/corporate
                </h1>

                <input
                  className='form-input-style'
                  type='text'
                  placeholder='Name of Occuupition institutaion'
                  onChange={(e) => setTagsName(e.target.value)}
                  value={tagsName}
                />
              </div>
            </div>

            <div className='margin-form'>
              <select
                className='form-input-style margin-form '
                value={state}
                onChange={(e) => handleStateSelect(e)}
              >
                <option>-Select-</option>{" "}
                {stateListData &&
                  stateListData.map((item) => (
                    <option value={item.state}>{item.state}</option>
                  ))}
              </select>
            </div>
            <div className='margin-form'>
              <select
                className='form-input-style margin-form '
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
              >
                <option>-Select-</option>{" "}
                {districtListData &&
                  districtListData.map((item) => (
                    <option value={item.district}>{item.district}</option>
                  ))}
              </select>
            </div>

            <div className='margin-form padding_profile_bottom'>
              <input
                className='form-input-style margin-form '
                type='text'
                placeholder='City / Area *'
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
            </div>
            <div className=' padding_profile_bottom'>
              <input
                className='form-input-style  '
                type='text'
                placeholder='PinCode'
                onChange={(e) => setPincode(e.target.value)}
                value={pincode}
              />
            </div>
            <div className='about-club-dt-define '>
              <textarea
                className='text-area-dfin'
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                placeholder='Address'
                intent='primary'
                resizable='none'
                resize='none'
                theme='light'
                type='text'
              />
            </div>
            <div className=''>
              <div className='header-df-all'>
                <span>Social Connect</span>
              </div>
              <div className='divbtnconnect'>
                <br />
                <input
                  className='btnconnect'
                  placeholder=' Facebook link'
                  // Using default values:
                  focusColor='#09F'
                  backgroundColor='var(--token-e2079bf0-f281-429e-90ac-e5958a3c1a75, rgb(35, 53, 77)) '
                  keyboard=''
                  lineHeight={1.4}
                  maxLength={50}
                  type='text'
                  textAlign='left'
                  textColor='#333'
                />{" "}
                <p>
                  {" "}
                  <BsFacebook className='connecticons' />
                </p>{" "}
              </div>
              <div className='divbtnconnect'>
                <input
                  className='btnconnect'
                  placeholder=' Twitter link'
                  // Using default values:
                  focusColor='#09F'
                  keyboard=''
                  lineHeight={1.4}
                  maxLength={50}
                  type='text'
                  textAlign='left'
                  textColor='#333'
                  // value=""
                />{" "}
                <p>
                  <BsTwitter className='connecticons' />
                </p>{" "}
              </div>{" "}
              <div className='divbtnconnect'>
                <input
                  className='btnconnect'
                  placeholder=' Instagram link'
                  // Using default values:
                  focusColor='#09F'
                  keyboard=''
                  lineHeight={1.4}
                  maxLength={50}
                  type='text'
                  textAlign='left'
                  textColor='#333'
                  // value=""
                />{" "}
                <p>
                  {" "}
                  <AiFillInstagram className='connecticons' />
                </p>{" "}
              </div>{" "}
              <div className='divbtnconnect'>
                <input
                  className='btnconnect'
                  placeholder=' Youtube'
                  // Using default values:
                  focusColor='#09F'
                  keyboard=''
                  lineHeight={1.4}
                  maxLength={50}
                  type='text'
                  textAlign='left'
                  textColor='#333'
                  // value=""
                />{" "}
                <p>
                  {" "}
                  <BsYoutube className='connecticons' />
                </p>{" "}
              </div>
            </div>
          </div>

          <div className='update-botton-width'>
            {/* <div className="floating-left flot-flot"> */}
            <button className='width_of_button' onClick={() => onEdit()}>
              Update
            </button>
            {/* </div> */}
          </div>
        </div>
        {/* </div> */}
        {/* )} */}
        {/* {show && ( */}
        <>
          {" "}
          {/* setImageData[...imageData, [i]: newImagePath] */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton className='image_modal1'>
              <Modal.Title className='image_modal1'>Upload Image</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Croppers
                image={onUploadimge}
                type='club'
                handleClose={handleClose}
              />
            </Modal.Body>
            {/* <Modal.Footer>
              <Button
                variant='secondary'
                onClick={handleClose}
                className='image_modal1'
              >
                Close
              </Button>
              <Button
                variant='primary'
                onClick={handleClose}
                className='image_modal1'
              >
                Save Changes
              </Button>
            </Modal.Footer> */}
          </Modal>
        </>
        {/* )} */}

        {noticeModal && (
          <NoticeModal
            noticeModal={noticeModal}
            noticeModalHeader={noticeModalHeaderMsg}
            noticeModalErrMsg={noticeModalErrMsg}
            closeModal={closeNoticeModal}
          />
        )}
      </div>
    </>
  );
};
export default EditClub;
