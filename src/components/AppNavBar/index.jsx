import React, { useContext, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useStyles from './styles';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import UserContext from 'context/user';
import { Redirect } from 'react-router-dom';

const AppNavBar = () => {
	const classes = useStyles();

	// console.log(useContext(UserContext));

	// const {userEmail, setUserEmail} = useContext(UserContext)

	const { user, setUser } = useContext(UserContext);

	const [willRedirect, setWillRedirect] = useState(false);

	// const user = useContext(UserContext)

	const logout = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('email');
		localStorage.removeItem('isAdmin');
		setWillRedirect(true);
	};

	console.log(user);
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
					<Nav.Link
						as={Link}
						style={{ color: '#fff' }}
						variant='h6'
						to='/'
						className={classes.title}
					>
						Course Booking
					</Nav.Link>

					<Nav.Link
						as={NavLink}
						style={{ color: '#fff' }}
						to={user.email ? '/courses' : '/login'}
					>
						Courses
					</Nav.Link>

					{!user.email && (
						<Nav.Link as={NavLink} style={{ color: '#fff' }} to='/login'>
							Login
						</Nav.Link>
					)}

					{!user.email && (
						<Nav.Link as={NavLink} style={{ color: '#fff' }} to='/register'>
							Register
						</Nav.Link>
					)}

					{!user.email ? null : (
						<Nav.Link as={NavLink} to='/logout' style={{ color: '#fff' }}>
							Logout
						</Nav.Link>
					)}
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default AppNavBar;
