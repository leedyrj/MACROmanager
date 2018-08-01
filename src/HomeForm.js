import React, { Component } from "react"
import { Label, Input, Select, Checkbox, Button } from 'bloomer'
import Collapsible from 'react-collapsible';
import APIController from "./APIController"


export default class HomeForm extends Component {

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
            Meal: ""
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
            console.log(recipes)
        }).then(() => {
            // this.props.showResults()
        })
    }

    render() {
        return (
            <React.Fragment>
                <form action="">
                    <Collapsible trigger="Macronutrients">
                        <Label>Protien</Label>
                        <Input
                            type="number"
                            id="ProMin"
                            placeholder='Min'
                            onChange={this.handleFieldChange}
                        />
                        <Input
                            type="number"
                            id="ProMax"
                            placeholder='Max'
                            onChange={this.handleFieldChange}
                        />

                        <Label>Carbohydrates</Label>
                        <Input
                            type="number"
                            id="CarbMin"
                            placeholder='Min'
                            onChange={this.handleFieldChange}
                        />
                        <Input
                            type="number"
                            id="CarbMax"
                            placeholder='Max'
                            onChange={this.handleFieldChange}
                        />

                        <Label>Fats</Label>
                        <Input
                            type="number"
                            id="FatMin"
                            placeholder='Min'
                            onChange={this.handleFieldChange}
                        />
                        <Input
                            type="number"
                            id="FatMax"
                            placeholder='Max'
                            onChange={this.handleFieldChange}
                        />
                    </Collapsible>

                    <Collapsible trigger="Food">
                        <Input
                            type="text"
                            id="FoodType"
                            placeholder='What do you want to eat?'
                            onChange={this.handleFieldChange}
                        />
                    </Collapsible>

                    <Collapsible trigger="Ingredients">
                        <Input
                            type="text"
                            id="IngredType"
                            placeholder='What do you want in it?'
                            onChange={this.handleFieldChange}
                        />
                    </Collapsible>

                    <Collapsible trigger="I'm alergic to...">
                        <Checkbox
                            addClass="Alergy"
                            name="Dairy"
                            id="Dairy"
                            onClick={this.handleCheckboxChange}
                        > Dairy </Checkbox>
                        <Checkbox
                            addClass="Alergy"
                            name="Egg"
                            id="Egg"
                            onClick={this.handleCheckboxChange}
                        > Egg </Checkbox>
                        <Checkbox
                            addClass="Alergy"
                            name="Gluten"
                            id="Gluten"
                            onClick={this.handleCheckboxChange}
                        > Gluten </Checkbox>
                        <Checkbox
                            addClass="Alergy"
                            name="Peanut"
                            id="Peanut"
                            onClick={this.handleCheckboxChange}
                        > Peanut </Checkbox>
                        <Checkbox
                            addClass="Alergy"
                            name="Treenut"
                            id="Treenut"
                            onClick={this.handleCheckboxChange}
                        > Tree Nut </Checkbox>
                        <Checkbox
                            addClass="Alergy"
                            name="Seafood"
                            id="Seafood"
                            onClick={this.handleCheckboxChange}
                        > Seafood </Checkbox>
                        <Checkbox
                            addClass="Alergy"
                            name="Sesame"
                            id="Sesame"
                            onClick={this.handleCheckboxChange}
                        > Sesame </Checkbox>
                        <Checkbox
                            addClass="Alergy"
                            name="Soy"
                            id="Soy"
                            onClick={this.handleCheckboxChange}
                        > Soy </Checkbox>
                        <Checkbox
                            addClass="Alergy"
                            name="Sulfate"
                            id="Sulfate"
                            onClick={this.handleCheckboxChange}
                        > Sulfate </Checkbox>
                        <Checkbox
                            addClass="Alergy"
                            name="Wheat"
                            id="Wheat"
                            onClick={this.handleCheckboxChange}
                        > Wheat </Checkbox>
                    </Collapsible>

                    <Collapsible trigger="I'm in the mood for...">
                        <Label>Select:</Label>
                        <Select
                            id="Cuisine"
                            name="Cuisine"
                            onChange={this.handleSelect}
                            value={this.state.value}>
                            <option disabled selected value> -- Select an option -- </option>
                            <option value="american"> American </option>
                            <option value="asian"> Asian </option>
                            <option value="italian"> Italian </option>
                            <option value="mexican"> Mexican </option>
                            <option value="southern"> Southern & Soul </option>
                            <option value="french"> French </option>
                            <option value="southwestern"> Southwestern </option>
                            <option value="bbq"> BBQ </option>
                            <option value="indian"> Indian </option>
                            <option value="chinese"> Chinese </option>
                            <option value="cajun"> Cajun & Creole </option>
                            <option value="english"> English </option>
                            <option value="mediterranian"> Mediterranian </option>
                            <option value="greek"> Greek </option>
                            <option value="spanish"> Spanish </option>
                            <option value="german"> German </option>
                            <option value="thai"> Thai </option>
                            <option value="moroccan"> Moroccan </option>
                            <option value="irish"> Irish </option>
                            <option value="japanese"> Japanese </option>
                            <option value="hawaiian"> Hawaiian </option>
                            <option value="swedish"> Swedish </option>
                            <option value="hungarian"> Hungarian </option>
                            <option value="portuguese"> Portuguese </option>
                            <option value="cuban"> Cuban </option>
                        </Select>
                    </Collapsible>

                    <Collapsible trigger="It's time for...">
                        <Label>Select:</Label>
                        <Select
                            id="Meal"
                            name="Meal"
                            onChange={this.handleSelect}
                            value={this.state.value}>
                            <option disabled selected value> -- Select an option -- </option>
                            <option value="Breakfast and Brunch"> Breakfast </option>
                            <option value="Lunch and Snacks"> Lunch </option>
                            <option value="Main Dish"> Dinner </option>
                            <option value="Desserts"> Dessert </option>
                        </Select>
                    </Collapsible>

                    <Button
                        id="homeformsubmit"
                        type="submit"
                        onClick={this.submitForm}>Submit</Button>
                </form>
            </React.Fragment>
        )
    }
}

