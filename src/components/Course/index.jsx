import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import * as S from './styles';

const Course = ({ courses }) => {
  // console.log(courses)
	return (
		<div>
			<Row>
				<Col>
					<S.Title>Courses</S.Title>
				</Col>
			</Row>
			<Row>
				{courses.map(course => (
					<Col key={course.id} xs={12} md={4}>
						<S.CardHighlight>
							<Card.Body>
								<Card.Title>
									<h4>{course.name}</h4>
								</Card.Title>
								<Card.Text>{course.description}</Card.Text>
								<Card.Text>Price:&nbsp;{course.price}</Card.Text>
							</Card.Body>
						</S.CardHighlight>
					</Col>
				))}
			</Row>
		</div>
	);
};

export default Course;
