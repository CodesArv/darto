import React, { useEffect, useState, useCallback, useRef } from "react";
import "./AddCafeBar.css";
import { apiHandler } from "../../../../assets/api";
import { endpoint } from "../../../../assets/api/endpoint";
import { useHistory } from "react-router";
import CustomInputs from "../../CustomInput/CustomInputs";
import { getMockSenderEnhancer } from "@rpldy/mock-sender";
import { Modal, Button } from "react-bootstrap";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import UploadButton from "@rpldy/upload-button";
import UploadPreview, { PREVIEW_TYPES } from "@rpldy/upload-preview";
import NoticeModal from "../../NoticeModal/NoticeModal";
import cropImage from "./ImageCrop";
import styled from "styled-components";
//import UploadImageCrop from "../../TournamentAdmin/AddAdminData/UploadImageCrop";
import UploadImageCrop from "../../TournamentAdmin/AddAdminData/UploadImageCrop";
import Croppers from "../../TournamentAdmin/AddAdminData/Croppers";
import Uploady, {
  withRequestPreSendUpdate,
  useItemFinalizeListener,
  useItemStartListener,
} from "@rpldy/uploady";
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
            style={{ display: !finished && updateRequest ? "block" : "none" }}
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

const ItemPreviewWithCrop = withRequestPreSendUpdate((props) => {
  const {
    id,
    url,
    isFallback,
    type,
    updateRequest,
    requestData,
    previewMethods,
  } = props;
  const cropRef = useRef(null);
  const [uploadState, setUploadState] = useState(UPLOAD_STATES.NONE);
  const [crop, setCrop] = useState(null);
  const [croppedImg, setCroppedImg] = useState(null);
  const isFinished = uploadState === UPLOAD_STATES.FINISHED;

  useItemStartListener(() => setUploadState(UPLOAD_STATES.UPLOADING), id);
  useItemFinalizeListener(() => setUploadState(UPLOAD_STATES.FINISHED), id);

  const onImageLoaded = useCallback((image) => {
    cropRef.current = image;
  }, []);

  const onUploadCrop = useCallback(async () => {
    if (updateRequest && (crop?.height || crop?.width)) {
      const [croppedBlob, croppedUri] = await cropImage(
        cropRef.current,
        requestData.items[0].file,
        crop
      );

      requestData.items[0].file = croppedBlob;

      updateRequest({ items: requestData.items });
      setCroppedImg(croppedUri);
    }
  }, [requestData, updateRequest, crop]);

  const onUploadCancel = useCallback(() => {
    updateRequest(false);
    if (previewMethods.current?.clear) {
      previewMethods.current.clear();
    }
  }, [updateRequest, previewMethods]);

  return isFallback || type !== PREVIEW_TYPES.IMAGE ? (
    <PreviewImage src={url} alt='fallback img' />
  ) : (
    <>
      {requestData && uploadState === UPLOAD_STATES.NONE ? (
        <StyledReactCrop
          ruleOfThirds
          src={url}
          crop={crop}
          onImageLoaded={onImageLoaded}
          onChange={setCrop}
          onComplete={setCrop}
        />
      ) : (
        <PreviewImage src={croppedImg || url} alt='img to upload' />
      )}
      <PreviewButtons
        finished={isFinished}
        crop={crop}
        updateRequest={updateRequest}
        onUploadCancel={onUploadCancel}
        onUploadCrop={onUploadCrop}
      />
      <p>{isFinished ? "FINISHED" : ""}</p>
    </>
  );
});

