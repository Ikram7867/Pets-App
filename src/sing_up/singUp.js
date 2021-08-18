import React from 'react'
import "../login/login.css";
import LoginLeftInfo from '../widget/login_left_info';
import SingUpForm from './SingUpForm';
import parrot from "../images/parrot_PNG96581.png";
export default function SingUp() {
    return (
        <div className="main_outer">
        <div className="custom_container">
        <div className="login_outer">
          <LoginLeftInfo image={parrot} tittle="Welcome To sign"/>
          <SingUpForm/>
        </div>
      </div>
    </div>
    )
}
