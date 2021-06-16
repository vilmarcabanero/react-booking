import React, { useState, useEffect } from 'react';
// import { Form } from 'react-bootstrap';
import { TextField, Button, FormControl, Card } from '@material-ui/core';
import useStyles from './styles';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import validator from 'validator';
import { motion } from 'framer-motion';

export default function RegisterPage() {
	const classes = useStyles();

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [mobileNo, setMobileNo] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPw] = useState('');
	const [error, setError] = useState('');

	const [isActive, setIsActive] = useState(true);

	const MySwal = withReactContent(Swal);
	const url = 'https://vc-booking-api.herokuapp.com/api';
	// const urlLocal = 'http://localhost:4000/api';

	// useEffect(() => {
	// 	if (
	// 		!firstName.trim('').length &&
	// 		!lastName.trim('').length &&
	// 		!email.trim('').length &&
	// 		!mobileNo.trim('').length &&
	// 		!password.trim('').length &&
	// 		!confirmPassword.trim('').length
	// 	) {
	// 		setIsActive(true);
	// 	} else {
	// 		setIsActive(false)
	// 	}

	// 	if (mobileNo.length < 11 || mobileNo.length > 11) {
	// 		setIsActive(false);
	// 	} else {
	// 		setIsActive(true);
	// 	}

	// 	if (password.length < 8) {
	// 		setIsActive(false);
	// 	} else {
	// 		setIsActive(true);
	// 	}

	// 	if (password !== confirmPassword) {
	// 		setIsActive(false);
	// 	} else {
	// 		setIsActive(true);
	// 	}
	// }, [mobileNo, password, confirmPassword]);

	useEffect(() => {
		if (
			firstName !== '' &&
			lastName !== '' &&
			email !== '' &&
			mobileNo !== '' &&
			password !== '' &&
			confirmPassword !== '' &&
			mobileNo.length === 11 &&
			password === confirmPassword
		) {
			setIsActive(true);
		} else {
			setIsActive(false);
		}

		if (!firstName.trim('').length) {
			setError('Please provide a first name.');
		} else if (!lastName.trim('').length) {
			setError('Please provide a last name.');
		} else if (!email.trim('').length) {
			setError('Please provide an email.');
		} else if (!validator.isEmail(email)) {
			setError('Please provide a valid email.');
		} else if (!mobileNo.trim('').length) {
			setError('Please provide a mobile number.');
		} else if (mobileNo.trim('').length !== 11) {
			setError('Mobile number must be 11 digits.');
		} else if (!password.trim('').length) {
			setError('Please provide a password.');
		} else if (password.length < 8) {
			setError('Password must be at least 8 characters long.');
			// console.log(error);
		} else if (password !== confirmPassword) {
			setError('Passwords do not match.');
		} else {
			setError('');
		}
	}, [mobileNo, password, confirmPassword, email, firstName, lastName]);

	const registerUser = e => {
		e.preventDefault();
		// MySwal.fire({
		// 	title: <p>Hello World</p>,
		// 	footer: 'Copyright 2018',
		// 	didOpen: () => {
		// 		// `MySwal` is a subclass of `Swal`
		// 		//   with all the same instance & static methods
		// 		MySwal.clickConfirm();
		// 	},
		// }).then(() => {
		// 	return MySwal.fire(<p>Thank you for registering!</p>);
		// });

		fetch(`${url}/users`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				firstName: firstName,
				lastName: lastName,
				email: email,
				password: password,
				confirmPassword: confirmPassword,
				mobileNo: mobileNo,
			}),
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);

				if (data.isSuccessful) {
					Swal.fire({
						icon: 'success',
						title: 'Registered Successfully.',
						text: data.message,
					});
					clear();
				} else {
					Swal.fire({
						icon: 'error',
						title: 'Failed to register.',
						text: data.message,
					});
				}
			})
			.catch(err => console.log(err.message));
	};

	const clear = () => {
		setFirstName('');
		setLastName('');
		setEmail('');
		setMobileNo('');
		setPassword('');
		setConfirmPw('');
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 1 }}
		>
			<div className='text-center'>
				<Card className={classes.card}>
					<h3>Register</h3>
					<form className={classes.root} onSubmit={registerUser}>
						<TextField
							type='text'
							size='small'
							required
							variant='outlined'
							label='Enter First Name'
							value={firstName}
							onChange={e => setFirstName(e.target.value)}
						/>

						<TextField
							type='text'
							size='small'
							required
							variant='outlined'
							label='Enter Last Name'
							value={lastName}
							onChange={e => setLastName(e.target.value)}
						/>

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
							type='number'
							size='small'
							required
							variant='outlined'
							label='Enter 11-digit mobile number'
							value={mobileNo}
							onChange={e => setMobileNo(e.target.value)}
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

						<TextField
							type='password'
							size='small'
							required
							variant='outlined'
							label='Confirm Password'
							value={confirmPassword}
							onChange={e => setConfirmPw(e.target.value)}
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
