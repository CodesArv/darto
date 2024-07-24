import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Container, Row, Col, Form } from "react-bootstrap";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Select from "react-select";
import "./TournamentView.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddAdminData from "../AddAdminData/AddAdminData";
import EditTournamentData from "../EditTournamentData/EditTournamentData";
import { Modal, Button } from "react-bootstrap";
import { apiHandler } from "../../../../assets/api";
import { endpoint } from "../../../../assets/api/endpoint";
import { useHistory } from "react-router";
import SearchInput from "../../CustomInput/SearchInput";
import BlockIcon from "@mui/icons-material/Block";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import SelectAsync from "../TournamentView/SelectAsync";
import { Input } from "reactstrap";
import NoticeModal from "../../NoticeModal/NoticeModal";
import MaterialIcon from "react-google-material-icons";
export const formatDate = (dateObj) => {
  if (dateObj === null || dateObj === "") return null;

  var monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  var date = new Date(dateObj);
  const dateStr =
    date.getDate() +
    " " +
    monthNames[date.getMonth()] +
    " " +
    date.getFullYear();
  return dateStr;
};

export const parseDate = (weekDate) => {
  if (weekDate === null || weekDate === "") return null;

  let dateObj = new Date(weekDate);

  var month =
    (dateObj.getMonth() + 1 < 10 ? "0" : "") + (dateObj.getMonth() + 1);
  var date = (dateObj.getDate() < 10 ? "0" : "") + dateObj.getDate();
  return dateObj.getFullYear() + "-" + month + "-" + date;
};

const AddAdminModal = ({ onHide, ...props }) => {
  const onclose = () => {
    onHide();
  };
  return (
    <Modal
      style={{ fullWidth: "true" }}
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
      </Modal.Header>
      <Modal.Body style={{ padding: "0px" }}>
        <AddAdminData onHide={onHide} />
      </Modal.Body>
    </Modal>
  );
};

