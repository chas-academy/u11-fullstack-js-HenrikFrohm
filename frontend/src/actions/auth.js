import * as api from "../api";

// history push to redirect to home
export const signin = (formData, history) => async (dispatch) => {
  try {
    // log in user

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    // sign up user

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
