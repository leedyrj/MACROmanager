import React, { Component } from "react"
import APIController from "./APIController"
import { Container, Box, Label, Input, Button } from 'bloomer'


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
            <Container isFluid style={{ marginTop: 50 }} className="logregcont">
                {/* <Box addClass="login-reg-box"> */}
                <form onSubmit={this.handleRegister}>

                    <h1>Please register an account!</h1>

                    <Label htmlFor="registerUsername">Username:</Label>
                    <Input
                        type="text"
                        id="name"
                        name="registerUsername"
                        onChange={this.handleFieldChange}
                    />

                    <Label htmlFor="registerEmail">Email:</Label>
                    <Input
                        type="text"
                        id="email"
                        name="registerEmail"
                        type="email"
                        onChange={this.handleFieldChange}
                    />

                    <Label htmlFor="registerPassword">Password:</Label>
                    <Input
                        type="text"
                        id="password"
                        name="registerPassword"
                        type="password"
                        onChange={this.handleFieldChange}
                    />

                    <Button type="submit"> Submit </Button>
                </form>
                {/* </Box> */}
            </Container>
        )
    }
}