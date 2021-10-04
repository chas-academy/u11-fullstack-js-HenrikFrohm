// adding reducer function, which takes current state and an action as arguments and return new state result. 
// using switch statement instead of if to if to avoid clutter.
// posts is an array, which is specified. State can be renamed to posts.
export default (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];
        case 'UPDATE':
            return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
        default:
            return posts;
    }
}
