import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import "./EditSlideShow.css";
import { apiHandler } from "../../../../assets/api";
import { endpoint } from "../../../../assets/api/endpoint";
import NoticeModal from "../../NoticeModal/NoticeModal";
import { Modal, Button } from "react-bootstrap";
import UploadImageCrop from "../../TournamentAdmin/AddAdminData/UploadImageCrop";
import Croppers from "../../../../domains/HomePage/CreateTeamClub/CreateTeamButton/Croppers";
const EditSlideShow = ({
  onedit,
  rawDataRecord,
  updatedRecord,
  onHide,
  //   sliderId,
  item,
  index,
  //   GetSliderData,
}) => {
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [imageFile, setImageFile] = useState("");
  const [noticeModal, setNoticeModal] = useState(false);
  const [noticeModalErrMsg, setNoticeModalErrMsg] = useState("");
  const [noticeModalHeaderMsg, setNoticeModalHeaderMsg] = useState("");
  const [images, setImage] = useState("");
  const [rawDataSlider, setRawDataSlider] = useState("");
  const [imagedata, setImageData] = useState("");
  const [onEditflex, setOnEditFlex] = useState(false);
  const [sliderId, setsliderId] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [oid, setOid] = useState("");
  // const editProfile = () => {
  //   history.push("/mydartoedit");

  // };
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

    GetSliderDatas(id);
    setOnEditFlex(true);
    // GetSliderDatabyedit(id);

    // setShowEditModal(true);
  };
  const GetSliderDatas = async (id) => {
    setsliderId(id);
    const result = await apiHandler({
      url: endpoint.Slider_GETBYID + id,
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
      setName(result.data.name);
      setDescription(result.data.description);
      setImageData(result.data.image);
      setOid(result.data.orderNo);
      setRawDataSlider(result.data);
    }
  };
  const onupdate = async () => {
    const result = await apiHandler({
      url: endpoint.Slider_UPDATE + sliderId,
      method: "PUT",
      data: {
        //id: record.id,
        name: name,
        description: description,
        image: imagedata,
        orderNo: oid,
      },
    });

    if (result.data.status === 500) {
      setNoticeModalHeaderMsg("Error");
      setNoticeModalErrMsg(result.data.message);
      setNoticeModal(true);
    }
    //noticeModal
    else {
     
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
      url: endpoint.Slider_DELETE + id,
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
  const onuploadbyid = () => {};
  //    const [show, setShow] = useState(false);

  //    const handleClose = () => setShow(false);
  //    const handleShow = () => setShow(true);
  return (
    <>
      <div className=' padding_top_10px'>
        <Card
          style={{ fontSize: "10px", padding: "10px" }}
          className='box_shadow_slider'
        >
          <div className='row'>
            <div style={{ display: "flex" }} className='col-3'>
              <div>
                <div
                  class='box'
                  method='post'
                  action=''
                  enctype='multipart/form-data'
                >
                  <div class='box__input'>
                    {onEditflex ? (
                      <>
                        <div
                          className='padding_top_of_slider'
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
                        <div className='padding_top_of_slider'>
                          <img
                            src={item.image}
                            style={{
                              width: "100%",
                            }}
                          />
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className='col-3 '>
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
                  type='text'
                  className='slider_Input_Define'
                  placeholder='Enter Name'
                  value={onEditflex ? name : item.name}
                  onChange={(e) =>
                    onEditflex ? setName(e.target.value) : null
                  }
                  disabled={!onEditflex}
                />
                <Card.Text
                  style={{
                    fontSize: "14px",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  Description
                </Card.Text>
                <textarea
                  rows='4'
                  cols='50'
                  className='slider_Input_Define_height'
                  name='comment'
                  form='usrform'
                  // value={
                  //     (item &&
                  //         item.description) ||
                  //     ""
                  // }
                  value={onEditflex ? description : item.description}
                  onChange={(e) =>
                    onEditflex ? setDescription(e.target.value) : null
                  }
                  disabled={!onEditflex}
                ></textarea>
              </Card.Body>
            </div>
            <div className='col-2 '>
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
                                          value={ item.orderNo === null ? index + 1 : item.orderNo
                                           
                                          }
                                       
                                      />
                                  </>
                              ) : (
                                  <> */}{" "}
                <input
                  type='number'
                  className='slider_Input_Define'
                  placeholder='Enter Id'
                  disabled={!onEditflex}
                  value={
                    onEditflex ? oid : item.orderNo
                    //   item && item.orderNo === null
                    //       ? index + 1
                    //       : item && item.orderNo
                    //       ? item && item.orderNo
                    //       : oid
                  }
                  onChange={(e) => (onEditflex ? setOid(e.target.value) : null)}
                />
                {/* </>
                              )} */}
              </Card.Body>
            </div>

            <div className='edit_Delete_box col-4'>
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

        <div className='row'>
          <div className='col'>
            {" "}
            {/* <ViewSlider
                onedit={onedit}
                rawDataRecord={rawDataRecord}
                // updatedRecord={updatedRecord}
              /> */}
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className='image_modal1'>
          <Modal.Title className='image_modal1'>Upload Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Croppers
            setimage={setImageData}
            type='slider'
            mincropHeight={400}
            mincropWidth={400}
            responsive={false}
            handleClose={handleClose}
          />
        </Modal.Body>
        {/* <Modal.Footer>
              <Button
                variant='secondary'
                onClick={handleClose}
                className='image_modal1'
              >
                Close
              </Button>
              <Button
                variant='primary'
                onClick={handleClose}
                className='image_modal1'
              >
                Save Changes
              </Button>
            </Modal.Footer> */}
      </Modal>
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
export default EditSlideShow;
