import React, { useState, useEffect } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col,
  Row,
  Container,
} from "reactstrap";
import "./DartoArena.css";
import details from "../DartoArena/Card1/details.jpg";
import { BiStopwatch } from "react-icons/bi";
import { MdTrain } from "react-icons/md";
import { FcShare } from "react-icons/fc";
import { AiOutlineArrowRight } from "react-icons/ai";
import { apiHandler } from "../../assets/api";
import { endpoint } from "../../assets/api/endpoint";
import { Link, useHistory } from "react-router-dom";
import Card1 from "./Card1/Card1";
import NoticeModal from "../../components/AdminDashboard/NoticeModal/NoticeModal";
const DartoArena = () => {
  const history = useHistory();
  const [rawData, setRawData] = useState([]);
  const [record, setRecord] = useState({});
  const [noticeModal, setNoticeModal] = useState(false);
  const [noticeModalErrMsg, setNoticeModalErrMsg] = useState("");
  const [noticeModalHeaderMsg, setNoticeModalHeaderMsg] = useState("");
  // const { authToken } = useSelector((state) => state.login.authData);
  const closeNoticeModal = () => {
    setNoticeModal(false);
    setNoticeModalErrMsg("");
    setNoticeModalHeaderMsg("");
  };
  useEffect(() => {
    GetDartoArena();
  }, []);
  const GetDartoArena = async () => {
    const result = await apiHandler({
      url: endpoint.GET_CENTERS,
      method: "GET",
      data: null,
    });
    if (result.data.status === 404) {
      setNoticeModalHeaderMsg("Error");
      setNoticeModalErrMsg(result.data.message);
      setNoticeModal(true);
    } else {
      if (result.data.length === 0) {
        setNoticeModalHeaderMsg("Error");
        setNoticeModalErrMsg("No Record Found");
        setNoticeModal(true);
      } else {
        console.log(result.data);
        setRawData(result.data);
      }
    }
  };
  const GetArena = (id) => {
    history.push("/arena/" + id);
  };
  const formatTime = () => {
    //const date =  rawData.result.overView.WorkingHours;
    const date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? (hours < 10 ? "0" + hours : hours) : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return hours + ":" + minutes + " " + ampm;
  };
  return (
    <div className='row'>
      {rawData &&
        rawData.centers &&
        rawData.centers.map((item) => (
          <div className='col-md-auto col-lg-6'>
            <Card1
              img={item?.image}
              Subtitle={(item && item.name) || ""}
              // KmAway={item.overView.KmAway}
              Coworking={(item && item.description) || ""}
              Address={(item && item.locality) || ""}
              recordArena={item.id}
              GetArena={GetArena}
              // WorkingHours={
              //   (item && item.overView && item.overView.WorkingHours) || ""
              // }
              // MetroConnectivity={
              //   (item && item.overView && item.overView.mertoConnectivity) || ""
              // }
              FromWorkingHours={
                item && item.FromWorkingHours
                  ? formatTime(item && item.FromWorkingHours)
                  : ""
              }
              ToWorkingHours={
                item && item.ToWorkingHours
                  ? formatTime(item && item.FromWorkingHours)
                  : ""
              }
              Address1={(item && item.mertoConnectivity) || ""}
              ReserveSpace='RESERVE DARTO SPACE'
            />
          </div>
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
  );
};
export default DartoArena;
