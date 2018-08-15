import React, { Component } from "react"
import { Tabs, TabList, TabLink, Icon, Tab, DropdownMenu, DropdownTrigger, Dropdown, Button, DropdownContent, DropdownDivider, DropdownItem } from 'bloomer'
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
                <Dropdown isHoverable>
                    <DropdownTrigger>
                        <Button isOutlined aria-haspopup="true" aria-controls="dropdown-menu">
                            <span>Sort by Macro</span>
                            <Icon icon="angle-down" isSize="small" />
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu>
                        <DropdownContent>
                            <DropdownItem href="#" isHoverable>Protien</DropdownItem>
                            <DropdownDivider />
                            <DropdownItem href="#" isHoverable>Carbs</DropdownItem>
                            <DropdownDivider />
                            <DropdownItem href="#" isHoverable>Fat</DropdownItem>
                        </DropdownContent>
                    </DropdownMenu>
                </Dropdown>

                <Dropdown isHoverable>
                    <DropdownTrigger>
                        <Button isOutlined aria-haspopup="true" aria-controls="dropdown-menu">
                            <span>Sort by Amount</span>
                            <Icon icon="angle-down" isSize="small" />
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu>
                        <DropdownContent>
                            <DropdownItem href="#" isHoverable>
                                <FontAwesomeIcon icon={faArrowUp} /> High to Low</DropdownItem>
                            <DropdownDivider />
                            <DropdownItem href="#" isHoverable>
                                <FontAwesomeIcon icon={faArrowDown} /> Low to High</DropdownItem>
                        </DropdownContent>
                    </DropdownMenu>
                </Dropdown>

                <Button onClick={this.props.sortByKey}>Sort</Button>
            </React.Fragment>

        )
    }
}