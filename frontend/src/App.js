import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';

import boxing_glove from './images/boxing_glove.png';

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

// dispatch get-posts action with useEffect. When clear function is called in forms the id will change, which will dispatch getPosts action so changes get new posts
    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);
    
// utilizing material ui components
    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static">
                <Typography className={classes.heading} variant="h3" align="center">Fightstories
                </Typography>
                <img className={classes.image} src={boxing_glove} alt="glovesIcon" height="42" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid className={classes.mainContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={12} md={8}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;