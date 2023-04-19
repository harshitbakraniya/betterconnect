import { ActionTypes } from "../constant/action_type";

const initialState = {
  teacher: {},
  allteachers: [],
  teacherObjectWithBatch: {},
  isValidOrNot: {},
  filterData: [],
  filterObject: {},
};

const teacherReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_TEACHER_DETAIL:
      return { ...state, allteachers: action.payload };
    case ActionTypes.REGISTER_DATA:
      return { ...state, teacher: action.payload };
    case ActionTypes.SET_TEACHER_REGISTRAION:
      console.log(action.payload);
      return { ...state, teacherObjectWithBatch: action.payload };
    case ActionTypes.IS_EMAIL_ID_VALID:
      return { ...state, isValidOrNot: action.payload };
    case ActionTypes.SET_FILTER_DATA:
      return { ...state, filterData: action.payload };
    case ActionTypes.SET_FILTER_OBJECT:
      return { ...state, filterObject: action.payload };
    default:
      return state;
  }
};

export default teacherReducer;
