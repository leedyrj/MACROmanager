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
                    id="SortMacro"
                    name="SortMacro"
                    onChange={this.props.handleSort}
                    value={this.id}>
                    <option selected value> -- Select a Macro -- </option>
                    <option value="recipePro"> Protein </option>
                    <option value="recipeCarbs"> Carbs </option>
                    <option value="recipeFat"> Fat </option>
                </Select>

                <Label>Select:</Label>
                <Select
                    id="SortDirection"
                    name="SortDirection"
                    onChange={this.props.handleSort}
                    value={this.id}>
                    <option selected value> -- Sort by -- </option>
                    <option value="desc">
                        <FontAwesomeIcon icon={faArrowDown} /> High to Low </option>
                    <option value="asc">
                        <FontAwesomeIcon icon={faArrowUp} /> Low to High </option>

                </Select>

                <Button
                    onClick={this.props.sortByMacro}
                    className="yellow-button">Sort</Button>
            </React.Fragment>

        )
    }
}