import React, { Component } from "react"
import { Modal, ModalBackground, ModalCard, ModalCardHeader, ModalCardTitle, Delete, ModalCardBody, ModalCardFooter, Button, Input, Box } from 'bloomer'
import APIController from "./APIController"
import Comment from "./Comment"

export default class RecipeModal extends Component {
    state = {
        ingredientLines: [],
        commentForm: false,
    }

    componentDidMount() {
        this.setState({
            ingredientLines: this.props.recipeId.ingredientLines
        })
    }

    saveRecipe = () => {
        let source = this.props.recipeId.source.map(source => {
            return (source.sourceSiteUrl)
        })
        let currentUser = this.props.currentUserId
        let body = {
            "userId": currentUser,
            "recipeName": this.props.recipeId.name,
            "recipeId": this.props.recipeId.id,
            "recipeUrl": source,
            "recipeIngred": "",
            "recipePro": "",
            "recipeCarb": "",
            "recipeFat": ""
        }
        APIController.saveRecipe("recipes", body)
            .then(() => {
                alert("Successfully added to My Recipes")
            })
    }



    showCommentForm = () => {
        this.setState({
            commentForm: true
        })
    }

    render() {
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
                            <div>
                                <p>Fat:</p>
                                {this.props.recipeId.nutritionEstimates.map(nutrition => {
                                    if (nutrition.attribute === "FAT") {
                                        return nutrition.value
                                    }
                                })}
                                <p>g</p>
                            </div>
                            <div>
                                <p>Carbs:</p>
                                {this.props.recipeId.nutritionEstimates.map(nutrition => {
                                    if (nutrition.attribute === "CHOCDF") {
                                        return nutrition.value
                                    }
                                })}
                                <p>g</p>
                            </div>
                            <div>
                                <p>Protien:</p>
                                {this.props.recipeId.nutritionEstimates.map(nutrition => {
                                    if (nutrition.attribute === "PROCNT") {
                                        return nutrition.value
                                    }
                                })}
                                <p>g</p>
                            </div>
                        </ModalCardBody>
                        <ModalCardFooter>
                            {this.props.modalType === "search" ? (
                                <Button
                                    isColor='success'
                                    onClick={this.saveRecipe}>Save for Later</Button>
                            ) : (<Comment
                                // handleFieldChange={this.props.handleFieldChange}
                                showCommentForm={this.showCommentForm}
                                commentForm={this.state.commentForm}
                                MyRecipes={this.props.MyRecipes}
                                recipeId={this.props.recipeId}
                            />)}

                        </ModalCardFooter>
                    </ModalCard>
                </Modal>
            </React.Fragment>
        )
    }
}
