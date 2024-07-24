import React, { useState, useEffect } from "react";
import "../Team/Team.css";

import { Link, useHistory } from "react-router-dom";
import ClubCommonCard from "./ClubCommonCard2/ClubCommonCard";
// import TeamCommonCard2 from "../TeamCommonCard2/TeamCommonCard2";
import ClubCard3 from "./ClubCard3/ClubCard3";
import { apiHandler } from "../../../assets/api";
import { endpoint } from "../../../assets/api/endpoint";
import { useDispatch, useSelector } from "react-redux";
import NoticeModal from "../../../components/AdminDashboard/NoticeModal/NoticeModal";
const MyClub = ({ rawDataClub }) => {
    const history = useHistory();
    const [rawData, setRawData] = useState([]);
    const { id } = useSelector((state) => state.login.userData);
    const [noticeModal, setNoticeModal] = useState(false);
    const [noticeModalErrMsg, setNoticeModalErrMsg] = useState("");
    const [noticeModalHeaderMsg, setNoticeModalHeaderMsg] = useState("");

    // const { authToken } = useSelector((state) => state.login.authData);

    const closeNoticeModal = () => {
        setNoticeModal(false);
        setNoticeModalErrMsg("");
        setNoticeModalHeaderMsg("");
    };

    return (
        <>
            {rawDataClub && rawDataClub.length < 1 && (
                <>
                    <div
                        style={{
                            fontSize: "large",
                            margin: "22px",
                            textAlign: "center",
                        }}
                    >
                        You have not joined Any club
                    </div>
                </>
            )}
            {rawDataClub &&
                rawDataClub.map((item) => (
                    <>
                        <ClubCommonCard
                            ClubAdd="Admin"
                            imgClub={(item && item.image) || ""}
                            ClubName={item.nameofclub}
                            Admin="Admin"
                            // TotalMemberClub={item.clubMembers}
                            locationClub={(item && item.state) || ""}
                            MemberClub="5+"
                        />
                    </>
                ))}

            {/* {rawDataClub &&
                rawDataClub.map((item) => (
                    <>
                        <ClubCard3
                            ClubImg={(item && item.image) || ""}
                            TeamName=""
                            ClubName={item.nameofclub}
                            // TotalMember={item.clubMembers}
                            location={(item && item.state) || ""}
                            Member="5+"
                        />
                    </>
                ))} */}

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

export default MyClub;
