import React, { useState, useEffect } from "react";
import "./Gallery.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import CommonGallery from "../CommonGalary/CommonGalary";

import { NavItem } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { apiHandler } from "../../../assets/api";
import { endpoint } from "../../../assets/api/endpoint";
import NoticeModal from "../../../components/AdminDashboard/NoticeModal/NoticeModal";

export const formatDate = (dateObj) => {
  if (dateObj === null || dateObj === "") return null;

  var monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  var date = new Date(dateObj);
  const dateStr =
    date.getDate() +
    " " +
    monthNames[date.getMonth()] +
    " " +
    date.getFullYear();
  return dateStr;
};

export const parseDate = (weekDate) => {
  if (weekDate === null || weekDate === "") return null;

  let dateObj = new Date(weekDate);

  var month =
    (dateObj.getMonth() + 1 < 10 ? "0" : "") + (dateObj.getMonth() + 1);
  var date = (dateObj.getDate() < 10 ? "0" : "") + dateObj.getDate();
  return dateObj.getFullYear() + "-" + month + "-" + date;
};

const Gallery = () => {
  const history = useHistory();
  const [rawData, setRawData] = useState([]);
  const [rawDataClub, setRawDataClub] = useState([]);
  const [noticeModal, setNoticeModal] = useState(false);
  const [noticeModalErrMsg, setNoticeModalErrMsg] = useState("");
  const [noticeModalHeaderMsg, setNoticeModalHeaderMsg] = useState("");

  const closeNoticeModal = () => {
    setNoticeModal(false);
    setNoticeModalErrMsg("");
    setNoticeModalHeaderMsg("");
  };

  useEffect(() => {
    GetGallery();
  }, []);
  const GetGallery = async () => {
    const result = await apiHandler({
      url: endpoint.GET_EVENTGALLERY,
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
        setNoticeModalErrMsg("Please Provide data");
        setNoticeModal(true);
      } else {
        console.log(result.data);
        setRawData(result.data);
      }
    }
  };
  return (
    <>
      <div className='width_60_media padding-10px-left-to-right'>
        <h1 className='txtcolor7'> Events Gallery</h1>
        <div className=' row'>
          {rawData &&
            rawData.EventGallerys &&
            rawData.EventGallerys.map((item, index) => (
              <>
                {index < 4 && (
                  <>
                    <div className='col-6 '>
                      <CommonGallery
                        eventImg={item.image}
                        CardTexts={item.name}
                        // Carttexts1={item && item.date}
                        Carttexts1={
                          item && item.date ? parseDate(item.date) : ""
                        }
                        session={item && item.year}
                        // description={item && item.description}
                      />
                    </div>
                  </>
                )}
              </>
            ))}
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
    </>
  );
};
export default Gallery;
