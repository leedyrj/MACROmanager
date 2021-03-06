import React, { Component, Link } from "react"
import { Modal, ModalBackground, ModalCard, ModalCardHeader, ModalCardTitle, Delete, ModalCardBody, ModalCardFooter, Button, Title, Box } from 'bloomer'
import APIController from "./APIController"
import Comment from "./Comment"
import Rating from "./Rating"

export default class RecipeModal extends Component {
    state = {
        ingredientLines: [],
        commentForm: false,
        comment: "",
        rating: 0
    }

    handleFieldChange = (e) => {
        const stateToChange = {}
        stateToChange[e.target.id] = e.target.value
        this.setState(stateToChange)
    }

    componentDidMount() {
        this.setState({
            ingredientLines: this.props.recipeId.ingredientLines
        })
    }

    saveRecipe = () => {
        let fat = this.props.recipeId.nutritionEstimates.find(nutrition => nutrition.attribute === "FAT")
        let carbs = this.props.recipeId.nutritionEstimates.find(nutrition => nutrition.attribute === "CHOCDF")
        let pro = this.props.recipeId.nutritionEstimates.find(nutrition => nutrition.attribute === "PROCNT")
        let image;
        if (this.props.recipeId.images[0].hostedLargeUrl) {
            image = this.props.recipeId.images[0].hostedLargeUrl
        } else if (this.props.recipeId.images[0].hostedMediumUrl) {
            image = this.props.recipeId.images[0].hostedMediumUrl
        } else if (this.props.recipeId.images[0].hostedSmallUrl) {
            image = this.props.recipeId.images[0].hostedSmallUrl
        } else {
            image = <p>Sorry, no image available!</p>
        }
        let currentUser = this.props.currentUserId
        let body = {
            "userId": currentUser,
            "recipeName": this.props.recipeId.name,
            "externalRecipeId": this.props.recipeId.id,
            "recipeUrl": this.props.recipeId.source.sourceRecipeUrl,
            "recipeImage": image,
            "recipeIngred": this.props.recipeId.ingredientLines,
            "recipePro": pro.value,
            "recipeCarbs": carbs.value,
            "recipeFat": fat.value,
            "recipeComment": ""
        }
        APIController.saveRecipe("recipes", body)
            .then(() => {
                alert("Successfully added to My Recipes")
            })
    }

    // addComment = (e) => {
    //     e.preventDefault()
    //     console.log(this.props.modalRecipe)
    // this.props.MyRecipes.map(recipe => {
    //     if (recipe.recipeId === this.props.recipeId.id) {
    //         console.log("match", recipe.id)
    //         let id = recipe.id
    //         let body = {
    //             recipeComment: this.state.comment
    //         }
    //         console.log("body", body)
    //         APIController.addComment(id, body)
    //             .then(() => {
    //                 alert("Added Comment!")
    //             }).then(() => {
    //                 this.setState({
    //                     commentForm: false
    //                 })
    //             })
    //     }
    // });
    // }

    showCommentForm = () => {
        this.setState({
            commentForm: true
        })
    }

    onStarClick(nextValue, prevValue, name) {
        this.setState({ rating: nextValue });
        this.props.MyRecipes.map(recipe => {
            if (recipe.recipeId === this.props.recipeId.id) {
                let id = recipe.id
                let body = {
                    recipeRating: nextValue
                }
                APIController.addRating(id, body)
                    .then(() => {
                        alert("Added Rating!")
                    })
            }
        });
    }

    render() {
        let fat = this.props.recipeId.nutritionEstimates.find(nutrition => nutrition.attribute === "FAT")
        let carbs = this.props.recipeId.nutritionEstimates.find(nutrition => nutrition.attribute === "CHOCDF")
        let pro = this.props.recipeId.nutritionEstimates.find(nutrition => nutrition.attribute === "PROCNT")
        return (
            <React.Fragment>
                <Modal isActive>
                    {console.log(this.props.recipeId)}
                    <ModalBackground />
                    <ModalCard>
                        <ModalCardHeader>
                            <ModalCardTitle>{this.props.recipeId.name}</ModalCardTitle>
                            <Delete
                                onClick={this.props.removeModal}
                            />
                        </ModalCardHeader>
                        <ModalCardBody>
                            <ul>
                                {this.props.recipeId.ingredientLines.map(ingredient => {
                                    return (
                                        <li>{ingredient}</li>
                                    )
                                })}
                            </ul>
                            <span className="nutrition-flex">
                                <div className="nutrition-item">
                                    <Title isSize={5}>Protein:</Title>
                                    {pro.value} g
                                </div>
                                <div>
                                    <div className="nutrition-item">
                                        <Title isSize={5}>Fat:</Title>
                                        {fat.value} g
                                </div>
                                </div>
                                <div>
                                    <div className="nutrition-item">
                                        <Title isSize={5}>Carbs:</Title>
                                        {carbs.value} g
                                </div>
                                </div>
                            </span>
                            <div>
                                <a href={this.props.recipeId.source.sourceRecipeUrl}
                                    target="_blank">
                                    View full recipe here!
                            </a>
                            </div>
                            <div>
                                {this.props.MyRecipes.map(recipe => {
                                    if (recipe.recipeId === this.props.recipeId.id && recipe.recipeComment) {
                                        return "Comment: " + recipe.recipeComment
                                    }
                                })}
                            </div>
                        </ModalCardBody>
                        <ModalCardFooter>
                            {this.props.modalType === "search" ? (
                                <Button
                                    // isColor='success'
                                    className="yellow-button"
                                    onClick={this.saveRecipe}>Save for Later</Button>
                            ) : (<Comment
                                handleFieldChange={this.handleFieldChange}
                                comment={this.state.comment}
                                showCommentForm={this.showCommentForm}
                                commentForm={this.state.commentForm}
                                MyRecipes={this.props.MyRecipes}
                                recipeId={this.props.recipeId}
                                addComment={this.addComment}
                            />)}
                            {/* <Rating
                                recipe={this.props.recipe}
                                MyRecipes={this.props.MyRecipes}
                                recipeId={this.props.recipeId}
                            /> */}

                        </ModalCardFooter>
                    </ModalCard>
                </Modal>
            </React.Fragment>
        )
    }
}
