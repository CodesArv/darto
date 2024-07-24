import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import BlockIcon from "@mui/icons-material/Block";
import SearchInput from "../../CustomInput/SearchInput";
import Modal from "react-bootstrap/Modal";
import MaterialIcon from "react-google-material-icons";
import FooterAdd from "../FooterAdd/FooterAdd";
import EditFooter from "../EditFooter/EditFooter";
import ModalHeader from "react-bootstrap/ModalHeader";
import { Link, useHistory } from "react-router-dom";
import { apiHandler } from "../../../../assets/api";
import { endpoint } from "../../../../assets/api/endpoint";
import NoticeModal from "../../NoticeModal/NoticeModal";
const MyFooterAdd = ({ onHide, ...props }) => {
  const history = useHistory();
  const onclose = () => {
    onHide();
  };
  return (
    <Modal
      {...props}
      onHide={onHide}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header
        // closeButton
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
        <Modal.Title
          id='contained-modal-title-vcenter'
          style={{ fontSize: "16px", color: "white" }}
        >
          Footer
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "#10142c" }}>
        <FooterAdd onHide={onHide} />
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
};
const MyFooterEdit = ({ onHide, editable, record, updateRecord, ...props }) => {
  const onclose = () => {
    onHide();
  };
  return (
    <Modal
      {...props}
      size='lg'
      // border="none"
      // onClick={() => onclose()}
      style={{ position: "relative" }}
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header
        // closeButton
        style={{ fontSize: "16px", backgroundColor: "#10142c", border: "none" }}
      >
        <span
          style={{ right: 10, position: "absolute" }}
          onClick={() => onclose()}
        >
          <MaterialIcon
            color='var(--token-2a633678-f86b-4ab5-94be-ee4f65254cde, rgb(150, 168, 182)) '
            icon='close'
            stretch={true}
          />
        </span>
        <Modal.Title
          id='contained-modal-title-vcenter'
          style={{ fontSize: "16px", color: "white" }}
        >
          Footer
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "#10142c" }}>
        <EditFooter
          record={record}
          editable={editable}
          updateRecord={updateRecord}
          onHide={onHide}
        />
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
};
const FooterTable = () => {
  const [search, setSearch] = React.useState("");
  const [modalAddShow, setModalAddShow] = React.useState(false);
  const [modalEditShow, setModalEditShow] = React.useState(false);
  const [rawDatafooter, setRawDatafooter] = useState([]);
  const [filteredFooterData, setFilteredFooterData] = useState([]);
  const [footerRecors, setFooterRecord] = useState([]);
  useEffect(() => {
    GetFooter();
  }, []);
  const GetFooter = async () => {
    const result = await apiHandler({
      url: endpoint.GET_FOOTER,
      method: "GET",
      data: null,
    });
    // console.log(result.data);
    setRawDatafooter(result.data);
  };
  const onDelete = async (id) => {
    const result = await apiHandler({
      url: endpoint.DELETE_FOOTER + id,
      method: "DELETE",
    });
    alert("Deleted");
    // if (result.data.status === 200) {
    //   console.log(result.data);
    //   setNoticeModalHeaderMsg("sucess");
    //   setNoticeModalErrMsg(result.data.message);
    //   setNoticeModal(true);
    //   GetTeamData();
    // } else {
    //   setNoticeModalHeaderMsg("Error");
    //   setNoticeModalErrMsg(result.data.message);
    //   setNoticeModal(true);
    // }
  };
  const closeModalEdit = () => {
    setModalEditShow(false);
  };
  const onSearchChange = (val) => {
    // console.log(event.target.value, rawData);
    const filteredData = rawDatafooter.res.filter((row) => {
      return (
        row.category.toLowerCase().includes(val.toLowerCase()) ||
        row.type.toLowerCase().includes(val.toLowerCase())
        // row.email.toLowerCase().includes(val.toLowerCase())
      );
    });
    // console.log(filteredData, rawData);
    setFilteredFooterData(filteredData);
  };
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  const onEdit = async (id) => {
    const res = await apiHandler({
      url: endpoint.GETBYID_FOOTER + id,
      method: "GET",
      data: null,
    });
    // console.log(res.data.response);
    setFooterRecord(res.data.response);
    setModalEditShow(true);
  };
  const onUpdate = async (updateRecord) => {
    const result = await apiHandler({
      url: endpoint.UPDATE_FOOTER + updateRecord.id,
      method: "PUT",
      data: updateRecord,
    });
    // console.log(result);
  };
  const GetLink = (item) => {
    return (
      <Link to={item} style={{ cursor: "pointer" }}>
        {item}
      </Link>
    );
  };

  return (
    <>
      <div className='stake-back' style={{ marginTop: "20px" }}>
        <div className='stake-back1'>
          <span className='update-opt'>Footer</span>
        </div>
        <div className='darto-logo5'>
          <button className='darto-l2' onClick={() => setModalAddShow(true)}>
            ADD
          </button>
        </div>
      </div>
      <div
        class='container'
        style={{ boxShadow: "0 0 10px gray", marginTop: "50px" }}
      >
        <div>
          <SearchInput
            name='Search'
            type='text'
            placeholder='Search'
            onChange={onSearchChange}
          />
        </div>

        <>
          <Table responsive className='Tabletournament'>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Category</th>
                <th>Name</th>
                <th>Url</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {rawDatafooter &&
                rawDatafooter.eventFooter &&
                rawDatafooter.eventFooter.map((item, index) => (
                  <>
                    <tr>
                      <td>{index + 1 || ""}</td>
                      <td>{(item && item.category) || ""}</td>
                      <td>{(item && item.name) || ""}</td>
                      <td>{GetLink(item.url)}</td>

                      <td>
                        <span>
                          <EditIcon
                            onClick={() => onEdit(item.id)}
                            className='editfontsize'
                            style={{ fontSize: "2.5rem", marginLeft: "10px" }}
                          />{" "}
                        </span>
                        <span>
                          <DeleteIcon
                            onClick={() => onDelete(item.id)}
                            className='editfontsize'
                            style={{ fontSize: "2.5rem", marginLeft: "10px" }}
                          />
                        </span>{" "}
                      </td>
                    </tr>
                  </>
                ))}
            </tbody>
          </Table>
        </>
      </div>
      <MyFooterAdd show={modalAddShow} onHide={() => setModalAddShow(false)} />
      <MyFooterEdit
        show={modalEditShow}
        updateRecord={onUpdate}
        onHide={() => setModalEditShow(false)}
        editable={false}
        record={footerRecors}
      />
      {/* {noticeModal && (
          <NoticeModal
            noticeModal={noticeModal}
            noticeModalHeader={noticeModalHeaderMsg}
            noticeModalErrMsg={noticeModalErrMsg}
            closeModal={closeNoticeModal}
          />
        )} */}
    </>
  );
};
export default FooterTable;
