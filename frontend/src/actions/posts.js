// import everything from actions as api, making calls easier
import * as api from "../api/index.js";

// action creator asynchronous function that returns an action-object, which contains a type and a payload
// using redux thunk to specify additional arrow-function
// try-catch function to get response from api, which contains data-object returning from backend. Data represents posts.
// using redux to dispatch an action from data in backend. Data is sent through payload to reducer.
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await api.fetchPostsBySearch(searchQuery);
    dispatch({ type: "FETCH_SEARCH", payload: data });
  } catch (error) {
    console.log(error);
  }
};

// try-catch function for post api request action
export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// api request returning updated post data
export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

// api request deleting post data
export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error);
  }
};

// api request returning updated post data for likes
export const likePost = (id) => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem("profile"));

  try {
    const { data } = await api.likePost(id, user?.token);

    dispatch({ type: "LIKE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
