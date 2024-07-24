import React, { useState, useEffect } from "react";
import "./Style.css";
import Tournamentcard from "../../components/Tournamentcard/Tournamentcard";
import { apiHandler } from "../../assets/api";
import { endpoint } from "../../assets/api/endpoint";
import { useHistory } from "react-router-dom";
import NoticeModal from "../../components/AdminDashboard/NoticeModal/NoticeModal";
import MaterialIcon from "react-google-material-icons";
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

const Tournaments = () => {
  const history = useHistory();
  const [rawData, setRawData] = useState([]);
  const [record, setRecord] = useState([]);
  const [GetByObj, setGetByObj] = useState({});
  const [noticeModal, setNoticeModal] = useState(false);
  const [noticeModalErrMsg, setNoticeModalErrMsg] = useState("");
  const [noticeModalHeaderMsg, setNoticeModalHeaderMsg] = useState("");
  const closeNoticeModal = () => {
    setNoticeModal(false);
    setNoticeModalErrMsg("");
    setNoticeModalHeaderMsg("");
  };
  useEffect(() => {
    GetTournament();
  }, []);
  const GetTournament = async () => {
    const result = await apiHandler({
      url: endpoint.TOURNAMENT_GETTOURNAMENT,
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

  const GetDetailsTournament = (id) => {
    history.push("/tournament/detail/" + id);
  };
  return (
    <div className='row padding_bottom_nine9 width_60_media'>
      <div className='team_ClubBlock'>
        <div className='logo_With_Content'>
          <span className='logo_Tc_color'>
            <MaterialIcon
              color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) '
              icon='ads_click'
              stretch={true}
              size='16px'
            />{" "}
          </span>{" "}
          <span className='content_Right'>Tournaments & Event </span>
        </div>
      </div>
      {rawData &&
        rawData.tournaments &&
        rawData.tournaments.map((item) => (
          <div className='col-md-auto col-lg-6'>
            <>
              <div>
                <Tournamentcard
                  title={item.name}
                  body={item.description}
                  recordId={item.id}
                  detail={item?.image}
                  fromdate={
                    item && item.fromDate ? formatDate(item.fromDate) : ""
                  }
                  todate={item && item.toDate ? formatDate(item.toDate) : ""}
                  age='18+'
                  profession={(item && item.tournamentType) || ""}
                  status={(item && item.status) || ""}
                  stadium={(item && item.locality) || ""}
                  city={(item && item.city) || ""}
                  district={(item && item.district) || ""}
                  state={(item && item.state) || ""}
                  country={(item && item.country) || ""}
                  pincode={(item && item.pincode) || ""}
                  comingfield={item.comingfeild}
                  GetDetailsTournament={GetDetailsTournament}
                />
              </div>
            </>
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
export default Tournaments;
