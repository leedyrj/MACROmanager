import React, { Component } from "react"
import { Container, Box, Button, Image } from 'bloomer'
import RecipeModal from "./RecipeModal"
import APIController from "./APIController"

export default class SearchResults extends Component {

    state = {
        modal: false,
        recipeId: {},
        ingredientLines: [""]
    }

    recipeView = (recipe) => {
        APIController.getOneRecipe(recipe.id).then((recipeId) => {
            this.setState({
                recipeId: recipeId,
                ingredientLines: [""],
                modal: true
            })
        })
    }

    removeModal = () => {
        document.querySelector(".modal").classList.remove("is-active")
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
                {this.state.modal ? (
                    <RecipeModal
                        removeModal={this.removeModal}
                        recipeId={this.state.recipeId}
                        isActive={this.isActive}
                    // ingredientLines={this.state.ingredientLines}
                    />
                ) : (<p></p>)}
            </React.Fragment>
        )
    }
}