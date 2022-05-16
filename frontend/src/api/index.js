// used to make api calls
import axios from "axios";

// axios instance
const API = axios.create({ baseURL: "https://u11-project.herokuapp.com/" });

// sends token to backend middleware to verify logged in user
API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

// url for backend route
// const url = "http://localhost:5000/posts";

// url for Heroku
// const url = 'https://u11-project.herokuapp.com/posts';

// call to specific page url and id
export const fetchPost = (id) => API.get(`/posts/${id}`);

// call to specific page and get posts
export const fetchPosts = (page) => API.get(`/posts?page=${page}`);

// search post
export const fetchPostsBySearch = (searchQuery) =>
  API.get(
    `/posts/search?searchQuery=${searchQuery.search || "none"}&tags=${
      searchQuery.tags
    }`
  );

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
