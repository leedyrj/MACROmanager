import React, { Component } from "react"
import APIController from "./APIController"

export default class Register extends Component {
    state = {
        name: "",
        email: "",
        password: ""
    }

    handleFieldChange = (e) => {
        const stateToChange = {}
        stateToChange[e.target.id] = e.target.value
        this.setState(stateToChange)
    }

    handleRegister = (e) => {
        e.preventDefault()

        let registerData = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }
        APIController.addData("users", registerData)
            .then(() => {
                this.props.history.push("/login")
            })
    }
    render() {
        return (
            <form onSubmit={this.handleRegister}>

                <h1>Please register an account!</h1>

                <label htmlFor="registerUsername">Username:</label>
                <input
                    type="text"
                    id="name"
                    name="registerUsername"
                    onChange={this.handleFieldChange}
                />

                <label htmlFor="registerEmail">Email:</label>
                <input
                    type="text"
                    id="email"
                    name="registerEmail"
                    type="email"
                    onChange={this.handleFieldChange}
                />

                <label htmlFor="registerPassword">Password:</label>
                <input
                    type="text"
                    id="password"
                    name="registerPassword"
                    type="password"
                    onChange={this.handleFieldChange}
                />

                <input type="submit" />
            </form>
        )
    }
}