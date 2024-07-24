import React, { useState, useEffect } from "react";
import Tournaments from "../../domains/Tournaments/Tournaments";
import CommonSign from "../../containers/Layout/CommonSign/CommonSign";
import Gallery from "../../domains/HomePage/Gallery/Gallery";
import TournamentCommonCard from "../../domains/TournamentCard/TournamentCommonCard";
import Carousel from "react-bootstrap/Carousel";
import { apiHandler } from "../../assets/api";
import { endpoint } from "../../assets/api/endpoint";
import { Link, useHistory } from "react-router-dom";
import "./Style.css";
import NoticeModal from "../AdminDashboard/NoticeModal/NoticeModal";
import sliders1 from "../../assets/Static/sliders1.jpg";
import sliders2A from "../../assets/Static/sliders2A.jpg";
import sliders3 from "../../assets/Static/sliders3.jpg";
import sliders4b from "../../assets/Static/sliders4b.jpg";
import sliders5 from "../../assets/Static/sliders5.jpg";
import sliders6 from "../../assets/Static/sliders6.jpg";
import Customer from "../Customer/Customer";
import "bootstrap/dist/css/bootstrap.min.css";

function Ccarousal() {
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

  useEffect(() => {
    GetHomepage();
  }, []);
  const GetHomepage = async () => {
    const result = await apiHandler({
      url: endpoint.Slider_GET,
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
        // let sliderList = result.data.Sliders.sort((a, b) =>
        //   a.orderNo > b.orderNo ? 1 : -1
        // );
        setRawData(result.data);
      }
    }
  };

  return (
    <>
      <div className='width_60_media'>
        <div className='slideshow'>
          <Carousel
          //  className='carousel-fade'
          >
            {rawData &&
              rawData.map((item) => (
                <Carousel.Item>
                  <TournamentCommonCard
                    // HomeImage={sliders1}
                    HomeImage={item && item.image ? item.image : null}
                    Subtitles={item.name}
                    CardTexts={item.description}
                    stadium='Talkatora Stadium Delhi'
                  />
                </Carousel.Item>
              ))}
          </Carousel>
        </div>
        <Customer />
        <Tournaments />
        <CommonSign />
      </div>
      <Gallery />

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
}
export default Ccarousal;
