import * as api from 'redux/api/courses';
import * as c from 'utils/constants.redux';

export const getCourses = () => async dispatch => {
	try {
		const { data } = await api.getCourses();
		dispatch({ type: c.FETCH_ALL, payload: data });
		// console.log('Line 8',data)
	} catch (err) {
		console.log(err);
	}
};
