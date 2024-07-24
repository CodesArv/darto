import React, { useEffect, useState, useCallback, useRef } from "react";
import "./AddAdminData.css";
import { apiHandler } from "../../../../assets/api";
import { endpoint } from "../../../../assets/api/endpoint";
import { useHistory } from "react-router";
import CustomInputs from "../../CustomInput/CustomInputs";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import styled from "styled-components";
import Uploady, {
  withRequestPreSendUpdate,
  useItemFinalizeListener,
  useItemStartListener,
} from "@rpldy/uploady";
import { getMockSenderEnhancer } from "@rpldy/mock-sender";
import { Modal, Button } from "react-bootstrap";
import UploadButton from "@rpldy/upload-button";
import UploadPreview, { PREVIEW_TYPES } from "@rpldy/upload-preview";
import NoticeModal from "../../NoticeModal/NoticeModal";
import UploadImageCrop from "./UploadImageCrop";
import Croppers from "./Croppers";
import CountryList from "../../../../../src/assets/json/city.json";
//import CountryLists from "../../../../../src/assets/json/pincode.json";

import StateList from "./stateList-1.json";
const mockSenderEnhancer = getMockSenderEnhancer({ delay: 1500 });

const StyledReactCrop = styled(ReactCrop)`
  width: 100%;
  max-width: 900px;
  max-height: 400px;
`;

