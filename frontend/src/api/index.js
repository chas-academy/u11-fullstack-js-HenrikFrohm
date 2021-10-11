// used to make api calls
import axios from "axios";

// axios instance
const API = axios.create({ baseURL: "http://localhost:5000" });

// url for backend route
// const url = "http://localhost:5000/posts";

// url for Heroku
// const url = 'https://u11-project.herokuapp.com/posts';

// call to url
export const fetchPosts = () => API.get("/posts");

//create post request
export const createPost = (newPost) => API.post("/posts", newPost);

// update post, id and url specified
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);

// delete post
export const deletePost = (id) => API.delete(`/posts/${id}`);

// like post
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

// signin and signup posts
export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
