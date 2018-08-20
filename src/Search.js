import React, { Component } from "react"
import { Container, Box, Button, Input } from 'bloomer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import APIController from "./APIController";
import MyRecipes from "./MyRecipes";

library.add(faSearch)


export default class Search extends Component {

    render() {
        return (
            <React.Fragment>
                <div id="search">
                    <Input
                        type="text"
                        id="SearchItem"
                        placeholder="Search..."
                        // required
                        onChange={this.props.handleSearchField}
                    />
                </div>
                <Button
                    className="yellow-button"
                    id="search-button"
                    onClick={this.props.searchRecipes}>
                    Search
            </Button>

            </React.Fragment>
        )
    }
}