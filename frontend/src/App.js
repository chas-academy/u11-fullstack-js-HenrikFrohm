import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';


//import image1 from './images/image1.jpg';
//import image2 from './images/image2.jpg';
//import image3 from './images/image3.jpg';
import boxing_glove from './images/boxing_glove.png';

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

// dispatch get-posts action with useEffect
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);
    
// utilizing material ui components
    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Kampsportsnytt
                </Typography>
                <img className={classes.image} src={boxing_glove} alt="glovesIcon" height="55" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;