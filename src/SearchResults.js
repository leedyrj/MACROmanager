import React, { Component } from "react"
import { Container, Box, Button, Image } from 'bloomer'
import RecipeModal from "./RecipeModal"
import APIController from "./APIController"

export default class SearchResults extends Component {

    state = {
        Modal: ""
    }

    recipeView = (recipe) => {
        // APIController.getOneRecipe(recipe.id).then((recipeId) => {
        //     console.log(recipeId)
        // })
        if (this.state.Modal === "") {
            this.setState({
                Modal: (
                    <RecipeModal
                        {...this.props}
                    />
                )
            })
        }
    }

    render() {
        return (
            <React.Fragment>
                <Button onClick={this.props.showForm}>
                    New Search
                </Button>
                <Container id="results-container">
                    {this.props.recipes.matches.map(recipe => {
                        return (
                            <Box
                                className="results-box"
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
                <RecipeModal />
            </React.Fragment>
        )
    }
}