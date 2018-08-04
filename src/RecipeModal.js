import React, { Component } from "react"
import { Modal, ModalBackground, ModalCard, ModalCardHeader, ModalCardTitle, Delete, ModalCardBody, ModalCardFooter, Button, Image, Box } from 'bloomer'
import APIController from "./APIController"

export default class RecipeModal extends Component {
    state = {
        ingredientLines: []
    }

    componentDidMount() {
        this.setState({
            ingredientLines: this.props.recipeId.ingredientLines
        })
    }

    saveRecipe = () => {
        let body = {
            "recipeName": this.props.recipeId.name,
            "recipeUrl": "",
            "recipeIngred": "",
            "recipePro": "",
            "recipeCarb": "",
            "recipeFat": ""
        }
        APIController.saveRecipe("recipes", body)
            .then(() => { })
        this.props.removeModal
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
                                console.log(things)
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
                            <Button
                                isColor='success'
                                onClick={this.saveRecipe}>Save for Later</Button>
                        </ModalCardFooter>
                    </ModalCard>
                </Modal>
            </React.Fragment>
        )
    }
}
