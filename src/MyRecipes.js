import React, { Component } from "react"
import { Container, Box, Button, Image, Card, CardContent, CardFooter, CardHeader, CardHeaderIcon, CardHeaderTitle, CardImage, Icon, Media, MediaLeft, MediaContent, Subtitle, Title, Content } from 'bloomer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import DatabaseModal from "./DatabaseModal"
import APIController from "./APIController"
import Sorter from "./Sorter"


library.add(faWindowClose)

export default class MyRecipes extends Component {

    state = {
        modal: false,
        modalType: "myrecipes",
        modalRecipe: {},
        MyRecipes: [],
        Dropdown: false,
        SortMacro: "",
        SortDirection: ""
    }

    componentDidMount() {
        let currentUserId = this.props.currentUserId
        fetch(`http://localhost:5002/recipes?userId=${currentUserId}`)
            .then(a => a.json())
            .then((myRecipes) => {
                this.setState({
                    MyRecipes: myRecipes
                })
                // console.log("state: MyRecipes", this.state.MyRecipes)
            })
    }

    recipeView = (recipeId) => {
        const individualRecipe = this.state.MyRecipes.find(recipe => recipe.id === recipeId);
        console.log("individual recipe", individualRecipe)
        this.setState({
            modalRecipe: individualRecipe,
            modal: true
        })
        // APIController.getOneRecipe(individualRecipe.recipeId).then((recipeCard) => {
        //     this.setState({
        //         recipeId: recipeId,
        //         ingredientLines: [""],
        //         modal: true
        //     })
        // })
    }

    removeModal = () => {
        this.setState({
            modal: false
        })
    }

    deleteRecipe = (recipeId) => {
        console.log("recipeId", recipeId)
        APIController.deleteRecipe(recipeId).then(() => {
            APIController.getData("recipes")
                .then((myRecipes) => {
                    this.setState({
                        MyRecipes: myRecipes
                    })
                    // console.log("state: MyRecipes", this.state.MyRecipes)
                })
        })
    }

    // this.setState

    sortByMacro = (macro, dir) => {
        let currentUserId = this.props.currentUserId
        fetch(`http://localhost:5002/recipes?userId=${currentUserId}&_sort=${macro}&_order=${dir}`)
            .then(a => a.json())
            .then((myRecipes) => {
                this.setState({
                    MyRecipes: myRecipes
                })
            }).then(console.log(this.state.MyRecipes))
    }

    render() {
        return (
            <React.Fragment>

                <React.Fragment>
                    <Box id="test">
                        <Sorter
                            handleSelect={this.props.handleSelect}
                            sortByKey={this.sortByMacro}
                        />
                        {this.state.MyRecipes.map(recipe => {
                            return (
                                <React.Fragment>
                                    <Card
                                        id="my-recipes"
                                        className="card">
                                        <CardHeader className="cardheader">
                                            <CardHeaderTitle className="headerTitle">
                                                {recipe.recipeName}
                                            </CardHeaderTitle>
                                            <Button
                                                isColor="danger"
                                                onClick={() => this.deleteRecipe(recipe.id)}
                                                id="delete">
                                                <FontAwesomeIcon icon={faWindowClose} />
                                            </Button>
                                        </CardHeader>
                                        <CardImage>
                                            {/* <Image isRatio='4:3' src='https://via.placeholder.com/1280x960' /> */}
                                        </CardImage>
                                        <CardContent onClick={() => this.recipeView(recipe.id)}
                                            className="cardcontent">
                                            <Media>
                                                <MediaLeft>
                                                    <Image isRatio='48x48' src={recipe.recipeImage} />
                                                </MediaLeft>
                                                <MediaContent>
                                                    <span className="nutrition-flex">
                                                        <div className="nutrition-item">
                                                            <Title isSize={5}>Protien:</Title>
                                                            {`${recipe.recipePro}g`}
                                                        </div>
                                                        <div className="nutrition-item">
                                                            <Title isSize={5}>Fat:</Title>
                                                            {`${recipe.recipeFat}g`}
                                                        </div>
                                                        <div className="nutrition-item">
                                                            <Title isSize={5}>Carbs:</Title>
                                                            {`${recipe.recipeCarbs}g`}
                                                        </div>
                                                    </span>
                                                </MediaContent>
                                            </Media>
                                        </CardContent>

                                    </Card>

                                </React.Fragment>
                            )

                        })}
                    </Box>
                    {this.state.modal ? (
                        <DatabaseModal
                            removeModal={this.removeModal}
                            modalRecipe={this.state.modalRecipe}
                            isActive={this.isActive}
                        // handleFieldChange={this.props.handleFieldChange}
                        // ingredientLines={this.state.ingredientLines}
                        />
                    ) : (<p></p>)}
                </React.Fragment>
            </React.Fragment>
        )
    }
}