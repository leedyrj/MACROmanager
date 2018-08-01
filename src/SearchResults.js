import React, { Component } from "react"
import { Container, Box, Button } from 'bloomer'

export default class SearchResults extends Component {



    render() {
        return (
            <React.Fragment>
                <Button onClick={this.props.showForm}>
                    New Search
                </Button>
                <Container>
                    <Box id="results-box">
                    </Box>
                </Container>
            </React.Fragment>
        )
    }
}