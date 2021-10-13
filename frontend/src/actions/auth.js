import * as api from "../api/index.js";

// history push to redirect to home
export const signin = (formData, history) => async (dispatch) => {
  // log in user
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: "AUTH", data });
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  // sign up user
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: "AUTH", data });
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
