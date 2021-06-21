import axios from 'axios';

const url = 'https://memoria-api.herokuapp.com/api';

export const getPosts = () => axios.get(`${url}/posts`);