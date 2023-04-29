import teachersApi from "../../apis/teachersApi";
import { ActionTypes } from "../constant/action_type";

export const getTeacherDetail = (data) => {
  return async (dispatch) => {
    const values = await teachersApi.post(
      "/api/Teacher/GetTeacherDetails",
      data
    );
    dispatch({ type: ActionTypes.GET_TEACHER_DETAIL, payload: values.data });
  };
};

export const regitrationWithBatchDetail = (data) => {
  return async (dispatch) => {
    const values = await teachersApi.post(
      "/api/Teacher/TeacherRegistration",
      data
    );
    dispatch({
      type: ActionTypes.SET_TEACHER_REGISTRAION,
      payload: values.data,
    });
  };
};

export const setTeacherRegistration = (data) => {
  return {
    type: ActionTypes.REGISTER_DATA,
    payload: data,
  };
};

export const isEmailorPhoneAlreadyexist = (values) => {
  const { email, phone } = values;
  return async (dispatch) => {
    const data = await teachersApi.post(
      `/api/Teacher/IsEmailorPhoneAlreadyExist`,
      null,
      {
        params: {
          email,
          phone,
        },
      }
    );
    dispatch({ type: ActionTypes.IS_EMAIL_ID_VALID, payload: data.data });
  };
};

export const setEmailState = (data) => {
  return {
    type: ActionTypes.SET_EMAIL_STATE,
    payload: data,
  };
};

export const setFilterData = (data) => {
  return {
    type: ActionTypes.SET_FILTER_DATA,
    payload: data,
  };
};

export const setFilterObjectRedux = (data) => {
  return {
    type: ActionTypes.SET_FILTER_OBJECT,
    payload: data,
  };
};

export const setLocalBatch = (data) => {
  return {
    type: ActionTypes.SET_LOCAL_BATCH,
    payload: data,
  };
};

export const login = (data) => {
  const { email, pass } = data;
  return async (dispatch) => {
    const returnData = await teachersApi.post("");
    dispatch({ type: ActionTypes.LOGIN, payload: returnData.data });
  };
};
