import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarItem, Icon, NavbarBurger, NavbarMenu, NavbarStart, NavbarEnd, Image } from 'bloomer';
import 'bulma/css/bulma.css'
import "../CSS/Navbar.css";
import MACROmanagerText from "../Images/MACROmanager_text.png"
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
            <Navbar className="navbar">
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
                            onClick={this.props.showForm}
                            className="navbar-item">Home</NavbarItem>
                        <NavbarItem
                            href='#/'
                            onClick={this.props.showMyRecipes}
                            className="navbar-item">My Recipes</NavbarItem>
                    </NavbarStart>
                </NavbarMenu>
                <NavbarEnd>
                    <img src={MACROmanagerText}></img>
                    {/* <div class="canva-embed" data-height-ratio="1" data-design-id="DADAddguZjg" style="padding:100% 5px 5px 5px;background:rgba(0,0,0,0.03);border-radius:8px;"></div><script async src="https://sdk.canva.com/v1/embed.js"></script><a href="https://www.canva.com/design/DADAddguZjg/view?utm_content=DADAddguZjg&utm_campaign=designshare&utm_medium=embeds&utm_source=link" target="_blank">MACROmanager</a> by <a href="https://www.canva.com/RobertLeedy?utm_campaign=designshare&utm_medium=embeds&utm_source=link" target="_blank">Robert Leedy</a> */}
                </NavbarEnd>
            </Navbar>
        )
    }
}