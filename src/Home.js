import React, { Component } from "react"
import { Container, Box } from 'bloomer'
import Navigation from "./Nav/Navbar";

export default class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <Navigation />
                <Container>
                    <Box>Hello World!</Box>
                </Container>
            </React.Fragment>
        )
    }
}