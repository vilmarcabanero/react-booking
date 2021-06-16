import React, { useState, useEffect, useContext } from 'react';
// import courses from 'data/courses.data';
import Course from 'components/Course';
import { motion } from 'framer-motion';
import { CircularProgress } from '@material-ui/core';
import { Row, Col } from 'react-bootstrap';
import UserContext from 'context/user';

const CoursesPage = () => {
	// console.log(Course);

	const [activeCourses, setActiveCourses] = useState([]);
	const [allCourses, setAllCourses] = useState([]);
	const { user } = useContext(UserContext);

	const url = 'https://vc-booking-api.herokuapp.com/api';

	const getActiveCourses = () => {
		fetch(`${url}/courses/active`)
			.then(res => res.json())
			.then(data => {
				setActiveCourses(data);
			})
			.catch(err => console.log(err));
	};

	const getAllAdminCourses = () => {
		fetch(`${url}/courses`, {
			headers: {
				Authorization: `Bearer ${user.token}`,
			},
		})
			.then(res => res.json())
			.then(data => {
				setAllCourses(data);
				// console.log('Courses page line 36, data: ', data);
			})
			.catch(err => console.log(err));
	};

	useEffect(() => {
		getActiveCourses();
	}, []);

	useEffect(() => {
		fetch(`${url}/courses`, {
			headers: {
				Authorization: `Bearer ${user.token}`,
			},
		})
			.then(res => res.json())
			.then(data => {
				setAllCourses(data);
				console.log('Courses page line 54, data: ', data);
			})
			.catch(err => console.log(err));
	}, []);

	// console.log(activeCourses);

	// console.log(user);

	// console.log('Courses page all courses: ', allCourses);
	// console.log('Courses page user.token: ', user.token);
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 1 }}
		>
			<div className='mt-5 mb-4'>
				{!user.isAdmin && <h2 className='text-center mb-0'>Courses </h2>}

				{user.isAdmin && (
					<h2 className='text-center mb-0'>Courses Dashboard</h2>
				)}

				{user.isAdmin ? (
					<Row>
						{!allCourses.length ? (
							<CircularProgress
								style={{
									color: '#1A73E8',
									marginLeft: '2rem',
									marginTop: '1rem',
								}}
							/>
						) : (
							allCourses.map(course => (
								<Col key={course._id} xs={12} md={4} className='mt-3'>
									<Course course={course} id={course._id} />
								</Col>
							))
						)}
					</Row>
				) : (
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
				)}
			</div>
		</motion.div>
	);
};

export default CoursesPage;
