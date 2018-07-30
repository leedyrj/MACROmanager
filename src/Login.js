import React, { Component } from "react"
import APIController from "./APIController"
import { Redirect, Link } from "react-router-dom"

export default class Login extends Component {
    state = {
        email: "",
        password: ""
    }

    handleFieldChange = (e) => {
        const stateToChange = {}
        stateToChange[e.target.id] = e.target.value
        this.setState(stateToChange)
    }

    handleLogin = (e) => {
        e.preventDefault()
        APIController.getData(`users?email=${this.state.email}`)
            .then(user => {
                if (user.length > 0 && this.state.password == user[0].password) {
                    this.setState({ userId: user[0].id })
                } else {
                    alert("Your email and password don't match.  Please try again or click register to create a new account.")
                }
            })
            .then(() => {
                const checkbox = document.getElementById("checkbox")
                if (checkbox.checked) {
                    if (this.state.user) {
                        localStorage.setItem(
                            "credentials",
                            JSON.stringify({
                                email: this.state.email,
                                password: this.state.password,
                                userId: this.state.userId
                            })
                        )
                    }
                } else {
                    if (this.state.userId) {
                        sessionStorage.setItem(
                            "credentials",
                            JSON.stringify({
                                email: this.state.email,
                                password: this.state.password,
                                userId: this.state.userId
                            })
                        )
                    }
                }
            })
    }
    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleLogin}>
                    <h1 className="">Please Sign In</h1>
                    <label htmlFor="inputEmail">Email Address</label>
                    <input type="email"
                        onChange={this.handleFieldChange}
                        id="email"
                        placeholder="Email Address"
                        required=""
                        autoFocus=""
                    />
                    <label htmlFor="inputPassword">password</label>
                    <input
                        onChange={this.handleFieldChange}
                        type="password"
                        id="password"
                        placeholder="Password"
                        required=""
                    />
                    <label>Remember Me</label>
                    <input type="checkbox" id="checkbox" />
                    <button type="submit">Submit
                    </button>
                </form>

                <div>
                    <button id="linkToRegisterForm">
                        <Link to={{ pathname: "/register" }}>
                            Register
                        </Link>
                    </button>
                </div>
            </React.Fragment>
        )
    }
}