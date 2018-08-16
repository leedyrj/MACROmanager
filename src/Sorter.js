import React, { Component } from "react"
import { Tabs, TabList, TabLink, Icon, Tab, DropdownMenu, DropdownTrigger, Dropdown, Button, DropdownContent, DropdownDivider, DropdownItem, Select, Label } from 'bloomer'
import { Radio } from "../node_modules/bloomer/lib/elements/Form/Radio";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

library.add(faArrowDown)
library.add(faArrowUp)



export default class Sorter extends Component {

    render() {
        return (
            <React.Fragment>
                <Label>Select:</Label>
                <Select
                    id="sort-macro"
                    name="sort-macro"
                    onChange={this.props.handleSelect}
                    value={this.id}>
                    <option selected value> -- Select a Macro -- </option>
                    <option value="Protein"> Protein </option>
                    <option value="Carbs"> Carbs </option>
                    <option value="Fat"> Fat </option>
                </Select>

                <Label>Select:</Label>
                <Select
                    id="sort-direction"
                    name="sort-direction"
                    onChange={this.props.handleSelect}
                    value={this.id}>
                    <option selected value> -- Sort by -- </option>
                    <option value="hightolow">
                        <FontAwesomeIcon icon={faArrowDown} /> High to Low </option>
                    <option value="lowtohigh">
                        <FontAwesomeIcon icon={faArrowUp} /> Low to High </option>

                </Select>

                <Button onClick={this.props.sortByMacro}>Sort</Button>
            </React.Fragment>

        )
    }
}