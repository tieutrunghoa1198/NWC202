import React, { Component } from 'react'
import { 
    Navbar,
    Nav
} from 'react-bootstrap'
export default class NavBar extends Component {
    render() {
        return (
            <Navbar bg="light" expand="sm">
                <Navbar.Brand href="/">Voice Bot</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
