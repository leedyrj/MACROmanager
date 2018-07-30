import React, { Component } from "react"
import { Container, Box } from 'bloomer'
import Collapsible from 'react-collapsible';
import Navigation from "./Nav/Navbar";
import "./CSS/index.css"
import "./CSS/Collapsible.css"
import "./main.sass"

export default class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <Navigation />
                <Container>
                    <Box id="main-box">
                        <Collapsible
                            trigger="Start here">
                            <p>This is the collapsible content. It can be any element or React component you like.</p>
                            <p>It can even be another Collapsible component. Check out the next section!</p>
                        </Collapsible>
                    </Box>
                </Container>
            </React.Fragment>
        )
    }
}