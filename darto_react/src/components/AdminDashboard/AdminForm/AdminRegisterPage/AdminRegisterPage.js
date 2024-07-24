import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./AdminRegisterPage.css";
import { Link, useHistory } from "react-router-dom";
import { apiHandler } from "../../../../assets/api";
import { endpoint } from "../../../../assets/api/endpoint";
export default function AdminRegisterPage(props) {
  const history = useHistory();
 

  const [name, setName] = useState("");
  const [userName, setuserName] = useState("");
  const [mobileNumber, setmobileNumber] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    const result = await apiHandler({
      url: endpoint.SIGNUP_ADMIN,
      method: "POST",
      data: {
        name: name,
        userName: userName,
        mobileNumber: mobileNumber,
        password: password,
      },
    });
    // console.log("Result - ", result.data);

    history.push("/login");
  };


  return (
    <div className='Login ' style={{ height: "100%" }}>
      <Form className='Login2'>
        <p style={{ fontSize: "3rem", textAlign: "center", color: "#7890a1" }}>
          Admin Register
        </p>
        <Form.Group size='lg' controlId='email'>
          <Form.Label
            style={{
              height: "3vh",
              fontSize: "10px",
              marginTop: "20px",
              color: "#7890a1",
            }}
          >
            First Name
          </Form.Label>
          <Form.Control
            style={{
              height: "7vh",
              fontSize: "3rem",
              backgroundColor: "rgb(35, 53, 77)",
              color: "#7890a1",
              border: "none",
              borderRadius: "5px",
            }}
            autoFocus
            type='name'
            placeholder='First Name'
            // onChange={(e) => setName(e.target.value)}
            // value={name}
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size='lg' controlId='email'>
          <Form.Label
            style={{
              height: "3vh",
              fontSize: "10px",
              marginTop: "20px",
              color: "#7890a1",
            }}
          >
            Last Name
          </Form.Label>
          <Form.Control
            style={{
              height: "7vh",
              fontSize: "3rem",
              backgroundColor: "rgb(35, 53, 77)",
              color: "#7890a1",
              border: "none",
              borderRadius: "5px",
            }}
            autoFocus
            placeholder='Last Name'
            type='name'
            // onChange={(e) => setName(e.target.value)}
            // value={name}
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size='lg' controlId='email'>
          <Form.Label
            style={{
              height: "3vh",
              fontSize: "10px",
              marginTop: "20px",
              color: "#7890a1",
            }}
          >
            Email
          </Form.Label>
          <Form.Control
            style={{
              height: "7vh",
              fontSize: "3rem",
              backgroundColor: "rgb(35, 53, 77)",
              color: "#7890a1",
              border: "none",
              borderRadius: "5px",
            }}
            autoFocus
            type='username'
            placeholder='Email '
            onChange={(e) => setuserName(e.target.value)}
            value={userName}
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size='lg' controlId='email'>
          <Form.Label
            style={{
              height: "3vh",
              fontSize: "10px",
              marginTop: "20px",
              color: "#7890a1",
            }}
          >
            Mobile Number
          </Form.Label>
          <Form.Control
            style={{
              height: "7vh",
              fontSize: "3rem",
              backgroundColor: "rgb(35, 53, 77)",
              color: "#7890a1",
              border: "none",
              borderRadius: "5px",
            }}
            autoFocus
            type='number'
            placeholder='Mobile Number'
            onChange={(e) => setmobileNumber(e.target.value)}
            value={mobileNumber}
          />
        </Form.Group>
        <Form.Group size='lg' controlId='password'>
          <Form.Label
            style={{
              height: "3vh",
              fontSize: "10px",
              marginTop: "20px",
              color: "#7890a1",
            }}
          >
            Password
          </Form.Label>
          <Form.Control
            style={{
              height: "7vh",
              fontSize: "3rem",
              backgroundColor: "rgb(35, 53, 77)",
              color: "#7890a1",
              border: "none",
              borderRadius: "5px",
            }}
            placeholder='Password'
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </Form.Group>
        <Form.Group size='lg' controlId='formBasicCheckbox'>
          <Form.Check
            style={{
              fontSize: "10px",
              color: "white",
              color: "#7890a1",
              marginTop: "30px",
            }}
            type='checkbox'
            label='By clicking "Continue", you agree to the Terms and Privacy Policy'
          />
        </Form.Group>
        <Button
          block
          size='lg'
          style={{
            height: "7vh",
            fontSize: "3rem",
            width: "100%",
            marginTop: "20px",
            backgroundColor: "#0099ff",
            borderRadius: "5px",
          }}
          type='submit'
          onClick={(e) => submit(e)}
        >
          Sign Up
        </Button>
      </Form>
    </div>
  );
}
