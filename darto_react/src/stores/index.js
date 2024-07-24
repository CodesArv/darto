import { combineReducers } from "redux";

import loginReducer from "./reducers/login/LoginSlice";
export default combineReducers({

  login: loginReducer,

 
});
