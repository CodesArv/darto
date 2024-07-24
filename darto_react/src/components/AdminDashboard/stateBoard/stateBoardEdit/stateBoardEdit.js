import React, { useEffect, useState, useCallback, useRef } from "react";
import CustomInputs from "../../CustomInput/CustomInputs";
import { apiHandler } from "../../../../assets/api";
import { endpoint } from "../../../../assets/api/endpoint";
import { useHistory } from "react-router";
import PropTypes from "prop-types";
import { Modal, Button } from "react-bootstrap";
import UploadImageCrop from "../../TournamentAdmin/AddAdminData/UploadImageCrop";
import Croppers from "../../TournamentAdmin/AddAdminData/Croppers";
const StateBoardEdit = ({ updateRecord, record, onHide }) => {
  let history = useHistory();
  const [name, setName] = useState(record.name || "");
  const [email, setEmail] = useState(record.email || "");
  // const [status,setStatus] = useState('');
  const [country, setCountry] = useState(record.country || "");
  const [state, setSelectedState] = useState(record.state || "");
  const [district, setDistrict] = useState(record.district || "");
  const [city, setCity] = useState(record.city || "");
  const [pincode, setPincode] = useState(record.pincode || "");
  const [stateListData, setStateListData] = useState("");
  const [districtListData, setDistrictListData] = useState("");
  const [countryListData, setCountryListData] = useState("");
  const [countryData, setCountryData] = useState("");
  const [imagedata, setImageData] = useState("");
  const onEdit = async () => {
    updateRecord({
      id: record.id,
      image: imagedata ? imagedata : null,
      name: name ? name : null,
      email: email ? email : null,
      country: country ? country : null,
      state: state ? state : null,
      district: district ? district : null,
      city: city ? city : null,
      pincode: pincode ? pincode : null,
    });

    // console.log("updateRecord", updateRecord);
    onHide();
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
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
  return (
      <>
          <div className="bottom_9px_padding">
              <CustomInputs
                  label="Image: "
                  type="file"
                  // onChange={(e) => setName(e.target.value)}
                  // value={name}
              />
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
          <div className="bottom_9px_padding">
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
              <div className="bottom_9px_padding">
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
                      label="State:"
                      type="text"
                      placeholder="State*"
                      value={state}
                      onChange={(e) => handleStateSelect(e)}
                  />
              </div>
          )}
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
                      label="District:"
                      type="text"
                      placeholder="District*"
                      onChange={(e) => setDistrict(e.target.value)}
                      value={district}
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
          <div>
              <div className="floating-left flot-flot">
                  <button
                      className="style-team-buttons2 button2"
                      onClick={() => onEdit()}
                  >
                      Edit State
                  </button>
              </div>
          </div>
      </>
  );
};
StateBoardEdit.propTypes = {
  updateRecord: PropTypes.func,
  onHide: PropTypes.func,
};
export default StateBoardEdit;
