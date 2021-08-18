import React from 'react';
import './login_form.css';
import { useHistory } from 'react-router-dom';
import { Form ,Button } from 'react-bootstrap'
export default function  LoginForm() {
    const history=useHistory();
    const moveNext =()=> {
        history.push('/singUp')
    }
    return (
        <div className="login_form">
            <div className="sign_in"> 
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Email or Phone" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="started_btn" onClick={moveNext}>
                        Lets Get Started
                    </Button>
                </Form>
                <div className="login_with">
                    <Button variant="primary" type="submit" className="login_btn">
                        Login with Facebook
                    </Button>
                    <Button variant="primary" type="submit" className="login_btn blue_bg">
                        Login with Google
                    </Button>
                </div>
            </div>
          </div>
    )
}
