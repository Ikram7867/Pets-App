import React from 'react'
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import ImageSign from "../ImageUpload/ImageSign"
import ContactInfo from "../ContactInfo/ContactInfo";
export default function Routes() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route path="/signUp" component={SignUp}/>
                    <Route path="/ContactInfo" component={ContactInfo}/>
                    <Route path="/ImageSign" component={ImageSign}/>
                </Switch>
            </Router>
        </div>
    )
}
