import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCourses } from 'store/actions/courses';
import { getPosts } from 'store/actions/posts';
import Course from 'components/Course/index';
// import Posts from 'components/Post'
import courses from 'data/courses.data';
import { Container } from 'react-bootstrap';

// import Home from 'pages/home';
import Register from 'pages/Register/index';
import Login from 'pages/Login/index';

const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getCourses());
		dispatch(getPosts());
	}, [dispatch]);

	let myBookingApp = {
		title: 'Entropiya',
		description: 'Online courses for board exam.',
		motto: 'Quality yet affordable review for all.',
		label: 'See Our Courses',
	};

	let coursesComponents = courses.map(course => (
		<Course key={course.id} course={course} />
	));

	console.log();

	return (
		<Container>
			<Login />
			<Register />
		</Container>
	);
};

export default App;
