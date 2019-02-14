import React, { Component } from 'react';
import '../App.css';

import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

class Head extends Component{

    render() {

        return(
            <header className="menuHead"><Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">React-Crypto</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">Головна</Nav.Link>
                        <Nav.Link href="#pricing">Підписки</Nav.Link>
                        <NavDropdown title="Iнформація" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Про криптовалюти</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Контакти</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Про підписки</NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Реєстрація</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Авторизація
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            </header>
        )
    }

}

export default Head;
