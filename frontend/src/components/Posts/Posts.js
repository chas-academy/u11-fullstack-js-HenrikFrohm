import React from "react";
import Post from './Post/Post';
import useStyles from './styles';
    
const Posts = () => {
const classes = useStyles();
    return (
        <>
        <h1>Articles</h1>
        <Post />
        <Post />
        </>
    );
}

export default Posts;