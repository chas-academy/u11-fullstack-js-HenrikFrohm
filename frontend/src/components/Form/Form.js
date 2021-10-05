import React, { useEffect, useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from "react-redux";
import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';


const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags:'', selectedFile:'' });
//fetching post to update field with right values by using find method to get post with same id as current id.
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
    const classes = useStyles();
    const dispatch = useDispatch();

    // callback function runs when post value change from nothing to post
    useEffect(() => {
        if(post) setPostData(post);
    }, [post])

    // when user submit a post request is sent with the typed data. Goes to reducers once dispatched.
    // preventDefault method used to avoid normal event of browser refresh
    // clear function can be called while creating or editing forms
    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId) {
            dispatch(updatePost(currentId, postData));
        } else {
        dispatch(createPost(postData));
    }
    clear();
}

// function to set everything to empty strings when clear button is pressed
   const clear = () => {
        setCurrentId(null);
        setPostData({ creator: '', title: '', message: '', tags:'', selectedFile:'' });
   }

   
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{ currentId ? 'Edit' : 'Add' } Post/Article</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator}onChange={(e) => setPostData({ ...postData, creator: e.target.value })}/>
                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title}onChange={(e) => setPostData({ ...postData, title: e.target.value })}/>
                <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message}onChange={(e) => setPostData({ ...postData, message: e.target.value })}/>
                <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags}onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}/>
                <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })}></FileBase></div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>

            </form>
        </Paper>
    );
};

export default Form;