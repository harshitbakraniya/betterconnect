import teachersApi from "../../apis/teachersApi";
import { ActionTypes } from "../constant/action_type";

export const setStudentDetail = (data) => {
  return async (dispatch) => {
    const values = await teachersApi.post(
      "/api/Student/StudentRegistration",
      data
    );
    dispatch({ type: ActionTypes.SET_STUDENT_DETAIL, payload: values.data });
  };
};

export const studentAlreadyRegistered = (email) => {
  return async (dispatch) => {
    const data = await teachersApi.get(
      `/api/Student/IsStudentAlreadyRegistered`,
      {
        params: {
          email,
        },
      }
    );
    dispatch({
      type: ActionTypes.IS_STUDENT_ALREADY_REGISTERED,
      payload: data.data,
    });
  };
};

export const sendTeachersDetails = (received) => {
  return async (dispatch) => {
    const data = await teachersApi.post(
      `/api/Student/SendTeacherDetails`,
      received
    );
    dispatch({
      type: ActionTypes.SEND_TEACHER_DETAIL,
      payload: data.data,
    });
  };
};
