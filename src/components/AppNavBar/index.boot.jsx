import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';


const AppNavBar = () => {
	
	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand as={Link} to="/">React-Booking</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav"/>
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav.Link as={NavLink} to="/courses">Courses</Nav.Link>
        <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
        <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
			</Navbar.Collapse>

		</Navbar>
	);
};

export default AppNavBar;
