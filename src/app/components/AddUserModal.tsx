"use client";
import React from "react";
import { Button, Col, FormGroup, Form, Row } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const AddUserModal = () => {
  return (
    <Row className="mb-4">
      <Col>
        <FloatingLabel
          controlId="floatingInputGrid"
          label="Email address"
        >
          <Form.Control
            type="email"
            placeholder="name@example.com"
          />
        </FloatingLabel>
      </Col>
    </Row>
  );
};

export default AddUserModal;
