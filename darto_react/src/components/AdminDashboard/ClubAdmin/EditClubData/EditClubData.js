import React, { useEffect, useState } from "react";
// import "../AddClubData/AddClubData.css";
import { apiHandler } from "../../../../assets/api";
import { endpoint } from "../../../../assets/api/endpoint";
import { useHistory } from "react-router";
import PropTypes from "prop-types";
import CustomInputs from "../../CustomInput/CustomInputs";
import MaterialIcon from "react-google-material-icons";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import tshirt_back from "./tshirt_back.png";
import tshirt_front from "./tshirt_front.png";
import dp_club from "./dp_club.png";
import { AiFillInstagram } from "react-icons/ai";
import { Modal, Button } from "react-bootstrap";
import { ImLocation } from "react-icons/im";
import UploadImageCrop from "../../TournamentAdmin/AddAdminData/UploadImageCrop";
// import Croppers from "../../TournamentAdmin/AddAdminData/Croppers";
import Croppers from "../../../../domains/HomePage/CreateTeamClub/CreateTeamButton/Croppers";


const EditClubData = ({ clubrecord, editable, updateclubRecord, onHide }) => {
  let history = useHistory();
  const [tagsName, settagsName] = useState(clubrecord.tagsName || "");
  //const [description, setdescription] = useState(clubrecord.description || "");
  const [occupation, setOccupation] = useState(clubrecord.occupation || "");
  const [nameofclub, setnameofclub] = useState(clubrecord.nameofclub || "");
  const [clubMembers, setclubMembers] = useState(clubrecord.clubMembers || "");
  const [locality, setlocality] = useState(clubrecord.locality || "");
  const [state, setSelectedState] = useState(clubrecord.state || "");
  const [city, setCity] = useState(clubrecord.city || "");
  const [district, setDistrict] = useState(clubrecord.district || "");
  const [street, setstreet] = useState(clubrecord.street || "");
  const [countryListData, setCountryListData] = useState("");
  const [countryData, setCountryData] = useState("");
  const [districtListData, setDistrictListData] = useState("");
  const [stateListData, setStateListData] = useState("");
  const [country, setCountry] = useState("");
  const [pinCode, setPinCode] = useState(clubrecord.pincode || "");
  const [imagedata, setImageData] = useState("");
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
  const [imageValue, setImageValue] = useState("");
  const [youtubeField, setYoutubeField] = useState("");
  const [instragramField, setInstragramField] = useState("");
  const [category, setcategory] = useState("");
  const [twitterField, settwitterField] = useState("");
  const [facebookField, setfacebookField] = useState("");
  const[about , setAbout] = useState("");
  useEffect(() => {
    GetCountryList();
  }, []);
  const GetCountryList = async () => {
    const res = await apiHandler({
      url: endpoint.GET_COUNTRY,
      method: "GET",
      data: null,
    });
    // console.log(res.data);
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
    // console.log(res.data);
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
  };

  const handleCountrySelect = (event) => {
    setCountry(event.target.value);
    onSearchCounty(event.target.value);
  };
  const onSearchCounty = (country) => {
    const query = "?country=" + country;
    GetDistrictListData(query, "C");
  };
  const onEditData = async () => {
    updateclubRecord({
      id: clubrecord.id,
      image: imagedata ? imagedata : null,
      image2: imagedata1 ? imagedata1 : null,
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
      tagsName: tagsName ? tagsName : null,
      occupation: occupation ? occupation : null,
      nameofclub: nameofclub ? nameofclub : null,
      clubMembers: clubMembers ? clubMembers : null,

      locality: locality ? locality : null,
      state: state ? state : null,
      city: city ? city : null,
      district: district ? district : null,
      street: street ? street : null,
      pincode: pinCode ? pinCode : null,
      about: about ? about : null,
      instragramField: instragramField ? instragramField : null,
      facebookField: facebookField ? facebookField : null,
      youtubeField: youtubeField ? youtubeField : null,
      twitterField: twitterField ? twitterField : null,
      // // status: status,
      // // role: role,
      // matches: matches,
      // feeperentry: feeperentry,
    });
    // console.log("updateclubRecord", updateclubRecord);
    onHide();
    // history.push("/admin")
  };
  const onUpload = (value) => {
    setImageValue(value);
    setShow(true);
  };
  const onUploadimge = (val) => {
    // console.log("fhf", val);
    switch (imageValue) {
      case "image":
        return setImageData(val);
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
  const onRemove = () => {
    setImageData11("");
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className=''>
        <div className='stackupdate'>
          <div className='border_Bottom_1px'>
            <span className='Darts-style1'>Add Photo</span>
            <div className='row gap_16px_Devide padding_profile_bottom'>
              <div
                className='border_profile_Add_item col'
                onClick={() => onUpload("image1")}
              >
                {imagedata1 === "" ? (
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
                    <img src={imagedata1} width={150} height={150} />
                  </>
                )}
              </div>
              <div
                className='border_profile_Add_item col'
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
                  {/* <div className="be_button_de  _d_color_de"> */}
                  <span
                    className='be_button_de curser-pointer'
                    onClick={() => onRemove()}
                  >
                    <MaterialIcon
                      color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) '
                      icon='delete'
                      // Using default values:
                      stretch={false}
                    />{" "}
                    Remove
                    {/* <button className="button-fixed1 button-fixed">Remove</button> */}
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
                    {/* <button className="button-fixed1 button-fixed">Upload</button> */}
                  </span>
                </div>
              </div>
              <div className='stake-verified'>
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
            <p className='Darts-style1_define'>Club T-shirt</p>
            <div class='flex-container'>
              <div
                class='flex-child magenta'
                onClick={() => onUpload("image12")}
              >
                {imagedata12 === "" ? (
                  <>
                    <img className='img5' src={tshirt_front} />
                    <div className=''>
                      <span className='color_Define_Always_Depend'>
                        <MaterialIcon
                          color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) '
                          icon='delete'
                          stretch={true}
                          size='16px'
                        />
                      </span>
                      <span className='Darts-style9'> Front</span>
                    </div>
                  </>
                ) : (
                  <>
                    <img src={imagedata12} className='img5' />
                    <div className=''>
                      {/* <span className="color_Define_Always_Depend">
                                              <MaterialIcon
                                                  color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) "
                                                  icon="delete"
                                                  stretch={true}
                                                  size="16px"
                                              />
                                          </span> */}
                      <span className='Darts-style9'> Front</span>
                    </div>
                  </>
                )}
              </div>

              <div class='flex-child green' onClick={() => onUpload("image13")}>
                {imagedata13 === "" ? (
                  <>
                    <img className='img5' src={tshirt_back} />
                    <div className=''>
                      <span className='color_Define_Always_Depend'>
                        <MaterialIcon
                          color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) '
                          icon='delete'
                          stretch={true}
                          size='16px'
                        />
                      </span>
                      <span className='Darts-style9'> Back</span>
                    </div>
                  </>
                ) : (
                  <>
                    <img src={imagedata13} className='img5' />
                    <div className=''>
                      {/* <span className="color_Define_Always_Depend">
                                              <MaterialIcon
                                                  color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) "
                                                  icon="delete"
                                                  stretch={true}
                                                  size="16px"
                                              />
                                          </span> */}
                      <span className='Darts-style9'> Back</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className='teamedit'>
          {/* <h1 className="teamedit">Team</h1> */}
          <div className='stack-onclick' style={{ padding: "20px" }}>
            <div>
              <h1 className='age-group1'>Age Group</h1>
            </div>

            <div className='stack-age-group curser-pointer'>
              {/* <div className="floating-left"> */}
              <span className='be_button_de1 '>I am 10+ Year</span>
              {/* </div>  */}
              <p className='parra-p1'> (Sr./Senior/Professional)</p>
            </div>
            <div className='stack-age-group curser-pointer'>
              {/* <div className="floating-left"> */}
              <span className='be_button_de1 '>Under 1 Up to 8 year</span>
              {/* </div>  */}
              <p className='parra-p1'>(Sr./Senior/Professional)</p>
            </div>
            <div className='stack-age-group curser-pointer'>
              {/* <div className="floating-left"> */}
              <span className='be_button_de1 '>Under 8 years</span>
              {/* </div>  */}
              <p className='parra-p1'>(Sr./Senior/Professional)</p>
            </div>
          </div>
          <div className='row teamclass' style={{ padding: "20px" }}>
            <CustomInputs
              type='text'
              onChange={(e) => setnameofclub(e.target.value)}
              value={nameofclub}
            />

            <div>
              <select
                placeholder='Enter'
                className='teamclass teamclass1 '
                value={clubMembers}
                onChange={(e) => setclubMembers(e.target.value)}
              >
                <option value='volvo'>Club Member</option>
                <option value='Club Member'>Club Member</option>
                <option value='10 member10 member'>10 member</option>
                <option value='10 member'>20 member</option>
                <option value='10 member'>30 member</option>
              </select>
            </div>

            {/* <h1 className="tag-team">#Tag Team and club name Display</h1>
    
      <label >
        <input className="teamclass"  type="text" placeholder="#TagTeam" />
      </label>
           */}
            <div className='margin-form '>
              <input
                className='teamclass teamclass1'
                type='text'
                placeholder='#Hashtag Name'
                onChange={(e) => settagsName(e.target.value)}
                value={tagsName}
              />
            </div>
            <div className='about-club-dt-define'>
              <div className='about-club-dt-define-name'>
                <span>About Club</span>
              </div>
              <textarea
                className='text-area-dfin'
                // onChange={(e) => setAbout(e.target.value)}
                // value={about}
                // pattern="secondary"
                placeholder='Discribe 150 Charcters'
                // Using default values:
                // disabled={false}
                intent='primary'
                resizable='none'
                resize='none'
                theme='light'
                type='text'
              />
            </div>
          </div>

          <div className=' ' style={{ padding: "20px" }}>
            <div className='row' style={{ width: "100%" }}>
              {/* <CustomInputs
              type="text"
              onChange={(e) => setlocality(e.target.value)}
              value={locality}
            /> */}
              <div className='row text_Align_Crnter_Item'>
                <div className='col-10 '>
                  <CustomInputs
                    type='text'
                    placeholder='Name of the Occupition Institution'
                    CustomInputs
                    value={occupation}
                    onChange={(e) => setOccupation(e.target.value)}
                  />
                </div>
                <div className='col-2 padding_left_18px color_789_define'>
                  <span className='color_789_define'>
                    <MaterialIcon
                      color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) '
                      icon='view_list'
                      stretch={false}
                    />
                  </span>
                  <span className='padding_left_18px color_789_define'>
                    <MaterialIcon
                      color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) '
                      icon='control_point '
                      stretch={false}
                    />
                  </span>
                </div>
              </div>
              <div className='margin-form'>
                {/* <input  className="form-input-style margin-form" type="text" placeholder="Enter" /> */}
                <select
                  className='teamclass teamclass1'
                  value={occupation}
                  onChange={(e) => setOccupation(e.target.value)}
                >
                  <option value='Occupition'>Occupition</option>
                  <option value='Student'>Student</option>
                  <option value='Professional'>Professional</option>
                  <option value='Carporate'>Carporate</option>
                </select>
              </div>
              <div className='margin-form'>
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
                <div className='margin-form'>
                  {/* <input  className="form-input-style margin-form" type="text" placeholder="Enter" /> */}
                  <select
                    className='teamclass teamclass1'
                    value={state}
                    onChange={(e) => handleStateSelect(e)}
                  >
                    {stateListData &&
                      stateListData.map((item) => (
                        <option value={item.state}>{item.state}</option>
                      ))}
                  </select>
                </div>
              ) : (
                <div className='margin-form'>
                  <CustomInputs
                    type='text'
                    placeholder='State *'
                    CustomInputs
                    value={state}
                    onChange={(e) => handleStateSelect(e)}
                  />
                </div>
              )}
              <div className='margin-form '>
                {/* <input  className="form-input-style margin-form" type="text" placeholder="Enter" /> */}
                <select
                  className='teamclass teamclass1'
                  value={locality}
                  onChange={(e) => setlocality(e.target.value)}
                >
                  <option value='District'>Locality</option>
                  <option value='Noida'>Noida</option>
                  <option value='Gurugram'>Gurugram</option>
                  <option value='jalandhar'>jalandhar</option>
                </select>
              </div>
              <div className='margin-form '>
                {/* <input  className="form-input-style margin-form" type="text" placeholder="Enter" /> */}
                <select
                  className='teamclass teamclass1'
                  value={street}
                  onChange={(e) => setstreet(e.target.value)}
                >
                  <option value='District'>Street</option>
                  <option value='Noida'>Noida</option>
                  <option value='Gurugram'>Gurugram</option>
                  <option value='jalandhar'>jalandhar</option>
                </select>
              </div>
              {country === "India" ? (
                <div className='margin-form '>
                  {/* <input  className="form-input-style margin-form" type="text" placeholder="Enter" /> */}
                  <select
                    title='dis'
                    className='teamclass teamclass1'
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                  >
                    {districtListData &&
                      districtListData.map((item) => (
                        <option value={item.district}>{item.district}</option>
                      ))}
                  </select>
                </div>
              ) : (
                <div className='margin-form'>
                  <CustomInputs
                    type='text'
                    placeholder='District'
                    CustomInputs
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                  />
                </div>
              )}
              <div className='margin-form'>
                <CustomInputs
                  type='text'
                  placeholder='  City / Area *'
                  CustomInputs
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className='margin-form'>
                <CustomInputs
                  type='text'
                  placeholder='PinCode*'
                  CustomInputs
                  value={pinCode}
                  onChange={(e) => setPinCode(e.target.value)}
                />
              </div>

              <div className='about-club-dt-define'>
                <textarea
                  className='text-area-dfin'
                  onChange={(e) => setAbout(e.target.value)}
                  value={about}
                  // pattern="secondary"
                  placeholder='Address (Optional)'
                  // Using default values:
                  // disabled={false}
                  intent='primary'
                  resizable='none'
                  resize='none'
                  theme='light'
                  type='text'
                />
              </div>
            </div>
            <div className='header-df-all'>
              <span>Social Connect</span>
            </div>
            <div className='divbtnconnect'>
              <br />
              <input
                className='btnconnect'
                placeholder=' Facebook link'
                onChange={(e) => setfacebookField(e.target.value)}
                value={facebookField}
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
                onChange={(e) => settwitterField(e.target.value)}
                value={twitterField}
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
                onChange={(e) => setInstragramField(e.target.value)}
                value={instragramField}
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
                onChange={(e) => setYoutubeField(e.target.value)}
                value={youtubeField}
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
          <div style={{ textAlign: "center" }}>
            <Button
              variant='secondary'
              onClick={() => onUpload("image")}
              className='image_modal1'
            >
              Upload Image
            </Button>
            {/* {imagedata !== "" && (
                      <img src={imagedata} width={200} hight={200} />
                  )}
                  <Croppers
                      image={setImageData}
                      type="team"
                      mincropHeight={400}
                      mincropWidth={400}
                      responsive={false}
                  /> */}
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton className='image_modal1'>
                <Modal.Title className='image_modal1'>Upload Image</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Croppers
                  setimage={onUploadimge}
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
            {/* <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton className="image_modal1">
                          <Modal.Title className="image_modal1">
                              Upload Image
                          </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                          <UploadImageCrop image={setImageData} type="team" />
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
                  </Modal> */}
          </div>

          <div>
            <div className='floating-left flot-flot'>
              <button
                className='style-team-buttons2 button2'
                onClick={onEditData}
              >
                Edit Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
EditClubData.propTypes = {
  updateclubRecord: PropTypes.func,
  onHide: PropTypes.func,
};
export default EditClubData;
