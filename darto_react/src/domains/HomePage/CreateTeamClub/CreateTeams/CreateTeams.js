/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useCallback, useRef } from "react";
import { apiHandler } from "../../../../assets/api";
import { endpoint } from "../../../../assets/api/endpoint";
import "./CreateTeam.css";
import { Button } from "reactstrap";
import MaterialIcon from "react-google-material-icons";
import { Link, useHistory } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import NoticeModal from "../../../../components/AdminDashboard/NoticeModal/NoticeModal";
import UploadImageCrop from "../../../../components/AdminDashboard/TournamentAdmin/AddAdminData/UploadImageCrop";
const CreateTeams = ({
    imagedata1,
    imagedata2,
    imagedata3,
    imagedata4,
    imagedata5,
    imagedata6,
    imagedata7,
    imagedata8,
    imagedata9,
    imagedata10,
    imagedata11,
    imagedata12,
    imagedata13,
    rawDataTeam,
}) => {
    const history = useHistory();
     const { id, isPaidCustomer } = useSelector(
         (state) => state.login.userData
     );
    const [age, setAge] = useState("");
    const [nameofTeam, setNameofTeam] = useState("");
    const [totalMembers, setTotalMembers] = useState("");
    const [tagsName, setTagsName] = useState("");
    const [about, setAbout] = useState("");
    const [locality, setLocality] = useState("");
      const [noticeModal, setNoticeModal] = useState(false);
      const [noticeModalErrMsg, setNoticeModalErrMsg] = useState("");
      const [noticeModalHeaderMsg, setNoticeModalHeaderMsg] = useState("");

      // const { authToken } = useSelector((state) => state.login.authData);

      const closeNoticeModal = () => {
          setNoticeModal(false);
          setNoticeModalErrMsg("");
          setNoticeModalHeaderMsg("");
      };
    const [street, setStreet] = useState("");
    const [pincode, setPincode] = useState("");
    const [occupation, setOccupation] = useState("");
    const previewMethodsRef = useRef();
    const [rawData, setRawData] = useState({});
    const [countryListData, setCountryListData] = useState("");
    const [countryData, setCountryData] = useState("");
    const [stateListData, setStateListData] = useState("");
    const [districtListData, setDistrictListData] = useState("");
    const [state, setSelectedState] = useState("");
    const [district, setDistrict] = useState("");
    const [country, setCountry] = useState("");

    const onCreateTeam = async () => {
        console.log("fjjfj");
        let customerDetails =[];
        if (rawDataTeam.length > 0) {
            if (isPaidCustomer === 0 && rawDataTeam.length > 0) {
                setNoticeModalHeaderMsg("Error");
                setNoticeModalErrMsg("You AllReady Create Team");
                setNoticeModal(true);
                return;
            }
        }
        // if(rawDataTeam)
        const result = await apiHandler({
            url: endpoint.CREATE_TEAMS,
            method: "POST",
            data: {
                // image: imagedata,

                age: age,
                nameofTeam: nameofTeam,
                totalMembers: totalMembers,
                tagsName: tagsName,
                about: about,
                locality: locality,
                state: state,
                district: district,
                street: street,
                pincode: pincode,
                Userid: id,
                occupation: occupation,
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
            },
        });
        console.log("Resultput - ", result.data);

        history.push("/tabclub");
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
                let data = res.data.sort((a, b) =>
                    a.state > b.state ? 1 : -1
                );
                setStateListData(data);
                break;
            case "S":
            default:
                let dataD = res.data.sort((a, b) =>
                    a.district > b.district ? 1 : -1
                );
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
            <div className="bg-color3">
                <div className="stack-onclick8">
                    <div>
                        <h1 className="age-group1">Age Group</h1>
                    </div>

                    <div className="stack-age-group curser-pointer">
                        <span
                            className="be_button_de1"
                            onClick={() => setAge("I am 18+ Year")}
                            value={age}
                            style={{
                                backgroundColor:
                                    age === "I am 18+ Year"
                                        ? "#fa0043"
                                        : "#23354d",
                                color: age === "I am 18+ Year" ? "white" : "",
                            }}
                            id={"I am 18+ Year"}
                        >
                            <MaterialIcon
                                color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161))"
                                icon="school"
                                stretch={true}
                            />
                            <span className="padding_left_Club">
                                I Am 18+ Year
                            </span>
                        </span>

                        <p className="parra-p1"> (Sr./Senior/Professional)</p>
                    </div>
                    <div className="stack-age-group curser-pointer">
                        <span
                            className="be_button_de1"
                            onClick={() =>
                                setAge("Under 18 years Up to 8 year")
                            }
                            value={age}
                            style={{
                                backgroundColor:
                                    age === "Under 18 years Up to 8 year"
                                        ? "#fa0043"
                                        : "#23354d",
                                color:
                                    age === "Under 18 years Up to 8 year"
                                        ? "white"
                                        : "",
                            }}
                            id={"Under 18 years Up to 8 year"}
                        >
                            <MaterialIcon
                                color="var(--token-dcfc1000-f350-494d-bd15-7f017b76226e, rgb(255, 255, 255))"
                                icon="face_retouching_natural"
                                stretch={true}
                            />
                            <span className="padding_left_Club">
                                Under 18 Yrs , Upto 8 year
                            </span>
                        </span>

                        <p className="parra-p1">(Jr./Junior)</p>
                    </div>
                    <div className="stack-age-group curser-pointer curser-pointer">
                        <span
                            className="be_button_de1"
                            onClick={() => setAge("Under 8 years")}
                            value={age}
                            style={{
                                backgroundColor:
                                    age === "Under 8 years"
                                        ? "#fa0043"
                                        : "#23354d",
                                color: age === "Under 8 years" ? "white" : "",
                            }}
                            id={"Under 8 years"}
                        >
                            <MaterialIcon
                                color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161))"
                                icon="child_care"
                                stretch={true}
                            />
                            <span className="padding_left_Club">
                                Under 8 years
                            </span>
                        </span>

                        <p className="parra-p1">(Sub Junior)</p>
                    </div>
                </div>
                <div className="form-style1">
                    <input
                        className="form-input-style"
                        type="text"
                        placeholder="Team Name"
                        onChange={(e) => setNameofTeam(e.target.value)}
                        value={nameofTeam}
                    />
                    <div className="margin-form">
                        <select
                            className="form-input-style margin-form "
                            placeholder="Enter"
                            value={totalMembers}
                            onChange={(e) => setTotalMembers(e.target.value)}
                        >
                            <option value="volvo">Team Member</option>
                            <option value="10 member">10 member</option>
                            <option value="20 member">20 member</option>
                            <option value="30 member">30 member</option>
                        </select>
                    </div>

                    <div className="team-divided">
                        <h1 className="tag-team">
                            #Tag Team and club name Display
                        </h1>

                        <input
                            className="form-input-style"
                            type="text"
                            placeholder="#TagTeam"
                            onChange={(e) => setTagsName(e.target.value)}
                            value={tagsName}
                        />
                    </div>
                </div>
                <div className="about-club-dt-define">
                    <div className="about-club-dt-define-name">
                        <span>About Team</span>
                    </div>
                    <textarea
                        className="text-area-dfin"
                        onChange={(e) => setAbout(e.target.value)}
                        value={about}
                        placeholder="Discribe 150 Charcters"
                        intent="primary"
                        resizable="none"
                        resize="none"
                        theme="light"
                        type="text"
                    />
                </div>
                <div className="">
                    <div className="margin-form">
                        <select
                            className="form-input-style margin-form "
                            value={occupation}
                            onChange={(e) => setOccupation(e.target.value)}
                        >
                            <option value="Occupition">Occupition</option>
                            <option value="Student">Student</option>
                            <option value="Professional">Professional</option>
                            <option value="Carporate">Carporate</option>
                        </select>
                    </div>
                    <div className="team-divided">
                        <h1 className="tag-team">
                            Write Name of school/college/company/corporate
                        </h1>

                        <input
                            className="form-input-style"
                            type="text"
                            placeholder="Name of Occuupition institutaion"
                            // onChange={(e) => setTagsName(e.target.value)}
                            // value={tagsName}
                        />
                    </div>
                    {/* <div className="team-divided9">
            <h1 className="tag-team9">#Name options</h1>
          </div>
          <div className="stack-age-group">
        
            <span className="be_button_de1">#Vashundranoida</span>
       
        
            <span className="be_button_de1">#Delhi</span>
          
          </div>
          <div className="stack-age-group">
         
            <span className="be_button_de1">#Vashundra</span>
        
            <span className="be_button_de1">#Delhigurgaon</span>
        
          </div>
          <div className="stack-age-group">
          
            <span className="be_button_de1">#Vashundra</span>
         
            <span className="be_button_de1">#Delhi</span>
        
          </div> */}

                    {/* <input
            className="form-input-style"
            type="text"
            placeholder="Nav Jagrity Appartment Delhi"
            value={locality}
            onChange={(e) => setLocality(e.target.value)}
          /> */}

                    <div className="margin-form">
                        {/* <input  className="form-input-style margin-form" type="text" placeholder="Enter" /> */}
                        <select
                            className="form-input-style margin-form "
                            value={state}
                            onChange={(e) => handleStateSelect(e)}
                        >
                            <option value="">State/Union Territory *</option>
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
                        <select
                            className="form-input-style margin-form "
                            value={district}
                            onChange={(e) => setDistrict(e.target.value)}
                        >
                            <option value="">District *</option>
                            {districtListData &&
                                districtListData.map((item) => (
                                    <option value={item.district}>
                                        {item.district}
                                    </option>
                                ))}
                        </select>
                    </div>

                    <div className="margin-form padding_profile_bottom">
                        <input
                            className="form-input-style margin-form "
                            type="text"
                            placeholder="City / Area *"
                            value={street}
                            onChange={(e) => setStreet(e.target.value)}
                        />
                    </div>
                    <div className="margin-form padding_profile_bottom">
                        <input
                            className="form-input-style margin-form "
                            type="text"
                            placeholder="PinCode"
                            onChange={(e) => setPincode(e.target.value)}
                            value={pincode}
                        />
                    </div>
                    <div className="about-club-dt-define ">
                        {/* <div className='about-club-dt-define-name'>
              <span>About Team</span>
            </div> */}
                        <textarea
                            className="text-area-dfin"
                            onChange={(e) => setLocality(e.target.value)}
                            value={locality}
                            placeholder="Address"
                            intent="primary"
                            resizable="none"
                            resize="none"
                            theme="light"
                            type="text"
                        />
                    </div>
                    <div className="">
                        <div className="header-df-all">
                            <span>Social Connect</span>
                        </div>
                        <div className="divbtnconnect">
                            <br />
                            <input
                                className="btnconnect"
                                placeholder=" Facebook link"
                                // Using default values:
                                focusColor="#09F"
                                backgroundColor="var(--token-e2079bf0-f281-429e-90ac-e5958a3c1a75, rgb(35, 53, 77)) "
                                keyboard=""
                                lineHeight={1.4}
                                maxLength={50}
                                type="text"
                                textAlign="left"
                                textColor="#333"
                            />{" "}
                            <p>
                                {" "}
                                <BsFacebook className="connecticons" />
                            </p>{" "}
                        </div>
                        <div className="divbtnconnect">
                            <input
                                className="btnconnect"
                                placeholder=" Twitter link"
                                // Using default values:
                                focusColor="#09F"
                                keyboard=""
                                lineHeight={1.4}
                                maxLength={50}
                                type="text"
                                textAlign="left"
                                textColor="#333"
                                // value=""
                            />{" "}
                            <p>
                                <BsTwitter className="connecticons" />
                            </p>{" "}
                        </div>{" "}
                        <div className="divbtnconnect">
                            <input
                                className="btnconnect"
                                placeholder=" Instagram link"
                                // Using default values:
                                focusColor="#09F"
                                keyboard=""
                                lineHeight={1.4}
                                maxLength={50}
                                type="text"
                                textAlign="left"
                                textColor="#333"
                                // value=""
                            />{" "}
                            <p>
                                {" "}
                                <AiFillInstagram className="connecticons" />
                            </p>{" "}
                        </div>{" "}
                        <div className="divbtnconnect">
                            <input
                                className="btnconnect"
                                placeholder=" Youtube"
                                focusColor="#09F"
                                keyboard=""
                                lineHeight={1.4}
                                maxLength={50}
                                type="text"
                                textAlign="left"
                                textColor="#333"
                            />{" "}
                            <p>
                                {" "}
                                <BsYoutube className="connecticons" />
                            </p>{" "}
                        </div>
                    </div>
                </div>

                <div className="update-botton-width">
                    {/* <div className="floating-left flot-flot"> */}
                    <button
                        className="width_of_button"
                        onClick={() => onCreateTeam()}
                    >
                        Create Team
                    </button>
                    {/* </div> */}
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
};
export default CreateTeams;
