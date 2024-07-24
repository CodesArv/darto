
import React, { useState, useEffect } from "react";
import "./Team.css";

import Styles from "../../../themes/Styles.css";
import TeamCommonCard from "../TeamCommonCard/TeamCommonCard";
import TeamCommonCard2 from "../TeamCommonCard2/TeamCommonCard2";
import { apiHandler } from "../../../assets/api";
import { endpoint } from "../../../assets/api/endpoint";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NoticeModal from "../../../components/AdminDashboard/NoticeModal/NoticeModal";

const Team = ({ rawDataTeam }) => {
    const history = useHistory();
    const { id } = useSelector((state) => state.login.userData);
    const [rawData, setRawData] = useState([]);
    const [noticeModal, setNoticeModal] = useState(false);
    const [noticeModalErrMsg, setNoticeModalErrMsg] = useState("");
    const [noticeModalHeaderMsg, setNoticeModalHeaderMsg] = useState("");

    // const { authToken } = useSelector((state) => state.login.authData);

    const closeNoticeModal = () => {
        setNoticeModal(false);
        setNoticeModalErrMsg("");
        setNoticeModalHeaderMsg("");
    };
    // const editProfile =()=>{

    //  history.push('');
    // }

    return (
        <>
            <div>
                {rawDataTeam && rawDataTeam.length < 1 && (
                    <>
                        <div
                            style={{
                                fontSize: "large",
                                margin: "22px",
                                textAlign: "center",
                            }}
                        >
                            You have not joined Any Team{" "}
                        </div>
                    </>
                )}
                {rawDataTeam &&
                    rawDataTeam.map((item) => (
                        <>
                            <TeamCommonCard
                                TeamAdmin="Admin"
                                teamClub={(item && item.image) || ""}
                                TeamName={(item && item.nameofTeam) || ""}
                                TotalMember={(item && item.totalMembers) || ""}
                                location={(item && item.state) || ""}
                                Member={item.Member}
                            />
                        </>
                    ))}
                {/* {rawDataTeam &&
                    rawDataTeam.map((item) => (
                        <>
                            <TeamCommonCard2
                                ClubImg={(item && item.image) || ""}
                                TeamNames={(item && item.nameofTeam) || ""}
                                TotalMembers={(item && item.totalMembers) || ""}
                                location={(item && item.state) || ""}
                            />
                        </>
                    ))} */}

                {/* <TeamCommonCard2   TotalMember={item.TotalMember2} location={item.location2} Member={item.Member2}/> */}
            </div>

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

export default Team;
