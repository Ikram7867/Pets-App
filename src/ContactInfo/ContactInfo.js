import React from "react";
import "../Login/Login.css";
import LoginLeftInfo from "../Widget/LoginLeftInfo";
import "../Widget/LoginLeftInfo.css";
import ContactForm from"./ContactForm";

export default function ContactInfo() {
  return (
    <div className="main_outer">
      <div className="custom_container">
        <div className="login_outer">
          <LoginLeftInfo image={`/images/pngegg(1).png`} tittle="Welcome To sign Up" />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
