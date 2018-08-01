import React, { Component } from "react"
import { Container, Box, Button } from 'bloomer'

export default class SearchResults extends Component {

    test = (e) => {
        e.preventDefault()
        console.log("recipes", this.props.recipes.matches)
        this.props.recipes.matches.forEach(recipe => {
            console.log(recipe.recipeName)
        });
    }

    render() {
        return (
            <React.Fragment>
                <Button onClick={this.props.showForm}>
                    New Search
                </Button>
                <Container>
                    {/* {this.props.recipes.matches} */}
                    {this.props.recipes.matches.map(recipe => {
                        return (
                            <Box id="results-box">
                                {recipe.recipeName}
                            </Box>
                        )
                    }
                    )}
                </Container>
            </React.Fragment>
        )
    }
}