const AddCafeBar = ({ onHide }) => {
  let history = useHistory();
  const [name, setName] = useState("");
  const [description, setdescription] = useState("");
  // const [status,setStatus] = useState('');
  const [locality, setLocality] = useState("");
  const [FromWorkingHours, setFromWorkingHours] = useState("");
  const [ToWorkingHours, setToWorkingHours] = useState("");
  const [FandBOthers, setFandBOthers] = useState("");
  const [mertoConnectivity, setMertoConnectivity] = useState("");
  const [bookingCharges, setBookingCharges] = useState("");
  const [mobilenumber, setMobilenumber] = useState("");
  const [establishment, setEstablishment] = useState("");
  const [ownership, setOwnership] = useState("");
  const [about, setAbout] = useState("");
  // const [age, setAge] = useState("");
  const previewMethodsRef = useRef();

  // const [locality, setLocality] = useState("");
  const [rawData, setRawData] = useState({});
  const [noticeModal, setNoticeModal] = useState(false);
  const [noticeModalErrMsg, setNoticeModalErrMsg] = useState("");
    const [imagedata, setImageData] = useState("");
  const [noticeModalHeaderMsg, setNoticeModalHeaderMsg] = useState("");
  const [hideInput, setHideInput] = useState(false);

  const closeNoticeModal = () => {
    setNoticeModal(false);
    setNoticeModalErrMsg("");
    setNoticeModalHeaderMsg("");
  };
  const onUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file, file.name);
    const path = await apiHandler({
      url: endpoint.FILE_UPLOAD,
      method: "POST",
      // authToken: authToken,
      data: formData,
    });
    // console.log("Upload Reponse -", path.data);
    const uploadedPath = JSON.parse(path.data);
  };
  const onEdit = async () => {
    const result = await apiHandler({
        url: endpoint.CREATE_ADMIN_CENTER,
        method: "POST",
        data: {
            name: name,
            description: description,
            ownership: ownership,
            image: imagedata,
            //  status:status,
            locality: locality,
            establishment: establishment,
            FromWorkingHours: FromWorkingHours,
            ToWorkingHours: ToWorkingHours,
            FandBOthers: FandBOthers,
            mertoConnectivity: mertoConnectivity,
            bookingCharges: bookingCharges,
            mobilenumber: mobilenumber,
            about: about,
            //locality: locality,
        },
    });
    if (result.data.status === 500) {
      setNoticeModalHeaderMsg("Error");
      setNoticeModalErrMsg(result.data.message);
      setNoticeModal(true);
    } else {
      // console.log("Resultput - ", result.data);
      setNoticeModalHeaderMsg("Sucess");
      setNoticeModalErrMsg("Sucessfullty create team admin");
      setNoticeModal(true);
      onHide();
    
    }
    // console.log("Resultput - ", result.data);
    //  closeModal();
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
                  <div className="">
                      <div className="col paddin_top_9px">
                          <CustomInputs
                              label="Name"
                              // id="name-1"
                              name="name1"
                              type="text"
                              onChange={(e) => setName(e.target.value)}
                              value={name}
                          />
                      </div>
                      <div className="col paddin_top_9px">
                          <CustomInputs
                              label="Description"
                              // id="name-1"
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
                name="Status"
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
                  <div>
                      <div className="col paddin_top_9px">
                          <label className="labelStyle">
                              Type Of Establishment
                          </label>
                          {/* <input  className="form-input-style margin-form" type="text" placeholder="Enter" /> */}
                          <select
                              title="TYPE OF ESTABLISHMENT"
                              className="teamclass teamclass1"
                              value={establishment}
                              onChange={(e) => setEstablishment(e.target.value)}
                          >
                              Bar Bare Shell Business Center Cafe Club Coworking
                              Office Space Hotel Resorts Restaurant Society
                              School
                              <option value="Bar"> Bar</option>
                              <option value="Bare Shell">Bare Shell</option>
                              <option value="Business Center">
                                  {" "}
                                  Business Center
                              </option>
                              <option value="Cafe"> Cafe</option>
                              <option value="Club"> Club</option>
                              <option value="Coworking"> Coworking</option>
                              <option value="Office Space">
                                  {" "}
                                  Office Space
                              </option>
                              <option value="Hotel"> Hotel</option>
                              <option value="Resorts"> Resorts</option>
                              <option value="Restaurant"> Restaurant</option>
                              <option value="Society"> Society</option>
                              <option value="School"> School</option>
                          </select>
                      </div>
                      <div className="col paddin_top_9px">
                          <label className="labelStyle">
                              Ownership of property
                          </label>
                          {/* <input  className="form-input-style margin-form" type="text" placeholder="Enter" /> */}
                          <select
                              title="Ownership of property "
                              className="teamclass teamclass1"
                              value={ownership}
                              onChange={(e) => setOwnership(e.target.value)}
                          >
                              <option value="owned">owned</option>
                              <option value="long term lease">
                                  long term lease
                              </option>
                              <option value="Rented"> Rented</option>
                          </select>
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
                      <div className="col paddin_top_9px">
                          <label className="labelStyle">Offer</label>
                          {/* <input  className="form-input-style margin-form" type="text" placeholder="Enter" /> */}
                          <select
                              title="Ownership of property "
                              className="teamclass teamclass1"
                              // value={hideInput}
                              // onChange={(e) => setHideInput(e.target.value)}
                              onClick={() => setHideInput(true)}
                          >
                              <option value="Discount">Discount</option>
                              <option value="long term lease">Off</option>
                          </select>
                      </div>
                      {hideInput && (
                          <div className="col">
                              <CustomInputs
                                  placeholder="Offer"
                                  id="name"
                                  name="name"
                                  type="text"
                                  // onChange={(e) => setAge(e.target.value)}
                                  // value={age}
                              />
                          </div>
                      )}

                      <div className="col">
                          <div className="about-club-dt-define ">
                              {/* <div className='about-club-dt-define-name'>
              <span>About Team</span>
            </div> */}
                              <textarea
                                  value={about}
                                  onChange={(e) => setAbout(e.target.value)}
                                  className="text-area-dfin"
                                  // onChange={(e) => setAbout(e.target.value)}
                                  // value={about}

                                  placeholder="About"
                                  intent="primary"
                                  resizable="none"
                                  resize="none"
                                  theme="light"
                                  type="text"
                              />
                          </div>
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
                      // mincropHeight={400}
                      // mincropWidth={400}
                      // responsive={false}
                  />

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
              </div>

              <div className="month-imp2" style={{ marginTop: "10px" }}>
                  <button className="month-imp2" onClick={() => onEdit()}>
                      Add
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
      </>
  );
};
export default AddCafeBar;
