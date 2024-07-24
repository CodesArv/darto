import React, { useEffect, useState, useCallback, useRef } from "react";
import CustomInputs from "../../CustomInput/CustomInputs";
import { endpoint } from "../../../../assets/api/endpoint";
import { apiHandler } from "../../../../assets/api";
import { useHistory } from "react-router";
import { Modal, Button } from "react-bootstrap";
import UploadImageCrop from "../../TournamentAdmin/AddAdminData/UploadImageCrop";
import Croppers from "../../TournamentAdmin/AddAdminData/Croppers";
const StateBoardAdd = () => {
  let history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [status,setStatus] = useState('');
  const [country, setCountry] = useState("");
  const [state, setSelectedState] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [stateListData, setStateListData] = useState("");
  const [districtListData, setDistrictListData] = useState("");
  const [countryListData, setCountryListData] = useState("");
  const [countryData, setCountryData] = useState("");
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
  const onAdd = async () => {
    const result = await apiHandler({
      url: endpoint.CREATE_BOARD,
      method: "POST",
      data: {
        image:imagedata,
        name: name,
        email: email,
        country: country,
        state: state,
        district: district,
        city: city,
        pincode: pincode,
      },
    });
  };
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
  return (
      <>
          <div className="bottom_9px_padding">
              <div>
                  {imagedata !== "" && (
                      <img src={imagedata} width={200} hight={200} />
                  )}
                  <Croppers
                      image={setImageData}
                      type="board"
                      mincropHeight={400}
                      mincropWidth={400}
                      responsive={false}
                  />

                  {/* <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton className="image_modal1">
                          <Modal.Title className="image_modal1">
                              Upload Image
                          </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                          <UploadImageCrop
                              image={() => setImageData()}
                              type="board"
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
                  </Modal> */}
              </div>
          </div>
          <div className="bottom_9px_padding">
              <CustomInputs
                  label="Name: "
                  type="text"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
              />
          </div>
          <div className="bottom_9px_padding">
              <CustomInputs
                  label="Email: "
                  type="text"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
              />
          </div>
          <div className="col bottom_9px_padding ">
              <label className="labelStyle"> Country</label>
              <select
                  className="teamclass teamclass1"
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
              <div className="col bottom_9px_padding">
                  <label className="labelStyle"> State</label>

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
                              <option value={item.state}>{item.state}</option>
                          ))}
                  </select>
              </div>
          ) : (
              <div className="bottom_9px_padding">
                  <CustomInputs
                      label="State"
                      type="text"
                      placeholder="State*"
                      value={state}
                      onChange={(e) => handleStateSelect(e)}
                  />
              </div>
          )}
          <div className="bottom_9px_padding"></div>
          {country === "India" ? (
              <div className="bottom_9px_padding">
                  <select
                      className="teamclass teamclass1"
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                  >
                      {districtListData &&
                          districtListData.map((item) => (
                              <option value={item.district}>
                                  {item.district}
                              </option>
                          ))}
                  </select>
              </div>
          ) : (
              <div className="bottom_9px_padding">
                  <CustomInputs
                      label="District"
                      type="text"
                      placeholder="District*"
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                  />
              </div>
          )}
          <div className="bottom_9px_padding">
              <CustomInputs
                  label="City / Area*: "
                  type="text"
                  placeholder="City / Area*"
                  onChange={(e) => setCity(e.target.value)}
                  value={city}
              />
          </div>
          <div className="bottom_9px_padding">
              <CustomInputs
                  label="Pincode*: "
                  type="text"
                  placeholder="Pincode*"
                  onChange={(e) => setPincode(e.target.value)}
                  value={pincode}
              />
          </div>

          <div>
              <div className="floating-left flot-flot">
                  <button
                      className="style-team-buttons2 button2"
                      onClick={() => onAdd()}
                  >
                      Add State
                  </button>
              </div>
          </div>
      </>
  );
};
export default StateBoardAdd;
