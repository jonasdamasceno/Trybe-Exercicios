import { combineReducers } from "redux";
import countReducer from "./counterReducer";

const rootReducer = combineReducers({
  countReducer,
});

export default rootReducer;