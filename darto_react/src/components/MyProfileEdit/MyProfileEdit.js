/* eslint-disable no-unused-vars */
/* eslint-disable no-unreachable */
import React, { useEffect } from "react";
import "./MyProfileEdit.css";
import { useHistory } from "react-router";
import { BsGenderMale } from "react-icons/bs";
import { BiFemaleSign } from "react-icons/bi";
import { FaHashtag } from "react-icons/fa";
import { apiHandler } from "../../assets/api";
import { endpoint } from "../../assets/api/endpoint";
import { useState } from "react";
import PropTypes from "prop-types";
import NoticeModal from "../AdminDashboard/NoticeModal/NoticeModal";
import MaterialIcon from "react-google-material-icons";
import { spacing } from "@material-ui/system";
import darto_avatar from "../../assets/darto_avatar.jpg";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import CustomInputs from "../AdminDashboard/CustomInput/CustomInputs";
import UploadImageCrop from "../AdminDashboard/TournamentAdmin/AddAdminData/UploadImageCrop";
//import Croppers from "../AdminDashboard/TournamentAdmin/AddAdminData/Croppers";
import Croppers from "../../domains/HomePage/CreateTeamClub/CreateTeamButton/Croppers";
export const parseDate = (weekDate) => {
  if (weekDate === null || weekDate === "") return null;

  let dateObj = new Date(weekDate);

  var month =
    (dateObj.getMonth() + 1 < 10 ? "0" : "") + (dateObj.getMonth() + 1);
  var date = (dateObj.getDate() < 10 ? "0" : "") + dateObj.getDate();
  return dateObj.getFullYear() + "-" + month + "-" + date;
};
const MyProfileEdit = ({ closeModal }) => {
  let history = useHistory();
  const { id } = useSelector((state) => state.login.userData);
  const [gender, setGender] = useState("");
  const [firstname, setfirstName] = useState("");
  const [middlename, setmiddleName] = useState("");
  const [lastname, setlastName] = useState("");
  const [address, setAddress] = useState("");
  const [state, setSelectedState] = useState("");
  const [category, setCategory] = useState("");
  const [district, setDistrict] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setemail] = useState("");
  const [tagname, settagName] = useState("");
  const [mobilenumber, setmobileNumber] = useState("");
  const [nameOfInstitution, setNameOfInstitution] = useState("");
  const [age, setAge] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [stateListData, setStateListData] = useState("");
  const [dob, setDob] = useState("");
  const [rawData, setRawData] = useState({});
  const [noticeModal, setNoticeModal] = useState(false);
  const [noticeModalErrMsg, setNoticeModalErrMsg] = useState("");
  const [noticeModalHeaderMsg, setNoticeModalHeaderMsg] = useState("");
  const [countryListData, setCountryListData] = useState("");
  const [countryData, setCountryData] = useState("");
  const [districtListData, setDistrictListData] = useState("");
  const [byid, setbyid] = useState("");
  const [upload, setUpload] = useState("");
  const [remove, setRemove] = useState("");
  const [images, setImage] = useState("");
  const [imagedata, setImageData] = useState("");
  const [skills ,setSkills] =useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [oid, setOid] = useState("");
  const [membership,setMemeberShip] =useState(false);
  // const { authToken } = useSelector((state) => state.login.authData);
  const closeNoticeModal = () => {
    setNoticeModal(false);
    setNoticeModalErrMsg("");
    setNoticeModalHeaderMsg("");
  };
  useEffect(() => {
    GetCountryList();
    GetByIdProfileData();
  }, []);
  useEffect(() => {
      const query = "?state=" + state;
      GetDistrictListData(query, "S");
  }, [state]);

  const GetByIdProfileData = async () => {
       var val = Math.floor(Math.random() * 90 + 10);
       console.log(val);
    const res = await apiHandler({
        url: endpoint.GETBYID_USER + id,
        method: "GET",
        data: null,
    });
    console.log(res.data.response);
    setGender(res.data.response.gender ? res.data.response.gender : "");
    setfirstName(
      res.data.response.firstName ? res.data.response.firstName : ""
    );
    setlastName(res.data.response.lastName ? res.data.response.lastName : "");
    setmiddleName(
      res.data.response.middleName ? res.data.response.middleName : ""
    );
    setAddress(res.data.response.locality ? res.data.response.locality : "");
    setCountry(res.data.response.country ? res.data.response.country : "");
    setSelectedState(res.data.response.state ? res.data.response.state : "");
    console.log("District - ", res.data.response.district);
    setDistrict(res.data.response.district ? res.data.response.district : "");
    setCity(res.data.response.city ? res.data.response.city : "");
    setPinCode(res.data.response.pincode ? res.data.response.pincode : "");
    setAgeGroup(res.data.response.ageGroup ? res.data.response.ageGroup : "");
    setOrganization(
      res.data.response.organization ? res.data.response.organization : ""
    );
    setAge(res.data.response.age ? res.data.response.age : "");
    setemail(res.data.response.email ? res.data.response.email : "");
    setCategory(res.data.response.category ? res.data.response.category : "");
    setNameOfInstitution(
      res.data.response.nameOfInstitution
        ? res.data.response.nameOfInstitution
        : ""
    );
    settagName(
        res.data.response.tagName === null
            ? "#" +
                  res.data.response.firstName +
                  val
            : res.data.response.tagName
    );
    setmobileNumber(
      res.data.response.mobileNumber ? res.data.response.mobileNumber : ""
    );
    setDob(res.data.response.dob ? parseDate(res.data.response.dob) : "");
    setbyid(res.data.response.id ? res.data.response.id : "");
    setImageData(res.data.response.image ? res.data.response.image : "");
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
    //setFilteredTournamnetData(result.data);
  };
