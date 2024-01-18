import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuthenticate }) => {
  const [id, setId] = useState("");
  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault(); //새로고침을 막음 //form의 submit은 새로고침이 일어남
    setAuthenticate(true);
    navigate("/");
  };

  return (
    <div>
      <Container>
        <Form onSubmit={(event) => loginUser(event)}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="password" />
          </Form.Group>
          <Button variant="success" type="submit">
            Submit
          </Button>{" "}
        </Form>
      </Container>
    </div>
  );
};

export default Login;
