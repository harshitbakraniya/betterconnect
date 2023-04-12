import { combineReducers } from "redux";
import teacherReducer from './teacherReducer';

const AllReducer = () => {
    return combineReducers({
        teacherReducer
    });
}

export default AllReducer;