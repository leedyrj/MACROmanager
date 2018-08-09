import React, { Component } from "react"
import { Container, Box, Button, Image, Card, CardContent, CardFooter, CardHeader, CardHeaderIcon, CardHeaderTitle, CardImage, Icon, Media, MediaLeft, MediaContent, Subtitle, Title, Content } from 'bloomer'
import RecipeModal from "./RecipeModal"
import APIController from "./APIController"

export default class SearchResults extends Component {

    state = {
        modal: false,
        recipeId: {},
        ingredientLines: [""],
        modalType: "search",
        rating: 0
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
        this.setState({
            modal: false
        })
    }

    render() {
        return (
            <React.Fragment>
                <Button onClick={this.props.showForm}>
                    New Search
                </Button>
                <Box id="results-container">
                    {this.props.recipes.matches.map(recipe => {
                        return (
                            <Card onClick={() => this.recipeView(recipe)}>
                                <CardHeader>
                                    <CardHeaderTitle>
                                        {recipe.recipeName}
                                    </CardHeaderTitle>
                                </CardHeader>
                                <CardImage>
                                    {/* <Image isRatio='4:3' src='https://via.placeholder.com/1280x960' /> */}
                                </CardImage>
                                <CardContent>
                                    <Media>
                                        <MediaLeft>
                                            <Image isRatio='48x48' src={recipe.smallImageUrls} />
                                        </MediaLeft>
                                        <MediaContent>
                                        </MediaContent>
                                    </Media>
                                </CardContent>
                            </Card>
                        )
                    }
                    )}
                </Box>
                {this.state.modal ? (
                    <RecipeModal
                        removeModal={this.removeModal}
                        recipeId={this.state.recipeId}
                        isActive={this.isActive}
                        modalType={this.state.modalType}
                        handleFieldChange={this.props.handleFieldChange}
                        currentUserId={this.props.currentUserId}
                        MyRecipes={this.props.MyRecipes}
                    // ingredientLines={this.state.ingredientLines}
                    />
                ) : (<p></p>)}
            </React.Fragment>
        )
    }
}