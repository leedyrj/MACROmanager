import React, { Component } from "react"
import { Container, Box, Button, Image, Card, CardContent, CardFooter, CardHeader, CardHeaderIcon, CardHeaderTitle, CardImage, Icon, Media, MediaLeft, MediaContent, Subtitle, Title, Content } from 'bloomer'
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
        let currentUserId = this.props.currentUserId
        fetch(`http://localhost:5002/recipes?userId=${currentUserId}`)
            .then(a => a.json())
            .then((myRecipes) => {
                this.setState({
                    MyRecipes: myRecipes
                })
                // console.log("state: MyRecipes", this.state.MyRecipes)
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

    deleteRecipe = (recipeId) => {
        console.log("recipeId", recipeId)
        APIController.deleteRecipe(recipeId).then(() => {
            APIController.getData("recipes")
                .then((myRecipes) => {
                    this.setState({
                        MyRecipes: myRecipes
                    })
                    // console.log("state: MyRecipes", this.state.MyRecipes)
                })
        })
    }

    //  <Card onClick={() => this.recipeView(recipe.id)}>
    //                                 {recipe.recipeName}
    //                             </Card>
    render() {
        return (
            <React.Fragment>
                <Box id="test">
                    {this.state.MyRecipes.map(recipe => {
                        return (
                            <React.Fragment>
                                <Card
                                    id="my-recipes">
                                    <CardHeader>
                                        <CardHeaderTitle>
                                            {recipe.recipeName}
                                        </CardHeaderTitle>
                                        <Button
                                            isColor="danger"
                                            onClick={() => this.deleteRecipe(recipe.id)}
                                            id="delete">Delete</Button>
                                    </CardHeader>
                                    <CardImage>
                                        {/* <Image isRatio='4:3' src='https://via.placeholder.com/1280x960' /> */}
                                    </CardImage>
                                    <CardContent onClick={() => this.recipeView(recipe.id)}>
                                        <Media>
                                            <MediaLeft>
                                                <Image isRatio='48x48' src={recipe.recipeImage} />
                                            </MediaLeft>
                                            <MediaContent>
                                                <ul>
                                                    {recipe.recipeIngred.map(ingredient => {
                                                        return (
                                                            <li className="child">{ingredient}</li>
                                                        )
                                                    })}
                                                </ul>
                                            </MediaContent>
                                        </Media>
                                    </CardContent>

                                </Card>

                            </React.Fragment>
                        )

                    })}
                </Box>
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