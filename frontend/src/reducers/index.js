import { combineReducers } from "redux";

import posts from "./posts";
import auth from "./auth";

// utilizing posts reducer.
export default combineReducers({ posts, auth });
