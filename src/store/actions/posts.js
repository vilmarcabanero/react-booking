import * as api from 'store/api/posts';
import * as c from 'utils/constants.redux';

export const getPosts = () => async dispatch => {
	try {
		const { data } = await api.getPosts();
		dispatch({ type: c.FETCH_POSTS, payload: data });
		// console.log('Line 8',data)
	} catch (err) {
		console.log(err);
	}
};
