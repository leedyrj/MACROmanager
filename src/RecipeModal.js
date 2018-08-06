import React, { Component } from "react"
import { Modal, ModalBackground, ModalCard, ModalCardHeader, ModalCardTitle, Delete, ModalCardBody, ModalCardFooter, Button, Input, Box } from 'bloomer'
import APIController from "./APIController"
import Comment from "./Comment"

export default class RecipeModal extends Component {
    state = {
        ingredientLines: [],
        commentForm: false
    }

    componentDidMount() {
        this.setState({
            ingredientLines: this.props.recipeId.ingredientLines
        })
    }

    saveRecipe = () => {
        let body = {
            "recipeName": this.props.recipeId.name,
            "recipeId": this.props.recipeId.id,
            "recipeComment": "",
            "recipeUrl": "",
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
                            {this.props.recipeId.nutritionEstimates.map(things => {
                                {/* console.log(things) */ }
                                for (let stuff in things) {
                                    {/* console.log(things[stuff]) */ }
                                }
                            })}
                            {console.log(this.props.recipeId.ingredientLines)}
                            <ul>
                                {this.props.recipeId.ingredientLines.map(ingredient => {
                                    return (
                                        <li>{ingredient}</li>
                                    )
                                })}
                            </ul>
                        </ModalCardBody>
                        <ModalCardFooter>
                            {this.props.modalType === "search" ? (
                                <Button
                                    isColor='success'
                                    onClick={this.saveRecipe}>Save for Later</Button>
                            ) : (<Comment
                                handleFieldChange={this.props.handleFieldChange}
                                showCommentForm={this.showCommentForm}
                                commentForm={this.state.commentForm}
                            />)}

                        </ModalCardFooter>
                    </ModalCard>
                </Modal>
            </React.Fragment>
        )
    }
}
