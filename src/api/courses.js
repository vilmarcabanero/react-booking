import axios from 'axios';

const url = 'https://vc-booking-api.herokuapp.com/api';

export const createCourse = async createCourseData => {
	try {
		const config = {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			},
		};

		const body = {
			name: createCourseData.name,
			description: createCourseData.description,
			price: createCourseData.price,
		};
		const { data } = await axios.post(`${url}/courses`, body, config);
	} catch (err) {
		console.log(err.response.data);
	}
};
