import React, {Component} from 'react';
import {Navbar, NavLink} from "react-bootstrap";

export default class Header extends Component {
    render() {
        return (
            <Navbar fixed="top" bg="light" variant="light">
                    <NavLink href="/home">Home</NavLink>
                    <NavLink href="/about">About</NavLink>
                    <NavLink href="/before">Important Info</NavLink>
                    <NavLink href="/booking">Reservation</NavLink>
                    <NavLink href="/price">Price List</NavLink>
                    <NavLink href="/contact">Contact</NavLink>
                    <NavLink href="/shop">Shop</NavLink>
            </Navbar>

        );
    }
}
