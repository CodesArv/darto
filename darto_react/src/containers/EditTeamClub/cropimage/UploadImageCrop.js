import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";
import Cropper from "react-easy-crop";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { getOrientation } from "get-orientation/browser";
import ImgDialog from "./ImgDialog";
import { getCroppedImg, getRotatedImage } from "./canvasUtils";
import { styles } from "./styles";
//import { apiHandler } from "../../../../assets/api";
import { apiHandler } from "../../../assets/api";
import { endpoint } from "../../../assets/api/endpoint";
// import NoticeModal from "../../";
import NoticeModal from "../../../components/AdminDashboard/NoticeModal/NoticeModal";
const ORIENTATION_TO_ANGLE = {
  3: 180,
  6: 90,
  8: -90,
};

const UploadImageCrop = ({ classes, image,
    type }) => {
    const [imageSrc, setImageSrc] = React.useState(null);
    const [fileName, setFileName] = React.useState("");
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [rotation, setRotation] = useState(0);
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    const [Attachment, setAttachment] = useState(null);
    const [croppedImage, setCroppedImage] = useState(null);
    const [noticeModal, setNoticeModal] = useState(false);
    const [noticeModalErrMsg, setNoticeModalErrMsg] = useState("");

    const [noticeModalHeaderMsg, setNoticeModalHeaderMsg] = useState("");

    const closeNoticeModal = () => {
        setNoticeModal(false);
        setNoticeModalErrMsg("");
        setNoticeModalHeaderMsg("");
    };
    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels);
    }, []);

    const showCroppedImage = useCallback(async () => {
        try {
            const croppedImage = await getCroppedImg(
                imageSrc,
                croppedAreaPixels,
                rotation
            );
            console.log("donee", { croppedImage });
            setCroppedImage(croppedImage);
        } catch (e) {
            console.error(e);
        }
    }, [imageSrc, croppedAreaPixels, rotation]);

    const onClose = useCallback(() => {
        setCroppedImage(null);
    }, []);

    const onFileChange = async (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            let imageDataUrl = await readFile(file);
            console.log("imageDataUrl ", imageDataUrl, file);

            // apply rotation if needed
            const orientation = await getOrientation(file);
            const rotation = ORIENTATION_TO_ANGLE[orientation];
            if (rotation) {
                imageDataUrl = await getRotatedImage(imageDataUrl, rotation);
            }

            setImageSrc(imageDataUrl);
            setFileName(file.name);
        }
    };
    //UPLOAD_IMAGE

    const Upload = async () => {
        if (imageSrc) {
            const blob = await fetch(imageSrc).then((res) => res.blob());
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
                showCroppedImage(uploadedPath.name);
                image(url);
                 

            }
        } else {
            showCroppedImage("");
        }

        // history.push("/teamadmin");
    };
    return (
        <div>
            {imageSrc ? (
                <React.Fragment>
                    <div style={{ paddingTop: "400px" }}>
                        <Cropper
                            image={imageSrc}
                            crop={crop}
                            rotation={rotation}
                            zoom={zoom}
                            aspect={16 / 9}
                            onCropChange={setCrop}
                            onRotationChange={setRotation}
                            onCropComplete={onCropComplete}
                            onZoomChange={setZoom}
                        />
                    </div>
                    <div style={{ paddingTop: "px" }}>
                        <div>
                            <Typography
                                variant="overline"
                                style={{ fontSize: "16px" }}
                            >
                                Zoom
                            </Typography>
                            <Slider
                                value={zoom}
                                min={1}
                                max={3}
                                step={0.1}
                                aria-labelledby="Zoom"
                                // classes={{ root: classes.slider }}
                                onChange={(e, zoom) => setZoom(zoom)}
                            />
                        </div>
                        <div>
                            <Typography
                                variant="overline"
                                // classes={{ root: classes.sliderLabel }}
                                style={{ fontSize: "16px" }}
                            >
                                Rotation
                            </Typography>
                            <Slider
                                value={rotation}
                                min={0}
                                max={360}
                                step={1}
                                aria-labelledby="Rotation"
                                // classes={{ root: classes.slider }}
                                onChange={(e, rotation) =>
                                    setRotation(rotation)
                                }
                            />
                        </div>
                        <Button
                            onClick={() => Upload()}
                            variant="contained"
                            color="primary"
                            style={{ fontSize: "16px" }}
                            // classes={{ root: classes.cropButton }}
                        >
                            Show Result
                        </Button>
                    </div>
                    {/* <ImgDialog img={croppedImage} onClose={onClose} /> */}
                </React.Fragment>
            ) : (
                <input type="file" onChange={onFileChange} accept="image/*" />
            )}
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

function readFile(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result), false);
    reader.readAsDataURL(file);
  });
}

export default UploadImageCrop;
