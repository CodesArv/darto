import React, { useState } from "react";

import "./AddPartners.css";
import { apiHandler } from "../../../../assets/api";
import { endpoint } from "../../../../assets/api/endpoint";
import { Modal, Button } from "react-bootstrap";
import UploadImageCrop from "../../TournamentAdmin/AddAdminData/UploadImageCrop";
import NoticeModal from "../../NoticeModal/NoticeModal";
import Croppers from "../../TournamentAdmin/AddAdminData/Croppers";
const AddPartner = ({ onHide }) => {
  const [name, setName] = useState("");

  const [link, setLink] = useState("");
  const [category, setCategories] = useState("");
  const [orderNo, setOrderNo] = useState("");
  const [imagedata, setImageData] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   const [noticeModal, setNoticeModal] = useState(false);
   const [noticeModalErrMsg, setNoticeModalErrMsg] = useState("");
   const [noticeModalHeaderMsg, setNoticeModalHeaderMsg] = useState("");
   const closeNoticeModal = () => {
       setNoticeModal(false);
       setNoticeModalErrMsg("");
       setNoticeModalHeaderMsg("");
   };
  const onsubmit = async () => {
    const result = await apiHandler({
      url: endpoint.CREATE_PARTENER,
      method: "POST",
      data: {
        // name: name,
        image: imagedata,
        link: link,
        category: category,
         orderNo: orderNo,
      },
    });
    if (result.data.status === 500) {
      setNoticeModalHeaderMsg("Error");
      setNoticeModalErrMsg(result.data.message);
      setNoticeModal(true);
    } else {
      console.log("Resultput - ", result.data);
      setNoticeModalHeaderMsg("Sucess");
      setNoticeModalErrMsg("Sucessfullty create Slider admin");
      setNoticeModal(true);
      onHide();
    }
    // setShow(false);
  };
  return (
      <>
          <div className="padding_partners_overs">
              <div className="row">
                  <div className="partners_padding_top">
                      <span>Categories</span>
                      <div>
                          <input
                              className="input_partners"
                              type="text"
                              value={category}
                              onChange={(e) => setCategories(e.target.value)}
                          />
                      </div>
                  </div>
                  <div className="partners_padding_top">
                      <div class="box__input">
                          <div className="padding_profile_top">
                              {imagedata !== "" && (
                                  <img
                                      src={imagedata}
                                      width={200}
                                      hight={200}
                                  />
                              )}
                              <Croppers image={setImageData} type="partner" />
                          </div>
                          {/* <Modal
                              show={show}
                              onHide={handleClose}
                              style={{
                                  width: "",
                                  height: "100vh",
                                  fontSize: "16px",
                              }}
                          >
                              <Modal.Header
                                  closeButton
                                  className="image_modal1"
                              >
                                  <Modal.Title className="image_modal1">
                                      Upload Image
                                  </Modal.Title>
                              </Modal.Header>
                              <Modal.Body style={{ width: "", height: "100%" }}>
                                  <UploadImageCrop
                                      image={setImageData}
                                      type="slider"
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
                          {/* <input
                                      class="box__file"
                                      type="file"
                                      name="files[]"
                                      id="file"
                                      // value={imageFile}
                                      onChange={(file) => Upload(file)}
                                      data-multiple-caption="{count} files selected"
                                      multiple
                                  /> */}
                      </div>
                  </div>
                  <div className="partners_padding_top">
                      <span>Link</span>
                      <div>
                          <input
                              className="input_partners"
                              type="text"
                              value={link}
                              onChange={(e) => setLink(e.target.value)}
                          />
                      </div>
                  </div>
                  <div className="partners_padding_top">
                      <span>Order No</span>
                      <div>
                          <input
                              className="input_partners"
                              type="text"
                              value={orderNo}
                              onChange={(e) => setOrderNo(e.target.value)}
                          />
                      </div>
                  </div>
              </div>
              <div className="padding_top_define_partner">
                  <button className="addParteners" onClick={() => onsubmit()}>
                      ADD
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
export default AddPartner;
