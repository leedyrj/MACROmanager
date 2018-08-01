import React, { Component } from "react"
import { Container, Box } from 'bloomer'
import Navigation from "./Nav/Navbar";
import HomeForm from "./HomeForm"
import SearchResults from "./SearchResults"
import APIController from ".//APIController"
import "./CSS/index.css"
import "./CSS/Collapsible.css"

export default class Home extends Component {

    // state = {
    //     ShowForm: true
    // }

    constructor(props) {
        super(props)
        this.state = {
            ProMin: "",
            ProMax: "",
            CarbMin: "",
            CarbMax: "",
            FatMin: "",
            FatMax: "",
            FoodType: "",
            IngredType: "",
            Dairy: false,
            Egg: false,
            Gluten: false,
            Peanut: false,
            Treenut: false,
            Seafood: false,
            Sesame: false,
            Soy: false,
            Sulfate: false,
            Wheat: false,
            Cuisine: "",
            Meal: "",
            ShowForm: true,
            recipes: []
        }
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this)
    }

    handleFieldChange = (e) => {
        const stateToChange = {}
        stateToChange[e.target.id] = e.target.value
        this.setState(stateToChange)
    }

    handleCheckboxChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSelect = (event) => {
        if (event.target.id === "Cuisine") {
            this.setState({
                Cuisine: event.target.value,
            })
        } else if (event.target.id === "Meal") {
            this.setState({
                Meal: event.target.value
            })
        }
    }

    submitForm = (e) => {
        e.preventDefault()
        APIController.getRecipes().then((recipes) => {
            this.setState({
                ShowForm: false,
                recipes: recipes
            })
        })
    }

    showForm = (e) => {
        e.preventDefault()
        this.setState({
            ShowForm: true
        })
    }

    // showResults = (e) => {
    //     this.setState({
    //         ShowForm: false
    //     })
    // }

    render() {
        if (this.state.ShowForm) {
            return (
                <React.Fragment>
                    <Navigation />
                    <Container>
                        <Box id="main-box">
                            <HomeForm
                                showResults={this.showResults}
                                handleFieldChange={this.handleFieldChange}
                                handleCheckboxChange={this.handleCheckboxChange}
                                handleSelect={this.handleSelect}
                                submitForm={this.submitForm}
                            />
                        </Box>
                    </Container>
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <Navigation />
                    <Container>
                        <Box id="main-box">
                            <SearchResults
                                showForm={this.showForm}
                                recipes={this.state.recipes} />
                        </Box>
                    </Container>
                </React.Fragment>
            )
        }
    }
}