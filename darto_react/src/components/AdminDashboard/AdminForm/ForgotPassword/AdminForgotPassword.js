import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import "./LoginAdmin.css";
import { Link, useHistory } from "react-router-dom";

export default function AdminForgotPassword() {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  //   function validateForm() {
  //     return email.length > 0 && password.length > 0;
  //   }

  //   function handleSubmit(event) {
  //     event.preventDefault();
  //   }
  const history = useHistory();
  const pass = () => {
    history.push("/password");
  };

  return (
    <div className='Login' style={{ height: "100vh" }}>
      <Form className='Login2'>
        <p style={{ fontSize: "3rem", textAlign: "center", color: "#7890a1" }}>
          Forgot Password
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
            Email Id
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
            type='email'
            placeholder='Registered Email id'
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
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
          onClick={() => pass()}
        >
          Send Email
        </Button>
      </Form>
    </div>
  );
}
