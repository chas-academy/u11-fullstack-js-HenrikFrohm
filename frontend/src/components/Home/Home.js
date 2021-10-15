import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import ChipInput from "material-ui-chip-input";
import {
  Container,
  Grow,
  Grid,
  Paper,
  TextField,
  Button,
  AppBar,
} from "@material-ui/core";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import Pagination from "../Pagination/Pagination";
import { getPosts, searchPosts } from "../../actions/posts";
import useStyles from "./styles";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();
  // page info query
  const query = useQuery();
  const history = useHistory();
  // read url to see if there's a page parameter. That will populate variable. If not, it will default to 1.
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState("");
  // dispatch get-posts action with useEffect. When clear function is called in forms the id will change, which will dispatch getPosts action so changes get new posts
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  // dispatching to fetch search post if there's a search term. If not, redirect.
  const searchPost = () => {
    if (search.trim()) {
      dispatch(searchPosts({ search, tags: tags.join(",") }));
    } else {
      history.push("/");
    }
  };

  // allowing enter key to be used to search articles/posts
  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      searchPost();
    }
  };

  const handleAdd = (tag) => setTags([...tags, tag]);
  const handleDelete = (tagToDelete) =>
    setTags(tags.filter((tag) => tag !== tagToDelete));

  // utilizing grids for form and post components with suitable alignment for different screen sizes. Components are connected to signed in user.
  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid
          container
          justifyContent="space-between"
          className={classes.gridContainer}
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={6} md={4}>
            <AppBar
              className={classes.appBarSearch}
              position="static"
              color="inherit"
            >
              <TextField
                name="search"
                variant="outlined"
                label="Search Post/Article"
                fullWidth
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyPress={handleKeypress}
              />
              <ChipInput
                style={{ margin: "10px 0" }}
                value={tags}
                onAdd={handleAdd}
                onDelete={handleDelete}
                label="Search Tags"
                variant="outlined"
              />
              <Button
                className={classes.searchButton}
                variant="contained"
                color="primary"
                size="small"
                onClick={searchPost}
                fullWidth
              >
                Search
              </Button>
            </AppBar>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            <Paper elevation={6}>
              <Pagination />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
