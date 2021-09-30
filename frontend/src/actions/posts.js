// import everything from actions as api, making calls easier
import * as api from '../api';

// action creator asynchronous function that returns an action-object, which contains a type and a payload
// using redux thunk to specify additional arrow-function
// try-catch function to get response from api, which contains data-object returning from backend. Data represents posts.
// using redux to dispatch an action from data in backend. Data is sent through payload to reducer.
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
    
    
    
}