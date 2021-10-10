// reducer function for auth actions
// giving state default value of null
//if log in is successful, data will be stored in localstorage
const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case "AUTH":
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };
    default:
      return state;
  }
};

export default authReducer;
