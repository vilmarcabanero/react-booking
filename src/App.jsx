import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCourses } from 'store/actions/courses';
import { getPosts } from 'store/actions/posts';
import Course from 'components/Course/index';
// import Posts from 'components/Post'
import Banner from 'components/Banner';
import Highlights from 'components/Highlights';
import { Container } from 'react-bootstrap';

const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getCourses());
		dispatch(getPosts());
		
	}, [dispatch]);

	let data = {
		title: 'Zuitt Coding Bootcamp',
		description: 'A cost-efficient, cost-effective coding bootcamp',
		motto: 'Opportunities for everyone, everywhere.',
		label: 'View Our Courses',
	};

	let myBookingApp = {
		title: 'Entropiya',
		description: 'Online courses for board exam.',
		motto: 'Quality yet affordable review for all.',
		label: 'See Our Courses',
	};

	let courses = [
		{
			id: 'wdc001',
			name: 'PHP-Laravel',
			description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. ',
			price: 45000,
			onOffer: true,
		},
		{
			id: 'wdc002',
			name: 'Python-Django',
			description:
				'Sapiente quae ut eum vero incidunt rerum repudiandae, asperiores?',
			price: 50000,
			onOffer: true,
		},
		{
			id: 'wdc003',
			name: 'Java-Springboot',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			price: 55000,
			onOffer: true,
		},
	];

	return (
		<Container>
			<Banner data={data} />
			<Highlights />
			<Course courses={courses} />
			{/* <Posts /> */}
		</Container>
	);
};

export default App;
