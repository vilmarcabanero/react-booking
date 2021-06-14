import React from 'react';
import { useSelector } from 'react-redux';
import * as S from './styles';
import { Card, Col, Row } from 'react-bootstrap';

const Posts = () => {
	const posts = useSelector(state => state.posts);
	// console.log('Line 8',posts)

	return (
		<div>
			<Row>
				<S.Column>
					<S.Title>Posts</S.Title>
				</S.Column>
			</Row>
			<Row>
				{posts.map(post => (
					<S.Column key={post._id} xs={12} md={4}>
						<S.CardHighlight>
							<Card.Body>
								<Card.Title>
									<h4>{post.creator}</h4>
								</Card.Title>
								<Card.Title>
									{post.title}
								</Card.Title>
								<Card.Text>{post.message}</Card.Text>
							</Card.Body>
						</S.CardHighlight>
					</S.Column>
				))}
			</Row>
		</div>
	);
};

export default Posts;
