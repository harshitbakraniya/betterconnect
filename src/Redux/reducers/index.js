import { combineReducers } from "redux";
import teacherReducer from "./teacherReducer";

const AllReducer = combineReducers({
        teacherRedu: teacherReducer,
});

export default AllReducer;