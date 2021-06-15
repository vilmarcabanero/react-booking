import React, { useState } from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import * as S from './styles';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const Course = ({ course }) => {
	const [count, setCount] = useState(0);
	const [seat, setSeat] = useState(30);
	const [isActive, setIsActive] = useState(true)

	const { name, description, price } = course;
	
	const MySwal = withReactContent(Swal);

	const enroll = () => {
		if (seat > 0) {
			setSeat(prevSeat => prevSeat - 1);
			setCount(prevCount => prevCount + 1);
		} else {
			setSeat(0);
			setIsActive(false)
			MySwal.fire({
				title: <p>Hello World</p>,
				footer: 'Copyright 2018',
				didOpen: () => {
					// `MySwal` is a subclass of `Swal`
					//   with all the same instance & static methods
					MySwal.clickConfirm();
				},
			}).then(() => {
				return MySwal.fire(<p>Not enough seats.</p>);
			});
		}
	};

	



	return (
		<S.CardHighlight>
			<Card.Body>
				<Card.Title>
					<h4>{name}</h4>
				</Card.Title>
				<Card.Text>{description}</Card.Text>
				<Card.Text>Price:&nbsp;{price}</Card.Text>
				<Card.Text>
					{count === 0 ? 'No Enrollees Yet.' : `Enrollees: ${count}`}
				</Card.Text>
				<Card.Text>
					{seat === 0 ? 'No More Seates Available' : `Seats available: ${seat}`}
				</Card.Text>
				<Button variant='primary' onClick={enroll}>
					Enroll
				</Button>
			</Card.Body>
		</S.CardHighlight>
	);
};

export default Course;
