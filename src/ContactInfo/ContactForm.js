import React from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "../Widget/LoginForm.css";
export default function ContactForm() {
  const history=useHistory();
  const moveNext=()=>{
    history.push("/ImageSign")
  }
  const moveBack=()=>{
      history.goBack()
  }
  return (
    <div className="login_form">
      <div className="sign_in">
        <Form>
          <Form.Group className="mb-3 double_input" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email or Phone" />
            <Form.Control type="email" placeholder="Email or Phone" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email or Phone" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3 double_input" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email or Phone" />
            <Form.Control type="email" placeholder="Email or Phone" />
          </Form.Group>
        </Form>
        <div className="login_with">
          <Button variant="primary" type="submit" className="login_btn" onClick={moveNext}>
            Next
          </Button>
          <Button variant="primary" type="submit" className="login_btn blue_bg" onClick={moveBack}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}
