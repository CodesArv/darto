import React, { useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { apiHandler } from "../../../../assets/api";
import { endpoint } from "../../../../assets/api/endpoint";
//import NoticeModal from "../../NoticeModal/NoticeModal";
import NoticeModal from "../../../../components/AdminDashboard/NoticeModal/NoticeModal";
import { Modal, Button } from "react-bootstrap";

const Croppers = ({
    setimage,
    type,
    handleClose,
    mincropHeight = 10,
    mincropWidth = 10,
    responsive = true,
}) => {
    const [images, setImage] = useState("");
    const [cropData, setCropData] = useState("#");
    const [cropper, setCropper] = useState("");
    const [fileName, setFileName] = useState("");
    const [close, setClose] = useState(true);
    const [noticeModal, setNoticeModal] = useState(false);
    const [noticeModalErrMsg, setNoticeModalErrMsg] = useState("");
    const [noticeModalHeaderMsg, setNoticeModalHeaderMsg] = useState("");

    const closeNoticeModal = () => {
        setNoticeModal(false);
        setNoticeModalErrMsg("");
        setNoticeModalHeaderMsg("");
    };
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
        // handleShow();
    };

    const getCropData = () => {
        if (typeof cropper !== "undefined") {
            Upload(cropper.getCroppedCanvas().toDataURL());
            //setCropData(cropper.getCroppedCanvas().toDataURL());
        }
    };
    const Upload = async (cropperData) => {
        setCropData(cropperData);
        // if (cropData) {
        const blob = await fetch(cropperData).then((res) => res.blob());
        const formData = new FormData();
        console.log("imageSrc ", blob, fileName);
        formData.append("file", blob, fileName);
        const result = await apiHandler({
            url: endpoint.UPLOAD_IMAGE + "?type=" + type,
            method: "POST",
            data: formData,
        });
        if (result.data.status === 500) {
            setNoticeModalHeaderMsg("Error");
            setNoticeModalErrMsg(result.data.message);
            setNoticeModal(true);
        } else {
            console.log("Resultput - ", result.data);
            setNoticeModalHeaderMsg("Sucess");
            setNoticeModalErrMsg(result.data.message);
            setNoticeModal(true);
            console.log("Upload Reponse -", result.data);
            const uploadedPath = result.data;

            let url = endpoint.BASE_URL_STAGING + uploadedPath.name;
            console.log("url", url);

            // setCropData(uploadedPath.name);
            //showCroppedImage(uploadedPath.name);
            setimage(url);
            setClose(false);
        }
    };

    // history.push("/teamadmin");
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    return (
        <div>
            <div style={{ width: "100%" }}>
                {" "}
                <input type="file" onChange={onChange} />
                <div
                    style={{
                        textAlign: "center",
                        justifyContent: "center",
                    }}
                >
                    <Cropper
                       
                        zoomTo={0.1}
                        initialAspectRatio={1}
                        preview=".img-preview"
                        src={images}
                        viewMode={1}
                        minCropBoxHeight={mincropHeight}
                        minCropBoxWidth={mincropWidth}
                        cropBoxResizable={false}
                        toggleDragModeOnDblclick={false}
                        background={false}
                        //  rotatable={false}
                        // rotate={(90),(-90)}
                        responsive={responsive}
                        autoCropArea={1}
                        checkOrientation={false}
                        onInitialized={(instance) => {
                            setCropper(instance);
                        }}
                        guides={true}
                    />

                    {/* <Modal
                        show={show}
                        onHide={handleClose}
                        style={{
                            width: "",
                            height: "100vh",
                            fontSize: "16px",
                        }}
                    >
                        <Modal.Header closeButton className="image_modal1">
                            <Modal.Title className="image_modal1">
                                Upload Images
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{ width: "", height: "100%" }}>
                            <Cropper
                                // style={{ height: 400, width: "100%" }}
                                zoomTo={0.1}
                                initialAspectRatio={1}
                                preview=".img-preview"
                                src={images}
                                viewMode={1}
                                minCropBoxHeight={mincropHeight}
                                minCropBoxWidth={mincropWidth}
                                cropBoxResizable={false}
                                toggleDragModeOnDblclick={false}
                                background={false}
                                //  rotatable={false}
                                // rotate={(90),(-90)}
                                responsive={responsive}
                                autoCropArea={1}
                                checkOrientation={false}
                                onInitialized={(instance) => {
                                    setCropper(instance);
                                }}
                                guides={true}
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
                            {close && (
                                <Button
                                    variant="primary"
                                    onClick={getCropData}
                                    // onClick={handleClose}
                                    className="image_modal1"
                                >
                                    Save Image
                                </Button>
                            )}
                        </Modal.Footer>
                    </Modal> */}
                </div>
                <div style={{ textAlign: "end" }}>
                    <Button
                        variant="secondary"
                        onClick={handleClose}
                        className="image_modal1"
                    >
                        Close
                    </Button>
                    {close && (
                        <Button
                            variant="primary"
                            onClick={getCropData}
                            // onClick={handleClose}
                            className="image_modal1"
                        >
                            Save Image
                        </Button>
                    )}
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
        </div>
    );
};

export default Croppers;
