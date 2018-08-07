import React, { Component } from "react"
import { Container, Box, Button, Input } from 'bloomer'
import APIController from "./APIController";
import MyRecipes from "./MyRecipes";

export default class Comment extends Component {

    state = {
        comment: ""
    }

    // handleFieldChange = (e) => {
    //     const stateToChange = {}
    //     stateToChange[e.target.id] = e.target.value
    //     this.setState(stateToChange)
    // }

    // addComment = (e) => {
    //     e.preventDefault()
    //     this.props.MyRecipes.map(recipe => {
    //         if (recipe.recipeId === this.props.recipeId.id) {
    //             console.log("match", recipe.id)
    //             let id = recipe.id
    //             let body = {
    //                 recipeComment: this.props.comment
    //             }
    //             console.log("body", body)
    //             APIController.addComment(id, body)
    //                 .then(() => {
    //                     alert("Added Comment!")
    //                 }).then(() => {

    //                 })
    //         }

    //     });
    // }

    render() {
        if (this.props.commentForm) {
            return (
                <form onSubmit={this.props.addComment}>
                    <Input
                        type="text"
                        id="comment"
                        placeholder='Add Comment'
                        required
                        onChange={this.props.handleFieldChange}
                    />
                </form>
            )
        } else {
            return (
                <Button onClick={this.props.showCommentForm}>
                    Add Comment
                </Button>
            )
        }
    }
}