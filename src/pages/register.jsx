import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function Register() {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [mobileNo, setMobileNo] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPw] = useState('');

	return (
		<>
			<div>
				<h3 className='text-center'>Register</h3>
				<Form>
					<Form.Group>
						<Form.Label>First Name</Form.Label>
						<Form.Control
							type='text'
							placeholder='Enter First Name'
							value={firstName}
							onChange={e => setFirstName(e.target.value)}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Last Name</Form.Label>
						<Form.Control
							type='text'
							placeholder='Enter Last Name'
							value={lastName}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Email</Form.Label>
						<Form.Control type='text' placeholder='Enter Email' value={email} />
					</Form.Group>
					<Form.Group>
						<Form.Label>Mobile Number</Form.Label>
						<Form.Control
							type='number'
							placeholder='Enter 11-digit mobile number'
							value={mobileNo}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Password</Form.Label>
						<Form.Control
							type='password'
							placeholder='Enter Password'
							value={password}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Confirm Password</Form.Label>
						<Form.Control
							type='password'
							placeholder='Confirm Password'
							value={confirmPassword}
						/>
					</Form.Group>
					<Button variant='primary' type='submit'>
						Submit
					</Button>
				</Form>
			</div>
		</>
	);
}
