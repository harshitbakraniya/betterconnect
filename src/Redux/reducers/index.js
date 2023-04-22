import { combineReducers } from "redux";
import homeReducer from "./homeReducer";
import teacherReducer from "./teacherReducer";
import studentReducer from "./studentReducer";
const AllReducer = combineReducers({
  teacherRedu: teacherReducer,
  homeRedu: homeReducer,
  studentRedu: studentReducer,
});

export default AllReducer;
