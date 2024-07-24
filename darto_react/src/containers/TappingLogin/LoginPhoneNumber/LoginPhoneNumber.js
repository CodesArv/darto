import React from "react";
import "./LoginPhoneNumber.css";
import { Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";
const LoginPhoneNumber = () => {
  
  const history = useHistory();
  const login = () => {
    history.push("/log");
  };
  return (
    <>
      <div className='login-number-send'>
        <div className='row'>
          <div className='col'>
            <label className='name_Class_Define'>First Name:</label>
            <input
              name=''
              class='form-control  mt-5 '
              style={{
                fontSize: "3rem",
                borderRadius: "10px",

                //   marginLeft: "10px",
                padding: "15px",
              }}
              placeholder='First Name'
              type='text'
            />
          </div>

          <div className='col'>
            <label className='name_Class_Define'>Last Name:</label>
            <input
              name=''
              class='form-control  mt-5'
              style={{
                fontSize: "3rem",
                borderRadius: "10px",
            
                padding: "15px",
                //   marginLeft: "10px",
              }}
              placeholder='Last Name'
              type='text'
            />
          </div>
        </div>
        <label className='name_Class_Define'>Mobile Number:</label>
        <div class='form-group input-group style_d_phno  mt-5'>
          {/* <div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-phone"></i> </span>
		</div> */}

          <select
            class='custom-select '
            style={{
              color: "black",
              maxWidth: "120px",
              borderRadius: "10px",
         
              padding: "15px",
            }}
          >
            <option selected=''>+971</option>
            <option value='1'>+972</option>
            <option value='2'>+198</option>
            <option value='3'>+701</option>
          </select>
          <input
            name=''
            class='form-control  '
            style={{
              fontSize: "3rem",
              borderRadius: "10px",
           
              marginLeft: "10px",
              padding: "15px",
            }}
            placeholder='Phone number'
            type='number'
          />
        </div>
        <div className='mt-5'>
          <label className='name_Class_Define mt-5'>Email Id:</label>
          <input
            name=''
            class='form-control  mt-5'
            style={{
              fontSize: "3rem",
              borderRadius: "10px",
             
              padding: "15px",
            }}
            placeholder='Email Id'
            type='text'
          />
          <label className='name_Class_Define'>Password:</label>
          <input
            name=''
            class='form-control mt-5'
            style={{
              fontSize: "3rem",
              borderRadius: "10px",
            
              padding: "15px",
              //   marginLeft: "10px",
            }}
            placeholder='Password'
            type='Password'
          />
        </div>
        {/* <div
          className="text-login-phone"
          style={{ width: "100%", marginTop: "30px" }}
        >
          when you tap continue , viz scree will send a text with verification
          code. message and data rate may apply. the verified phone number can
          be used to login
        </div> */}
        <div className='' style={{ textAlign: "center" }}>
          <button className='phone-login-button ' onClick={() =>  login()}>Sign Up</button>
        </div>
      </div>
    </>
  );
};
export default LoginPhoneNumber;
