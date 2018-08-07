import React, { Component } from "react"
import { Container, Box, Button, Image } from 'bloomer'
import DatabaseModal from "./DatabaseModal"
import APIController from "./APIController"

export default class MyRecipes extends Component {

    state = {
        modal: false,
        modalType: "myrecipes",
        modalRecipe: {},
        MyRecipes: []
    }

    componentDidMount() {
        APIController.getData("recipes")
            .then((myRecipes) => {
                this.setState({
                    MyRecipes: myRecipes
                })
                console.log("state: MyRecipes", this.state.MyRecipes)
            })
    }

    recipeView = (recipeId) => {
        const individualRecipe = this.state.MyRecipes.find(recipe => recipe.id === recipeId);
        console.log("individual recipe", individualRecipe)
        this.setState({
            modalRecipe: individualRecipe,
            modal: true
        })
        // APIController.getOneRecipe(individualRecipe.recipeId).then((recipeCard) => {
        //     this.setState({
        //         recipeId: recipeId,
        //         ingredientLines: [""],
        //         modal: true
        //     })
        // })
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
                    {this.state.MyRecipes.map(recipe => {
                        return (
                            <Box onClick={() => this.recipeView(recipe.id)}>
                                {recipe.recipeName}
                            </Box>
                        )

                    })}
                </Container>
                {this.state.modal ? (
                    <DatabaseModal
                        removeModal={this.removeModal}
                        modalRecipe={this.state.modalRecipe}
                        isActive={this.isActive}
                    // handleFieldChange={this.props.handleFieldChange}
                    // ingredientLines={this.state.ingredientLines}
                    />
                ) : (<p></p>)}
            </React.Fragment>
        )
    }
}