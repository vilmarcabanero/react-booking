import React from 'react';
import { Jumbotron, Button, Row, Col } from 'react-bootstrap';

const Banner = ({ data }) => {
	const { title, description, motto, label } = data;

	return (
		<div>
			<Row>
				<Col>
					<Jumbotron>
						<h1>{title}</h1>
						<p>{description}</p>
						<p>{motto}</p>
						<Button variant='primary'>{label}</Button>
					</Jumbotron>
				</Col>
			</Row>
		</div>
	);
};

export default Banner;
