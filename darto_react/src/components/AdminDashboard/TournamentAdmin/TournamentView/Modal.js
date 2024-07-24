import React from "react";
import { Modal,Button } from "react-bootstrap";
const Modal=()=>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>
         <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{fontSize:'16px'}}>
          <Modal.Title style={{fontSize:'16px'}}>Listing</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
        <Table
            responsive
            striped
            className="Tabletournament"
            style={{ padding: "20px" }}
          >
            <thead>
              <tr>
                <th>id</th>

                <th>Name</th>
                <th>description</th>
                <th>Status</th>
                <th>Role</th>
                <th>From Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
                  <tr>
                    <td>id</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td> 
                    <td>Null</td>
                    <td>Null</td>
                  </tr>
                  <tr>
                    <td>id</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td> 
                    <td>Null</td>
                    <td>Null</td>
                  </tr>
                  <tr>
                    <td>id</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td> 
                    <td>Null</td>
                    <td>Null</td>
                  </tr>
            </tbody>
          </Table>
<div className="listing-tournament">
<a href="#" class="previous">&laquo; Previous</a>
<a href="#" class="next">Next &raquo;</a>
</div>
</Modal.Body>
       
      </Modal>
        </>
    )
}
export default Modal;