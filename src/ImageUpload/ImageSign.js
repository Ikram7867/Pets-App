import React from 'react'
import LoginLeftInfo from "../Widget/LoginLeftInfo";
import ImageUpload from "../Widget/ImageUpload";
export default function ImageSign() {
    return (
        <div className="main_outer">
        <div className="custom_container">
        <div className="login_outer">
          <LoginLeftInfo image={`/images/parrot_PNG96581.png`} tittle="Welcome To sign"/>
          <ImageUpload/>
        </div>
      </div>
    </div>
    )
}
