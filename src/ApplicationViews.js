import { Route } from "react-router-dom"
import React, { Component } from "react"
import Register from "./Register"
import Login from "./Login"
import Home from "./Home"

export default class ApplicationViews extends Component {
    isAuthenticated = () =>
        localStorage.getItem("credentials") !== null ||
        sessionStorage.getItem("credentials") !== null;

    render() {
        return (
            <React.Fragment>
                <Route exact path="/"
                    render={props => {
                        if (this.isAuthenticated()) {
                            return <Home />;
                        } else {
                            return <Login />;
                        }
                    }}
                />
                <Route path="/Register" component={Register} />
                <Route path="/Login" component={Login} />
            </React.Fragment>
        )
    }
}