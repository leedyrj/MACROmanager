import React, { Component } from "react"
import { Modal, ModalBackground, ModalCard, ModalCardHeader, ModalCardTitle, Delete, ModalCardBody, ModalCardFooter, Button, Image, Box } from 'bloomer'

export default class RecipeModal extends Component {
    state = {
        ingredientLines: []
    }

    componentDidMount() {
        this.setState({
            ingredientLines: this.props.recipeId.ingredientLines
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
                            <Image isSize="128x128" src={this.props.recipeId.images.hostedSmallUrl} />
                            {console.log(this.props.recipeId.nutritionEstimates)}
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
                            <Button isColor='success'>Save</Button>
                            <Button
                                isColor='warning'
                                onClick={this.props.removeModal}>Cancel</Button>
                        </ModalCardFooter>
                    </ModalCard>
                </Modal>
            </React.Fragment>
        )
    }
}
