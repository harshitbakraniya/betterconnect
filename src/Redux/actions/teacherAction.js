import teachersApi from "../../apis/teachersApi"

export const getTeacherDetail = () => {
    return async(dispatch) => {
        const data = await teachersApi.get("/api/Teacher/getTeacherDetail");
        dispatch({type: 'GET_TEACHER_DETAIL',payload: data});
    }
}