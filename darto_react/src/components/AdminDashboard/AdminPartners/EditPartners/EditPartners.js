import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { apiHandler } from "../../../../assets/api";
import Card from "react-bootstrap/Card";
import { endpoint } from "../../../../assets/api/endpoint";
import NoticeModal from "../../NoticeModal/NoticeModal";
import Croppers from "../../../../domains/HomePage/CreateTeamClub/CreateTeamButton/Croppers";
const EditPartner = ({ onHide ,item,index }) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [image, setImage] = useState("");
  const [link, setLink] = useState("");
  const [category, setCategory] = useState("");
  const [orderNo, setOrderNo] = useState("");
  const [rawDataPartner, setRawDataPartner] = useState("");
  const [noticeModal, setNoticeModal] = useState(false);
  const [noticeModalErrMsg, setNoticeModalErrMsg] = useState("");
  const [noticeModalHeaderMsg, setNoticeModalHeaderMsg] = useState("");
  const [rawDataSlider, setRawDataSlider] = useState("");
  const [imagedata, setImageData] = useState("");
  const [onEditflex, setOnEditFlex] = useState(false);
  const [show, setShow] = useState(false);
  const [partnersId, setpartnerId] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const closeNoticeModal = () => {
    setNoticeModal(false);
    setNoticeModalErrMsg("");
    setNoticeModalHeaderMsg("");
  };
   useEffect(() => {
       // GetSliderData();
   }, [item]);
   const onEdit = (id) => {
       // setEdit(true);

       Getpartners(id);
       setOnEditFlex(true);
       // GetSliderDatabyedit(id);

       // setShowEditModal(true);
   };
   const Getpartners = async (id) => {
       setpartnerId(id);
       const result = await apiHandler({
           url: endpoint.GET_PARTENERBYID + id,
           method: "GET",
           data: null,
       });
       console.log(result.data);
       if (result.data.status === 500) {
           setNoticeModalHeaderMsg("Error");
           setNoticeModalErrMsg(result.data.message);
           setNoticeModal(true);
       } else if (result.data.length === 0) {
           setNoticeModalHeaderMsg("Error");
           setNoticeModalErrMsg("Please Provide data");
           setNoticeModal(true);
       } else {
           console.log("slidernyid", result.data);
           setName(result.data.response.name);
          setCategory(result.data.response.category);
          setLink(result.data.response.link);
          setImageData(result.data.response.image);
           
       }
   };
   const onupdate = async () => {
      const result = await apiHandler({
          url: endpoint.UPDATE_PARTENER + partnersId,
          method: "PUT",
          data: {
              //id: record.id,
              name: name,
              // image: image,
              link: link,
              category: category,
              orderNo: orderNo,
          },
      });

       if (result.data.status === 500) {
           setNoticeModalHeaderMsg("Error");
           setNoticeModalErrMsg(result.data.message);
           setNoticeModal(true);
       }
       //noticeModal
       else {
           console.log("SliderData", result.data);
           setNoticeModalHeaderMsg("Sucess");
           setNoticeModalErrMsg("updated");
           setNoticeModal(true);
           //   GetSliderData()
           setOnEditFlex(false);
       }
   };
   const onUpload = () => {
       handleShow();
   };
   const onDelete = async (id) => {
       const result = await apiHandler({
           url: endpoint.DELETE_PARTENER + id,
           method: "DELETE",
       });
       if (result.data.status === 200) {
           console.log(result.data);
           setNoticeModalHeaderMsg("sucess");
           setNoticeModalErrMsg(result.data.message);
           setNoticeModal(true);
           // GetSliderData();
       } else {
           setNoticeModalHeaderMsg("Error");
           setNoticeModalErrMsg(result.data.message);
           setNoticeModal(true);
           // GetSliderData();
       }
       // console.log(result.data);
       // alert("Deleted");
   };
//   useEffect(() => {
//     GetPartnersData();
//   }, []);

