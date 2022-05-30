import React, { useState } from "react";
import axios from "axios";
import { Navbar, Container, Button, Modal, Form } from "react-bootstrap";

const Navbars = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    await axios.post("http://localhost:7000/createUser", userData);
  };

  return (
    <>
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand style={{ color: "white" }}>FargoWiz</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Button onClick={handleShow}> Create user</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                onChange={handleInput}
                name="name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Enter email</Form.Label>
              <Form.Control
                type="email"
                placeholder="email"
                name="email"
                onChange={handleInput}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Enter Phone Number</Form.Label>
              <Form.Control
                type="number"
                name="phone"
                placeholder="Phone Number"
                onChange={handleInput}
              />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Navbars;
