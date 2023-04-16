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
