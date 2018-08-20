import React, { Component } from "react"
import { Label, Input, Select, Checkbox, Button } from 'bloomer'
import Collapsible from 'react-collapsible';

export default class HomeForm extends Component {


    render() {
        return (
            <React.Fragment>
                <form>
                    <Collapsible trigger="Macronutrients">
                        <Label>Protein</Label>
                        <Input
                            className="input"
                            type="number"
                            id="ProMin"
                            placeholder='Min'
                            // required
                            onChange={this.props.handleFieldChange}
                        />
                        <Input
                            className="input"
                            type="number"
                            id="ProMax"
                            placeholder='Max'
                            // required
                            onChange={this.props.handleFieldChange}
                        />

                        <Label>Carbohydrates</Label>
                        <Input
                            className="input"
                            type="number"
                            id="CarbMin"
                            placeholder='Min'
                            // required
                            onChange={this.props.handleFieldChange}
                        />
                        <Input
                            className="input"
                            type="number"
                            id="CarbMax"
                            placeholder='Max'
                            // required
                            onChange={this.props.handleFieldChange}
                        />

                        <Label>Fats</Label>
                        <Input
                            className="input"
                            type="number"
                            id="FatMin"
                            placeholder='Min'
                            // required
                            onChange={this.props.handleFieldChange}
                        />
                        <Input
                            className="input"
                            type="number"
                            id="FatMax"
                            placeholder='Max'
                            // required
                            onChange={this.props.handleFieldChange}
                        />
                    </Collapsible>

                    <Collapsible trigger="Food">
                        <Input
                            className="input"
                            type="text"
                            id="FoodType"
                            placeholder='What do you want to eat?'
                            // required
                            onChange={this.props.handleFieldChange}
                        />
                    </Collapsible>

                    <Collapsible trigger="Ingredients">
                        <Input
                            className="input"
                            type="text"
                            id="IngredType"
                            placeholder='What do you want in it?'
                            // required
                            onChange={this.props.handleFieldChange}
                        />
                    </Collapsible>

                    {/* <Collapsible trigger="I'm alergic to...">
                        <Checkbox
                            addClass="Alergy"
                            name="Dairy"
                            id="Dairy"
                            onClick={this.props.handleCheckboxChange}
                        > Dairy </Checkbox>
                        <Checkbox
                            addClass="Alergy"
                            name="Egg"
                            id="Egg"
                            onClick={this.props.handleCheckboxChange}
                        > Egg </Checkbox>
                        <Checkbox
                            addClass="Alergy"
                            name="Gluten"
                            id="Gluten"
                            onClick={this.props.handleCheckboxChange}
                        > Gluten </Checkbox>
                        <Checkbox
                            addClass="Alergy"
                            name="Peanut"
                            id="Peanut"
                            onClick={this.props.handleCheckboxChange}
                        > Peanut </Checkbox>
                        <Checkbox
                            addClass="Alergy"
                            name="Treenut"
                            id="Treenut"
                            onClick={this.props.handleCheckboxChange}
                        > Tree Nut </Checkbox>
                        <Checkbox
                            addClass="Alergy"
                            name="Seafood"
                            id="Seafood"
                            onClick={this.props.handleCheckboxChange}
                        > Seafood </Checkbox>
                        <Checkbox
                            addClass="Alergy"
                            name="Sesame"
                            id="Sesame"
                            onClick={this.props.handleCheckboxChange}
                        > Sesame </Checkbox>
                        <Checkbox
                            addClass="Alergy"
                            name="Soy"
                            id="Soy"
                            onClick={this.props.handleCheckboxChange}
                        > Soy </Checkbox>
                        <Checkbox
                            addClass="Alergy"
                            name="Sulfate"
                            id="Sulfate"
                            onClick={this.props.handleCheckboxChange}
                        > Sulfate </Checkbox>
                        <Checkbox
                            addClass="Alergy"
                            name="Wheat"
                            id="Wheat"
                            onClick={this.props.handleCheckboxChange}
                        > Wheat </Checkbox>
                    </Collapsible> */}

                    <Collapsible trigger="I'm in the mood for...">
                        <Label>Select a Cuisine:</Label>
                        <Select
                            class="formselect"
                            id="Cuisine"
                            name="Cuisine"
                            onChange={this.props.handleSelect}
                            value={this.id}>
                            <option selected value> -- Select an option -- </option>
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
                        <Label>Select a Meal:</Label>
                        <Select
                            addClass="formselect"
                            id="Meal"
                            name="Meal"
                            onChange={this.props.handleSelect}
                            value={this.id}>
                            <option selected value> -- Select an option -- </option>
                            <option value="Breakfast and Brunch"> Breakfast </option>
                            <option value="Lunch and Snacks"> Lunch </option>
                            <option value="Main Dish"> Dinner </option>
                            <option value="Desserts"> Dessert </option>
                        </Select>
                    </Collapsible>

                    <Button
                        id="homeformsubmit"
                        className="yellow-button"
                        type="submit"
                        onClick={this.props.testForm}
                    >Submit</Button>
                </form>
            </React.Fragment >
        )
    }
}

