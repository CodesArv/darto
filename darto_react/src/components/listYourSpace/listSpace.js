/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./listSpace.css";
import { Button } from "reactstrap";
import MaterialIcon from "react-google-material-icons";
import { useHistory } from "react-router-dom";
import { endpoint } from "../../../src/assets/api/endpoint";
import { apiHandler } from "../../../src/assets/api";
import NoticeModal from "../AdminDashboard/NoticeModal/NoticeModal";

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
const TypeOFEec = [
  "Bar",
  "Bare Shell",
  "Business Center",
  "Cafe",
  "Club",
  "Co-Working",
  "Office Space",
  "Hotel",
  "Resorts",
  "Restaurant",
  "Society",
  "School",
];
const ListSpace = () => {
  const history = useHistory();
  const [rawData, setRawData] = useState({});
  const [mode, setMode] = useState("");
  const [typeEstablishment, setTypeEstablishment] = useState("");
  const [nameEstablishment, setNameEstablishment] = useState("");
  const [ownership, setOwnership] = useState("");
  const [address, setAddress] = useState("");
  const [state, setSelectedState] = useState("");
  const [district, setDistrict] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [picturesSpace, setpicturesSpace] = useState("");
  const [offer, setOffer] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [alternatemobilenumber, setAlternateMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [shareLink, setShareLink] = useState("");
  const [noticeModal, setNoticeModal] = useState(false);
  const [noticeModalErrMsg, setNoticeModalErrMsg] = useState("");
  const [noticeModalHeaderMsg, setNoticeModalHeaderMsg] = useState("");
  const [countryListData, setCountryListData] = useState("");
  const [countryData, setCountryData] = useState("");
  const [stateListData, setStateListData] = useState("");
  const [districtListData, setDistrictListData] = useState("");
  const [showUploadBox, setShowUploadBox] = useState(true);
  const [showLinkBox, setShowLinkBox] = useState(false);
  const [showindex, setShowIndex] = useState(false);
  const [hideInput, setHideInput] = useState(false);

  const onListPlus = () => {
    setShowUploadBox(true);
    setShowLinkBox(false);
    setShowIndex(true);
    //  history.push('/createteams');
  };
  const onList = () => {
    setShowLinkBox(true);
    setShowUploadBox(false);
    setShowIndex(false);
    // history.push('/createclubs');
  };
  const closeNoticeModal = () => {
    setNoticeModal(false);
    setNoticeModalErrMsg("");
    setNoticeModalHeaderMsg("");
  };
  const onSubmit = async () => {
    const result = await apiHandler({
      url: endpoint.CREATE_CONTACTUS,
      method: "POST",
      data: {
        mode: mode,
        typeEstablishment: typeEstablishment,
        nameEstablishment: nameEstablishment,
        ownership: ownership,
        picturesSpace: picturesSpace,
        shareLink: shareLink,
        address: address,
        state: state,
        city: city,
        district: district,
        pinCode: pinCode,
        offer: offer,
        firstName: firstName,
        lastname: lastName,
        mobileNumber: mobileNumber,
        alternatemobilenumber: alternatemobilenumber,
        email: email,
      },
    });
    if (result.data.status === 500) {
      setNoticeModalHeaderMsg("Error");
      setNoticeModalErrMsg(result.data.message);
      setNoticeModal(true);
    } else {
      console.log("Resultput - ", result.data);
      setNoticeModalHeaderMsg("Sucess");
      setNoticeModalErrMsg("Sucessfullty create Contact Details");
      setNoticeModal(true);
      history.push("/spacelist");
      //  onHide();
      // history.push("/spacelist");
    }
  };
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
  return (
    <>
      <div className='width_60_media'>
        <div className='bg-color3 padding_List_Space padding_bottom_nine9'>
          <div className='list_space_Get'>
            <span className='storeFront_color_ic'>
              <MaterialIcon
                color='var(--token-d983c132-e015-4177-baf8-441dbe84f948, rgb(0, 187, 255)) '
                icon='storefront'
                // Using default values:
                stretch={false}
              />
            </span>
            <span className='list_space_dart_d'>List Space</span>
          </div>
          <div className='margin_space_define_list'>
            <h1 className='become_Partener'>Become a Darto Partner</h1>
            <p className='interest_Location'>
              Thanks for your interest in becoming a Darto location. Would be
              great if you could share a few details to help us understand the
              viability of your space.
            </p>
          </div>
          {/* <div className='form-style1'> */}
          {/* <div className="margin_space_define_list">
                  <div className="">
                      <div>
                          <h1 className="age-group1">Type Of Mode *</h1>
                      </div>
                  </div>
                  <div className="">
                      <select
                          className="form-input-style "
                          placeholder="Enter"
                          value={mode}
                          onChange={(e) => setMode(e.target.value)}
                      >
                          <option value="">-Select-</option>
                          <option value="10 member">10 member</option>
                          <option value="20 member">20 member</option>
                          <option value="30 member">30 member</option>
                      </select>
                  </div>
              </div> */}
          <div className='margin_space_define_list'>
            <div className=''>
              <div>
                <h1 className='age-group1'>Type Of Establishment *</h1>
              </div>
            </div>
            <div className=''>
              <select
                className='form-input-style'
                placeholder='Enter'
                value={typeEstablishment}
                onChange={(e) => setTypeEstablishment(e.target.value)}
              >
                {TypeOFEec &&
                  TypeOFEec.map((type) => <option value={type}>{type}</option>)}
              </select>
            </div>
          </div>
          <div className='margin_space_define_list'>
            <div className=''>
              <div>
                <h1 className='age-group1'>Name Of Establishment *</h1>
              </div>
            </div>
            <div className='team-divided'>
              <input
                className='form-input-style'
                type='text'
                placeholder='Name of establishment*'
                value={nameEstablishment}
                onChange={(e) => setNameEstablishment(e.target.value)}
              />
            </div>
          </div>
          <div className='margin_space_define_list'>
            <div className=''>
              <div>
                <h1 className='age-group1'>Ownership of property *</h1>
              </div>
            </div>
            <div className=''>
              <select
                className='form-input-style'
                placeholder='Enter'
                value={ownership}
                onChange={(e) => setOwnership(e.target.value)}
              >
                <option value='volvo'>-Select-</option>
                <option value='Own'>Own</option>
                <option value='Long Term Lease'>Long Term Lease</option>
                <option value='Rented'>Rented</option>
              </select>
            </div>
          </div>
          {/* </div> */}

          {/* <div className="padding-style12"> */}
          <div className='margin_space_define_list'>
            <div className=''>
              <div className=''>
                <label className='age-group1 padding_9px_top'> Country</label>
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
              <div className=''></div>
            </div>

            <div className=''>
              {country === "India" ? (
                <div className=''>
                  <label className='age-group1 padding_9px_top'> State</label>
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
                </div>
              ) : (
                <div className=''>
                  <label className='age-group1 padding_9px_top'> State</label>
                  <input
                    className='form-input-style '
                    type='text'
                    placeholder='State*'
                    value={state}
                    onChange={(e) => handleStateSelect(e)}
                  />
                </div>
              )}
              {country === "India" ? (
                <div className=''>
                  <label className='age-group1 padding_9px_top'>
                    {" "}
                    District
                  </label>
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
                </div>
              ) : (
                <div className=''>
                  <label className='age-group1 padding_9px_top'>District</label>
                  <input
                    className='form-input-style '
                    type='text'
                    placeholder='District*'
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                  />
                </div>
              )}
            </div>

            <div className=''>
              <input
                className='form-input-style'
                type='text'
                placeholder='City / Area *'
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className=''>
              <input
                className='form-input-style'
                type='text'
                placeholder='PinCode'
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
              />
            </div>
            <div className='padding_profile_top'>
              <div>
                <h1 className='age-group1'>Complete Address *</h1>
              </div>
            </div>

            <textarea
              className='form-input-style'
              type='text'
              placeholder='Complete Address*'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className='contact_List_Space_Define'>
            <div className=''>
              <div>
                <h1 className='age-group1'>Pictures of the Space *</h1>
              </div>
            </div>
            <div className=''>
          
              <select
                className='form-input-style'
                value={picturesSpace}
                onChange={(e) => setpicturesSpace(e.target.value)}
              >
                <option value=''>-Select-</option>

                <option
                  value='Share a link'
            
                >
                  Share a link
                </option>
              </select>
            </div>

            <div className=''>
              <input
                className='form-input-style '
                type='text'
                placeholder='Share a link*'
                value={shareLink}
                onChange={(e) => setShareLink(e.target.value)}
              />
            </div>
          </div>
          <div className='contact_List_Space_Define'>
            <div className=''>
              <div>
                <h1 className='contact_Heading_List '>Offer For Members</h1>
              </div>
            </div>
            <div className=''>
              {/* <input  className="form-input-style margin-form" type="text" placeholder="Enter" /> */}
              <select
                className='form-input-style'
                onClick={() => setHideInput(true)}
                // value={picturesSpace}
                // onChange={(e) => setpicturesSpace(e.target.value)}
              >
                <option value=''>-Select-</option>

                <option value='Discount in %'>Discount in %</option>
                <option value='Off in Rs.'>Off in Rs.</option>
              </select>
            </div>
            {hideInput && (
              <div className=''>
                <input
                  className='form-input-style '
                  type='text'
                  //   placeholder='Discount'
                  value={offer}
                  onChange={(e) => setOffer(e.target.value)}
                />
              </div>
            )}
          </div>
          <div className='padding_profile_top'>
            <h1 className='contact_Heading_List '>Contact Detail</h1>
            <h3 className='getback_define_shortly'>
              We will get back to you shortly
            </h3>
          </div>
          <div>
            <div className=''>
              <div className='contact_List_Space_Define'>
                <h1 className='age-group1'>Name *</h1>
              </div>
            </div>
            <div className=''>
              <input
                className='form-input-style'
                type='text'
                placeholder='First Name*'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className=''>
              <input
                className='form-input-style '
                type='text'
                placeholder='Last Name*'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div className=''>
              <div className='contact_List_Space_Define'>
                <h1 className='age-group1'>Phone *</h1>
              </div>
            </div>
            <div className=''>
              <input
                className='form-input-style '
                type='text'
                placeholder='Phone Number'
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
            </div>
            <div className=''>
              <input
                className='form-input-style '
                type='text'
                placeholder='Alternate Phone (If any)'
                value={alternatemobilenumber}
                onChange={(e) => setAlternateMobileNumber(e.target.value)}
              />
            </div>
          </div>
          <div className='contact_List_Space_Define'>
            <div className=''>
              <div>
                <h1 className='age-group1'>Email *</h1>
              </div>
            </div>
            <div className=''>
              <input
                className='form-input-style'
                type='text'
                placeholder='Email Address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          {/* <div className=''>
          <div className='contact_List_Space_Define'>
            <h1 className='age-group1'>If You want  </h1>
          </div>
        </div> */}

          <div className='update-botton-width'>
            {/* <div className="floating-left flot-flot"> */}
            <button className='width_of_button' onClick={() => onSubmit()}>
              Submit
            </button>
            {/* </div> */}
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
        {/* </div> */}
      </div>
    </>
  );
};
export default ListSpace;