const PreviewImage = styled.img`
  margin: 5px;
  max-width: 200px;
  height: auto;
  max-height: 200px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

const PreviewButtons = ({
  finished,
  crop,
  updateRequest,
  onUploadCancel,
  onUploadCrop,
}) => {
  return (
    <ButtonsWrapper>
      <div className='row'>
        <div className='col-4'>
          <button
            className='image_modal2'
            style={{
              display: !finished && updateRequest && crop ? "block" : "none",
            }}
            onClick={onUploadCrop}
          >
            Upload Cropped
          </button>
        </div>
        <div className='col-4'>
          <button
            className='image_modal2'
            style={{
              display: !finished && updateRequest ? "block" : "none",
            }}
            onClick={updateRequest}
          >
            Upload without Crop
          </button>
        </div>
        <div className='col-4'>
          <button
            className='image_modal2'
            style={{
              display: !finished && updateRequest && crop ? "block" : "none",
            }}
            onClick={onUploadCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </ButtonsWrapper>
  );
};

const UPLOAD_STATES = {
  NONE: 0,
  UPLOADING: 1,
  FINISHED: 2,
};
const TournamentCategoryList = [
  "Professional",
  "Club",
  "Nationals",
  "Zonal",
  "School",
  "Qualifier",
  "Corporate",
  "friendly",
  "youth",
  "league",
  "practice",
];

const CategoryList = [
  "Sr Senior",
  "Professional",
  " Jr junior",
  "Sub Junior",
  "Master",
];
const stateList = [
  "Andaman and Nicobar (UT)",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh (UT)",
  "Chhattisgarh",
  "Dadra and Nagar Haveli (UT)",
  "Daman and Diu (UT)",
  "Delhi (UT)",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir (UT)",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Ladakh (UT)",
  "Lakshadweep (UT)",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Orissa",
  "Puducherry (UT)",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

// const CountryStateList = [
//     {
//         id: "AKCgdTOdAdyPIOzfnIQm",
//         url: "about/listyourspace",
//         content: "",
//         category: "General Info",
//         name: "List Your Space",
//     },
//     {
//         id: "LQKMBR3YpXdklL1Ca99u",
//         content: "",
//         url: "content/howtoplay",
//         category: "General Info",
//         name: "How to Play",
//     },
//     {
//         id: "dQZzscwylgtLBkqY4i7x",
//         name: "Rules and Regulations",
//         content: "",
//         category: "General Info",
//         url: "content/rules",
//     },
//     {
//         id: "oe0txOsm8VQnWknuEyPE",
//         name: "About",
//         content: "ddjjdjdj",
//         url: "content/About",
//         category: "General Info",
//     },
//     {
//         id: "v6wqNVUesQ3K0FwVHQ49",
//         url: "content/faqs",
//         content: "",
//         name: "FAQs",
//         category: "General Info",
//     },
//     {
//         id: "xHgcEFnzp9ExlL9ztqa0",
//         name: "Contact Us",
//         content: "",
//         url: "about/contactus",
//         category: "General Info",
//     },
// ];
const AddAdminData = ({ onHide }) => {
  let history = useHistory();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [description, setdescription] = useState("");
  // const [status, setStatus] = useState("");
  const [role, setRole] = useState("");
  const [fromDate, setfromDate] = useState("");
  const [toDate, settoDate] = useState("");
  const [locality, setlocality] = useState("");

  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setSelectedState] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPincode] = useState("");

  const [uploadImage, setUploadImage] = useState("");
  const [matches, setmatches] = useState("");
  const [feeperentry, setFeeperentry] = useState("");
  const [gameHours, setgameHours] = useState("");
  const [gender, setGender] = useState("");
  const [mode, setmode] = useState("");
  const [category, setcategory] = useState("");
  const [gameFormate, setGameFormate] = useState("");
  const [checkList, setCheckList] = useState("");
  const [dartType, setDartType] = useState("");
  const [tournamentType, settournamentType] = useState("");
  const [mobileNumber, setmobileNumber] = useState("");
  const [email, setemail] = useState("");
  const [stateListData, setStateListData] = useState("");
  const [districtListData, setDistrictListData] = useState("");
  const [imagedata, setImageData] = useState("");
  // const [ageGroup, setAgeGroup] = useState("");
  const [rawData, setRawData] = useState({});
  const [noticeModal, setNoticeModal] = useState(false);
  const [noticeModalErrMsg, setNoticeModalErrMsg] = useState("");
  const [noticeModalHeaderMsg, setNoticeModalHeaderMsg] = useState("");
  const previewMethodsRef = useRef();
  const [countryListData, setCountryListData] = useState("");
  const [countryData, setCountryData] = useState([]);

  const closeNoticeModal = () => {
    setNoticeModal(false);
    setNoticeModalErrMsg("");
    setNoticeModalHeaderMsg("");
  };
  // GET_STATELIST
  //GET_DISTRICT
  useEffect(() => {
    // GetStateListData();
  }, []);

  // const GetStateListData = async () => {
  //   const result = await apiHandler({
  //     url: endpoint.GET_STATELIST,
  //     method: "GET",
  //     data: null,
  //   });
  //   console.log(result.data);
  //   if (result.data.status === 500) {
  //     setNoticeModalHeaderMsg("Error");
  //     setNoticeModalErrMsg(result.data.message);
  //     setNoticeModal(true);
  //   } else if (result.data.length === 0) {
  //     setNoticeModalHeaderMsg("Error");
  //     setNoticeModalErrMsg("Please Provide data");
  //     setNoticeModal(true);
  //   } else {
  //     setStateListData(result.data);
  //     //setFilteredTournamnetData(result.data);
  //   }
  // };
  useEffect(() => {
    GetCountryList();
  }, []);
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
    //setFilteredTournamnetData(result.data);
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
    //setFilteredTournamnetData(result.data);
  };
  const handleStateSelect = (event) => {
    setSelectedState(event.target.value);
    onSearchState(event.target.value);
  };
  const onSearchState = (state) => {
    const query = "?state=" + state;
    GetDistrictListData(query, "S");
    // setSearchBy("");
  };

  const handleCountrySelect = (event) => {
    setCountry(event.target.value);
    onSearchCounty(event.target.value);
  };
  const onSearchCounty = (country) => {
    const query = "?country=" + country;
    GetDistrictListData(query, "C");
    // setSearchBy("");
  };

  const onEdit = async () => {
    const result = await apiHandler({
      url: endpoint.TOURNAMENT_CREATETOURNAMENTADMIN,
      method: "POST",
      data: {
        name: name,
        description: description,
        image: imagedata,
        // status: status,
        role: role,
        fromDate: fromDate,
        toDate: toDate,
        comingfeild: true,
        //image: uploadImage,

        locality: locality,
        city: city,
        district: district,
        state: state,
        country: country,
        pincode: pincode,

        matches: matches,
        feeperentry: feeperentry,
        gameFormate: gameFormate,
        Gameshours: gameHours,
        gender: gender,
        mode: mode,
        category: category,
        tournamentType: tournamentType,
        mobileNumber: mobileNumber,
        email: email,
        dartType: dartType,
        checkList: checkList,
        age: age,
      },
    });
    if (result.data.status === 500) {
      setNoticeModalHeaderMsg("Error");
      setNoticeModalErrMsg(result.data.message);
      setNoticeModal(true);
    } else {
      console.log("Resultput - ", result.data);
      setNoticeModalHeaderMsg("Sucess");
      setNoticeModalErrMsg("Sucessfullty create team admin");
      setNoticeModal(true);
      onHide();
      // history.push("/teamadmin");
    }
    console.log("Resultput - ", result.data);
    //  closeModal();
    history.push("/admin");
  };
  console.log("imagedata", imagedata);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const oncountry = async () => {
  //    CountryLists &&
  //        CountryLists.forEach(async (item) => {
  //            const result = await apiHandler({
  //                url: endpoint.CREATE_BOARD,
  //                method: "POST",
  //                data: item,
  //            });
  //        });
  //     console.log("county");
  // };
  return (
    <>
      <div style={{ backgroundColor: "rgb(16, 20, 44)" }}>
        <div className='bg-form-col1'>
          <div
            className='labelStyle  paddin_top_9px'
            style={{ color: "#00bbff", textAlign: "center" }}
          >
            Tournament Detail
          </div>
          {/* <Button onClick={() => oncountry()}>Country</Button> */}
          <div className='padding_profile_top'>
            {imagedata !== "" && (
              <img src={imagedata} width={200} hight={200} />
            )}
            <Croppers
              image={setImageData}
              type='tournament'
              mincropHeight={400}
              mincropWidth={400}
              responsive={false}
            />
            {/* {show ? (
                          <>
                              <Croppers
                                  image={() => setImageData()}
                                  type="tournament"
                              />
                          </>
                      ) : (
                          <>
                              <Button
                                  variant="primary"
                                  // onClick={() => oncountry()}
                                  onClick={() => handleShow()}
                                  className="image_modal"
                              >
                                  Upload Images
                              </Button>
                          </>
                      )} */}
          </div>
        </div>
        <div style={{ padding: "10px" }}>
          <div className=''>
            <div className='col paddin_top_9px'>
              <CustomInputs
                label='Name'
                // id="name-1"
                name='name1'
                type='text'
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className='col paddin_top_9px'>
              <CustomInputs
                label='Venue'
                // id='Address'
                name='Address'
                type='text'
                onChange={(e) => setlocality(e.target.value)}
                value={locality}
              />
              {/* <CustomInputs
                label="Description"
                id="name12"
                name="Description1"
                type="text"
                onChange={(e) => setdescription(e.target.value)}
                value={description}
              /> */}
            </div>
            <div className='col paddin_top_9px'>
              <label className='labelStyle'>Game format</label>
              <select
                placeholder='Mathches'
                className='teamclass teamclass1'
                style={{ padding: "none" }}
                value={gameFormate}
                onChange={(e) => setGameFormate(e.target.value)}
              >
                {" "}
                <option value='501'>501</option>
                <option value='701'>701</option>
                <option value='301'>301</option>
                <option value='Around the Clock '>Around the Clock </option>
                <option value='Cricket'>Cricket </option>
                <option
                  value='Sudden
                Death'
                >
                  Sudden Death{" "}
                </option>
              </select>
            </div>
          </div>
          <div className=''>
            {/* <div className="col">
              <CustomInputs
                label="Status"
                id="Status"
                name="Status"
                type="text"
                onChange={(e) => setStatus(e.target.value)}
                value={status}
              />
            </div> */}
            <div className='col paddin_top_9px'>
              <CustomInputs
                label='Days/Event Date'
                // id='name'
                name='From Date'
                type='text'
                placeholder='December 3-9'
                onChange={(e) => setfromDate(e.target.value)}
                value={fromDate}
              />
            </div>
            <div className='col paddin_top_9px'>
              <CustomInputs
                label='Entry Date'
                // id='name'
                name='From Date'
                type='date'
                onChange={(e) => setfromDate(e.target.value)}
                value={fromDate}
              />
            </div>
            <div className='col paddin_top_9px'>
              <CustomInputs
                label='Last Date'
                // id='To date'
                name='To Date'
                type='date'
                onChange={(e) => settoDate(e.target.value)}
                value={toDate}
              />
            </div>
          </div>
          <div className='col paddin_top_9px'>
            <label className='labelStyle'>Dart Type</label>
            <select
              placeholder='Dart Type'
              className='teamclass teamclass1'
              style={{ padding: "none" }}
              value={dartType}
              onChange={(e) => setDartType(e.target.value)}
            >
              {" "}
              <option value='Steel Tip'>Steel Tip</option>
              <option value='Soft Tip'>Soft Tip</option>
            </select>
          </div>
          <hr />
          <div
            className='labelStyle'
            style={{ color: "#00bbff", textAlign: "center" }}
          >
            Overview
          </div>
          <div className='col paddin_top_9px'>
            <label className='labelStyle'>Mathches</label>
            <select
              placeholder='Mathches'
              className='teamclass teamclass1'
              style={{ padding: "none" }}
              value={matches}
              onChange={(e) => setmatches(e.target.value)}
            >
              {" "}
              <option value='Single'>Single</option>
              <option value='Doubels'>Doubels</option>
              <option value='Team'>Team</option>
            </select>
            {/* <CustomInputs
                label="Matches"
                id="Matches"
                name="Matches"
                type="text"
                onChange={(e) => setmatches(e.target.value)}
                value={matches}
              /> */}
          </div>

          {/* fee per entry */}

          <div className='col paddin_top_9px'>
            <label className='labelStyle'>Fee Per Entry</label>
            <select
              placeholder='Fee Per Entry'
              className='teamclass teamclass1'
              style={{ padding: "none" }}
              value={feeperentry}
              onChange={(e) => setFeeperentry(e.target.value)}
            >
              {" "}
              <option value='Free'>Free</option>
              <option value='Paid'>Paid</option>
            </select>
            {/* <CustomInputs
                label="Fee Per Entry"
                id="Fee Per Entry"
                name="Fee Per Entry"
                type="text"
                onChange={(e) => setFeeperentry(e.target.value)}
                value={feeperentry}
              /> */}
          </div>

          <div className='col paddin_top_9px'>
            <label className='labelStyle'>Age Group</label>
            <select
              placeholder='Age Group'
              className='teamclass teamclass1'
              style={{ padding: "none" }}
              value={age}
              onChange={(e) => setAge(e.target.value)}
            >
              {" "}
              <option value='18+ Yrs'>18+ Yrs</option>
              <option value='40+'>40+</option>
              <option value='under 18'>under 18</option>
              <option value='below 12'>below 12</option>
            </select>
          </div>
          <div className='col paddin_top_9px'>
            <CustomInputs
              label='Game Hours'
              // id='Game Hours'
              name='name'
              type='text'
              onChange={(e) => setgameHours(e.target.value)}
              value={gameHours}
            />
          </div>
          <div className='col paddin_top_9px'>
            <label className='labelStyle'>Mode</label>
            <select
              placeholder='Enter Mode'
              className='teamclass teamclass1'
              style={{ padding: "none" }}
              value={mode}
              onChange={(e) => setmode(e.target.value)}
            >
              {" "}
              <option value='Virtual'>Virtual</option>
              <option value='Phyical'>Phyical</option>
            </select>
            {/* <CustomInputs
                label="Mode"
                id="name"
                name="name"
                type="text"
                onChange={(e) => setmode(e.target.value)}
                value={mode}
              /> */}
          </div>
          <div className='col paddin_top_9px'>
            <label className='labelStyle'>Category</label>
            <select
              placeholder='Enter'
              className='teamclass teamclass1'
              style={{ padding: "none" }}
              value={category}
              onChange={(e) => setcategory(e.target.value)}
            >
              {" "}
              {CategoryList &&
                CategoryList.map((item) => (
                  <option value={item}>{item}</option>
                ))}
            </select>
            {/* <CustomInputs
                label="Category"
                id="name"
                name="name"
                type="text"
                onChange={(e) => setcategory(e.target.value)}
                value={category}
              /> */}
          </div>
          <div className='col paddin_top_9px'>
            <label className='labelStyle'>Tournament Type</label>
            <select
              placeholder='Tournament Type'
              className='teamclass teamclass1'
              style={{ padding: "none" }}
              value={tournamentType}
              onChange={(e) => settournamentType(e.target.value)}
            >
              {" "}
              {TournamentCategoryList &&
                TournamentCategoryList.map((item) => (
                  <option value={item}>{item}</option>
                ))}
            </select>
            {/* <CustomInputs
                label="Tournament Type"
                id="name"
                name="name"
                type="text"
                onChange={(e) => settournamentType(e.target.value)}
                value={tournamentType}
              /> */}
          </div>
          <div className=''>
            <div className='col paddin_top_9px'>
              <label className='labelStyle'>Gender</label>
              <select
                placeholder='Gender'
                className='teamclass teamclass1'
                style={{ padding: "none" }}
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                {" "}
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
                <option value='Both'>Both</option>
                <option value='All'>All</option>
              </select>
            </div>
          </div>
          <div className=''>
            <div className='col paddin_top_9px'>
              <CustomInputs
                label='Mobile Number'
                // id='name'
                name='name'
                type='text'
                onChange={(e) => setmobileNumber(e.target.value)}
                value={mobileNumber}
              />
            </div>
          </div>
          <div className='col paddin_top_9px'>
            <CustomInputs
              label='Email'
              // id='name'
              name='name'
              type='text'
              onChange={(e) => setemail(e.target.value)}
              value={email}
            />
          </div>
          <div className=''>
            <div className='col paddin_top_9px'>
              <label className='labelStyle'>CheckList</label>
              <select
                placeholder='Mathches'
                className='teamclass teamclass1'
                style={{ padding: "none" }}
                value={checkList}
                onChange={(e) => setCheckList(e.target.value)}
              >
                {" "}
                <option value='Polo Neck T-Shirt'>Polo Neck T-Shirt</option>
                <option value='Trouser'>Trouser</option>
                <option value='Formal Black Shoes'> Formal Black Shoes </option>
              </select>
            </div>
          </div>

          <div className=''>
            <div className='col paddin_top_9px'>
              <label className='labelStyle'> Country</label>
              <select
                className='teamclass teamclass1'
                value={country}
                onChange={(e) => handleCountrySelect(e)}
              >
                {countryData &&
                  countryData.map((cou) => (
                    <option value={cou.name}>{cou.name}</option>
                  ))}
              </select>
            </div>
            {country === "India" ? (
              <div className='col paddin_top_9px'>
                <label className='labelStyle'> State</label>
                <select
                  placeholder='Mathches'
                  className='teamclass teamclass1'
                  style={{ padding: "none" }}
                  value={state}
                  onChange={(e) => handleStateSelect(e)}
                >
                  {" "}
                  {stateListData &&
                    stateListData.map((item) => (
                      <option value={item.state}>{item.state}</option>
                    ))}
                </select>
                {/* <CustomInputs
                label="State"
                id="name"
                name="name"
                type="text"
                onChange={(e) => setState(e.target.value)}
                value={state}
              /> */}
              </div>
            ) : (
              <>
                <div className='col paddin_top_9px'>
                  <CustomInputs
                    label='Other State'
                    placeholder='State'
                    name='name'
                    type='Other State'
                    value={state}
                    onChange={(e) => handleStateSelect(e)}
                  />
                </div>
              </>
            )}
            {country === "India" ? (
              <div className='col paddin_top_9px'>
                <label className='labelStyle'> District</label>
                <select
                  placeholder='Mathches'
                  className='teamclass teamclass1'
                  style={{ padding: "none" }}
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                >
                  {" "}
                  {districtListData &&
                    districtListData.map((item) => (
                      <option value={item.district}>{item.district}</option>
                    ))}
                </select>
                {/* <CustomInputs
                label="District"
                id="name"
                name="name"
                type="text"
                onChange={(e) => setDistrict(e.target.value)}
                value={district}
              /> */}
              </div>
            ) : (
              <>
                <div className='col paddin_top_9px'>
                  <CustomInputs
                    label='Other District'
                    placeholder='Other District'
                    name='name'
                    type='Other '
                    onChange={(e) => setDistrict(e.target.value)}
                    value={district}
                  />
                </div>
              </>
            )}
            <div className='col paddin_top_9px'>
              <CustomInputs
                label='City'
                // id='name'
                name='name'
                type='text'
                onChange={(e) => setCity(e.target.value)}
                value={city}
              />
            </div>
          </div>

          <div className=''></div>
          <div className=''>
            <div className='col paddin_top_9px'>
              <CustomInputs
                label='Pin Code'
                // id='name'
                name='name'
                type='text'
                onChange={(e) => setPincode(e.target.value)}
                value={pincode}
              />
            </div>
          </div>
          <div className=''>
            <div className='col paddin_top_9px'>
              <CustomInputs
                label='Address'
                // id='Address'
                name='Address'
                type='text'
                onChange={(e) => setlocality(e.target.value)}
                value={locality}
              />
            </div>
            <div></div>
          </div>
          <div className=''></div>

          <div className=''>
            {/* <div className="col paddin_top_9px">
              <CustomInputs
                label="Role"
                id="Role"
                name="Role"
                type="text"
                onChange={(e) => setRole(e.target.value)}
                value={role}
              />
            </div> */}
            {/* <div className="col">
          <CustomInputs
                label="Age"
                id="name"
                name="name"
                type="text"
                onChange={(e) => setAge(e.target.value)}
                value={age}
              />
          </div> */}
          </div>

          {/* <div
                      style={{
                          textAlign: "center",
                          justifyContent: "center",
                      }}
                  >
                      <Modal
                          show={show}
                          onHide={handleClose}
                          style={{
                              width: "",
                              height: "100vh",
                              fontSize: "16px",
                          }}
                      >
                          <Modal.Header closeButton className="image_modal1">
                              <Modal.Title className="image_modal1">
                                  Upload Images
                              </Modal.Title>
                          </Modal.Header>
                          <Modal.Body style={{ width: "", height: "100%" }}>
                              <UploadImageCrop
                                  image={()=>setImageData()}
                                  type="tournament"
                              />
                              <Croppers
                                  image={() => setImageData()}
                                  type="tournament"
                              />
                          </Modal.Body>
                          <Modal.Footer>
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
                          </Modal.Footer>
                      </Modal>
                  </div> */}
        </div>

        {/* <div
                  style={{
                      textAlign: "center",
                      justifyContent: "center",
                  }}
              >
                  <Modal
                      show={show}
                      onHide={handleClose}
                      style={{
                          width: "",
                          height: "100vh",
                          fontSize: "16px",
                      }}
                  >
                      <Modal.Header closeButton className="image_modal1">
                          <Modal.Title className="image_modal1">
                              Upload Image
                          </Modal.Title>
                      </Modal.Header>
                      <Modal.Body style={{ width: "", height: "100%" }}>
                          <Croppers image={()=>setImageData()}
                                  type="tournament" />
                      </Modal.Body>
                      <Modal.Footer>
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
                      </Modal.Footer>
                  </Modal>
              </div> */}
      </div>

      <div
        className='month-imp2'
        style={{
          padding: "20px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <button className='month-imp2' onClick={() => onEdit()}>
          Add
        </button>
      </div>

      {noticeModal && (
        <NoticeModal
          noticeModal={noticeModal}
          noticeModalHeader={noticeModalHeaderMsg}
          noticeModalErrMsg={noticeModalErrMsg}
          closeModal={closeNoticeModal}
        />
      )}
    </>
  );
};
export default AddAdminData;