const EditTournamentModal = ({
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
      closeButton
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
      </Modal.Header>
      <Modal.Body>
        <EditTournamentData
          record={record}
          editable={editable}
          updateRecord={updateRecord}
          onHide={onHide}
        />
      </Modal.Body>
    </Modal>
  );
};
const TableView = (id) => {
  const [searchItem, setSearchItem] = useState("");
  const options = [
    { value: "The Crownlands" },
    { value: "Iron Islands" },
    { value: "The North" },
    { value: "The Reach" },
    { value: "The Riverlands" },
    { value: "The Vale" },
    { value: "The Westerlands" },
    { value: "The Stormlands" },
  ];
  const [region, setRegion] = useState(options[0]);
  const [currentTeam, setCurrentTeam] = useState(null);
  const onchangeSelect = (item) => {
    setCurrentTeam(null);
    setRegion(item);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showAdminModal, setShowAdminModal] = useState(false);
  const [showTournamentModal, setShowTournamentModal] = useState(false);
  const [record, setRecord] = React.useState(null);

  const history = useHistory();
  const [rawData, setRawData] = useState({});
  const [filteredTournamnetData, setFilteredTournamnetData] = useState([]);
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
    GetTournamentData();
  }, []);

  const GetTournamentData = async () => {
    const result = await apiHandler({
      url: endpoint.TOURNAMENT_GETTOURNAMENTADMIN,
      method: "GET",
      data: null,
    });
    console.log(result.data);
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
    setFilteredTournamnetData(result.data);
  };

  const editTournament = async (id) => {
    const res = await apiHandler({
      url: endpoint.TOURNAMENT_GETTOURNAMENTADMINBYID + id,
      method: "GET",
      data: null,
    });
    console.log(res.data);
    setRecord(res.data.response);
    setShowTournamentModal(true);
  };

  const onDelete = async (id) => {
    const result = await apiHandler({
      url: endpoint.TOURNAMENT_DELETETOURNAMENTADMINBYID + id,
      method: "DELETE",
    });
    if (result.data.status === 200) {
      console.log(result.data);
      setNoticeModalHeaderMsg("sucess");
      setNoticeModalErrMsg(result.data.message);
      setNoticeModal(true);
      GetTournamentData();
    } else {
      setNoticeModalHeaderMsg("Error");
      setNoticeModalErrMsg(result.data.message);
      setNoticeModal(true);
    }
    // console.log(result.data);
    // alert("Deleted");
    GetTournamentData();
  };
  const updateTrournament = async (updatedRecord) => {
    const result = await apiHandler({
      url: endpoint.TORNAMENT_UPDATETOURNAMENTADMINBYID + updatedRecord.id,
      method: "PUT",
      data: updatedRecord,
    });
    console.log(result.data);
    setShowTournamentModal(false);
    GetTournamentData();

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
      setShowTournamentModal(false);
      GetTournamentData();
    }
  };
  const closeModalAdd = () => {
    setShowAdminModal(false);
  };
  const closeModalEdit = () => {
    setShowTournamentModal(false);
  };

  const onSearchChange = (val) => {
    // console.log(event.target.value, rawData);
    const filteredData = rawData.result.filter((row) => {
      return (
        row.name.toLowerCase().includes(val.toLowerCase()) ||
        row.description.toLowerCase().includes(val.toLowerCase())
        // row.email.toLowerCase().includes(val.toLowerCase())
      );
    });
    // console.log(filteredData, rawData);
    setFilteredTournamnetData(filteredData);
  };
  const getMobileNumber = (input) => {
    input = input.replace(/^(\d{0,4})(\d{0,3})/, "$1 $2");
    var prefix = input.substr(0, input.length - 4);
    var suffix = input.substr(-4);
    var masked = prefix.replace(/\d/g, "X");
    var a = suffix + masked;
    return a;
  };
  return (
    <>
      <div className='stake-back' style={{ marginTop: "20px" }}>
        {/* <Button variant="primary" >
        Launch demo modal
      </Button> */}

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton style={{ fontSize: "16px" }}>
            <Modal.Title style={{ fontSize: "16px" }}>Listing</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='score-display'>
              <p>Number of participant: </p>
            </div>
            <div className='score-display score-dis-flex'>
              <div>
                <p className='p-margin-top'>Select Team Count: </p>
              </div>
              <div className='float-right'>
                {/* <select  placeholder="" className="score-dis-flex1"
          // value={clubMembers}
          //   onChange={(e) => setClubMembers(e.target.value)}
        >
  <option value="Club Member">Club Member</option>
  <option value="10 member10 member">10 member</option>
  <option value="10 member">20 member</option>
  <option value="10 member">30 member</option>
</select> */}
                <Select
                  value={region}
                  onChange={onchangeSelect}
                  options={options}
                  getOptionValue={(option) => option.value}
                  getOptionLabel={(option) => option.value}
                />
              </div>
            </div>
            <div className='score-display score-dis-flex'>
              <div>
                <p className='p-margin-top'>Select Team Winner Count: </p>
              </div>
              <div>
                <SelectAsync
                  regionName={region.value}
                  value={currentTeam}
                  onChange={(country) => setCurrentTeam(country)}
                />
              </div>
            </div>
            <h1 className='score-display1'>Draw</h1>
            <div className='score-display score-dis-flex'>
              <div>
                <p className='p-margin-top'>Team A: </p>
              </div>
              <div>
                <Select
                  placeholder='Select Team Name'
                  // value={clubMembers}
                  //   onChange={(e) => setClubMembers(e.target.value)}
                >
                  <option value='Club Member'>Club Member</option>
                  <option value='10 member10 member'>10 member</option>
                  <option value='10 member'>20 member</option>
                  <option value='10 member'>30 member</option>
                </Select>
              </div>
            </div>

            <div className='listing-tournament'>
              <a href='#' class='previous'>
                &laquo; Previous
              </a>
              <a href='#' class='next'>
                Next &raquo;
              </a>
            </div>
          </Modal.Body>
        </Modal>

        <div className='stake-back1'>
          <span className='update-opt'>Tournament & Event</span>
        </div>
        <div className='darto-logo5'>
          <button className='darto-l2' onClick={() => setShowAdminModal(true)}>
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
            id='Search'
            name='Search'
            type='text'
            placeholder='search'
            onChange={(event) => onSearchChange(event.target.value)}
          />
        </div>

        <>
          <Table
            responsive
            striped
            className='Tabletournament'
            style={{ padding: "20px" }}
          >
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Name</th>
                <th>description</th>
                {/* <th>Status</th> */}
                <th>FromDate</th>
                <th>ToDate</th>
                <th>city</th>
                <th>Matches</th>
                <th>Category</th>
                <th>TournamentType</th>
                <th>MobileNumber</th>
                <th>Email</th>
                <th>AgeGroup</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredTournamnetData &&
                filteredTournamnetData.TournamentAdmins &&
                filteredTournamnetData.TournamentAdmins.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>

                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    {/* <td>{item.status}</td> */}

                    <td>{item.fromDate ? formatDate(item.fromDate) : ""}</td>

                    <td>{item.toDate ? formatDate(item.toDate) : ""}</td>

                    <td>{(item && item.city) || ""}</td>

                    <td>{item.matches}</td>

                    <td>{item.category}</td>
                    <td>{item.tournamentType}</td>
                    <td>
                      {item.mobileNumber
                        ? getMobileNumber(item.mobileNumber)
                        : ""}
                    </td>
                    <td>{item.email}</td>
                    <td>{item.age}</td>
                    {/* <td >{item.ageGroup}</td> */}

                    <td>
                      <td>
                        <span>
                          <FeaturedPlayListIcon
                            onClick={handleShow}
                            style={{ fontSize: "2.5rem" }}
                          />
                        </span>
                      </td>
                      <td>
                        <span>
                          <BlockIcon
                            style={{ fontSize: "2.5rem", marginLeft: "10px" }}
                          />
                        </span>
                      </td>
                      <td>
                        <span>
                          <ThumbUpIcon
                            style={{ fontSize: "2.5rem", marginLeft: "10px" }}
                          />
                        </span>
                      </td>
                      <td>
                        <span>
                          <ThumbDownIcon
                            style={{ fontSize: "2.5rem", marginLeft: "10px" }}
                          />
                        </span>
                      </td>
                      <td>
                        <span>
                          <EditIcon
                            onClick={() => editTournament(item.id)}
                            style={{ fontSize: "2.5rem", marginLeft: "10px" }}
                          />{" "}
                        </span>
                      </td>
                      <td>
                        <span>
                          <DeleteIcon
                            onClick={() => onDelete(item.id)}
                            style={{ fontSize: "2.5rem", marginLeft: "10px" }}
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
      {showAdminModal && (
        <AddAdminModal show={showAdminModal} onHide={() => closeModalAdd()} />
      )}
      {showTournamentModal && (
        <EditTournamentModal
          show={showTournamentModal}
          updateRecord={updateTrournament}
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
export default TableView;
