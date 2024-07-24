import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Container, Row, Col, Form } from "react-bootstrap";
import { AiOutlineArrowLeft } from "react-icons/ai";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import StateBoardAdd from "../stateBoardAdd/stateBoardAdd";

import { Modal, Button } from "react-bootstrap";

import { useHistory } from "react-router";
import SearchInput from "../../CustomInput/SearchInput";
import StateBoardEdit from "../stateBoardEdit/stateBoardEdit";
import { apiHandler } from "../../../../assets/api";
import { endpoint } from "../../../../assets/api/endpoint";
function AddState(props) {
  return (
    <Modal
      {...props}
      size='md'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: " #10142c" }}>
        <StateBoardAdd />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
function EditState({ onHide, updateRecord, record, ...props }) {
  const onHides = () => {
    onHide();
  };
  return (
    <Modal
      {...props}
      size='md'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: " #10142c" }}>
        <StateBoardEdit
          record={record}
          updateRecord={updateRecord}
          onHide={onHide}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => onHides()}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}



const StateBoardTable = (id) => {
  const [addmodalShow, setAddModalShow] = React.useState(false);
  const [editmodalShow, setEditModalShow] = React.useState(false);
  const history = useHistory();
  const [rawData, setRawData] = useState({});
  const [record, setRecord] = React.useState(null);
  useEffect(() => {
    GetStateData();
  }, []);

  const GetStateData = async () => {
    const result = await apiHandler({
      url: endpoint.GET_BOARD,
      method: "GET",
      data: null,
    });
    // console.log(result.data);
    // if (result.data.status === 500) {
    //   setNoticeModalHeaderMsg("Error");
    //   setNoticeModalErrMsg(result.data.message);
    //   setNoticeModal(true);
    // } else if (result.data.length === 0) {
    //   setNoticeModalHeaderMsg("Error");
    //   setNoticeModalErrMsg("Please Provide data");
    //   setNoticeModal(true);
    // }

    setRawData(result.data);
    //let obj= {...setRawData}
  };
  const onDelete = async (id) => {
    const result = await apiHandler({
      url: endpoint.DELETE_BOARD + id,
      method: "DELETE",
    });
    // if (result.data.status === 200) {
    //   console.log(result.data);
    //   setNoticeModalHeaderMsg("sucess");
    //   setNoticeModalErrMsg(result.data.message);
    //   setNoticeModal(true);
    //   GetCafeBarData();
    // } else {
    //   setNoticeModalHeaderMsg("Error");
    //   setNoticeModalErrMsg(result.data.message);
    //   setNoticeModal(true);
    // }
    // console.log(result.data);
    alert("Deleted");
    GetStateData();
  };
  const updateState = async (updatedRecord) => {
    const result = await apiHandler({
      url: endpoint.UPDATE_BOARD + updatedRecord.id,
      method: "PUT",
      data: updatedRecord,
    });
    // console.log(result.data);
    // setModalShows(false);
    // GetCafeBarData();
  };
  const onEdit = async (item) => {
    const result = await apiHandler({
      url: endpoint.GETBYID_BOARD + item,
      method: "GET",
      data: null,
    });
    console.log(result.data);
    setRecord(result.data.response);
    // setModalShows(false)
    setEditModalShow(true);
  };
  const onCloseModal = () => {
    setEditModalShow(false);
    GetStateData();
  };
  return (
    <>
      <div className='stake-back' style={{ marginTop: "20px" }}>
        <div className='stake-back1'>
          <span className='update-opt'>State Board</span>
        </div>
        <div className='darto-logo5'>
          <button className='darto-l2' onClick={() => setAddModalShow(true)}>
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
                <th>id</th>

                <th> Name</th>
                <th>Email</th>
                <th>Country</th>
                <th>State</th>
                <th>City/Area</th>
                <th>Pincode</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {rawData &&
                rawData.boards &&
                rawData.boards.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.country}</td>
                    <td>{item.state}</td>
                    <td>{item.city}</td>
                    <td>{item.pincode}</td>

                    <td>
                      <span>
                        <EditIcon
                          style={{ fontSize: "2.5rem" }}
                          onClick={() => onEdit(item.id)}
                        />{" "}
                      </span>
                      <span>
                        <DeleteIcon
                          onClick={() => onDelete(item.id)}
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
      <AddState show={addmodalShow} onHide={() => setAddModalShow(false)} />
      <EditState
        show={editmodalShow}
        onHide={() => onCloseModal()}
        updateRecord={updateState}
        record={record}
      />
    </>
  );
};
export default StateBoardTable;
