import React, { Component } from "react"
import { Container, Box, Button, Image } from 'bloomer'
import APIController from "./APIController"

export default class SearchResults extends Component {

    recipeView = (recipe) => {
        APIController.getOneRecipe(recipe.id).then((recipeId) => {
            console.log(recipeId)
        })
    }

    render() {
        return (
            <React.Fragment>
                <Button onClick={this.props.showForm}>
                    New Search
                </Button>
                <Container>
                    {this.props.recipes.matches.map(recipe => {
                        return (
                            <Box
                                id="results-box"
                                onClick={() => this.recipeView(recipe)}>
                                <Image isSize="128x128" src={recipe.smallImageUrls} />
                                {recipe.recipeName}
                                <ul>
                                    <li>{recipe.ingredients}</li>
                                </ul>
                            </Box>
                        )
                    }
                    )}
                </Container>
            </React.Fragment>
        )
    }
}