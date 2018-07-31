import React, { Component } from "react"
import { Container, Box } from 'bloomer'
import Collapsible from 'react-collapsible';
import Navigation from "./Nav/Navbar";
import HomeForm from "./HomeForm"
import "./CSS/index.css"
import "./CSS/Collapsible.css"

export default class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <Navigation />
                <Container>
                    <Box id="main-box">
                        <HomeForm />
                    </Box>
                </Container>
            </React.Fragment>
        )
    }
}