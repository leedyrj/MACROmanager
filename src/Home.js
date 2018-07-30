import React, { Component } from "react"
import Navbar from "./Nav/Navbar";

export default class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div>
                    <h1>Hello! Welcome to my React App</h1>
                    <h3>Eventually, this will be really cool and let you do things!</h3>
                </div>
            </React.Fragment>
        )
    }
}