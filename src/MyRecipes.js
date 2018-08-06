import React, { Component } from "react"
import { Container, Box, Button, Image } from 'bloomer'
import RecipeModal from "./RecipeModal"
import APIController from "./APIController"

export default class MyRecipes extends Component {

    state = {
        modal: false,
        modalType: "myrecipes"
    }

    recipeView = (recipe) => {
        APIController.getOneRecipe(recipe).then((recipeId) => {
            this.setState({
                recipeId: recipeId,
                ingredientLines: [""],
                modal: true
            })
        })
    }

    removeModal = () => {
        this.setState({
            modal: false
        })
    }


    render() {
        return (
            <React.Fragment>
                <Container>
                    {this.props.MyRecipes.map(recipe => {
                        return (
                            <Box onClick={() => this.recipeView(recipe.recipeId)}>
                                {recipe.recipeName}
                            </Box>
                        )

                    })}
                </Container>
                {this.state.modal ? (
                    <RecipeModal
                        removeModal={this.removeModal}
                        recipeId={this.state.recipeId}
                        isActive={this.isActive}
                        MyRecipes={this.props.MyRecipes}
                    // handleFieldChange={this.props.handleFieldChange}
                    // ingredientLines={this.state.ingredientLines}
                    />
                ) : (<p></p>)}
            </React.Fragment>
        )
    }
}