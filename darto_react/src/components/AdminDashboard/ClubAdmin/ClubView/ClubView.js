import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Container, Row, Col, Form } from "react-bootstrap";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "./ClubView.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddClubData from "../AddClubData/AddClubData";
import EditClubData from "../EditClubData/EditClubData";
import { Modal } from "react-bootstrap";
import { apiHandler } from "../../../../assets/api";
import { endpoint } from "../../../../assets/api/endpoint";
import { useHistory } from "react-router";
import SearchInput from "../../CustomInput/SearchInput";
import BlockIcon from "@mui/icons-material/Block";
import NoticeModal from "../../NoticeModal/NoticeModal";
import MaterialIcon from "react-google-material-icons";
const AddClubModal = ({ onHide, ...props }) => {
  const onclose = () => {
    onHide();
  };
  return (
    <Modal
      {...props}
      // size="lg"
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header
        onClick={() => onclose()}
        style={{ position: "relative", height: 29, backgroundColor: "#7890a1" }}
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
      <Modal.Body style={{ backgroundColor: "rgb(16, 20, 44)" }}>
        <AddClubData onHide={onHide} />
      </Modal.Body>
    </Modal>
  );
};
const EditClubModal = ({
  clubrecord,
  editable,
  updateclubRecord,
  onHide,
  ...myprops
}) => {
  const onclose = () => {
    onHide();
  };
  return (
    <Modal
      {...myprops}
      // size="lg"

      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header
        onClick={() => onclose()}
        style={{ position: "relative", height: 29, backgroundColor: "#7890a1" }}
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
      <Modal.Body style={{ backgroundColor: "rgb(16, 20, 44)" }}>
        <EditClubData
          clubrecord={clubrecord}
          editable={editable}
          onHide={onHide}
          updateclubRecord={updateclubRecord}
        />
      </Modal.Body>
    </Modal>
  );
};
const ClubView = (id) => {
  const [showclubModal, setShowclubModal] = useState(false);
  const [showEditClubModal, setShowEditClubModal] = useState(false);
  const [clubrecord, setclubRecord] = React.useState(null);

  const history = useHistory();
  const [rawData, setRawData] = useState([]);
  const [noticeModal, setNoticeModal] = useState(false);
  const [noticeModalErrMsg, setNoticeModalErrMsg] = useState("");
  const [noticeModalHeaderMsg, setNoticeModalHeaderMsg] = useState("");
  // const editProfile = () => {
  //   history.push("/mydartoedit");
  // };
  const closeNoticeModal = () => {
    setNoticeModal(false);
    setNoticeModalErrMsg("");
    setNoticeModalHeaderMsg("");
  };

  useEffect(() => {
    GetClubData();
  }, []);

  const GetClubData = async () => {
    const result = await apiHandler({
      url: endpoint.GET_CLUB,
      method: "GET",
      data: null,
    });

    //let obj= {...setRawData}
    if (result.data.status === 404) {
      setNoticeModalHeaderMsg("Error");
      setNoticeModalErrMsg(result.data.message);
      setNoticeModal(true);
    } else if (result.data.length === 0) {
      setNoticeModalHeaderMsg("Error");
      setNoticeModalErrMsg("Please Provide data");
      setNoticeModal(true);
    } else {
      // console.log(result.data.clubs);
      let clubData = result.data.clubs.sort((a, b) =>
        a.nameofclub > b.nameofclub ? 1 : -1
      );
      setRawData(clubData);
    }
  };

  const editClub = async (id) => {
    const res = await apiHandler({
      url: endpoint.GETBYID_CLUB + id,
      method: "GET",
      data: null,
    });
    // console.log(res.data.response);
    setclubRecord(res.data.response);
    setShowEditClubModal(true);
  };

  const onDelete = async (id) => {
    const result = await apiHandler({
      url: endpoint.DELETE_ADMIN_CLUB + id,
      method: "DELETE",
    });
    if (result.data.status === 200) {
      // console.log(result.data);
      setNoticeModalHeaderMsg("sucess");
      setNoticeModalErrMsg(result.data.message);
      setNoticeModal(true);
      GetClubData();
    } else {
      setNoticeModalHeaderMsg("Error");
      setNoticeModalErrMsg(result.data.message);
      setNoticeModal(true);
    }
    
    GetClubData();
  };
  const updateClub = async (updatedclubRecord) => {
    const result = await apiHandler({
      url: endpoint.UPDATE_CLUB + updatedclubRecord.id,
      method: "PUT",
      data: updatedclubRecord,
    });
    // console.log(result.data);
    setShowEditClubModal(false);
    GetClubData();

    if (result.data.status === 500) {
      setNoticeModalHeaderMsg("Error");
      setNoticeModalErrMsg(result.data.message);
      setNoticeModal(true);
    }
    //noticeModal
    else {
      // console.log(result.data);
      setNoticeModalHeaderMsg("Sucess");
      setNoticeModalErrMsg("updated");
      setNoticeModal(true);
      setShowEditClubModal(false);
      GetClubData();
    }
  };
  const closeModalAdd = () => {
    setShowclubModal(false);
  };
  const closeModalEdit = () => {
    setShowEditClubModal(false);
  };
  //notice modal

  return (
    <>
      <div className='stake-back' style={{ marginTop: "20px" }}>
        <div className='stake-back1'>
          <span className='update-opt'>Club</span>
        </div>
        <div className='darto-logo5'>
          <button className='darto-l2' onClick={() => setShowclubModal(true)}>
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
          <Table responsive striped className='Tabletournament'>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Club Name</th>
                <th>Club Member</th>
                <th>Tag Name</th>
                <th>Address</th>
                <th>State</th>
                <th>District</th>
                <th>Area</th>
                <th>Occupition</th>
                <th>PinCode</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {rawData &&
                rawData.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{(item && item.nameofclub) || ""}</td>
                    <td>{(item && item.clubMembers) || ""}</td>
                    <td>{(item && item.tagsName) || ""}</td>
                    {/* <td >{item && item.nameofclub || ""}</td> */}
                    <td>{(item && item.locality) || ""}</td>
                    <td>{(item && item.state) || ""}</td>
                    <td>{(item && item.district) || ""}</td>
                    <td>{(item && item.city) || ""}</td>

                    <td>{(item && item.occupation) || ""}</td>
                    <td>{(item && item.pincode) || ""}</td>
                    <td>
                      <span>
                        <BlockIcon
                          className='editfontsize'
                          style={{ fontSize: "2.5rem" }}
                        />
                      </span>
                      <span>
                        <EditIcon
                          className='editfontsize'
                          style={{
                            fontSize: "2.5rem",
                            marginLeft: "10px",
                          }}
                          onClick={() => editClub(item.id)}
                        />{" "}
                      </span>
                      <span>
                        <DeleteIcon
                          className='editfontsize'
                          style={{
                            fontSize: "2.5rem",
                            marginLeft: "10px",
                          }}
                          onClick={() => onDelete(item.id)}
                        />
                      </span>{" "}
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </>
      </div>
      {showclubModal && (
        <AddClubModal show={showclubModal} onHide={() => closeModalAdd()} />
      )}
      {showEditClubModal && (
        <EditClubModal
          show={showEditClubModal}
          updateclubRecord={updateClub}
          onHide={() => closeModalEdit()}
          editable={false}
          clubrecord={clubrecord}
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
export default ClubView;
