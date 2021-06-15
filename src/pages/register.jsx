import React, { useState, useEffect, Fragment } from 'react';
import { Form, Button } from 'react-bootstrap';

const Register = () => {
	const [test1, setTest1] = useState(0);
	const [test2, setTest2] = useState(0);

	useEffect(() => {
		console.log(
			'I am from the useEffect and I will run on initial render and when test2 state is updated.'
		);
	});

	const sample = () => {
		setTest1(test1 + 1);
	};

	const sample2 = () => {
		setTest2(test2 + 1);
	};

	console.log('Runs whenever test1 state is updated.');

	return (
		<Fragment>
			<h1>From the Register Page</h1>
			<Button variant='primary' onClick={sample}>
				Update test 1
			</Button>
			<br />
			<Button variant='warning' onClick={sample2}>
				Update test 2
			</Button>
		</Fragment>
	);
};

export default Register;
