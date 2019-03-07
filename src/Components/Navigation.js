import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { register } from '../serviceWorker';

export default class Navigation extends Component {
    render() {
        return (
            <Navbar className="nav" bg="light" expand="lg" fixed="top">
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">About</Nav.Link>
                        <Nav.Link href="#link">My Work</Nav.Link>
                        <Nav.Link href="#link">Blog</Nav.Link>
                        <Nav.Link href="#link">Contact</Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}