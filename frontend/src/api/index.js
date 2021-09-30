// used to make api calls
import axios from 'axios';

// url for backend route
const url = 'http://localhost:5000/posts';

// call to url
export const fetchPosts = () => axios.get(url);

// adding redux capabilities for actions to backend