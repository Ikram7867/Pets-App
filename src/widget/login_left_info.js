import React from 'react';
import './login_left_info.css';

export default function LoginLeftInfo({image, tittle}) {
    console.log(image)
    return (
        <div className="login_info">
            <div className="info_text">
              <h3>{tittle}</h3>
              <p>For better experience with your pets</p>
            </div>
            <div className="info_img">
              <img src={image} alt="fireSpot" />
            </div>
          </div>
    )
}
