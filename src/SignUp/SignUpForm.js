import React from 'react';
import "../Widget/LoginForm.css";
import { useHistory } from 'react-router-dom';
import "./SignUpForm.css";
import { Form ,Button , Dropdown  } from 'react-bootstrap';
export default function SignUpForm() {
    const history = useHistory();
    const moveNext =()=>{
        history.push('/ContactInfo')
    }
    const moveBack =()=>{
        history.goBack()
    }
    return (
        <div className="login_form">
            <div className="sign_in"> 
                <Form>
                    <div className="singUp_dropdown">
                        <Dropdown>
                        <Dropdown.Toggle 
                        variant="secondary btn-sm" 
                        id="dropdown-basic">
                            Language
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{backgroundColor:'#73a47'}}>
                            <Dropdown.Item href="#" >Arabic</Dropdown.Item>
                            <Dropdown.Item href="#">English</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                    </div>
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
    )
}