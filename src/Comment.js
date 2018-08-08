import React, { Component } from "react"
import { Container, Box, Button, Input } from 'bloomer'
import APIController from "./APIController";
import MyRecipes from "./MyRecipes";

export default class Comment extends Component {

    state = {
        // comment: ""
    }




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