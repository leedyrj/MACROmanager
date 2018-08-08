import React, { Component, Link } from "react"
import { Modal, ModalBackground, ModalCard, ModalCardHeader, ModalCardTitle, Delete, ModalCardBody, ModalCardFooter, Button, Input, Box } from 'bloomer'
import APIController from "./APIController"
import Comment from "./Comment"
import Rating from "./Rating"

export default class DatabaseModal extends Component {
    state = {
        ingredientLines: [],
        commentForm: false,
        comment: "",
        rating: this.props.modalRecipe.recipeRating
    }

    handleFieldChange = (e) => {
        const stateToChange = {}
        stateToChange[e.target.id] = e.target.value
        this.setState(stateToChange)
    }

    componentDidMount() {
        this.setState({
            rating: this.props.modalRecipe.recipeRating,
            comment: this.props.modalRecipe.recipeComment
        })
        console.log(this.props.modalRecipe.recipeRating)
    }

    // saveRecipe = () => {
    //     // let source = this.props.recipeId.source.map(source => {
    //     //     return (source.sourceSiteUrl)
    //     // })
    //     let currentUser = this.props.currentUserId
    //     let body = {
    //         "userId": currentUser,
    //         "recipeName": this.props.recipeId.name,
    //         "recipeId": this.props.recipeId.id,
    //         "recipeUrl": this.props.recipeId.source.sourceRecipeUrl,
    //         "recipeIngred": this.props.recipeId.ingredientLines,
    //     }
    //     APIController.saveRecipe("recipes", body)
    //         .then(() => {
    //             alert("Successfully added to My Recipes")
    //         })
    // }

    // addComment = (e) => {
    // e.preventDefault()
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

    addComment = (e) => {
        e.preventDefault()
        let id = this.props.modalRecipe.id
        let body = {
            recipeComment: this.state.comment
        }
        console.log("body", body)
        APIController.addComment(id, body)
            .then(() => {
                alert("Added Comment!")
            }).then(() => {
                this.setState({
                    commentForm: false,
                    // comment: this.state.comment
                })
            })
    }

    handleFieldChange = (e) => {
        const stateToChange = {}
        stateToChange[e.target.id] = e.target.value
        this.setState(stateToChange)
    }

    onStarClick(nextValue, prevValue, name) {
        this.setState({ rating: nextValue });
        let id = this.props.modalRecipe.id
        let body = {
            recipeRating: nextValue
        }
        APIController.addRating(id, body)
            .then(() => {
                alert("Added Rating!")
            })
    }

    render() {
        return (
            <React.Fragment>
                <Modal isActive>
                    {/* {console.log(this.props.modalRecipe)} */}
                    <ModalBackground />
                    <ModalCard>
                        <ModalCardHeader>
                            <ModalCardTitle>{this.props.modalRecipe.recipeName}</ModalCardTitle>
                            <Delete
                                onClick={this.props.removeModal}
                            />
                        </ModalCardHeader>
                        <ModalCardBody>
                            <ul>
                                {this.props.modalRecipe.recipeIngred.map(ingredient => {
                                    return (
                                        <li>{ingredient}</li>
                                    )
                                })}
                            </ul>
                            <div>
                                <p>Fat:</p>
                                {this.props.modalRecipe.recipeFat}
                                <p>g</p>
                            </div>
                            <div>
                                <p>Carbs:</p>
                                {this.props.modalRecipe.recipeCarbs}
                                <p>g</p>
                            </div>
                            <div>
                                <p>Protien:</p>
                                {this.props.modalRecipe.recipePro}
                                <p>g</p>
                            </div>
                            <div>
                                <a href={this.props.modalRecipe.recipeUrl}
                                    target="_blank">
                                    View full recipe here!
                            </a>
                            </div>
                            <div>
                                {this.props.modalRecipe.recipeComment ? ("Comment: " + this.state.comment)
                                    : (<p></p>)}
                            </div>
                        </ModalCardBody>
                        <ModalCardFooter>
                            <Comment
                                handleFieldChange={this.handleFieldChange}
                                comment={this.state.comment}
                                showCommentForm={this.showCommentForm}
                                commentForm={this.state.commentForm}
                                modalRecipe={this.props.modalRecipe}
                                addComment={this.addComment}
                            />
                            <Rating
                                recipe={this.props.recipe}
                                modalRecipe={this.props.modalRecipe}
                                onStarClick={this.onStarClick}
                                rating={this.state.rating}
                                comment={this.state.comment}
                                addComment={this.addComment}
                                handleFieldChange={this.handleFieldChange}
                            />

                        </ModalCardFooter>
                    </ModalCard>
                </Modal>
            </React.Fragment>
        )
    }
}