import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import useStyles from "./styles";
import boxing from "../../images/boxing.png";

const Navbar = () => {
  const classes = useStyles();
  // fetch user data from localstorage
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  // get re-navigated to homescreen after successful login
  useEffect(() => {
    const token = user?.token;

    // jwt
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, []);

  // under toolbar if a user is logged in then user information and logout button will be shown, if not only loginbutton will be shown.
  return (
    <AppBar className={classes.appBar} position="static">
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h3"
          align="center"
        >
          Fightstories
        </Typography>
        <img
          className={classes.image}
          src={boxing}
          alt="glovesIcon"
          height="42"
        />
      </div>
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
