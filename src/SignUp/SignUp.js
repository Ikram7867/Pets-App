import React from 'react'
import "../Login/Login.css";
import LoginLeftInfo from '../Widget/LoginLeftInfo';
import SingUpForm from './SignUpForm';

export default function SignUp() {
    return (
        <div className="main_outer">
        <div className="custom_container">
        <div className="login_outer">
          <LoginLeftInfo image={`/images/parrot_PNG96581.png`} tittle="Welcome To sign"/>
          <SingUpForm/>
        </div>
      </div>
    </div>
    )
}
