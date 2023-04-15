import teachersApi from "../../apis/teachersApi"
import { ActionTypes } from "../constant/action_type";

export const getTeacherDetail = (data) => {
    return async(dispatch) => {
        const values = await teachersApi.post("/api/Teacher/GetTeacherDetails",data);
        dispatch({type: ActionTypes.GET_TEACHER_DETAIL,payload: values.data});
    }
}

export const regitrationWithBatchDetail = (data) => {
    return {
        type:ActionTypes.REGISTER_DATA,
        payload: data
    }
}


export const setTeacherRegistration = (data) => {
    return {
        type:ActionTypes.SET_TEACHER_REGISTRAION,
        payload: data
    }
}
export const isEmailorPhoneAlreadyexist = (values) => {
    const {email, phone} = values;
    console.log(email, phone);
    return async(dispatch) => {
        const data = await teachersApi.post(`/api/Teacher/IsEmailorPhoneAlreadyExist`, null, {params:{
            email,
            phone
        }});
        dispatch({type: ActionTypes.IS_EMAIL_ID_VALID,payload: data.data});
    }
}