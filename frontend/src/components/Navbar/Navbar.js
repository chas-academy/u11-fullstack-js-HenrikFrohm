import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import decode from "jwt-decode";
import useStyles from "./styles";
import boxing from "../../images/boxing.png";

const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  // fetch user data from localstorage
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  // dispatch action to allow user to sign out and getting re-navigated to home. When logged out, user is set to null.
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
    setUser(null);
  };

  // when location changes user gets sent
  // if token is expired, log out function is called for the user
  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  // under toolbar if a user is logged in then user information and logout button will be shown, if not only loginbutton will be shown.
  return (
    <AppBar className={classes.appBar} position="static">
      <Link to="/" className={classes.brandContainer}>
        <Typography className={classes.heading} align="center">
          FIGHTSTORIES
        </Typography>
        <img
          className={classes.image}
          src={boxing}
          alt="glovesIcon"
          height="25"
        />
      </Link>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user.result.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              onClick={logout}
            >
              Sign out
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign in
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
