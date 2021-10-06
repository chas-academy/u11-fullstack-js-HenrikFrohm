// used to make api calls
import axios from 'axios';

// url for backend route
const url = 'http://localhost:5000/posts';

// call to url
export const fetchPosts = () => axios.get(url);

//create post request
export const createPost = (newPost) => axios.post(url, newPost);

// update post, id and url specified
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);

// delete post
export const deletePost = (id) => axios.delete(`${url}/${id}`);

// like post
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);