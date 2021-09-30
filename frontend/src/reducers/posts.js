// adding reducer function, which takes current state and an action as arguments and return new state result. 
// using switch statement instead of if to if to avoid clutter
// posts is an array, which is specified. State can be renamed to posts.
export default (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return posts;
        case 'CREATE':
            return posts;
        default:
            return posts;
    }
}
