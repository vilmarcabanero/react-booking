import React from 'react';
import * as S from './styles';
import { Row, Col, Card } from 'react-bootstrap';

const Highlights = () => {
	return (
		<Row>
			<Col xs={12} md={4}>
				<S.CardHighlight>
					<Card.Body>
						<Card.Title>
							<h2>Learn From Home</h2>
						</Card.Title>
						<Card.Text>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
							assumenda facere commodi maiores nulla maxime totam nisi aliquam
							quisquam vero, ab nobis! Nulla pariatur laboriosam mollitia
							dolorum aperiam illum ipsam.
							
						</Card.Text>
					</Card.Body>
				</S.CardHighlight>
			</Col>
			<Col xs={12} md={4}>
				<S.CardHighlight>
					<Card.Body>
						<Card.Title>
							<h2>Study Now Pay Later</h2>
						</Card.Title>
						<Card.Text>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
							sapiente perspiciatis itaque, impedit aperiam facilis totam quasi
							magnam dolore, quaerat consectetur! Numquam aut assumenda neque
							iusto error quam odio culpa?
						</Card.Text>
					</Card.Body>
				</S.CardHighlight>
			</Col>
			<Col xs={12} md={4}>
				<S.CardHighlight>
					<Card.Body>
						<Card.Title>
							<h2>Be Part of Our Community</h2>
						</Card.Title>
						<Card.Text>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
							iusto quidem laudantium nulla illo eos exercitationem corporis
							sapiente dolorem, ex quas, expedita dolorum perspiciatis eveniet
							id magni consequatur laboriosam optio.
						</Card.Text>
					</Card.Body>
				</S.CardHighlight>
			</Col>
		</Row>
	);
};

export default Highlights;
