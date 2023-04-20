import teachersApi from "../../apis/teachersApi";
import { ActionTypes } from "../constant/action_type";

export const getImpact = () => {
  return async (dispatch) => {
    const value = await teachersApi.get("/api/Home/ImpactDetails");
    dispatch({ type: ActionTypes.GET_IMPACT, payload: value.data });
  };
};
