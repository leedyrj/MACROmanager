import React, { Component } from "react"
import { Container, Box, Button, Input } from 'bloomer'

export default class Comment extends Component {

    render() {
        if (this.props.commentForm) {
            return (
                <Input
                    type="text"
                    id="comment"
                    placeholder='Add Comment'
                    // required
                    onChange={this.props.handleFieldChange}
                />
            )
        } else {
            return (
                <Button onClick={this.props.showCommmentForm}>
                    Add Comment
                </Button>
            )
        }
    }
}