import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Container } from "react-bootstrap";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Modal } from "react-bootstrap";
import MaterialIcon from "react-google-material-icons";

import SearchInput from "../../CustomInput/SearchInput";
import NoticeModal from "../../NoticeModal/NoticeModal";
import EditUser from "../editUser/EditUser";
import { apiHandler } from "../../../../assets/api";
import { endpoint } from "../../../../assets/api/endpoint";

function EditAllUser({ onHide, record, updateRecord, ...props }) {
  const onclose = () => {
    onHide();
  };
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        onClick={() => onclose()}
        style={{ position: "relative", height: 29 }}
      >
        <span style={{ right: 10, position: "absolute" }}>
          <MaterialIcon
            color="var(--token-2a633678-f86b-4ab5-94be-ee4f65254cde, rgb(150, 168, 182))"
            icon="close"
            stretch={true}
          />
        </span>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "#10142c" }}>
        <EditUser onHide={onHide} record={record} updateRecord={updateRecord} />
      </Modal.Body>
    </Modal>
  );
}

const TableUser = () => {
  const [editmodalShow, setEditModalShow] = useState(false);
  const [noticeModal, setNoticeModal] = useState(false);
  const [noticeModalErrMsg, setNoticeModalErrMsg] = useState("");
  const [noticeModalHeaderMsg, setNoticeModalHeaderMsg] = useState("");
  const [record, setRecord] = useState({});
  const [rawData, setRawData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    GetUser();
  }, []);

  useEffect(() => {
    handleFilter();
  }, [search, rawData]);

  const GetUser = async () => {
    const result = await apiHandler({
      url: endpoint.GET_USER,
      method: "GET",
      data: null,
    });
    setRawData(result.data.users || []);
  };

  const EditUser = async (id) => {
    const res = await apiHandler({
      url: endpoint.GETBYID_USER + id,
      method: "GET",
      data: null,
    });
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
    } else {
      setNoticeModalHeaderMsg("Success");
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

    setEditModalShow(false);
    GetUser();
  };

  const handleFilter = () => {
    const filtered = rawData.filter(item =>
      Object.values(item).some(value =>
        (value ?? "").toString().toLowerCase().includes(search.toLowerCase())
      )
    );
    setFilteredData(filtered);
  };

  const columns = [
    { name: 'ID', selector: row => row.id, sortable: true },
    { name: 'First Name', selector: row => row.firstName, sortable: true },
    { name: 'Last Name', selector: row => row.lastName, sortable: true },
    { name: 'Email', selector: row => row.email, sortable: true },
    { name: 'Mobile Number', selector: row => row.mobileNumber, sortable: true },
    {
      name: 'Action',
      cell: row => (
        <>
          <EditIcon
            style={{ fontSize: "2.5rem", marginRight: "0.5rem", cursor: "pointer" }}
            onClick={() => EditUser(row.id)}
          />
          <DeleteIcon
            style={{ fontSize: "2.5rem", cursor: "pointer" }}
            onClick={() => onDelete(row.id)}
          />
        </>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    }
  ];

  return (
    <>
      <div className="stake-back" style={{ marginTop: "0px" }}>
        <div className="stake-back1">
          <span className="update-opt">User</span>
        </div>
      </div>
      <Container fluid style={{ boxShadow: "0 0 10px gray", marginTop: "20px" }}>
        <SearchInput
          name="Search" 
          type="text"
          placeholder="Search"
          onChange={e => setSearch(e.target.value)}
          style={{float: "right" }} 
        />
        {/* vcdvdvvd */}
        {/* <div className="te xt-end"><input type="text"  onChange={e => setSearch(e.target.value)}/></div> */}
        <DataTable
          columns={columns}
          data={filteredData}
          pagination
          fixedHeader
          fixedHeaderScrollHeight="400px"
          highlightOnHover
          responsive
        />
      </Container>
      {editmodalShow && (
        <EditAllUser
          updateRecord={updateUser}
          show={editmodalShow}
          onHide={() => setEditModalShow(false)}
          record={record}
        />
      )}
      {noticeModal && (
        <NoticeModal
          noticeModal={noticeModal}
          noticeModalHeader={noticeModalHeaderMsg}
          noticeModalErrMsg={noticeModalErrMsg}
          closeModal={() => {
            setNoticeModal(false);
            setNoticeModalErrMsg("");
            setNoticeModalHeaderMsg("");
          }}
        />
      )}
    </>
  );
};

export default TableUser;
