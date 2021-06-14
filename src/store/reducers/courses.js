import * as c from 'utils/constants.redux';

const reducer = (courses = [], action) => {
	switch (action.type) {
		case c.FETCH_ALL:
			return action.payload;
		default:
			return courses;
	}
};

export default reducer;
