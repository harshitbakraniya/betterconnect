import { ActionTypes } from "../constant/action_type";
const initialState = {
  studentDetail: {},
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_STUDENT_DETAIL:
      return { ...state, studentDetail: action.payload };
    default:
      return state;
  }
};

export default studentReducer;
