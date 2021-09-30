import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from 'react-file-base64';
import { useDispatch } from "react-redux";
import useStyles from './styles';
import { createPost } from '../../actions/posts';


const Form = () => {
    const classes = useStyles();
    const [postData, setPostData] = useState({ comment: '' });
    const dispatch = useDispatch();

    // when user submit a post request is sent with the typed data. Goes to reducers once dispatched.
    // preventDefault method used to avoid normal event of browser refresh
    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createPost(postData));
    }
    const clear = () => {

    }
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Share your thoughts</Typography>
                <TextField name="comment" variant="outlined" label="Comment" fullWidth value={postData.comment}onChange={(e) => setPostData({ ...postData, comment: e.target.value })}/>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>

            </form>
        </Paper>
    );
}

export default Form;