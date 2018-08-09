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

    //  <Card onClick={() => this.recipeView(recipe.id)}>
    //                                 {recipe.recipeName}
    //                             </Card>
    render() {
        return (
            <React.Fragment>
                <Container>
                    {this.state.MyRecipes.map(recipe => {
                        return (
                            <Card onClick={() => this.recipeView(recipe.id)}>
                                <CardHeader>
                                    <CardHeaderTitle>
                                        {recipe.recipeName}
                                    </CardHeaderTitle>
                                    <CardHeaderIcon>
                                        <Icon className="fa fa-angle-down" />
                                    </CardHeaderIcon>
                                </CardHeader>
                                <CardImage>
                                    {/* <Image isRatio='4:3' src='https://via.placeholder.com/1280x960' /> */}
                                </CardImage>
                                <CardContent>
                                    <Media>
                                        <MediaLeft>
                                            <Image isSize='128x128' src='https://via.placeholder.com/96x96' />
                                        </MediaLeft>
                                        <MediaContent>
                                            <ul>
                                                {recipe.recipeIngred.map(ingredient => {
                                                    return (
                                                        <li>{ingredient}</li>
                                                    )
                                                })}
                                            </ul>
                                        </MediaContent>
                                    </Media>
                                </CardContent>
                            </Card>
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