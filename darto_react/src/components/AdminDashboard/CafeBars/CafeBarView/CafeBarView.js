import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Container, Row, Col, Form } from "react-bootstrap";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "./CafeBarView.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCafeBar from "../AddCafeBars/AddCafeBar";
import EditCafeBar from "../EditCafeBar/EditCafeBar";
import { Modal } from "react-bootstrap";
import { apiHandler } from "../../../../assets/api";
import { endpoint } from "../../../../assets/api/endpoint";
import { useHistory } from "react-router";
import SearchInput from "../../CustomInput/SearchInput";
import BlockIcon from "@mui/icons-material/Block";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import NoticeModal from "../../NoticeModal/NoticeModal";
import MaterialIcon from "react-google-material-icons";
const AddCafeBarModal = ({ onHide, ...props }) => {
  const onclose = () => {
    onHide();
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
      <Modal.Body
        style={{ height: "100%", backgroundColor: "rgb(16, 20, 44)" }}
      >
        <AddCafeBar onHide={onHide} />
      </Modal.Body>
    </Modal>
  );
};
const EditCafeBarModal = ({
  record,
  editable,
  updateRecord,
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
      <Modal.Body
        style={{ height: "100%", backgroundColor: "rgb(16, 20, 44)" }}
      >
        <EditCafeBar
          record={record}
          editable={editable}
          updateRecord={updateRecord}
          onHide={onHide}
        />
      </Modal.Body>
    </Modal>
  );
};
const CafeBarView = (id) => {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShows, setModalShows] = React.useState(false);
  const [record, setRecord] = React.useState(null);

  const history = useHistory();
  const [rawData, setRawData] = useState({});
  const [noticeModal, setNoticeModal] = useState(false);
  const [noticeModalErrMsg, setNoticeModalErrMsg] = useState("");
  const [noticeModalHeaderMsg, setNoticeModalHeaderMsg] = useState("");
 
  const closeNoticeModal = () => {
    setNoticeModal(false);
    setNoticeModalErrMsg("");
    setNoticeModalHeaderMsg("");
  };
  useEffect(() => {
    GetCafeBarData();
  }, []);

  const GetCafeBarData = async () => {
    const result = await apiHandler({
      url: endpoint.GETADMIN_CENTER,
      method: "GET",
      data: null,
    });
    // console.log(result.data);
    if (result.data.status === 500) {
      setNoticeModalHeaderMsg("Error");
      setNoticeModalErrMsg(result.data.message);
      setNoticeModal(true);
    } else if (result.data.length === 0) {
      setNoticeModalHeaderMsg("Error");
      setNoticeModalErrMsg("Please Provide data");
      setNoticeModal(true);
    }

    setRawData(result.data);
    //let obj= {...setRawData}
  };

  const EditCafeBar = async (id) => {
    const res = await apiHandler({
      url: endpoint.GETBYID_ADMIN_CENTER + id,
      method: "GET",
      data: null,
    });
    // console.log(res.data.response);
    setRecord(res.data.response);
    setModalShows(true);
  };

  const onDelete = async (id) => {
    const result = await apiHandler({
      url: endpoint.DELETE_ADMIN_CENTER + id,
      method: "DELETE",
    });
    if (result.data.status === 200) {
      // console.log(result.data);
      setNoticeModalHeaderMsg("sucess");
      setNoticeModalErrMsg(result.data.message);
      setNoticeModal(true);
      GetCafeBarData();
    } else {
      setNoticeModalHeaderMsg("Error");
      setNoticeModalErrMsg(result.data.message);
      setNoticeModal(true);
    }
    // console.log(result.data);
    // alert("Deleted");
    GetCafeBarData();
  };
  const updateCafeBar = async (updatedRecord) => {
    const result = await apiHandler({
      url: endpoint.UPDATE_ADMIN_CENTER + updatedRecord.id,
      method: "PUT",
      data: updatedRecord,
    });
    // console.log(result.data);
    // setModalShows(false);
    // GetCafeBarData();
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
      setModalShows(false);
      GetCafeBarData();
    }
  };
  const closeModalAdd = () => {
    setModalShow(false);
  };
  const closeModalEdit = () => {
    setModalShows(false);
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
    <>
      <div className='stake-back' style={{ marginTop: "20px" }}>
        <div className='stake-back1'>
          <span className='update-opt'>Center and Cafe&Bar</span>
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
          <Table responsive striped className='Tabletournament'>
            <thead>
              <tr>
                <th>S.No.</th>

                <th>Name</th>
                <th>Description</th>
                {/* <th>Status</th> */}
                <th>Area</th>
                <th>WorkingHours</th>
                <th>F&BOffers</th>
                <th>MetroConnectivity</th>
                <th>BookingCharges</th>
                <th>ContactNumber</th>
                <th>Address</th>

                <th>About</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {rawData &&
                rawData.CentersAdmins &&
                rawData.CentersAdmins.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{(item && item.name) || ""}</td>
                    <td>{(item && item.description) || ""}</td>
                    {/* <td >{item && item.status || ""}</td> */}
                    <td>{(item && item.locality) || ""}</td>
                    <td>
                      {item && item.WorkingHours
                        ? formatTime(item.WorkingHours)
                        : ""}
                    </td>
                    <td>{(item && item.FandBOthers) || ""}</td>
                    <td>{(item && item.mertoConnectivity) || ""}</td>
                    <td>{(item && item.bookingCharges) || ""}</td>
                    <td>{(item && item.mobilenumber) || ""}</td>
                    {/* <td>city</td>
                    <td>state</td>
                    <td>district</td>
                    <td>PinCode</td>
                    <td>Country</td> */}
                    <td>{item && item.locality}</td>
                    <td>null</td>

                    <td>
                      <span>
                        <BlockIcon
                          className='editfontsize'
                          style={{ fontSize: "2.5rem" }}
                        />
                      </span>
                      <span>
                        <EditIcon
                          onClick={() => EditCafeBar(item.id)}
                          style={{ fontSize: "2.5rem", marginLeft: "10px" }}
                        />{" "}
                      </span>
                      <span>
                        <DeleteIcon
                          onClick={() => onDelete(item.id)}
                          style={{ fontSize: "2.5rem", marginLeft: "10px" }}
                        />
                      </span>{" "}
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </>
      </div>
      {modalShow && (
        <AddCafeBarModal show={modalShow} onHide={() => closeModalAdd()} />
      )}
      {modalShows && (
        <EditCafeBarModal
          show={modalShows}
          updateRecord={updateCafeBar}
          onHide={() => closeModalEdit()}
          editable={false}
          record={record}
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
export default CafeBarView;
