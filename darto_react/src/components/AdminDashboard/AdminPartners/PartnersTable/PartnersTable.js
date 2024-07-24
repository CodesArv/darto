import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
// import SearchInput from "../CustomInput/SearchInput";
import SearchInput from "../../CustomInput/SearchInput";
// import "./TableSlideView.css";
import Card from "react-bootstrap/Card";
import EditPartner from "../EditPartners/EditPartners";

import Modal from "react-bootstrap/Modal";
import { Button } from "reactstrap";
import AddPartner from "../AddPartners/AddPatners";
import { apiHandler } from "../../../../assets/api";
import { endpoint } from "../../../../assets/api/endpoint";

function MyVerticallyCenteredModal({ onHide,...props }) {
    return (
        <Modal
            {...props}
            // size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            style={{ fontSize: "14px" }}
        >
            <Modal.Header closeButton>
                <Modal.Title
                    id="contained-modal-title-vcenter"
                    style={{ fontSize: "14px" }}
                >
                    Partener
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AddPartner onHide={onHide} />
            </Modal.Body>
            {/* <Modal.Footer>
        <Button onClick={props.onHide} style={{ fontSize: "14px" }}>
          Close
        </Button>
      </Modal.Footer> */}
        </Modal>
    );
}
function EditModal({ onedit, partnersId, onHide, ...props }) {
  return (
    <Modal
      {...props}
      // size="lg"
      aria-labelledby='contained-modal-title-vcenter'
      centered
      style={{ fontSize: "14px" }}
    >
      <Modal.Header closeButton>
        <Modal.Title
          id='contained-modal-title-vcenter'
          style={{ fontSize: "14px" }}
        >
          Partener
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <EditPartner partnersId={partnersId} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide} style={{ fontSize: "14px" }}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

const PartnersTable = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [onedit, setEdit] = useState(false);
  const [noticeModal, setNoticeModal] = useState(false);
  const [noticeModalErrMsg, setNoticeModalErrMsg] = useState("");
  const [noticeModalHeaderMsg, setNoticeModalHeaderMsg] = useState("");
  const [rawDataRecord, setRawDataRecord] = useState([]);
  const [partnersId, setPartnersId] = useState("");
  const [linkShow, setLinkShow] = useState(true);

  useEffect(() => {
    GetPartnerData();
  }, []);

  const GetPartnerData = async () => {
    const result = await apiHandler({
      url: endpoint.GET_PARTENER,
      method: "GET",
      data: null,
    });
    // console.log(result.data);
    let list = result.data.sort((a, b) => (a.orderNo > b.orderNo ? 1 : -1));
    setRawDataRecord(list);
    //setFilteredTournamnetData(result.data);
  };

  const imgLink = (link, image) => {
    return (
      <>
        <a href={link} target='_blank' style={{ cursor: "pointer" }}>
          <img src={image} style={{ width: "99px" }} />
        </a>
      </>
    );
  };

  const onEdit = (id) => {
    // setEdit(true);
    setPartnersId(id);
    setShowEditModal(true);
  };

  const onDelete = async (id) => {
    const result = await apiHandler({
      url: endpoint.DELETE_PARTENER + id,
      method: "DELETE",
    });
    if (result.data.status === 200) {
      // console.log(result.data);
      setNoticeModalHeaderMsg("sucess");
      setNoticeModalErrMsg(result.data.message);
      setNoticeModal(true);
      GetPartnerData();
    } else {
      setNoticeModalHeaderMsg("Error");
      setNoticeModalErrMsg(result.data.message);
      setNoticeModal(true);
    }
    // console.log(result.data);
    // alert("Deleted");
    // GetPartnerData();
  };
  return (
      <>
          <div className="stake-back" style={{ marginTop: "20px" }}>
              <div className="stake-back1">
                  <span className="update-opt">Partener</span>
              </div>
              <div className="darto-logo5">
                  <button
                      className="darto-l2"
                      onClick={() => setModalShow(true)}
                  >
                      ADD
                  </button>
              </div>
          </div>
          <div
              class=""
              style={{ boxShadow: "0 0 10px gray", marginTop: "50px" }}
          >
              <div className="row">
                  <div className="col-3 text-align-centers">
                      <span className="font-style-with-size">Image</span>
                  </div>

                  <div className="col-3 text-align-centers">
                      <span className="font-style-with-size">Name</span>
                  </div>
                  <div className="col-2 text-align-centers">
                      <span className="font-style-with-size">Categories</span>
                  </div>
                  <div className="col-2 text-align-centers">
                      <span className="font-style-with-size">Oid</span>
                  </div>
                  <div className="col-2 text-align-centers">
                      <span className="font-style-with-size">Action</span>
                  </div>
              </div>
          </div>
          {rawDataRecord &&
              rawDataRecord.map((item, index) => (
                  <EditPartner item={item} index={index} />
              ))}
          <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
          />
          {showEditModal && (
              <EditModal
                  show={showEditModal}
                  onedit={onedit}
                  partnersId={partnersId}
                  onHide={() => setShowEditModal(false)}
              />
          )}
      </>
  );
};
export default PartnersTable;
