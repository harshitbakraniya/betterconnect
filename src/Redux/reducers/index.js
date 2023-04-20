import { combineReducers } from "redux";
import homeReducer from "./homeReducer";
import teacherReducer from "./teacherReducer";

const AllReducer = combineReducers({
  teacherRedu: teacherReducer,
  homeRedu: homeReducer,
});

export default AllReducer;
