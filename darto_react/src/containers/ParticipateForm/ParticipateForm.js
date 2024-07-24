import React, { useState } from "react";
import "./ParticipateForm.css";
import CustomInputs from "../../components/AdminDashboard/CustomInput/CustomInputs";
import { apiHandler } from "../../assets/api";
import { endpoint } from "../../assets/api/endpoint";
const ParticipateForm = ({ onHide }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [altmobileNumber, setAltMobileNumber] = useState("");

  const onCreateParticipate = async () => {
    console.log("fjjfj");
    const result = await apiHandler({
      url: endpoint.CREATE_PARTICIPATE,
      method: "POST",
      data: {
        name: name,
        email: email,
        mobileNumber: mobileNumber,
        altmobileNumber: altmobileNumber,
      },
    });
    console.log("ResultputParticipate - ", result.data);
    onHide();
    //  closeModal();
    // history.push("/clubadmin")
  };

  return (
    <>
      <div className='bg-form-col'>
        <div className='bg-form-col1'>
          <h1> Tournament / Event </h1>{" "}
        </div>{" "}
        <div className='bg-form-col1 '>
          <h1 className='bg-form-c9'>
            {" "}
            i want to participate in this compitition{" "}
          </h1>{" "}
        </div>{" "}
        <div className='bg-form-col2'>India Dart World Cup </div>{" "}
        <div className='row'>
          <div className='divbtnconnect col-md-auto mt-4'>
            {/* <br /> */}

            <input
              className='btnconnect participate-inp2'
              // style={{
              //   width: "100%",
              //   padding: "20px",
              // }}
              style={{
                backgroundColor:
                  "var(--token-ffcb8317-ee45-498d-997e-c1127c42cf85, rgb(19, 34, 52))",
              }}
              placeholder='Name'
              label='Name'
              // focusColor="#09F"
              backgroundColor='var(--token-e2079bf0-f281-429e-90ac-e5958a3c1a75, rgb(35, 53, 77)) '
              keyboard=''
              lineHeight={1.4}
              maxLength={50}
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              textAlign='left'
              textColor='#333'
            />
          </div>{" "}
          <div className='divbtnconnect col-md-auto mt-4'>
            {/* <br /> */}
            <input
              className='btnconnect participate-inp2'
              // style={{
              //   width: "100%",
              //   padding: "20px",
              // }}
              placeholder='Email Id*'
              //focusColor="#09F"

              label='Email Id'
              style={{
                backgroundColor:
                  "var(--token-ffcb8317-ee45-498d-997e-c1127c42cf85, rgb(19, 34, 52))",
              }}
              keyboard=''
              lineHeight={1.4}
              maxLength={50}
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              textAlign='left'
              textColor='#333'
            />
          </div>{" "}
        </div>
        <div className='row mt-2'>
          <div className='divbtnconnect col-md-auto mt-4'>
            {/* <br /> */}
            <input
              className='btnconnect participate-inp2'
              // style={{
              //   width: "100%",
              //   padding: "20px",
              // }}
              placeholder=' Registered Mobile No.'
              // focusColor="#09F"
              label='Mobile Number'
              style={{
                backgroundColor:
                  "var(--token-ffcb8317-ee45-498d-997e-c1127c42cf85, rgb(19, 34, 52))",
              }}
              keyboard=''
              lineHeight={1.4}
              maxLength={50}
              type='text'
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              textAlign='left'
              textColor='#333'
            />
          </div>{" "}
          <div className='divbtnconnect col-md-auto mt-4'>
            {/* <br /> */}
            <input
              className='btnconnect participate-inp2'
              // style={{
              //   width: "100%",
              //   padding: "20px",
              // }}
              placeholder=' Mobile Number (optional)'
              // focusColor="#09F"
              style={{
                backgroundColor:
                  "var(--token-ffcb8317-ee45-498d-997e-c1127c42cf85, rgb(19, 34, 52))",
              }}
              keyboard=''
              lineHeight={1.4}
              maxLength={50}
              type='text'
              label='Alternate Mobile number'
              value={altmobileNumber}
              onChange={(e) => setAltMobileNumber(e.target.value)}
              textAlign='left'
              textColor='#333'
            />
          </div>{" "}
        </div>
        <div className='month-imp'>
          <div className='radio-round-bt'>
            <input
              type='radio'
              className='month-imp1'
              id='html'
              name='fav_language'
              value='HTML'
            />
          </div>{" "}
          <div className='bg-form-col1 '>
            <h1 className='bg-form-c9'>
              {" "}
              i want to participate in this compitition{" "}
            </h1>{" "}
          </div>{" "}
        </div>
        <div className=''>
          <button className='month-imp2' onClick={() => onCreateParticipate()}>
            {" "}
            Participate{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};
export default ParticipateForm;
