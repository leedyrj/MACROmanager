import React, { Component } from "react"
import { Container, Box, Button, Image, Card, CardContent, CardFooter, CardHeader, CardHeaderIcon, CardHeaderTitle, CardImage, Icon, Media, MediaLeft, MediaContent, Subtitle, Title, Content } from 'bloomer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import DatabaseModal from "./DatabaseModal"
import APIController from "./APIController"
import Sorter from "./Sorter"
import Search from "./Search"


library.add(faWindowClose)

export default class MyRecipes extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modal: false,
            modalType: "myrecipes",
            modalRecipe: {},
            MyRecipes: [],
            Dropdown: false,
            SortInfo: {
                SortMacro: "",
                SortDirection: ""
            },
            SearchItem: "",
            SearchRecipes: []
        }
        this.handleSort = this.handleSort.bind(this)
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

    handleSearchField = (e) => {
        const stateToChange = this.state
        stateToChange[e.target.id] = e.target.value
        console.log(e.target.id, e.target.value, stateToChange)
        this.setState({
            stateToChange
        })
    }

    handleSort = (event) => {
        const stateToChange = this.state.SortInfo
        const target = event.target
        const value = target.value
        const name = target.name
        if (event.target.id === "SortMacro") {
            stateToChange[name] = value
            this.setState({
                SortInfo: stateToChange,
            })
        } else if (event.target.id === "SortDirection") {
            stateToChange[name] = value
            this.setState({
                SortInfo: stateToChange
            })
        }
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

    sortByMacro = () => {
        let currentUserId = this.props.currentUserId
        let macro = this.state.SortInfo.SortMacro
        let direc = this.state.SortInfo.SortDirection
        let SearchItem = this.state.SearchItem
        if (this.state.SearchItem === "") {
            fetch(`http://localhost:5002/recipes?userId=${currentUserId}&_sort=${macro}&_order=${direc}`)
                .then(a => a.json())
                .then((myRecipes) => {
                    console.log("searchitem empty")
                    this.setState({
                        MyRecipes: myRecipes
                    })
                })
        } else {
            fetch(`http://localhost:5002/recipes?userId=${currentUserId}&q=${SearchItem}&_sort=${macro}&_order=${direc}`)
                .then(a => a.json())
                .then((myRecipes) => {
                    console.log("searchitem full")
                    console.log(myRecipes)
                    this.setState({
                        MyRecipes: myRecipes
                    })
                    console.log("state", this.state.MyRecipes)
                })
        }
    }

    searchRecipes = () => {
        let currentUserId = this.props.currentUserId
        let SearchItem = this.state.SearchItem
        let macro = this.state.SortInfo.SortMacro
        let direc = this.state.SortInfo.SortDirection
        if (this.state.SortInfo.SortDirection === "" || this.state.SortInfo.SortMacro === "") {
            fetch(`http://localhost:5002/recipes?userId=${currentUserId}&q=${SearchItem}`)
                .then(a => a.json())
                .then((myRecipes) => {
                    console.log("sortinfo full")
                    this.setState({
                        MyRecipes: myRecipes
                    })
                })
        } else {
            fetch(`http://localhost:5002/recipes?userId=${currentUserId}&q=${SearchItem}&_sort=${macro}&_order=${direc}`)
                .then(a => a.json())
                .then((myRecipes) => {
                    console.log("sortinfo empty")
                    this.setState({
                        MyRecipes: myRecipes
                    })
                })
        }
    }

    render() {
        return (
            <React.Fragment>

                <React.Fragment>
                    <Box
                        className="box"
                        id="my-recipes-box">
                        <div id="sorter">
                            <Sorter
                                handleSort={this.handleSort}
                                sortByMacro={this.sortByMacro}
                                SortInfo={this.state.SortInfo}
                            />
                            <Search
                                handleSearchField={this.handleSearchField}
                                searchRecipes={this.searchRecipes}
                            />
                        </div>
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
                                                            <Title isSize={5}>Protein:</Title>
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