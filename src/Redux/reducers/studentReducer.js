import { ActionTypes } from "../constant/action_type";
const initialState = {
  studentDetail: {},
  isStudentAlreadyRegiter: {},
  sendTeacherDetail: {},
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_STUDENT_DETAIL:
      return { ...state, studentDetail: action.payload };
    case ActionTypes.IS_STUDENT_ALREADY_REGISTERED:
      return { ...state, isStudentAlreadyRegiter: action.payload };
    case ActionTypes.SEND_TEACHER_DETAIL:
      return { ...state, sendTeacherDetail: action.payload };
    default:
      return state;
  }
};

export default studentReducer;
