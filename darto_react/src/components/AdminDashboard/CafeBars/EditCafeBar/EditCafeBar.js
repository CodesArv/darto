import React, { useEffect, useState } from "react";
import "../AddCafeBars/AddCafeBar.css";
import { apiHandler } from "../../../../assets/api";
import { endpoint } from "../../../../assets/api/endpoint";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import CustomInputs from "../../CustomInput/CustomInputs";
import UploadImageCrop from "../../TournamentAdmin/AddAdminData/UploadImageCrop";
import { Modal, Button } from "react-bootstrap";
import Croppers from "../../TournamentAdmin/AddAdminData/Croppers";
const EditCafeBar = ({ record, editable, updateRecord }) => {
  let history = useHistory();
  const [name, setName] = useState(record.name || "");
  const [description, setdescription] = useState(record.description || "");
  // const [status, setStatus] = useState(record.status || "");
  const [locality, setLocality] = useState(record.locality || "");
  const [FromWorkingHours, setFromWorkingHours] = useState(
    record.FromWorkingHours || ""
  );
  const [ToWorkingHours, setToWorkingHours] = useState(
    record.ToWorkingHours || ""
  );
  const [FandBOthers, setFandBOthers] = useState(record.FandBOthers || "");
  const [mertoConnectivity, setMertoConnectivity] = useState(
    record.mertoConnectivity || ""
  );
  const [bookingCharges, setBookingCharges] = useState(
    record.bookingCharges || ""
  );
  const [mobilenumber, setMobilenumber] = useState(record.mobilenumber || "");
   const [imagedata, setImageData] = useState("");
  const onEditData = async () => {
    updateRecord({
        id: record.id,
        name: name ? name : null,
        image: imagedata ? imagedata: null,
        description: description ? description : null,
        // status: status,

        locality: locality ? locality : null,

        FromWorkingHours: FromWorkingHours ? FromWorkingHours : null,
        ToWorkingHours: ToWorkingHours ? ToWorkingHours : null,
        FandBOthers: FandBOthers ? FandBOthers : null,
        mertoConnectivity: mertoConnectivity ? mertoConnectivity : null,
        bookingCharges: bookingCharges ? bookingCharges : null,

        mobilenumber: mobilenumber ? mobilenumber : null,
    });
    // console.log("updateRecord", updateRecord);
    history.push("/cafebaradmin");
  };
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
  return (
      <>
          <div
              className="bg-form-col"
              style={{ backgroundColor: "rgb(16, 20, 44)", height: "100%" }}
          >
              <div className="bg-form-col1">
                  <h1>Cafe & Bars</h1>
              </div>

              <div style={{ padding: "10px", width: "100%" }}>
                  <div className="paddin_top_9px">
                      <CustomInputs
                          label="Name"
                         
                          disabled={!editable}
                          name="name1"
                          type="text"
                          onChange={(e) => setName(e.target.value)}
                          value={name}
                      />
                      <div className="paddin_top_9px">
                          <CustomInputs
                              label="Description"
                            
                              name="name1"
                              type="text"
                              onChange={(e) => setdescription(e.target.value)}
                              value={description}
                          />
                      </div>
                  </div>
                  <div className="">
                      {/* <div className="col">
              <CustomInputs
                label="Status"
                // id="name-1"
                name="name1"
                type="text"
                onChange={(e) => setStatus(e.target.value)}
                value={status}
              />
            </div> */}
                      <div className="col paddin_top_9px">
                          <CustomInputs
                              label="Address"
                              id="name12"
                              name="Description1"
                              type="text"
                              onChange={(e) => setLocality(e.target.value)}
                              value={locality}
                          />
                      </div>
                  </div>
                  <div className="row">
                      <div className="col paddin_top_9px">
                          <CustomInputs
                              label="From (Working Hours)"
                              id="Status"
                              name="Status"
                              type="text"
                              onChange={(e) =>
                                  setFromWorkingHours(e.target.value)
                              }
                              value={FromWorkingHours}
                          />
                      </div>
                      <div className="col paddin_top_9px">
                          <CustomInputs
                              label="To (Working Hours)"
                              id="Status"
                              name="Status"
                              type="text"
                              onChange={(e) =>
                                  setToWorkingHours(e.target.value)
                              }
                              value={ToWorkingHours}
                          />
                      </div>
                  </div>
                  <div className="">
                      <div className="col paddin_top_9px">
                          <CustomInputs
                              label="F&B offers"
                              id="name"
                              name="text"
                              type="text"
                              onChange={(e) => setFandBOthers(e.target.value)}
                              value={FandBOthers}
                          />
                      </div>
                  </div>
                  <div className="">
                      <div className="col paddin_top_9px">
                          <CustomInputs
                              label="Metro Connctivity"
                              id=""
                              name="text"
                              type="text"
                              onChange={(e) =>
                                  setMertoConnectivity(e.target.value)
                              }
                              value={mertoConnectivity}
                          />
                      </div>
                      <div className="col paddin_top_9px">
                          <CustomInputs
                              label="Booking Charges"
                              id="Role"
                              name="Role"
                              type="text"
                              onChange={(e) =>
                                  setBookingCharges(e.target.value)
                              }
                              value={bookingCharges}
                          />
                      </div>
                  </div>
                  <div className="">
                      <div className="col paddin_top_9px">
                          <CustomInputs
                              label="Mobile Number"
                              id="Address"
                              name="Address"
                              type="number"
                              onChange={(e) => setMobilenumber(e.target.value)}
                              value={mobilenumber}
                          />
                      </div>
                  </div>
              </div>
              <div>
                  {imagedata !== "" && (
                      <img src={imagedata} width={200} hight={200} />
                  )}
                  <Croppers
                      image={setImageData}
                      type="center"
                    //   mincropHeight={400}
                    //   mincropWidth={400}
                    //   responsive={false}
                  />
              </div>
              <div className="divbtnconnect">
                  <br />
              </div>

              <div className="month-imp2" style={{ marginTop: "10px" }}>
                  <button className="month-imp2" onClick={onEditData}>
                      Edit
                  </button>
              </div>
          </div>
          {/* <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton className="image_modal1">
                  <Modal.Title className="image_modal1">
                      Upload Image
                  </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <UploadImageCrop image={setImageData} type="center" />
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
      </>
  );
};
EditCafeBar.propTypes = {
  updateRecord: PropTypes.func,
  onHide: PropTypes.func,
};
export default EditCafeBar;
