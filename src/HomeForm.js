import React, { Component } from "react"
import { Form, Field, Label, Control, Input, Icon, Help, Select, TextArea, Checkbox, Radio, Button } from 'bloomer'
import Collapsible from 'react-collapsible';


export default class HomeForm extends Component {
    render() {
        return (
            <React.Fragment>
                <Collapsible trigger="Macronutrients">
                    <Label>Protien</Label>
                    <Input
                        type="text"
                        placeholder='Min'
                    />
                    <Input
                        type="text"
                        placeholder='Max'
                    />

                    <Label>Carbohydrates</Label>
                    <Input
                        type="text"
                        placeholder='Min'
                    />
                    <Input
                        type="text"
                        placeholder='Max'
                    />

                    <Label>Fats</Label>
                    <Input
                        type="text"
                        placeholder='Min'
                    />
                    <Input
                        type="text"
                        placeholder='Max'
                    />
                </Collapsible>

                <Collapsible trigger="Food">
                    <Input
                        type="text"
                        placeholder='What do you want to eat?'
                    />
                </Collapsible>

                <Collapsible trigger="Ingredients">
                    <Input
                        type="text"
                        placeholder='What do you want in it?'
                    />
                </Collapsible>

                <Collapsible trigger="I'm alergic to...">
                    <Checkbox> Dairy </Checkbox>
                    <Checkbox> Egg </Checkbox>
                    <Checkbox> Gluten </Checkbox>
                    <Checkbox> Peanut </Checkbox>
                    <Checkbox> Tree Nut </Checkbox>
                    <Checkbox> Seafood </Checkbox>
                    <Checkbox> Sesame </Checkbox>
                    <Checkbox> Soy </Checkbox>
                    <Checkbox> Sulfate </Checkbox>
                    <Checkbox> Wheat </Checkbox>
                </Collapsible>

                <Collapsible trigger="I'm in the mood for...">
                    <Checkbox> American </Checkbox>
                    <Checkbox> Asian </Checkbox>
                    <Checkbox> Italian </Checkbox>
                    <Checkbox> Mexican </Checkbox>
                    <Checkbox> Southern & Soul </Checkbox>
                    <Checkbox> French </Checkbox>
                    <Checkbox> Southwestern </Checkbox>
                    <Checkbox> BBQ </Checkbox>
                    <Checkbox> Indian </Checkbox>
                    <Checkbox> Chinese </Checkbox>
                    <Checkbox> Cajun & Creole </Checkbox>
                    <Checkbox> English </Checkbox>
                    <Checkbox> Mediterranian </Checkbox>
                    <Checkbox> Greek </Checkbox>
                    <Checkbox> Spanish </Checkbox>
                    <Checkbox> German </Checkbox>
                    <Checkbox> Thai </Checkbox>
                    <Checkbox> Moroccan </Checkbox>
                    <Checkbox> Irish </Checkbox>
                    <Checkbox> Japanese </Checkbox>
                    <Checkbox> Hawaiian </Checkbox>
                    <Checkbox> Swedish </Checkbox>
                    <Checkbox> Hungarian </Checkbox>
                    <Checkbox> Portuguese </Checkbox>
                    <Checkbox> Cuban </Checkbox>
                </Collapsible>

                <Collapsible trigger="It's time for...">
                    <Radio name="Breakfast"> Breakfast </Radio>
                    <Radio name="Lunch"> Lunch </Radio>
                    <Radio name="Dinner"> Dinner </Radio>
                    <Radio name="Dessert"> Dessert </Radio>
                </Collapsible>
                <Button>Submit</Button>
            </React.Fragment>
        )
    }
}

