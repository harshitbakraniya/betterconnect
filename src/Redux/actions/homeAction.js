import teachersApi from "../../apis/teachersApi";
import { ActionTypes } from "../constant/action_type";

export const getImpact = () => {
  return async (dispatch) => {
    try {
      const value = await teachersApi.get("/api/Home/ImpactDetails");
      dispatch({ type: ActionTypes.GET_IMPACT, payload: value.data });
    } catch (error) {
      console.log(error);
    }
  };
};
