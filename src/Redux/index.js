import { configureStore } from "@reduxjs/toolkit";
import AllReducer from '../Redux/reducers/index'

// const reducers = AllReducer();

const store = () => {
  const store = configureStore({
    reducer: {
        AllReducer
    },
  });
  return store;
};

export default store;
