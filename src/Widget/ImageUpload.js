import React from 'react'
import { Button } from 'react-bootstrap'
export default function ImageUpload() {
    return (
        <div className="login_form">
            <div className="sign_in"> 
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
