import React, { Component } from 'react'
import { Button, Navbar, Nav, Form, FormControl, Image, Link } from 'react-bootstrap';
import logo from '../images/logo.svg';

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar sticky={0 | 0} className='navbar sticky-top position-relative' bg="dark" expand="lg">
                    <a href="/">
                        <Image className='logo' src={logo} />
                    </a>
                    <Navbar.Toggle aria-controls="basic-navbar-nav " />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto ">
                            <Nav.Link className='text-white' href="/">HOME</Nav.Link>
                            <Nav.Link className='text-white' href="about">ABOUT US</Nav.Link>
                            <Nav.Link className='text-white' href="projects">PROJECTS</Nav.Link>
                            <Nav.Link className='text-white' href="careers">CARRERS</Nav.Link>
                            <Nav.Link className='text-white' href="contactus">CONTACT US</Nav.Link>

                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-warning">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </>
        )
    }
}
