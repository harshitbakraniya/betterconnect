import { ActionTypes } from "../constant/action_type";

const initialState = {
  data: {},
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_IMPACT:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default homeReducer;
