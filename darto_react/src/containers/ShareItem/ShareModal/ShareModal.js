import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import DoctorEdit1 from '../DoctorEdit1/DoctorEdit1';
// const Transition = React.forwardRef(function Transition(props, ref) {
//     return <Slide direction="down" ref={ref} {...props} />;
//   });
const Edit = ({ showModal, closeModal , Doctordata},props) => {
    const {
        buttonLabel,
        className
      } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
 
  return (
    <div>
      {/* <Button color="danger" onClick={toggle}>{buttonLabel}</Button> */}
      <Modal isOpen={showModal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}> Blood Group </ModalHeader>
        <ModalBody>
        <DoctorEdit1  
      modal ={showModal}
     closeModal={closeModal}
     Doctordata={Doctordata}
        />
        </ModalBody>
        
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={closeModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Edit;