//   const GetPartnersData = async () => {
//     const result = await apiHandler({
//       url: endpoint.GET_PARTENERBYID + partnersId,
//       method: "GET",
//       data: null,
//     });
//     // console.log(result.data);
//     if (result.data.status === 500) {
//       setNoticeModalHeaderMsg("Error");
//       setNoticeModalErrMsg(result.data.message);
//       setNoticeModal(true);
//     } else if (result.data.length === 0) {
//       setNoticeModalHeaderMsg("Error");
//       setNoticeModalErrMsg("Please Provide data");
//       setNoticeModal(true);
//     } else {
//     //   console.log("slidernyid", result.data);
//       setName(result.data.name);
//       setStatus(result.data.link);
//       setImage(result.data.image);
//       setRawDataPartner(result.data);
//     }
//   };
  
  const ongetimage =(image ,link)=>{
      return (
          <>
              <a href={link} target={"_blank"} style={{cursor:"pointer"}}>
                  <img
                      src={item.image}
                      style={{
                          width: "100%",
                      }}
                  />
              </a>
          </>
      );
  }
  return (
      <>
          <div className=" padding_top_10px">
              <Card
                  style={{ fontSize: "10px", padding: "10px" }}
                  className="box_shadow_slider"
              >
                  <div className="row">
                      <div style={{ display: "flex" }} className="col-3">
                          <div>
                              <div
                                  class="box"
                                  method="post"
                                  action=""
                                  enctype="multipart/form-data"
                              >
                                  <div class="box__input">
                                      {onEditflex ? (
                                          <>
                                              <div
                                                  className="padding_top_of_slider"
                                                  onClick={() => onUpload()}
                                              >
                                                  <img
                                                      src={imagedata}
                                                      style={{
                                                          width: "100%",
                                                          cursor: "pointer",
                                                      }}
                                                  />
                                              </div>
                                          </>
                                      ) : (
                                          <>
                                              <div className="padding_top_of_slider">
                                                  {ongetimage(
                                                      item.image,
                                                      item.link
                                                  )}
                                              </div>
                                          </>
                                      )}
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-2 ">
                          <Card.Body>
                              <Card.Title
                                  style={{
                                      fontSize: "14px",
                                      fontWeight: "bold",
                                      color: "black",
                                  }}
                              >
                                  Name
                              </Card.Title>
                              <input
                                  type="text"
                                  className="slider_Input_Define"
                                  placeholder="Enter Name"
                                  value={onEditflex ? name : item.name}
                                  onChange={(e) =>
                                      onEditflex
                                          ? setName(e.target.value)
                                          : null
                                  }
                                  disabled={!onEditflex}
                              />
                              {onEditflex && (
                                  <>
                                      <Card.Title
                                          style={{
                                              fontSize: "14px",
                                              fontWeight: "bold",
                                              color: "black",
                                          }}
                                      >
                                          Link
                                      </Card.Title>
                                      <input
                                          type="text"
                                          className="slider_Input_Define"
                                          placeholder="Enter Name"
                                          value={onEditflex ? link : item.link}
                                          onChange={(e) =>
                                              onEditflex
                                                  ? setLink(e.target.value)
                                                  : null
                                          }
                                          disabled={!onEditflex}
                                      />
                                  </>
                              )}
                          </Card.Body>
                      </div>
                      <div className="col-3 ">
                          <Card.Body>
                              <Card.Title
                                  style={{
                                      fontSize: "14px",
                                      fontWeight: "bold",
                                      color: "black",
                                  }}
                              >
                                  Category
                              </Card.Title>
                              <input
                                  type="text"
                                  className="slider_Input_Define"
                                  placeholder="Enter Name"
                                  value={onEditflex ? category : item.category}
                                  onChange={(e) =>
                                      onEditflex
                                          ? setCategory(e.target.value)
                                          : null
                                  }
                                  disabled={!onEditflex}
                              />
                          </Card.Body>
                      </div>
                      <div className="col-2 ">
                          <Card.Body>
                              <Card.Title
                                  style={{
                                      fontSize: "14px",
                                      fontWeight: "bold",
                                      color: "black",
                                  }}
                              >
                                  order Id
                              </Card.Title>
                              {/* {!onEditflex ? (
                                  <>
                                      {" "}
                                      <input
                                          type="number"
                                          className="slider_Input_Define"
                                          placeholder="Enter Id"
                                          disabled={!onEditflex}
                                          value={
                                              item.orderNo
                                          }
                                      />
                                  </>
                              ) : (
                                  <> */}{" "}
                              <input
                                  type="number"
                                  className="slider_Input_Define"
                                  placeholder="Enter Id"
                                  disabled={!onEditflex}
                                  value={
                                      onEditflex ? orderNo : item.orderNo
                                      //   item && item.orderNo === null
                                      //       ? index + 1
                                      //       : item && item.orderNo
                                      //       ? item && item.orderNo
                                      //       : oid
                                  }
                                  onChange={(e) =>
                                      onEditflex
                                          ? setOrderNo(e.target.value)
                                          : null
                                  }
                              />
                              {/* </>
                              )} */}
                          </Card.Body>
                      </div>

                      <div className="edit_Delete_box col-2">
                          {onEditflex ? (
                              <>
                                  {" "}
                                  <div>
                                      <Button
                                          style={{
                                              fontSize: "14px",
                                              textAlign: "end",
                                          }}
                                          onClick={() => onupdate()}
                                      >
                                          Update
                                      </Button>
                                  </div>
                              </>
                          ) : (
                              <>
                                  <div>
                                      <Button
                                          style={{
                                              fontSize: "14px",
                                              textAlign: "end",
                                          }}
                                          onClick={() => onEdit(item.id)}
                                      >
                                          EDIT
                                      </Button>
                                  </div>
                                  <div>
                                      <Button
                                          style={{
                                              fontSize: "14px",
                                              textAlign: "end",
                                          }}
                                          onClick={() => onDelete(item.id)}
                                      >
                                          Delete
                                      </Button>
                                  </div>
                              </>
                          )}
                      </div>
                  </div>
              </Card>
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
export default EditPartner;
