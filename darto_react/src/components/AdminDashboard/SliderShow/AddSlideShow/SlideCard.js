import React, { useState } from "react";
import Card from "react-bootstrap/Card";
//import { Button } from "reactstrap";
import NoticeModal from "../../NoticeModal/NoticeModal";
import { apiHandler } from "../../../../assets/api";
import { endpoint } from "../../../../assets/api/endpoint";
import { useHistory } from "react-router";
import { Modal, Button } from "react-bootstrap";
import UploadImageCrop from "../../TournamentAdmin/AddAdminData/UploadImageCrop";
import Croppers from "../../TournamentAdmin/AddAdminData/Croppers";
const SliderCard = ({ onHide }) => {
  const [noticeModal, setNoticeModal] = useState(false);
  const [noticeModalErrMsg, setNoticeModalErrMsg] = useState("");
  const [noticeModalHeaderMsg, setNoticeModalHeaderMsg] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagedata, setImageData] = useState("");
  const [images, setImage] = useState("");
     const [cropData, setCropData] = useState("#");
     const [cropper, setCropper] = useState("");
     const [fileName, setFileName] = useState("");
     const [close, setClose] = useState(true);
  const [oid, setOid] = useState("");
  //const [imageSrc, setImageSrc] = React.useState(null);
  // const editProfile = () => {
  //   history.push("/mydartoedit");
  const closeNoticeModal = () => {
    setNoticeModal(false);
    setNoticeModalErrMsg("");
    setNoticeModalHeaderMsg("");
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const formData = new FormData();
  //     // const data = {
  //     //   formData: formData,
  //     // };
  //     formData.append("file", fileUpload, fileUpload.name);
  //     const result = await apiHandler({
  //       url: endpoint.FILE_UPLOAD,
  //       method: "POST",
  //       authToken: authToken,
  //       data: formData,
  //     });
  //     // let path = await axios.post('loan-service/upload', formData, header);
  //     console.log("Upload Reponse -", JSON.parse(result.data));
  //     const uploadedPath = JSON.parse(result.data);
  //     handlenextSubmit(uploadedPath.name);
  // const Upload = async (file) => {
  //   if (file) {
  //     // imageSrc;
  //   const blob = await fetch(file).then((res) => res.blob());
  //     const formData = new FormData();
  //      console.log("imageSrc ", file.name);
  //    //console.log("imageSrc ", file);
  //     formData.append("file", blob, blob.name);
  //     const result = await apiHandler({
  //       url: endpoint.UPLOAD_IMAGE +"?type="+"slider",
  //       method: "POST",
  //       data: formData,
  //     });
  //     if (result.data.status === 500) {
  //       setNoticeModalHeaderMsg("Error");
  //       setNoticeModalErrMsg(result.data.message);
  //       setNoticeModal(true);
  //     } else {
  //       console.log("Resultput - ", result.data);
  //       setNoticeModalHeaderMsg("Sucess");
  //       setNoticeModalErrMsg(result.data.message);
  //       setNoticeModal(true);
  //       console.log("Upload Reponse -", JSON.parse(result.data));

  //       const uploadedPath = JSON.parse(result.data);
  //        let url = endpoint.BASE_URL_STAGING + uploadedPath.name;
  //        console.log("url", url);
  //       setImageFile(url);
  //     }
  //   } else {
  //     setImageFile("");
  //   }
  // };
 
  const onChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
        files = e.dataTransfer.files;
    } else if (e.target) {
        files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
        setImage(reader.result);
        console.log("ff", reader.result);
    };
    reader.readAsDataURL(files[0]);
    setFileName(files[0].name);
    console.log("ffff", files[0].name);
    handleShow();
};
  const Upload = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    // setCropData(cropperData);
     if (images) {
     const blob = await fetch(images).then((res) => res.blob());
    const formData = new FormData();
    console.log("imageSrc ",blob,  fileName);
    formData.append("file",blob,  fileName);
    const result = await apiHandler({
        url: endpoint.UPLOAD_IMAGE + "?type=" + "slider",
        method: "POST",
        data: formData,
    });
    if (result.data.status === 500) {
        setNoticeModalHeaderMsg("Error");
        setNoticeModalErrMsg(result.data.message);
        setNoticeModal(true);
    } else {
        console.log("Resultput - ", result.data);
        // setNoticeModalHeaderMsg("Sucess");
        // setNoticeModalErrMsg(result.data.message);
        // setNoticeModal(true);
        console.log("Upload Reponse -", result.data);
        const uploadedPath = result.data;

        let url = endpoint.BASE_URL_STAGING + uploadedPath.name;
        console.log("url", url);

        // setCropData(uploadedPath.name);
        //showCroppedImage(uploadedPath.name);
        onsubmit(url);
        // setClose(false);
    }
  }
  else{
    onsubmit("");
  }
 
};

const onsubmit = async (url) => {
  const result = await apiHandler({
    url: endpoint.Slider_CREATE,
    method: "POST",
    data: {
      name: name,
      description: description,
      image: url,
      orderNo: oid,
    },
  });
  if (result.data.status === 500) {
    setNoticeModalHeaderMsg("Error");
    setNoticeModalErrMsg(result.data.message);
    setNoticeModal(true);
  } else {
    // console.log("Resultput - ", result.data);
    setNoticeModalHeaderMsg("Sucess");
    setNoticeModalErrMsg("Sucessfullty create Slider admin");
    setNoticeModal(true);
    onHide();
  }
  
};
  return (
    <>
      <Card style={{ fontSize: "10px" }}>
        <div style={{ display: "flex" }}>
          <div>
            <div>
              <div
                class='box'
                method='post'
                action=''
                enctype='multipart/form-data'
              >
                <div class='box__input'>
                  <div className='padding_profile_top'>
                    {imagedata !== "" && (
                      <img src={imagedata} width={200} hight={200} />
                    )}
                    <input type="file" onChange={onChange} />
                    {/* <Croppers
                      image={setImageData}
                      type='slider'
                      mincropHeight={400}
                      mincropWidth={400}
                      responsive={false}
                    /> */}
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
                                      <Modal.Body
                                          style={{ width: "", height: "100%" }}
                                      >
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
            </div>
          </div>
        </div>
        <Card.Body>
          <Card.Title style={{ fontSize: "14px", fontWeight: "bold" }}>
            Name
          </Card.Title>
          <input
            type='text'
            className='slider_Input_Define'
            placeholder='Enter Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Card.Text style={{ fontSize: "14px" }}>Description</Card.Text>
          <textarea
            rows='4'
            cols='50'
            className='slider_Input_Define'
            name='comment'
            form='usrform'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <Card.Title style={{ fontSize: "14px", fontWeight: "bold" }}>
            Oid
          </Card.Title>
          <input
            type='number'
            className='slider_Input_Define'
            placeholder='Enter Id'
            value={oid}
            onChange={(e) => setOid(e.target.value)}
          />
          <Button
            variant='primary'
            style={{
              fontSize: "10px",
              marginTop: "10px",
              width: "200px",
              padding: "10px",
            }}
            onClick={(e) =>  Upload(e)}
          >
            ADD
          </Button>
        </Card.Body>
      </Card>
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
export default SliderCard;
