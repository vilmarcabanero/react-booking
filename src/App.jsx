import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCourses } from 'redux/actions/courses';
import { getPosts } from 'redux/actions/posts';
import Course from 'components/Course/index';
// import Posts from 'components/Post'
import courses from 'data/courses.data';
import { Container } from 'react-bootstrap';

import AppNavBarMUI from 'components/AppNavBar';
import AppNavBarBoot from 'components/AppNavBar/index.boot';
import HomePage from 'pages/home';
import RegisterPage from 'pages/RegisterPage/index';
import LoginPage from 'pages/LoginPage/index';
import CoursesPage from 'pages/CoursesPage';
import Logout from 'pages/logout';

import { UserProvider } from 'context/user';

const App = () => {
	const [user, setUser] = useState({
		email: localStorage.getItem('email'),
		isAdmin: Boolean(localStorage.getItem('isAdmin')),
		token: localStorage.getItem('token'),
	});
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getCourses());
		dispatch(getPosts());
	}, [dispatch]);

	// useEffect(() => {
	// 	setUserEmail(localStorage.getItem('email'));
	// }, []);

	let myBookingApp = {
		title: 'Entropiya',
		description: 'Online courses for board exam.',
		motto: 'Quality yet affordable review for all.',
		label: 'See Our Courses',
	};

	// console.log(user.isAdmin);

	const unsetUser = () => {
		localStorage.clear();
	};

	return (
		<UserProvider value={{ user, setUser, unsetUser }}>
			<AppNavBarMUI />
			{/* <AppNavBarBoot  /> */}
			<Container>
				{/* <Home />
			<LoginPage />
			<RegisterPage /> */}
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/courses' component={CoursesPage} />

					<Route exact path='/login' component={LoginPage} />
					<Route exact path='/register' component={RegisterPage} />
					<Route exact path='/logout' component={Logout} />
				</Switch>
			</Container>
		</UserProvider>
	);
};

export default App;
