import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Container, Row, Col, Form } from "react-bootstrap";
import { AiOutlineArrowLeft } from "react-icons/ai";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { Modal, Button } from "react-bootstrap";

import { useHistory } from "react-router";
import SearchInput from "../../CustomInput/SearchInput";
import NoticeModal from "../../NoticeModal/NoticeModal";
import AddUser from "../addUser/AddUser";
import EditUser from "../editUser/EditUser";
import { apiHandler } from "../../../../assets/api";
import { endpoint } from "../../../../assets/api/endpoint";
import MaterialIcon from "react-google-material-icons";

function EditAllUser({ onHide, record, updateRecord, ...props }) {
  const onclose = () => {
    onHide();
  };
  return (
    <Modal
      {...props}
      size='md'
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
      <Modal.Body style={{ backgroundColor: " #10142c" }}>
        <EditUser onHide={onHide} record={record} updateRecord={updateRecord} />
      </Modal.Body>
    </Modal>
  );
}

const TableUser = (id) => {
  const [addmodalShow, setAddModalShow] = React.useState(false);
  const [editmodalShow, setEditModalShow] = React.useState(false);
  const [noticeModal, setNoticeModal] = useState(false);
  const [noticeModalErrMsg, setNoticeModalErrMsg] = useState("");
  const [noticeModalHeaderMsg, setNoticeModalHeaderMsg] = useState("");
  const [record, setRecord] = useState({});
  const [rawData, setRawData] = useState({});
   const closeNoticeModal = () => {
       setNoticeModal(false);
       setNoticeModalErrMsg("");
       setNoticeModalHeaderMsg("");
   };
  useEffect(() => {
    GetUser();
  }, []);

  const GetUser = async () => {
    const result = await apiHandler({
      url: endpoint.GET_USER,
      method: "GET",
      data: null,
    });
    console.log(result.data);
    setRawData(result.data);
  };
  const EditUser = async (id) => {
    const res = await apiHandler({
      url: endpoint.GETBYID_USER + id,
      method: "GET",
      data: null,
    });
    console.log(res.data.response);
    setRecord(res.data.response);
    setEditModalShow(true);
  };
  const onDelete = async (id) => {
      const result = await apiHandler({
          url: endpoint.DELETE_USER + id,
          method: "DELETE",
      });

      if (result.data.status === 500) {
        setNoticeModalHeaderMsg("Error");
        setNoticeModalErrMsg(result.data.message);
        setNoticeModal(true);
      } else  {
          console.log(result.data);
        setNoticeModalHeaderMsg("Sucess");
        setNoticeModalErrMsg(result.data.message);
        setNoticeModal(true);
        GetUser();
      }

  };
  const updateUser = async (updatedRecord) => {
    const result = await apiHandler({
      url: endpoint.UPDATE_USER + updatedRecord.id,
      method: "PUT",
      data: updatedRecord,
    });

    console.log(result.data);
    setEditModalShow(false);
  };
  const closeedituser = () => {
    setEditModalShow(false);
    GetUser();
  };
  return (
      <>
          <div className="stake-back" style={{ marginTop: "20px" }}>
              <div className="stake-back1">
                  <span className="update-opt">User</span>
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
                              <th>Email</th>
                              <th>Mobile Number</th>
                              <th>Action</th>
                          </tr>
                      </thead>
                      <tbody>
                          {rawData &&
                              rawData.users &&
                              rawData.users.map((item, index) => (
                                  <tr>
                                      <td>{item.id}</td>
                                      <td>{(item && item?.firstName) || ""}</td>
                                      <td>{(item && item.lastName) || ""}</td>
                                      <td>{(item && item.email) || ""}</td>
                                      <td>
                                          {(item && item.mobileNumber) || ""}
                                      </td>
                                      <td>
                                          <span>
                                              <EditIcon
                                                  style={{ fontSize: "2.5rem" }}
                                                  onClick={() =>
                                                      EditUser(item.id)
                                                  }
                                              />{" "}
                                          </span>
                                          <span>
                                              <DeleteIcon
                                                  onClick={() =>
                                                      onDelete(item.id)
                                                  }
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
          {editmodalShow && (
              <EditAllUser
                  updateRecord={updateUser}
                  show={editmodalShow}
                  onHide={() => closeedituser()}
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
export default TableUser;
