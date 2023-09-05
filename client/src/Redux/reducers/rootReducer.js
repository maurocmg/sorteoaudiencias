import { combineReducers } from "redux";
import userReducer from "./userReducer";

// Define tus reducers aquí
const rootReducer = combineReducers({
  // ...tus reducers
  user: userReducer,
});

export default rootReducer;
