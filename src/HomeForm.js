import React, { Component } from "react"
import { Label, Input, Select, Checkbox, Button } from 'bloomer'
import Collapsible from 'react-collapsible';


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

    render() {
        return (
            <React.Fragment>
                <form action="">
                    <Collapsible trigger="Macronutrients">
                        <Label>Protien</Label>
                        <Input
                            type="text"
                            id="ProMin"
                            placeholder='Min'
                            onChange={this.handleFieldChange}
                        />
                        <Input
                            type="text"
                            id="ProMax"
                            placeholder='Max'
                            onChange={this.handleFieldChange}
                        />

                        <Label>Carbohydrates</Label>
                        <Input
                            type="text"
                            id="CarbMin"
                            placeholder='Min'
                            onChange={this.handleFieldChange}
                        />
                        <Input
                            type="text"
                            id="CarbMax"
                            placeholder='Max'
                            onChange={this.handleFieldChange}
                        />

                        <Label>Fats</Label>
                        <Input
                            type="text"
                            id="FatMin"
                            placeholder='Min'
                            onChange={this.handleFieldChange}
                        />
                        <Input
                            type="text"
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
                            <option id="american"> American </option>
                            <option id="asian"> Asian </option>
                            <option id="italian"> Italian </option>
                            <option id="mexican"> Mexican </option>
                            <option id="southern"> Southern & Soul </option>
                            <option id="french"> French </option>
                            <option id="southwestern"> Southwestern </option>
                            <option id="bbq"> BBQ </option>
                            <option id="indian"> Indian </option>
                            <option id="chinese"> Chinese </option>
                            <option id="cajun"> Cajun & Creole </option>
                            <option id="english"> English </option>
                            <option id="mediterranian"> Mediterranian </option>
                            <option id="greek"> Greek </option>
                            <option id="spanish"> Spanish </option>
                            <option id="german"> German </option>
                            <option id="thai"> Thai </option>
                            <option id="moroccan"> Moroccan </option>
                            <option id="irish"> Irish </option>
                            <option id="japanese"> Japanese </option>
                            <option id="hawaiian"> Hawaiian </option>
                            <option id="swedish"> Swedish </option>
                            <option id="hungarian"> Hungarian </option>
                            <option id="portuguese"> Portuguese </option>
                            <option id="cuban"> Cuban </option>
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
                            <option id="breakfast"> Breakfast </option>
                            <option id="lunch"> Lunch </option>
                            <option id="dinner"> Dinner </option>
                            <option id="dessert"> Dessert </option>
                        </Select>
                    </Collapsible>
                    <Button
                        id="homeformsubmit"
                        type="submit"
                        onClick={this.props.showResults}>Submit</Button>
                </form>
            </React.Fragment>
        )
    }
}

