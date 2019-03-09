import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default class Navigation extends Component {
    render() {
        return (
            <Navbar className="nav" bg="dark" expand="lg" fixed="top" variant="dark">
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="nav-collapse">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home" className="nav-item">About</Nav.Link>
                        <Nav.Link href="#link" className="nav-item">My Work</Nav.Link>
                        <Nav.Link href="#link" className="nav-item">Blog</Nav.Link>
                        <Nav.Link href="#link" className="nav-item">Contact</Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}