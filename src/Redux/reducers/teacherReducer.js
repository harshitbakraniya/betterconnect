const initialState = {
    teachers:[],
}

const teacherDetailReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_TEACHER_DEATAIL':
            return {...state, teachers: action.payload};
        default:return state;
    }
}

export default teacherDetailReducer;