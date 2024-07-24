import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import "./EditProfile.css";
import { CgProfile } from "react-icons/cg";
import ReactRoundedImage from "react-rounded-image";
import logo1 from "../../assets/images/logo1.jpeg";
import { BsGenderMale } from "react-icons/bs";
import { BiFemaleSign } from "react-icons/bi";
import { Link, useHistory } from "react-router-dom";
import { endpoint } from "../../../src/assets/api/endpoint";
import { apiHandler } from "../../../src/assets/api";
import NoticeModal from "../AdminDashboard/NoticeModal/NoticeModal";
const EditProfile = () => {
  const history = useHistory();
  const [rawData, setRawData] = useState([]);
  const [noticeModal, setNoticeModal] = useState(false);
  const [noticeModalErrMsg, setNoticeModalErrMsg] = useState("");
  const [noticeModalHeaderMsg, setNoticeModalHeaderMsg] = useState("");



  const closeNoticeModal = () => {
    setNoticeModal(false);
    setNoticeModalErrMsg("");
    setNoticeModalHeaderMsg("");
  };
  const editProfile = () => {
    history.push("/editprofile");
  };
  useEffect(() => {
    GetProfile();
  }, []);
  const GetProfile = async () => {
    const result = await apiHandler({
      url: endpoint.PROFILE,
      method: "GET",
      data: null,
    });
    if (result.data.status === 200) {
      if (result.data.length === 0) {
        setNoticeModalHeaderMsg("Error");
        setNoticeModalErrMsg("No Record Found");
        setNoticeModal(true);
      } else {
        console.log(result.data);
        setRawData(result.data);
      }
    } else {
      setNoticeModalHeaderMsg("Error");
      setNoticeModalErrMsg(result.data.message);
      setNoticeModal(true);
    }
  };
  return (
    <div className='editcontainer width_60_media'>
      <Container className='editcontainer'>
        <pre></pre>
        <div className='fixedposition'>
          <Row>
            <Col className='editprofilemenu responsivefont ' xs='6'>
              {" "}
              <CgProfile className='editprofileicon' /> My Profile{" "}
            </Col>
            <Col
              className='editprofilemenu flexrightitem responsivefont'
              xs='6'
            >
              {" "}
              <CgProfile className='editprofileicon' /> My Darto{" "}
            </Col>
          </Row>
        </div>
        <br />
        <Row>
          <Col className='editalignleft flexitems'>
            <ReactRoundedImage
              className='responsiveimage'
              image={logo1}
              roundedSize='5'
              imageWidth='100'
              imageHeight='100'
            />{" "}
            <button className='editprofilebtnn'>Remove</button>{" "}
            <button className='editprofilebtnn'>Upload</button>
          </Col>
          <br />
        </Row>
        <Row>
          <Col className='editprofilemenu'></Col>
        </Row>
        <Row>
          <Col className='editalignleft flexitems'>
            <pre></pre>
            <button className='category'>
              {" "}
              <BsGenderMale /> Male
            </button>{" "}
            <button className='category'>
              {" "}
              <BiFemaleSign /> Female
            </button>{" "}
            <button className='category'>Others</button>
          </Col>
          <pre></pre>
        </Row>
        <Row>
          <Col xs='4'></Col>
        </Row>
      </Container>
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
export default EditProfile;
