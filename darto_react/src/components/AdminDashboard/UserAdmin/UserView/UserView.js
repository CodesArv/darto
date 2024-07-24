import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Container, Row, Col, Form } from "react-bootstrap";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "./UserView.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddUserData from "../AddUserData/AddUserData";
import EditUser from "../EditUserData/EditUser";
import { Modal } from "react-bootstrap";
import { apiHandler } from "../../../../assets/api";
import { endpoint } from "../../../../assets/api/endpoint";
import { useHistory } from "react-router";
import SearchInput from "../../CustomInput/SearchInput";
import NoticeModal from "../../NoticeModal/NoticeModal";
import MaterialIcon from "react-google-material-icons";
const AddUserModal = ({ onHide, ...props }) => {
  const onclose = () => {
    onHide();
  };
  return (
    <Modal
      style={{ height: "100vh" }}
      {...props}
      // size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        onClick={() => onclose()}
        style={{ position: "relative", height: 29 }}
      >
        <span style={{ right: 10, position: "absolute" }}>
          <MaterialIcon
            color="var(--token-2a633678-f86b-4ab5-94be-ee4f65254cde, rgb(150, 168, 182)) "
            icon="close"
            stretch={true}
          />
        </span>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{ height: "113vh", backgroundColor: "rgb(16, 20, 44)" }}
      >
        <AddUserData onHide={onHide} />
      </Modal.Body>
    </Modal>
  );
};
const EditUserModal = ({
  userrecord,
  editable,
  updateUserRecord,
  onHide,
  ...myprops
}) => {
  const onclose = () => {
    onHide();
  };
  return (
    <Modal
      style={{ height: "100vh" }}
      {...myprops}
      // size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        onClick={() => onclose()}
        style={{ position: "relative", height: 29 }}
      >
        <span style={{ right: 10, position: "absolute" }}>
          <MaterialIcon
            color="var(--token-2a633678-f86b-4ab5-94be-ee4f65254cde, rgb(150, 168, 182)) "
            icon="close"
            stretch={true}
          />
        </span>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{ height: "100vh", backgroundColor: "rgb(16, 20, 44)" }}
      >
        <EditUser
          userrecord={userrecord}
          editable={editable}
          updateUserRecord={updateUserRecord}
          onHide={onHide}
        />
      </Modal.Body>
    </Modal>
  );
};
const UserView = (id) => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [userrecord, setuserRecord] = React.useState(null);

  const history = useHistory();
  const [rawData, setRawData] = useState({});
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
    GetUserData();
  }, []);

  const GetUserData = async () => {
    const result = await apiHandler({
      url: endpoint.GET_ADMIN,
      method: "GET",
      data: null,
    });
    console.log(result.data);

    setRawData(result.data);
    //let obj= {...setRawData}
  };

  const editUser = async (id) => {
    const res = await apiHandler({
      url: endpoint.GETBYID_ADMIN + id,
      method: "GET",
      data: null,
    });
    console.log(res.data);
    setuserRecord(res.data.result);
    setShowEditModal(true);
  };

  const onDelete = async (id) => {
    const result = await apiHandler({
      url: endpoint.DELETE_ADMIN + id,
      method: "DELETE",
    });
    if (result.data.status === 200) {
      console.log(result.data);
      setNoticeModalHeaderMsg("sucess");
      setNoticeModalErrMsg(result.data.message);
      setNoticeModal(true);
      GetUserData();
    } else {
      setNoticeModalHeaderMsg("Error");
      setNoticeModalErrMsg(result.data.message);
      setNoticeModal(true);
    }
    // console.log(result.data);
    // alert("Deleted");
    GetUserData();
  };
  const updateUser = async (updatedUserRecord) => {
    const result = await apiHandler({
      url: endpoint.UPDATE_ADMIN + updatedUserRecord._id,
      method: "PUT",
      data: updatedUserRecord,
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
      setShowEditModal(false);
      GetUserData();
    }
    // console.log(result.data);
    // setShowEditModal(false);
    // GetUserData();
  };
  const closeModalAdd = () => {
    setShowAddModal(false);
  };
  const closeModalEdit = () => {
    setShowEditModal(false);
  };

  return (
    <>
      <div className="stake-back" style={{ marginTop: "20px" }}>
        <div className="stake-back1">
          <span className="update-opt">Admin</span>
        </div>
        <div className="darto-logo5">
          <button className="darto-l2" onClick={() => setShowAddModal(true)}>
            ADD
          </button>
        </div>
      </div>
      <div
        class="container"
        style={{ boxShadow: "0 0 10px gray", marginTop: "50px" }}
      >
        <div>
          <SearchInput name="Search" type="text" placeholder="Search" />
        </div>

        <>
          <Table responsive striped className="Tabletournament">
            <thead>
              <tr>
                <th>id</th>

                <th>First Name</th>
                <th>Last Name</th>
                <th>Email Id</th>
                <th>Mobile Number</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {rawData &&
                rawData.result &&
                rawData.result.map((item) => (
                  <tr>
                    <td>{item.id}</td>

                    <td>{(item && item.firstName) || ""}</td>
                    <td>{(item && item.lastName) || ""}</td>
                    <td>{(item && item.userName) || ""}</td>
                    <td>{(item && item.mobileNumber) || ""}</td>
                    {/* <td >{item.role}</td> */}
                    <td>
                      <span>
                        <EditIcon
                          style={{ fontSize: "2.5rem" }}
                          onClick={() => editUser(item._id)}
                        />{" "}
                      </span>
                      <span>
                        <DeleteIcon
                          onClick={() => onDelete(item._id)}
                          style={{ fontSize: "2.5rem" }}
                        />
                      </span>{" "}
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </>
      </div>
      {showAddModal && (
        <AddUserModal show={showAddModal} onHide={() => closeModalAdd()} />
      )}
      {showEditModal && (
        <EditUserModal
          show={showEditModal}
          updateUserRecord={updateUser}
          onHide={() => closeModalEdit()}
          editable={false}
          userrecord={userrecord}
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
export default UserView;
