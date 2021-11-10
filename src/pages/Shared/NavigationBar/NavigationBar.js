import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>BuzzX Bicycles</Navbar.Brand>
                    <Navbar.Toggle />
                    <NavbarCollapse className="justify-content-end">
                        <NavLink className="link" to="/home">Home</NavLink>
                        <NavLink className="link" to="/products">More Bikes</NavLink>



                    </NavbarCollapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;