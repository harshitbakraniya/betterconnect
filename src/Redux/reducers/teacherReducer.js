import { ActionTypes } from "../constant/action_type";

const initialState = {
    teacher:{},
    batchDetail:[],
    allteachers:[],
    isValidOrNot:{},
}

const teacherReducer = (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.GET_TEACHER_DETAIL:
            return {...state, allteachers: action.payload};
        case ActionTypes.SET_TEACHER_REGISTRAION:
            return {...state, teacher: action.payload}
        case ActionTypes.IS_EMAIL_ID_VALID:
            return {...state, isValidOrNot: action.payload};
        default:return state;
    }
}

export default teacherReducer;
