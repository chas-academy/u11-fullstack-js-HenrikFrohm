// adding reducer function, which takes current state and an action as arguments and return new state result.
// using switch statement instead of if to if to avoid clutter.
// state is an array, which is specified.
// turning cases into objects, spreading the states and returning the posts
const appReducer = (state = { isLoading: true, posts: [] }, action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case "FETCH_SEARCH":
      return { ...state, posts: action.payload.data };
    case "CREATE":
      return { ...state, posts: [...state.posts, action.payload] };
    case "UPDATE":
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    case "DELETE":
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      };
    case "LIKE":
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    case "START_LOADING":
      return { ...state, isLoading: true };
    case "END_LOADING":
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default appReducer;
