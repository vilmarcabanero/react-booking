import { combineReducers } from 'redux';
import courses from './reducers/courses';
import posts from './reducers/posts';

export default combineReducers({
	courses,
	posts,
	
});
