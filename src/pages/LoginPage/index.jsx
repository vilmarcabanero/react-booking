import React, { useState, useEffect, useContext } from 'react';
// import { Form } from 'react-bootstrap';
import { TextField, Button, Card } from '@material-ui/core';
import useStyles from './styles';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import validator from 'validator';
import { motion } from 'framer-motion';
import { Redirect } from 'react-router-dom';
import UserContext from 'context/user';

export default function LoginPage() {
	const classes = useStyles();

	const { user, setUser } = useContext(UserContext);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [isActive, setIsActive] = useState(true);

	const [willRedirect, setWillRedirect] = useState(false);

	const url = 'https://vc-booking-api.herokuapp.com/api';
	// const urlLocal = 'http://localhost:4000/api'

	useEffect(() => {
		if (email !== '' && password !== '' && password.length > 8) {
			setIsActive(true);
		} else {
			setIsActive(false);
		}

		if (!email.trim('').length) {
			setError('Please provide an email.');
		} else if (!validator.isEmail(email)) {
			setError('Please provide a valid email.');
		} else if (!password.trim('').length) {
			setError('Please provide a password.');
		} else if (password.length < 8) {
			setError('Password must be at least 8 characters long.');
			// console.log(error);
		}
	}, [password, email]);

	const loginUser = e => {
		e.preventDefault();
		// alert('Thank you for logging in!');
		// MySwal.fire({
		// 	title: <p>Hello World</p>,
		// 	footer: 'Copyright 2018',
		// 	didOpen: () => {
		// 		// `MySwal` is a subclass of `Swal`
		// 		//   with all the same instance & static methods
		// 		MySwal.clickConfirm();
		// 	},
		// }).then(() => {
		// 	return MySwal.fire(<p>Thank you for logging in!</p>);
		// });

		fetch(`${url}/users/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: email,
				password: password,
			}),
		})
			.then(res => res.json())
			.then(data => {
				// console.log(data);

				localStorage.setItem('token', data.accessToken);
				console.log('Token from login page, data.accessToken', user.token);

				if (data.isSuccessful) {
					Swal.fire({
						icon: 'success',
						title: 'Logged In Successfully.',
						text: data.message,
					});
					clear();
				} else {
					Swal.fire({
						icon: 'error',
						title: 'Login failed.',
						text: data.message,
					});
				}

				if (data.isSuccessful) {
					fetch(`${url}/users`, {
						headers: {
							Authorization: `Bearer ${data.accessToken}`,
						},
					})
						.then(res => res.json())
						.then(data => {
							// console.log(data);

							localStorage.setItem('email', data.email);
							localStorage.setItem('isAdmin', data.isAdmin);

							setUser({
								token: localStorage.getItem('token'),
								email: data.email,
								isAdmin: data.isAdmin,
							});

							setWillRedirect(true);
						})
						.catch(err => console.log(err));
				} else {
					setWillRedirect(false);
				}
			})
			.catch(err => console.log(err));
	};

	const clear = () => {
		setEmail('');
		setPassword('');
	};

	return willRedirect ? (
		<Redirect to='/courses' />
	) : (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 1 }}
		>
			<div className='text-center'>
				<Card className={classes.card}>
					<form className={classes.form} onSubmit={loginUser}>
						<h3 className={classes.title}>Login</h3>
						<TextField
							type='email'
							size='small'
							required
							variant='outlined'
							label='Enter Email'
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>

						<TextField
							type='password'
							size='small'
							required
							variant='outlined'
							label='Enter Password'
							value={password}
							onChange={e => setPassword(e.target.value)}
						/>

						{isActive ? (
							<Button
								className={classes.button}
								variant='contained'
								color='primary'
								type='submit'
							>
								Submit
							</Button>
						) : (
							<Button
								className={classes.button}
								variant='contained'
								color='primary'
								type='submit'
								disabled
							>
								Submit
							</Button>
						)}
					</form>

					<div className={classes.errorContainer}>
						{!isActive && <p className={classes.error}>{error}</p>}
					</div>
				</Card>
			</div>
		</motion.div>
	);
}
