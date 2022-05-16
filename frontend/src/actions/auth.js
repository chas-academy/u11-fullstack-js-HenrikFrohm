import { AUTH } from "../constants/actionTypes";
import * as api from "../api/index.js";

// history push to redirect to home
export const signin = (formData, router) => async (dispatch) => {
  // log in user
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    router.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  // sign up user
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    router.push("/");
  } catch (error) {
    console.log(error);
  }
};
