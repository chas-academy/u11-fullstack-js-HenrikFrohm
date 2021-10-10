import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { GoogleLogin } from "react-google-login";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useStyles from "./styles";
import Icon from "./Icon";
import Input from "./Input";

// initial state of form data
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState();
  const dispatch = useDispatch();

  //cubic function to handle showing password
  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  // cubic function to switch between sign up or sign in form
  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    handleShowPassword(false);
  };

  // chaining operator used to avoid error if the res object isn't available, instead giving undefined as result value
  // get token
  // try catch is used to dispatch or catch for async function
  const gLoginSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: "AUTH", data: { result, token } });
    } catch (error) {
      console.log(error);
    }
  };
  const gLoginFailure = () => {
    console.log("Google sign in was unsuccessful, try again.");
  };

  // prevent reload event
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };
  const handleChange = () => {};

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {isSignup ? "Sign up" : "Sign in"}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  halfOf
                />

                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  halfOf
                />
              </>
            )}
            <Input
              name="email"
              label="Email"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignup ? "Sign up" : "Sign in"}
          </Button>

          <GoogleLogin
            clientId="362251379951-k4pkuptidrf47c19f9idkrdh0nvoalv7.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                className={classes.googleButton}
                color="primary"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant="contained"
              >
                Sign In with Google
              </Button>
            )}
            onSuccess={gLoginSuccess}
            onFailure={gLoginFailure}
            cookiePolicy="single_host_origin"
          />
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? "Do you already have an account? Sign in"
                  : "Do you not have an account? Sign up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;