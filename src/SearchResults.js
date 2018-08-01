import React, { Component } from "react"
import { Container, Box, Button } from 'bloomer'

export default class SearchResults extends Component {

    test = (e) => {
        e.preventDefault()
        console.log(this.props.recipes)
    }

    render() {
        return (
            <React.Fragment>
                <Button onClick={this.props.showForm}>
                    New Search
                </Button>
                <Container>
                    <Box id="results-box">
                        <Button onClick={this.test}>test</Button>
                    </Box>
                </Container>
            </React.Fragment>
        )
    }
}