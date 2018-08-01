import React, { Component } from "react"
import { Container, Box } from 'bloomer'
import Collapsible from 'react-collapsible';
import Navigation from "./Nav/Navbar";
import HomeForm from "./HomeForm"
import SearchResults from "./SearchResults"
import "./CSS/index.css"
import "./CSS/Collapsible.css"

export default class Home extends Component {

    state = {
        ShowForm: true
    }

    showForm = (e) => {
        e.preventDefault()
        this.setState({
            ShowForm: true
        })
    }

    showResults = (e) => {
        this.setState({
            ShowForm: false
        })
    }

    render() {
        if (this.state.ShowForm) {
            return (
                <React.Fragment>
                    <Navigation />
                    <Container>
                        <Box id="main-box">
                            <HomeForm showResults={this.showResults} />
                        </Box>
                    </Container>
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <Navigation />
                    <Container>
                        <Box id="main-box">
                            <SearchResults showForm={this.showForm} />
                        </Box>
                    </Container>
                </React.Fragment>
            )
        }
    }
}