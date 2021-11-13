import React from 'react';
import './NavigationBar.css'
import { Container, Navbar, Button } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const NavigationBar = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>BuzzX Bicycles</Navbar.Brand>
                    <Navbar.Toggle />
                    <NavbarCollapse className="justify-content-end">
                        <NavLink className="link" to="/home">Home</NavLink>
                        <NavLink className="link" to="/allProducts">More Cycles</NavLink>
                        {
                            user?.email && <NavLink className="link" to="/dashboard">Dashboard</NavLink>

                        }
                        {
                            user?.displayName && <span className="text-white me-2">{user.displayName} </span>
                        }
                        {
                            user?.email ? <Button onClick={logOut}>LogOut</Button> :
                                <NavLink className="link" to="/login">Login</NavLink>
                        }



                    </NavbarCollapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;