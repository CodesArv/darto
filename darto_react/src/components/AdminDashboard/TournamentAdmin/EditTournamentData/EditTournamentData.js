import React, { useEffect, useState } from "react";
import "../AddAdminData/AddAdminData.css";
import { apiHandler } from "../../../../assets/api";
import { endpoint } from "../../../../assets/api/endpoint";
import { useHistory } from "react-router";
import ClearIcon from "@mui/icons-material/Clear";
import PropTypes from "prop-types";
import Clear from "@mui/icons-material/Clear";

import CustomInputs from "../../CustomInput/CustomInputs";
import Croppers from "../AddAdminData/Croppers";
const TournamentCategoryList = [
  "Professional | Sr.(18+yrs)",
  "Clubs",
  "Nationals",
  "Corporates",
  "Champonship",
  "Junior School (Under 18 yrs upto 8 yrs)",
  "Sub junior (under 8 yrs)",
  "India World cups",
];
const EditTournamentData = ({ record, editable, updateRecord }) => {
  let history = useHistory();
  const [name, setName] = useState(record.name || "");
  const [description, setdescription] = useState(record.description || "");
  const [status, setStatus] = useState(record.status || "");
  const [role, setRole] = useState(record.role || "");
  const [fromDate, setfromDate] = useState(record.fromDate || "");
  const [toDate, settoDate] = useState(record.toDate || "");
  const [locality, setlocality] = useState(record.locality || "");

  const [city, setCity] = useState(record.city || "");
  const [district, setDistrict] = useState(record.district || "");
  const [state, setSelectedState] = useState(record.state || "");
  const [country, setCountry] = useState(record.country || "");
  const [pincode, setPincode] = useState(record.pincode || "");
  const [stateListData, setStateListData] = useState("");
  const [matches, setmatches] = useState(record.matches || "");
  const [feeperentry, setFeeperentry] = useState(record.feeperentry || "");
  const [gameHours, setgameHours] = useState(record.Gameshours || "");

  const [mode, setmode] = useState(record.mode || "");
  const [category, setcategory] = useState(record.category || "");

  const [tournamentType, settournamentType] = useState(
    record.tournamentType || ""
  );
  const [mobileNumber, setmobileNumber] = useState(record.mobileNumber || "");
  const [email, setemail] = useState(record.email || "");
  const [countryListData, setCountryListData] = useState("");
  const [countryData, setCountryData] = useState("");
  const [districtListData, setDistrictListData] = useState("");
   const [imagedata, setImageData] = useState("");
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
  const onEditData = async () => {
    updateRecord({
      id: record.id,
      name: name ? name : null,
      description: description ? description : null,
      status: status ? status : null,
      fromDate: fromDate ? fromDate : null,
      toDate: toDate ? toDate : null,
      role: role ? role : null,

      locality: locality ? locality : null,
      city: city ? city : null,
      district: district ? district : null,
      state: state ? state : null,
      country: country ? country : null,
      pincode: pincode ? pincode : null,

      matches: matches ? matches : null,
      feeperentry: feeperentry ? feeperentry : null,
      Gameshours: gameHours ? gameHours : null,
      mode: mode ? mode : null,
      category: category ? category : null,
      tournamentType: tournamentType ? tournamentType : null,
      mobileNumber: mobileNumber ? mobileNumber : null,
      email: email ? email : null,
    });
    console.log("updateRecord", updateRecord);
    history.push("/admin");
  };

  return (
      <>
          <div style={{ backgroundColor: "rgb(16, 20, 44)" }}>
              <div className="row bg-form-col1">
                  <div className="col">
                      <h1>Tournament</h1>
                  </div>
                   <div className="">
                  <div className="col paddin_top_9px">
                  <div style={{ padding: "10px", textAlign: "left" }}>
                      {imagedata !== "" && (
                          <img src={imagedata} width={200} hight={200} />
                      )}
                      <Croppers
                          image={setImageData}
                          type="tournament"
                          mincropHeight={400}
                          mincropWidth={400}
                          responsive={false}
                      />
                      </div>
                      </div>
                     
                      <div className="">
                          <div className="col paddin_top_9px">
                              <CustomInputs
                                  label="Name"
                                  id="name"
                                  name="name"
                                  type="text"
                                  // disabled={!editable}
                                  onChange={(e) => setName(e.target.value)}
                                  value={name}
                              />
                          </div>
                          <div className="col paddin_top_9px">
                              <CustomInputs
                                  label="Description"
                                  id="name"
                                  name="Description"
                                  type="text"
                                  onChange={(e) =>
                                      setdescription(e.target.value)
                                  }
                                  value={description}
                              />
                          </div>
                      </div>
                      <div className="">
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
                          <div className="col paddin_top_9px">
                              <CustomInputs
                                  label="From Date"
                                  id="name"
                                  name="From Date"
                                  type="date"
                                  onChange={(e) => setfromDate(e.target.value)}
                                  value={fromDate}
                              />
                          </div>
                          <div className="col paddin_top_9px">
                              <CustomInputs
                                  label="To Date"
                                  id="To date"
                                  name="To Date"
                                  type="date"
                                  onChange={(e) => settoDate(e.target.value)}
                                  value={toDate}
                              />
                          </div>
                      </div>
                      <div className="">
                          <div className="col paddin_top_9px">
                              <CustomInputs
                                  label="Role"
                                  id="Role"
                                  name="Role"
                                  type="text"
                                  onChange={(e) => setRole(e.target.value)}
                                  value={role}
                              />
                          </div>
                      </div>
                      <div className="">
                          <div className="col paddin_top_9px">
                              <CustomInputs
                                  label="Address"
                                  id="Address"
                                  name="Address"
                                  type="text"
                                  onChange={(e) => setlocality(e.target.value)}
                                  value={locality}
                              />
                          </div>
                          <label className="paddin_top_9px">Mathches</label>
                          <div className="col">
                              <select
                                  placeholder="Mathches"
                                  className="teamclass teamclass1"
                                  style={{ padding: "none" }}
                                  value={matches}
                                  onChange={(e) => setmatches(e.target.value)}
                              >
                                  {" "}
                                  <option value="Single">Single</option>
                                  <option value="Doubels">Doubels</option>
                                  <option value="Team">Team</option>
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
                      </div>
                      <div className="">
                          <label className="labelStyle"> Country</label>
                          <div className="col ">
                              <select
                                  className="teamclass teamclass1"
                                  value={country}
                                  onChange={(e) => handleCountrySelect(e)}
                              >
                                  {countryData &&
                                      countryData.map((cou) => (
                                          <option value={cou.name}>
                                              {cou.name}
                                          </option>
                                      ))}
                              </select>
                          </div>

                          <div className="col paddin_top_9px"></div>
                      </div>

                      <div className="">
                          <label className="labelStyle"> State</label>
                          {country === "India" ? (
                              <div className="col ">
                                  <select
                                      placeholder="Mathches"
                                      className="teamclass teamclass1"
                                      style={{ padding: "none" }}
                                      value={state}
                                      onChange={(e) => handleStateSelect(e)}
                                  >
                                      {" "}
                                      {stateListData &&
                                          stateListData.map((item) => (
                                              <option value={item.state}>
                                                  {item.state}
                                              </option>
                                          ))}
                                  </select>
                              </div>
                          ) : (
                              <div className="col paddin_top_9px">
                                  <CustomInputs
                                      id="name"
                                      name="name"
                                      type="text"
                                      value={state}
                                      onChange={(e) => handleStateSelect(e)}
                                  />
                              </div>
                          )}
                          <label className="labelStyle"> District</label>
                          {country === "India" ? (
                              <div className="col ">
                                  <select
                                      placeholder="Mathches"
                                      className="teamclass teamclass1"
                                      style={{ padding: "none" }}
                                      value={district}
                                      onChange={(e) =>
                                          setDistrict(e.target.value)
                                      }
                                  >
                                      {" "}
                                      {districtListData &&
                                          districtListData.map((item) => (
                                              <option value={item.district}>
                                                  {item.district}
                                              </option>
                                          ))}
                                  </select>
                              </div>
                          ) : (
                              <div className="col paddin_top_9px">
                                  <CustomInputs
                                      name="name"
                                      type=""
                                      value={district}
                                      onChange={(e) =>
                                          setDistrict(e.target.value)
                                      }
                                  />
                              </div>
                          )}
                      </div>
                      <div className="col paddin_top_9px">
                          <CustomInputs
                              label="City"
                              id="name"
                              name="name"
                              type="text"
                              onChange={(e) => setCity(e.target.value)}
                              value={city}
                          />
                      </div>
                      <div className="">
                          <div className="col paddin_top_9px">
                              <CustomInputs
                                  label="Pin Code"
                                  id="name"
                                  name="name"
                                  type="text"
                                  onChange={(e) => setPincode(e.target.value)}
                                  value={pincode}
                              />
                          </div>
                          <div className="col paddin_top_9px">
                              <CustomInputs
                                  label="Email"
                                  id="name"
                                  name="name"
                                  type="text"
                                  onChange={(e) => setemail(e.target.value)}
                                  value={email}
                              />
                          </div>
                      </div>
                      <div className="">
                          <label className="paddin_top_9px">
                              Fee Per Entry
                          </label>
                          <div className="col">
                              <select
                                  placeholder="Fee Per Entry"
                                  className="teamclass teamclass1"
                                  style={{ padding: "none" }}
                                  value={feeperentry}
                                  onChange={(e) =>
                                      setFeeperentry(e.target.value)
                                  }
                              >
                                  {" "}
                                  <option value="Free">Free</option>
                                  <option value="Paid">Paid</option>
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
                          <div className="col paddin_top_9px">
                              <CustomInputs
                                  label="Game Hours"
                                  id="Game Hours"
                                  name="name"
                                  type="text"
                                  onChange={(e) => setgameHours(e.target.value)}
                                  value={gameHours}
                              />
                          </div>
                      </div>
                      <div className="paddin_top_9px">
                          <label>Mode</label>
                          <div className="col">
                              <select
                                  placeholder="Enter Mode"
                                  className="teamclass teamclass1"
                                  style={{ padding: "none" }}
                                  value={mode}
                                  onChange={(e) => setmode(e.target.value)}
                              >
                                  {" "}
                                  <option value="Virtual">Virtual</option>
                                  <option value="Phyical">Phyical</option>
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
                          <div className="paddin_top_9px">
                              <label>Category</label>
                              <div className="col">
                                  <select
                                      placeholder="Enter"
                                      className="teamclass teamclass1"
                                      style={{ padding: "none" }}
                                      value={category}
                                      onChange={(e) =>
                                          setcategory(e.target.value)
                                      }
                                  >
                                      {" "}
                                      {TournamentCategoryList &&
                                          TournamentCategoryList.map((item) => (
                                              <option value={item}>
                                                  {item}
                                              </option>
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
                          </div>
                      </div>
                      <div className="paddin_top_9px">
                          <label>Tournament Type</label>
                          <div className="col">
                              {/* <label>Tournament Type</label> */}
                              <select
                                  placeholder="Tournament Type"
                                  className="teamclass teamclass1"
                                  style={{ padding: "none" }}
                                  value={tournamentType}
                                  onChange={(e) =>
                                      settournamentType(e.target.value)
                                  }
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
                          <div className="col paddin_top_9px">
                              <CustomInputs
                                  label="Mobile Number"
                                  id="name"
                                  name="name"
                                  type="text"
                                  onChange={(e) =>
                                      setmobileNumber(e.target.value)
                                  }
                                  value={mobileNumber}
                              />
                          </div>
                      </div>
                  </div>
              </div>
              <div
                  className="month-imp2"
                  style={{
                      marginTop: "10px",
                      marginRight: "auto",
                      marginLeft: "auto",
                  }}
              >
                  <button className="month-imp2" onClick={onEditData}>
                      Edit
                  </button>
              </div>
          </div>
      </>
  );
};
EditTournamentData.propTypes = {
  updateRecord: PropTypes.func,
  onHide: PropTypes.func,
};
export default EditTournamentData;
