import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
//import APIManager from "./../APIHandler";

export default class Navbar extends Component {
    state = {

    }

    render() {
        return (
            <nav>
                <Link to="/">Home</Link>
                <Link to="/">My Recipes</Link>
                <Link to="/">Dictionary</Link>
            </nav>
        )
    }
}