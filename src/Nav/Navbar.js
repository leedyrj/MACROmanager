import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarItem, Icon, NavbarBurger, NavbarMenu, NavbarStart } from 'bloomer';
import 'bulma/css/bulma.css'
import "../CSS/Navbar.css";
//import APIManager from "./../APIHandler";

export default class Navigation extends Component {
    state = {

    }

    render() {
        return (
            // <nav>
            //     <Link to="/">Home</Link>
            //     <Link to="/">My Recipes</Link>
            //     <Link to="/">Dictionary</Link>
            // </nav>
            <Navbar style={{ border: 'solid 1px #00D1B2', margin: '0' }}>
                <NavbarBrand>
                    <NavbarItem isHidden='desktop'>
                        <Icon className='fa fa-github' />
                    </NavbarItem>
                    <NavbarItem isHidden='desktop'>
                        <Icon className='fa fa-twitter' style={{ color: '#55acee' }} />
                    </NavbarItem>
                    <NavbarBurger isActive={this.state.isActive} onClick={this.onClickNav} />
                </NavbarBrand>
                <NavbarMenu isActive={this.state.isActive} onClick={this.onClickNav}>
                    <NavbarStart>
                        <NavbarItem
                            href='#/'
                            onClick={this.props.showForm}>Home</NavbarItem>
                        <NavbarItem
                            href='#/'
                            onClick={this.props.showMyRecipes}>My Recipes</NavbarItem>
                        <NavbarItem href='#/'>Dictionary</NavbarItem>
                    </NavbarStart>
                </NavbarMenu>
            </Navbar>
        )
    }
}