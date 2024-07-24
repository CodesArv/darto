import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Container, Row, Col, Form } from "react-bootstrap";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "./TeamView.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddTeamAdmin from "../AddTeamAdmin/AddTeamAdmin";
import EditTeamAdmin from "../EditTeamAdmin/EditTeamAdmin";
import { Modal } from "react-bootstrap";
import { apiHandler } from "../../../../assets/api";
import { endpoint } from "../../../../assets/api/endpoint";
import { useHistory } from "react-router";
import SearchInput from "../../CustomInput/SearchInput";
import NoticeModal from "../../NoticeModal/NoticeModal";
import BlockIcon from "@mui/icons-material/Block";
import MaterialIcon from "react-google-material-icons";
const AddTeamModal = ({ onHideAdd, ...props }) => {
  const onclose = () => {
    onHideAdd();
  };
  return (
    <Modal
      style={{ height: "100%" }}
      {...props}
      // size="lg"
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header
        onClick={() => onclose()}
        style={{ position: "relative", height: 29 }}
      >
        <span style={{ right: 10, position: "absolute" }}>
          <MaterialIcon
            color='var(--token-2a633678-f86b-4ab5-94be-ee4f65254cde, rgb(150, 168, 182)) '
            icon='close'
            stretch={true}
          />
        </span>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ height: "100%", backgroundColor: "black" }}>
        <AddTeamAdmin onHideAdd={onHideAdd} />
      </Modal.Body>
    </Modal>
  );
};
const EditTeamModal = ({
  editrecord,
  editable,
  updateEditRecord,
  onHide,
  ...myprops
}) => {
  const onclose = () => {
    onHide();
  };
  return (
    <Modal
      style={{ height: "100%" }}
      {...myprops}
      // size="lg"
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header
        onClick={() => onclose()}
        style={{ position: "relative", height: 29 }}
      >
        <span style={{ right: 10, position: "absolute" }}>
          <MaterialIcon
            color='var(--token-2a633678-f86b-4ab5-94be-ee4f65254cde, rgb(150, 168, 182)) '
            icon='close'
            stretch={true}
          />
        </span>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ height: "100%", backgroundColor: "black" }}>
        <EditTeamAdmin
          editrecord={editrecord}
          editable={editable}
          updateEditRecord={updateEditRecord}
          onHide={onHide}
        />
      </Modal.Body>
    </Modal>
  );
};
const TeamView = (id) => {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShows, setModalShows] = React.useState(false);
  const [editrecord, seteditRecord] = React.useState(null);
  const history = useHistory();
  const [ageList, setAgeList] = useState([]);
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
  // const editProfile = () => {
  //   history.push("/mydartoedit");
  // };

  useEffect(() => {
    GetTeamData();
  }, []);

  const GetTeamData = async () => {
    const resAge = await apiHandler({
      url: endpoint.GET_USER_AGE,
      method: "GET",
    });
    if (resAge.data.status === 500) {
      setNoticeModalHeaderMsg("Error");
      setNoticeModalErrMsg(resAge.data.message);
      setNoticeModal(true);
    } else if (resAge.data.length === 0) {
      setNoticeModalHeaderMsg("Error");
      setNoticeModalErrMsg("Please Provide data");
      setNoticeModal(true);
    } else {
      console.log(resAge.data.ageGroup);
      setAgeList(resAge.data.ageGroup);
    }
    const resp = await apiHandler({
      url: endpoint.GET_Admin_TEAMS,
      method: "GET",
    });
    if (resp.data.status === 500) {
      setNoticeModalHeaderMsg("Error");
      setNoticeModalErrMsg(resp.data.message);
      setNoticeModal(true);
    } else if (resp.data.length === 0) {
      setNoticeModalHeaderMsg("Error");
      setNoticeModalErrMsg("Please Provide data");
      setNoticeModal(true);
    } else {
      console.log(resp.data.TeamAdmins);
      let teamData = resp.data.TeamAdmins.sort((a, b) =>
          a.nameofTeam > b.nameofTeam ? 1 : -1
      );
      setRawData(teamData);
    }
    //let obj= {...setRawData}
  };

  const editTeam = async (id) => {
    const res = await apiHandler({
      url: endpoint.GETBYID_Admin_TEAM + id,
      method: "GET",
      data: null,
    });
    console.log(res.data.response);
    seteditRecord(res.data.response);
    setModalShows(true);
  };

  const onDelete = async (id) => {
    const result = await apiHandler({
      url: endpoint.DELETE_Admin_TEAM + id,
      method: "DELETE",
    });
    if (result.data.status === 200) {
      console.log(result.data);
      setNoticeModalHeaderMsg("sucess");
      setNoticeModalErrMsg(result.data.message);
      setNoticeModal(true);
      GetTeamData();
    } else {
      setNoticeModalHeaderMsg("Error");
      setNoticeModalErrMsg(result.data.message);
      setNoticeModal(true);
    }
  };
  const updateTeam = async (updateEditRecord) => {
    const result = await apiHandler({
      url: endpoint.UPDATE_Admin_TEAM + updateEditRecord.id,
      method: "PUT",
      data: updateEditRecord,
    });
    if (result.data.status === 500) {
      setNoticeModalHeaderMsg("Error");
      setNoticeModalErrMsg(result.data.message);
      setNoticeModal(true);
    }
    //noticeModal
    else {
      console.log(result.data);
      setNoticeModalHeaderMsg("Sucess");
      setNoticeModalErrMsg("updated");
      setNoticeModal(true);
      setModalShows(false);
      GetTeamData();
    }
  };
  const closeModalAdd = () => {
    setModalShow(false);
  };
  const closeModalEdit = () => {
    setModalShows(false);
  };
  const getAge = (age) => {
    const filterAge = ageList.filter((obj) => age === obj._id);
    if (filterAge.length > 0) {
      return filterAge[0].age;
    } else return " ";
  };
  return (
    <>
      <div className='stake-back' style={{ marginTop: "20px" }}>
        <div className='stake-back1'>
          <span className='update-opt'>Team</span>
        </div>
        <div className='darto-logo5'>
          <button className='darto-l2' onClick={() => setModalShow(true)}>
            ADD
          </button>
        </div>
      </div>
      <div
        class='container'
        style={{ boxShadow: "0 0 10px gray", marginTop: "50px" }}
      >
        <div>
          <SearchInput name='Search' type='text' placeholder='Search' />
        </div>

        <>
          <Table responsive className='Tabletournament'>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Age Group</th>
                <th>Team Name</th>
                <th>Team Member</th>
                <th>Name Option</th>
                <th>Address</th>
                <th>State</th>
                <th>District</th>
                <th>Area</th>
                <th>Occupition</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {rawData &&
                rawData.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    {/* <td>{getAge(item.age)}</td> */}
                    <td></td>
                    <td>{(item && item.nameofTeam) || ""}</td>
                    <td>{(item && item.totalMembers) || ""}</td>
                    <td>{(item && item.nameOccupationInstitution) || ""}</td>
                    <td>{(item && item.locality) || ""}</td>
                    <td>{(item && item.state) || ""}</td>
                    <td>{(item && item.district) || ""}</td>
                    <td>{(item && item.street) || ""}</td>
                    <td>{(item && item.occupation) || ""}</td>

                    <td>
                      <td>
                        <span>
                          <BlockIcon
                            className='editfontsize'
                            style={{ fontSize: "2.5rem" }}
                          />
                          {"  "}
                        </span>
                      </td>
                      <td>
                        <span>
                          <EditIcon
                            className='editfontsize'
                            style={{ fontSize: "2.5rem", marginLeft: "10px" }}
                            onClick={() => editTeam(item.id)}
                          />{" "}
                        </span>
                      </td>
                      <td>
                        <span>
                          <DeleteIcon
                            className='editfontsize'
                            style={{ fontSize: "2.5rem", marginLeft: "10px" }}
                            onClick={() => onDelete(item.id)}
                          />
                        </span>{" "}
                      </td>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </>
      </div>
      {modalShow && (
        <AddTeamModal show={modalShow} onHideAdd={() => closeModalAdd()} />
      )}
      {modalShows && (
        <EditTeamModal
          show={modalShows}
          updateEditRecord={updateTeam}
          onHide={() => closeModalEdit(false)}
          editable={false}
          editrecord={editrecord}
        />
      )}
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
export default TeamView;