//   var val = Math.floor(1000 + Math.random() * 9000);
//   console.log(val);
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
            setDistrictListData([]);
            // setDistrict("");
            break;
        case "S":
        default:
            let dataD = res.data.sort((a, b) =>
                a.district > b.district ? 1 : -1
            );
            // ondistrict(dataD)
            setDistrictListData(dataD);
            if (district !== "") setDistrict(district);
            //  setDistrict(dataD[0].district);
            break;
    }
    //setFilteredTournamnetData(result.data);
  };
  const handleStateDistrict =(e
    )=>{
    setDistrict(e.target.value);
     

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
    if (country === "India") {
        const query = "?country=" + country;
        GetDistrictListData(query, "C");
    } else {
        setStateListData([]);
        setSelectedState("");
        setDistrictListData([]);
        setDistrict("");
    }
    // setSearchBy("");
  };

  const onEdit = async (e) => {
      e.preventDefault();
    
      if (ageValidate()) {
          const result = await apiHandler({
              url: endpoint.UPDATE_USER + id,
              method: "PUT",
              data: {
                  gender: gender ? gender : null,
                  firstName: firstname ? firstname : null,
                  middleName: middlename ? middlename : null,
                  lastName: lastname ? lastname : null,
                  tagName: tagname ? tagname : null,
                  organization: organization ? organization : null,
                  mobileNumber: mobilenumber ? mobilenumber : null,
                  email: email ? email : null,
                  locality: address ? address : null,
                  city: city ? city : null,
                  state: state ? state : null,
                  district: district ? district : null,
                  pincode: pinCode ? pinCode : null,
                  country: country ? country : null,
                  nameOfInstitution: nameOfInstitution
                      ? nameOfInstitution
                      : null,
                  category: category ? category : null,
                  age: age ? age : null,
                  ageGroup: ageGroup ? ageGroup : null,
                  dob: dob ? dob : null,
                //   skills :skills ?skills : null,
                  // upload: upload ? upload : null,
                  // remove: remove ? remove : null,
                  image: imagedata ? imagedata : "",

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
              //closeModal();
              history.push("/profile");
          }
      }
  };;

  const onRemove = () => {
    setImageData("");
  };
  const tagNameValidation = async (tagname) => {
      // const { value } = e.target;
      console.log("Input value: ", tagname);

      // Function to check letters and numbers
      if (tagname < 6) {
          setNoticeModalHeaderMsg("Error");
          setNoticeModalErrMsg("please select minimum length 6 in tagName");
          setNoticeModal(true);
          return false;
      } else {
          const letterNumber = /^[#0-9a-zA-Z]+$/.test(tagname);

          if (letterNumber) {
              // settagName(tagname);
              return tagname;
          } else {
              setNoticeModalHeaderMsg("Error");
              setNoticeModalErrMsg("please select Correct tagName ");
              setNoticeModal(true);
              return false;
          }
      }
  };
  const getAge =(dateString) => {
      setDob(dateString);
      var today = new Date();
      var birthDate = new Date(dateString);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
      }
      return setAge(age);
  }
  const  onTageName =()=>{
      if(!membership){
         const letterNumber =
             /(?=[^#a-z\n]*[a-z])[A-Za-z._-]*[0-9][A-Za-z0-9._-]*$/.test(
                 tagname
             );
         console.log("letterNumber :", letterNumber, tagname);
         if (!letterNumber) {
             setNoticeModalHeaderMsg("Error");
             setNoticeModalErrMsg("please select Correct tagName ");
             setNoticeModal(true);
             return false;
         }
         return true;
      }
    //   else{
    //      settagName(val);  
    //   }
    //   settagName(val)
  }
  const ageValidate = () => {
    if (mobilenumber === "") {
      setNoticeModalHeaderMsg("Error");
      setNoticeModalErrMsg("please Select mobile Number");
      setNoticeModal(true);
      return false;
    }
     if (dob === "") {
         setNoticeModalHeaderMsg("Error");
         setNoticeModalErrMsg("please Select mobile Number");
         setNoticeModal(true);
         return false;
     }
    if (pinCode === "") {
      setNoticeModalHeaderMsg("Error");
      setNoticeModalErrMsg("please Select PinCode");
      setNoticeModal(true);
      return false;
    }
      
   
        if (ageGroup === "I am 18+ Year" && Number(age) < 18) {
            // if (tagNameValidation()){
            //   return false;
            // }
            //  if (tagname === "" || tagNameValidation()){
            //     setNoticeModalHeaderMsg("Error");
            //     setNoticeModalErrMsg("please Select tagName");
            //     setNoticeModal(true);
            //     return false;
            //  }
            setNoticeModalHeaderMsg("Error");
            setNoticeModalErrMsg("please Select Correct age value by agegroup");
            setNoticeModal(true);
            return false;
        }

    if (
      (ageGroup === "Under 18 years Up to 8 year" && Number(age) > 8) ||
      (ageGroup === "Under 18 years Up to 8 year" && Number(age) < 18)
    ) {
      setNoticeModalHeaderMsg("Error");
      setNoticeModalErrMsg("please Select Correct age value by agegroup");
      setNoticeModal(true);
      return false;
    }

    if (ageGroup === "Under 8 years" && Number(age) > 8) {
      setNoticeModalHeaderMsg("Error");
      setNoticeModalErrMsg("please Select Correct age value by agegroup");
      setNoticeModal(true);
      return false;
    }
        if (tagname.length < 8) {
            setNoticeModalHeaderMsg("Error");
            setNoticeModalErrMsg("please select minimum length 8 in tagName");
            setNoticeModal(true);
            return false;
        } 

            const letterNumber = /(?=[^#a-z\n]*[a-z])[A-Za-z._-]*[0-9][A-Za-z0-9._-]*$/.test(tagname);
            console.log("letterNumber :", letterNumber, tagname);
            if (!letterNumber) {
                setNoticeModalHeaderMsg("Error");
                setNoticeModalErrMsg("please select Correct tagName ");
                setNoticeModal(true);
                return false;
            
            }
 return true;
        // return tagNameValidation(tagname);
   };

  return (
      <>
          <div className="width_60_media padding_bottom_nine9">
              <div className="fixed-item-input " style={{ padding: "10px" }}>
                  <div className="edit-options">
                      <p className="my-profile">My Profile</p>
                  </div>
                  <div className=" my-profile1">
                      <div className="my-profile2">
                          <div className="size-manage">
                              {/* <CgProfile className="size-manage" /> */}
                              <span>
                                  {imagedata === "" ? (
                                      <>
                                          <img
                                              src={darto_avatar}
                                              className="size_of_img_ninty_nine"
                                          />
                                      </>
                                  ) : (
                                      <>
                                          <img
                                              src={imagedata}
                                              className="size_of_img_ninty_nine"
                                          />
                                      </>
                                  )}

                                  {/* <MaterialIcon
              size="120px"
              color="var(--token-2a633678-f86b-4ab5-94be-ee4f65254cde, rgb(120, 144, 161)) "
              icon="account_circle"
              // Using default values:
              stretch={false}
            /> */}
                              </span>
                          </div>
                          {/* <div className="be_button_de  _d_color_de"> */}
                          <span
                              className="be_button_de curser-pointer"
                              value={remove}
                              onClick={() => onRemove()}
                              style={{
                                  backgroundColor:
                                      remove === "removes"
                                          ? "#fa0043"
                                          : "#23354d",
                                  color: remove === "removes" ? "white" : "",
                              }}
                              id={"removes"}
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
                              className="be_button_de curser-pointer"
                              // value={upload}
                              // onClick={() => setUpload("uploads")}
                              onClick={handleShow}
                              style={{
                                  backgroundColor:
                                      upload === "uploads"
                                          ? "#fa0043"
                                          : "#23354d",
                                  color: upload === "uploads" ? "white" : "",
                              }}
                              id={"uploads"}
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
                          {/* <UploadImageCrop image={setImageData} type="slider" /> */}
                          <Croppers
                              setimage={setImageData}
                              type="user"
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
                  <div className=" my-profile1">
                      <div className="my-profile2">
                          {/* <div className="button-fixed"> */}
                          <span
                              className="be_button_de curser-pointer"
                              onClick={() => setGender("Male")}
                              value={gender}
                              style={{
                                  backgroundColor:
                                      gender === "Male" ? "#fa0043" : "#23354d",
                                  color: gender === "Male" ? "white" : "",
                              }}
                              id={"Male"}
                          >
                              <MaterialIcon
                                  color="var(--token-62d928f7-b29b-49a5-a425-bbc990e69ba9, rgb(255, 255, 255))"
                                  icon="male"
                                  stretch={true}
                              />{" "}
                              Male
                          </span>
                          {/* </div> */}
                          {/* <div className="button-fixed"> */}
                          <span
                              className="be_button_de curser-pointer"
                              onClick={() => setGender("Female")}
                              value={gender}
                              style={{
                                  backgroundColor:
                                      gender === "Female"
                                          ? "#fa0043"
                                          : "#23354d",
                                  color: gender === "Female" ? "white" : "",
                              }}
                              id={"Female"}
                          >
                              <MaterialIcon
                                  color="var(--token-62d928f7-b29b-49a5-a425-bbc990e69ba9, rgb(255, 255, 255))"
                                  icon="female"
                                  stretch={true}
                              />{" "}
                              Female
                          </span>
                          {/* </div> */}
                          {/* <div className="button-fixed"> */}
                          <span
                              className="be_button_de curser-pointer"
                              onClick={() => setGender("Others")}
                              value={gender}
                              id={"Others"}
                              style={{
                                  backgroundColor:
                                      gender === "Others"
                                          ? "#fa0043"
                                          : "#23354d",
                                  color: gender === "Others" ? "white" : "",
                              }}
                          >
                              Others
                          </span>
                          {/* </div> */}
                      </div>

                      <div>
                          <input
                              className="form-input-style margin-form"
                              type="text"
                              placeholder="First Name *"
                              onChange={(e) => setfirstName(e.target.value)}
                              value={firstname}
                          />
                      </div>

                      <div>
                          <input
                              className="form-input-style margin-form"
                              type="text"
                              placeholder="Middle Name *"
                              onChange={(e) => setmiddleName(e.target.value)}
                              value={middlename}
                          />
                      </div>

                      <div>
                          <input
                              className="form-input-style margin-form"
                              type="text"
                              placeholder="Last Name *"
                              onChange={(e) => setlastName(e.target.value)}
                              value={lastname}
                          />
                      </div>

                      <div className="team-divided">
                          <h1 className="tag-team marginteam">
                              Your # Tag Name It will be display in your profile
                          </h1>
                      </div>
                      <div>
                          <div>
                              <div className="display_flex_tagname">
                                  <div className="width_100_tagname">
                                      <input
                                          className="form-input-style find-width"
                                          type="text"
                                          placeholder="#Typing Name"
                                          onChange={(e) =>
                                              settagName(e.target.value)
                                          }
                                          onBlur={() => onTageName()}
                                          value={tagname}
                                      />
                                  </div>
                                  <div>
                                      <span className="tagsize">
                                          <MaterialIcon
                                              className="tagsize"
                                              color="var(--token-dcfc1000-f350-494d-bd15-7f017b76226e, rgb(255, 255, 255))"
                                              icon="tag"
                                              stretch={true}
                                          />
                                          {/* <FaHashtag  /> */}
                                      </span>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="stack-onclick8">
                          <div>
                              <h1 className="age-group1">Age Group</h1>
                          </div>

                          <div className="stack-age-group">
                              {/* <div className="floating-left"> */}

                              <span
                                  className="be_button_de1 gap_6px curser-pointer"
                                  onClick={() => setAgeGroup("I am 18+ Year")}
                                  value={ageGroup}
                                  style={{
                                      backgroundColor:
                                          ageGroup === "I am 18+ Year"
                                              ? "#fa0043"
                                              : "#23354d",
                                      color:
                                          ageGroup === "I am 18+ Year"
                                              ? "white"
                                              : "",
                                  }}
                                  id={"I am 18+ Year"}
                              >
                                  <MaterialIcon
                                      color="var(--token-dcfc1000-f350-494d-bd15-7f017b76226e, rgb(255, 255, 255))"
                                      icon="school"
                                      stretch={true}
                                  />
                                  I am 18+ Year
                              </span>
                              <p
                                  className="parra-p1"
                                  onClick={() =>
                                      setCategory("Sr./Senior/Professional")
                                  }
                                  value={category}
                                  id={"Sr./Senior/Professional"}
                              >
                                  {" "}
                                  (Sr./Senior/Professional)
                              </p>
                              {/* </div> */}
                          </div>
                          <div className="stack-age-group">
                              {/* <div className="floating-left"> */}
                              <span
                                  className="be_button_de1 gap_6px curser-pointer"
                                  onClick={() =>
                                      setAgeGroup("Under 18 years Up to 8 year")
                                  }
                                  value={ageGroup}
                                  style={{
                                      backgroundColor:
                                          ageGroup ===
                                          "Under 18 years Up to 8 year"
                                              ? "#fa0043"
                                              : "#23354d",
                                      color:
                                          ageGroup ===
                                          "Under 18 years Up to 8 year"
                                              ? "white"
                                              : "",
                                  }}
                                  id={"Under 18 years Up to 8 year"}
                              >
                                  <MaterialIcon
                                      color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) "
                                      icon="face_retouching_natural"
                                      stretch={true}
                                  />{" "}
                                  Under 18 years Up to 8 year
                              </span>
                              <p
                                  className="parra-p1"
                                  onClick={() => setCategory("Jr./Junior")}
                                  value={category}
                                  id={"Jr./Junior"}
                              >
                                  (Jr./Junior)
                              </p>
                              {/* </div> */}
                          </div>
                          <div className="stack-age-group">
                              {/* <div className="floating-left"> */}
                              <span
                                  className="be_button_de1 gap_6px curser-pointer"
                                  onClick={() => setAgeGroup("Under 8 years")}
                                  value={ageGroup}
                                  style={{
                                      backgroundColor:
                                          ageGroup === "Under 8 years"
                                              ? "#fa0043"
                                              : "#23354d",
                                      color:
                                          ageGroup === "Under 8 years"
                                              ? "white"
                                              : "",
                                  }}
                                  id={"Under 8 years"}
                              >
                                  <MaterialIcon
                                      color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161))"
                                      icon="child_care"
                                      stretch={true}
                                  />
                                  Under 8 years
                              </span>
                              {/* </div> */}

                              <p
                                  className="parra-p1"
                                  onClick={() => setCategory("Sub Junior")}
                                  value={category}
                                  id={"Sub Junior"}
                              >
                                  (Sub Junior)
                              </p>
                          </div>
                      </div>
                      <div className="row">
                          <div className="margin-form col">
                              <label className="labelStyle">
                                  Date of Birth
                              </label>
                              <input
                                  className="form-input-style margin-form "
                                  type="date"
                                  placeholder="Address"
                                  onChange={(e) => getAge(e.target.value)}
                                  value={dob}
                              />
                          </div>
                          <div className="margin-form col">
                              <label className="labelStyle">Age (Yrs)</label>
                              {/* <input  className="form-input-style margin-form" type="text" placeholder="Enter" /> */}
                              <input
                                  className="form-input-style margin-form "
                                  type="number"
                                  placeholder="Age (24yrs)"
                                  disabled={true}
                                  onChange={(e) => setAge(e.target.value)}
                                  value={age}
                              />
                          </div>
                      </div>
                  </div>
                  <div></div>
                  <div className="border-botton1">
                      <div className="team-divided">
                          <h1 className="tag-team">I Am </h1>
                          <div className="margin-form">
                              {/* <input  className="form-input-style margin-form" type="text" placeholder="Enter" /> */}
                              <select
                                  className="form-input-style margin-form "
                                  placeholder="Enter"
                                  onChange={(e) =>
                                      setOrganization(e.target.value)
                                  }
                                  value={organization}
                              >
                                  {" "}
                                  <option>-Select-</option>
                                  <option value="School Student">
                                      School Student
                                  </option>
                                  <option value="College Student">
                                      College Student
                                  </option>
                                  <option value="Empolyee">Empolyee</option>
                                  <option value="Other">Other</option>
                              </select>
                          </div>
                      </div>
                      <div className="team-divided">
                          <h1 className="tag-team ">
                              Name of School/College/Company{" "}
                          </h1>
                          <div className="margin-form">
                              {/* <input  className="form-input-style margin-form" type="text" placeholder="Enter" /> */}

                              <input
                                  className="form-input-style margin-form"
                                  type="text"
                                  placeholder="Name Of Institution "
                                  onChange={(e) =>
                                      setNameOfInstitution(e.target.value)
                                  }
                                  value={nameOfInstitution}
                              />
                          </div>
                      </div>
                  </div>
                  <div className="border-top5">
                      <div className="team-divided">
                          <h1 className="tag-team ">Contact Details * </h1>
                          <div className="margin-form">
                              {/* <input  className="form-input-style margin-form" type="text" placeholder="Enter" /> */}
                              <div>
                                  <input
                                      className="form-input-style margin-form"
                                      type="text"
                                      placeholder="Mobile Number *"
                                      onChange={(e) =>
                                          setmobileNumber(e.target.value)
                                      }
                                      value={mobilenumber}
                                  />
                              </div>
                              <div className="display_flex_tagname">
                                  <div className="width_100_tagname">
                                      <input
                                          className="form-input-style margin-form"
                                          type="text"
                                          placeholder="Email Id *"
                                          disabled={true}
                                          onChange={(e) =>
                                              setemail(e.target.value)
                                          }
                                          value={email}
                                      />
                                  </div>
                                  <div>
                                      <span className="emailIdVarified">
                                          <MaterialIcon
                                              color="var(--token-95ce18c7-cfcb-4ba5-9af9-6888ca0cea28, rgb(135, 192, 2)) "
                                              icon="verified"
                                              stretch={false}
                                          />
                                      </span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="border-top5">
                      <h1 className="tag-team " style={{ marginTop: "20px" }}>
                          Address Details Helps to Find & Create Teams & Club{" "}
                      </h1>
                      <div className="margin-form">
                          {/* <input  className="form-input-style margin-form" type="text" placeholder="Enter" /> */}
                          <label className="labelStyle"> Country</label>
                          <select
                              className="teamclass teamclass1"
                              value={country}
                              onChange={(e) => handleCountrySelect(e)}
                          >
                              <option>-Select One Option-</option>
                              {countryData &&
                                  countryData.map((cou) => (
                                      <option value={cou.name}>
                                          {cou.name}
                                      </option>
                                  ))}
                          </select>
                      </div>
                      {country === "India" ? (
                          <>
                              <div className="margin-form">
                                  {/* <input  className="form-input-style margin-form" type="text" placeholder="Enter" /> */}
                                  <label className="labelStyle"> State</label>
                                  <select
                                      placeholder="Mathches"
                                      className="teamclass teamclass1"
                                      style={{ padding: "none" }}
                                      value={state}
                                      onChange={(e) => handleStateSelect(e)}
                                  >
                                      <option>-Select One Option-</option>{" "}
                                      {stateListData &&
                                          stateListData.map((item) => (
                                              <option value={item.state}>
                                                  {item.state}
                                              </option>
                                          ))}
                                  </select>
                              </div>
                              <div className="margin-form">
                                  {/* <input  className="form-input-style margin-form" type="text" placeholder="Enter" /> */}
                                  <label className="labelStyle">
                                      {" "}
                                      District
                                  </label>
                                  <select
                                      placeholder="Mathches"
                                      className="teamclass teamclass1"
                                      style={{ padding: "none" }}
                                      value={district}
                                      onChange={(e) =>
                                          handleStateDistrict(e)
                                      }
                                  >
                                      <option>-Select One Option-</option>{" "}
                                      {districtListData &&
                                          districtListData.map((item) => (
                                              <option value={item.district}>
                                                  {item.district}
                                              </option>
                                          ))}
                                  </select>
                              </div>
                          </>
                      ) : (
                          <>
                              <div className="margin-form">
                                  <CustomInputs
                                      className="teamclass teamclass1"
                                      type="text"
                                      placeholder="State*"
                                      value={state}
                                      onChange={(e) => handleStateSelect(e)}
                                  />
                              </div>
                              <div className="margin-form">
                                  <CustomInputs
                                      className="teamclass teamclass1"
                                      type="text"
                                      placeholder="District*"
                                      value={district}
                                      onChange={(e) =>
                                          setDistrict(e.target.value)
                                      }
                                  />
                              </div>
                          </>
                      )}

                      <div className="margin-form">
                          <input
                              className="form-input-style margin-form "
                              type="text"
                              onChange={(e) => setCity(e.target.value)}
                              value={city}
                              placeholder="City / Area *"
                          />
                      </div>
                      <div className="margin-form">
                          <input
                              className="form-input-style margin-form "
                              type="text"
                              onChange={(e) => setPinCode(e.target.value)}
                              value={pinCode}
                              placeholder="PinCode"
                          />
                      </div>
                      <div className="margin-form">
                          <textarea
                              className="form-input-style margin-form "
                              type="text"
                              placeholder="Address"
                              onChange={(e) => setAddress(e.target.value)}
                              value={address}
                          />
                      </div>
                  </div>
                  <div
                      className="floating-left flot-flot"
                      style={{ marginTop: "20px" }}
                  >
                      <button
                          className="style-team-buttons2 button2"
                          onClick={(e) => onEdit(e)}
                      >
                          Apply
                      </button>
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
      </>
  );
  MyProfileEdit.propTypes = {
    closeModal: PropTypes.func.isRequired,
  };
};
export default MyProfileEdit;
