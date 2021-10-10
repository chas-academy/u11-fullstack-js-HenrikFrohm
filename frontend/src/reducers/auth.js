// reducer function for auth actions
// giving state default value of null
const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case "AUTH":
      console.log(action?.data);
      return state;
    default:
      return state;
  }
};

export default authReducer;
