import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useStyles from './styles';
import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	IconButton,
} from '@material-ui/core';

import { Menu } from '@material-ui/icons';

const AppNavBar = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<AppBar position='static'>
				<Toolbar>
					{/* <IconButton
						edge='start'
						className={classes.menuButton}
						color='inherit'
						aria-label='menu'
					>
						<Menu />
					</IconButton> */}
					<Nav.Link as={Link} style={{ color: '#fff' }} variant='h6' to='/' className={classes.title}>
						Course Booking
					</Nav.Link>

					<Nav.Link as={NavLink} style={{ color: '#fff' }} to='/courses'>
						Courses
					</Nav.Link>
					<Nav.Link as={NavLink} style={{ color: '#fff' }} to='/login'>
						Login
					</Nav.Link>
					<Nav.Link as={NavLink} style={{ color: '#fff' }} to='/register'>
						Register
					</Nav.Link>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default AppNavBar;
