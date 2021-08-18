import React from 'react'
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import Login from "../login/login";
import SingUp from "../sing_up/singUp";
export default function Routes() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route path="/singUp" component={SingUp}/>
                </Switch>
            </Router>
        </div>
    )
}
