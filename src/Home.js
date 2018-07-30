import React, { Component } from "react"
import { Container, Box } from 'bloomer'

import Navigation from "./Nav/Navbar";
import "./index.css"
import "./main.sass"

export default class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <Navigation />
                <Container>
                    <Box id="main-box">
                    </Box>
                </Container>
            </React.Fragment>
        )
    }
}