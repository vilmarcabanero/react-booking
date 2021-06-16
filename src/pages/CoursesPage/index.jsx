import React, { useState, useEffect } from 'react';
// import courses from 'data/courses.data';
import Course from 'components/Course';
import { motion } from 'framer-motion';
import { CircularProgress } from '@material-ui/core';
import { Row, Col } from 'react-bootstrap';

const CoursesPage = () => {
	// console.log(Course);

	const [activeCourses, setActiveCourses] = useState([]);

	const url = 'https://vc-booking-api.herokuapp.com/api';

	useEffect(() => {
		fetch(`${url}/courses/active`)
			.then(res => res.json())
			.then(data => {
				setActiveCourses(data);
			})
			.catch(err => console.log(err));
	}, []);

	console.log(activeCourses);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 1 }}
		>
			<div className='mt-5 mb-4'>
				<h2 className='text-center mb-0'>Courses </h2>
				<Row>
					{!activeCourses.length ? (
						<CircularProgress
							style={{
								color: '#1A73E8',
								marginLeft: '2rem',
								marginTop: '1rem',
							}}
						/>
					) : (
						activeCourses.map(course => (
							<Col key={course._id} xs={12} md={4} className='mt-3'>
								<Course course={course} id={course._id} />
							</Col>
						))
					)}
				</Row>
			</div>
		</motion.div>
	);
};

export default CoursesPage;
