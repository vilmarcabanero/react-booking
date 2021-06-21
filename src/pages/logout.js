import React, { useContext } from 'react';
import UserContext from 'context/user';
import { Redirect } from 'react-router-dom';

export default function Logout() {
	const { user, setUser, unsetUser } = useContext(UserContext);
	console.log(user);

	unsetUser();

  

	setUser({
		email: null,
		isAdmin: null,
	});

	return <Redirect to='/login' />;
}

// sa logout component to

// const unsetUser = () => {
//   localStorage.clear();
// };

// sa app.js to
