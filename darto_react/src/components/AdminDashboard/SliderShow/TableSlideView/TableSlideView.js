import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
// import SearchInput from "../CustomInput/SearchInput";
import SearchInput from "../../CustomInput/SearchInput";
import "./TableSlideView.css";
import Card from "react-bootstrap/Card";

import Modal from "react-bootstrap/Modal";
import { Button } from "reactstrap";
import SliderCard from "../AddSlideShow/SlideCard";
import EditSlideShow from "../EditSlideShow/EditSlideShow";
// import ViewSlider from "../ViewSliderShow/ViewSliderShow";
import { apiHandler } from "../../../../assets/api";
import { endpoint } from "../../../../assets/api/endpoint";
import NoticeModal from "../../NoticeModal/NoticeModal";
import Croppers from "../../../../domains/HomePage/CreateTeamClub/CreateTeamButton/Croppers";
// import EditSlideShow from "../EditSlideShow/EditSlideShow";
function MyVerticallyCenteredModal({ onHide, ...props }) {
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
          Slide
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <SliderCard onHide={onHide} />
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide} style={{ fontSize: "14px" }}>
          Close
        </Button>
      </Modal.Footer> */}
    </Modal>
  );
}
function EditModal({ onedit, sliderId, onHide, ...props }) {
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
          Slide
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <EditSlideShow onedit={onedit} sliderId={sliderId} onHide={onHide} /> */}
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={onHide} style={{ fontSize: "14px" }}>
          Close
        </Button>
      </Modal.Footer> */}
    </Modal>
  );
}
const TableSlideView = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [imagedata, setImageData] = useState("");
  const [onedit, setEdit] = useState(false);
  const [onEditflex, setOnEditFlex] = useState(false);
  const [noticeModal, setNoticeModal] = useState(false);
  const [noticeModalErrMsg, setNoticeModalErrMsg] = useState("");
  const [noticeModalHeaderMsg, setNoticeModalHeaderMsg] = useState("");
  const [rawDataRecord, setRawDataRecord] = useState([]);
  const [sliderId, setsliderId] = useState("");
  const [oid, setOid] = useState("");
   
  const closeNoticeModal = () => {
    setNoticeModal(false);
    setNoticeModalErrMsg("");
    setNoticeModalHeaderMsg("");
  };
  useEffect(() => {
    GetSliderData();
  }, []);

  const GetSliderData = async () => {
    const result = await apiHandler({
      url: endpoint.Slider_GET,
      method: "GET",
      data: null,
    });
    // console.log(result.data);
    if (result.data.status === 500) {
      setNoticeModalHeaderMsg("Error");
      setNoticeModalErrMsg(result.data.message);
      setNoticeModal(true);
    } else if (result.data.length === 0) {
      setNoticeModalHeaderMsg("Error");
      setNoticeModalErrMsg("Please Provide data");
      setNoticeModal(true);
    } else {
      let list = result.data.sort((a, b) => (a.orderNo > b.orderNo ? 1 : -1));
      setRawDataRecord(list);
      //setRawData(result.data.Sliders);
    }
    //setFilteredTournamnetData(result.data);
  };
  // const update = async (updatedRecord) => {
  //   const result = await apiHandler({
  //       url: endpoint.Slider_UPDATE + sliderId,
  //       method: "PUT",
  //       data: updatedRecord,
  //   });

  //   if (result.data.status === 500) {
  //     setNoticeModalHeaderMsg("Error");
  //     setNoticeModalErrMsg(result.data.message);
  //     setNoticeModal(true);
  //   }
  //   //noticeModal
  //   else {
  //     console.log("SliderData", result.data);
  //     setNoticeModalHeaderMsg("Sucess");
  //     setNoticeModalErrMsg("updated");
  //     setNoticeModal(true);
  //   }
  // };
  // const onEdit = (id) => {

  //   // setEdit(true);

  //   GetSliderDatabyedit(id);

  //   // setShowEditModal(true);
  // };
  // // useEffect(() => {
  // //     GetSliderDatabyedit();
  // // }, []);

  // const GetSliderDatabyedit = async (id) => {
  //    setsliderId(id);
  //     const result = await apiHandler({
  //         url: endpoint.Slider_GETBYID + id,
  //         method: "GET",
  //         data: null,
  //     });
  //     console.log(result.data);
  //     if (result.data.status === 500) {
  //         setNoticeModalHeaderMsg("Error");
  //         setNoticeModalErrMsg(result.data.message);
  //         setNoticeModal(true);
  //     } else if (result.data.length === 0) {
  //         setNoticeModalHeaderMsg("Error");
  //         setNoticeModalErrMsg("Please Provide data");
  //         setNoticeModal(true);
  //     } else {
  //         console.log("slidernyid", result.data);
  //          setOnEditFlex(true);
  //         setName(result.data.name);
  //         setDescription(result.data.description);
  //         setImageData(result.data.image);
  //         setOid(result.data.orderNo);

  //         // setRawDataSlider(result.data);
  //     }
  // };
  // const onUpdate = async () => {
  //     const result = await apiHandler({
  //         url: endpoint.Slider_UPDATE + sliderId,
  //         method: "PUT",
  //         data: {
  //             //id: record.id,
  //             name: name,
  //             description: description,
  //             image: imagedata,
  //             orderNo: oid,
  //         },
  //     });

  //     if (result.data.status === 500) {
  //         setNoticeModalHeaderMsg("Error");
  //         setNoticeModalErrMsg(result.data.message);
  //         setNoticeModal(true);
  //     }
  //     //noticeModal
  //     else {
  //         console.log("SliderData", result.data);
  //         setNoticeModalHeaderMsg("Sucess");
  //         setNoticeModalErrMsg("updated");
  //         setNoticeModal(true);
  //         setOnEditFlex(false);
  //         // onHide();
  //     }
  // };
  // const onDelete = async (id) => {
  //   const result = await apiHandler({
  //     url: endpoint.Slider_DELETE + id,
  //     method: "DELETE",
  //   });
  //   if (result.data.status === 200) {
  //     console.log(result.data);
  //     setNoticeModalHeaderMsg("sucess");
  //     setNoticeModalErrMsg(result.data.message);
  //     setNoticeModal(true);
  //     GetSliderData();
  //   } else {
  //     setNoticeModalHeaderMsg("Error");
  //     setNoticeModalErrMsg(result.data.message);
  //     setNoticeModal(true);
  //   }
  //   // console.log(result.data);
  //   // alert("Deleted");
  //   GetSliderData();
  // };
  // const onUpload =()=>{
  //   handleShow();
  // };
  // const onuploadbyid=()=>{

  // };
  //  const [show, setShow] = useState(false);

  //  const handleClose = () => setShow(false);
  //  const handleShow = () => setShow(true);
  return (
    <>
      <div className='stake-back' style={{ marginTop: "20px" }}>
        <div className='stake-back1'>
          <span className='update-opt'>Slider</span>
        </div>
        <div className='darto-logo5'>
          <button className='darto-l2' onClick={() => setModalShow(true)}>
            ADD
          </button>
        </div>
      </div>
      <div class='' style={{ boxShadow: "0 0 10px gray", marginTop: "50px" }}>
        <div className='row'>
          <div className='col-3 text-align-centers'>
            <span className='font-style-with-size'>Image</span>
          </div>
          <div className='col-3 text-align-centers'>
            <span className='font-style-with-size'>Details</span>
          </div>
          <div className='col-2 text-align-centers'>
            <span className='font-style-with-size'>Oid</span>
          </div>
          <div className='col-4 text-align-centers'>
            <span className='font-style-with-size'>Action</span>
          </div>
        </div>
        {rawDataRecord &&
          rawDataRecord.map((item, index) => (
            <>
              <EditSlideShow
                item={item}
                index={index}
                // GetSliderData ={GetSliderData}
              />
            </>
          ))}

        {noticeModal && (
          <NoticeModal
            noticeModal={noticeModal}
            noticeModalHeader={noticeModalHeaderMsg}
            noticeModalErrMsg={noticeModalErrMsg}
            closeModal={closeNoticeModal}
          />
        )}
      </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      {showEditModal && (
        <EditModal
          show={showEditModal}
          onedit={onedit}
          sliderId={sliderId}
          onHide={() => setShowEditModal(false)}
        />
      )}
    </>
  );
};
export default TableSlideView;
