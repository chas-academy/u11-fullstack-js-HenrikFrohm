// reducer function for auth actions
// giving state default value of null
//if sign in is successful, data will be stored in localstorage
// clearing localstorage when signed out
const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case "AUTH":
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };
    case "LOGOUT":
      localStorage.clear();
      return { ...state, authData: null };
    default:
      return state;
  }
};

export default authReducer;
