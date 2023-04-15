import { applyMiddleware, createStore, compose } from "redux";
import AllReducer from '../Redux/reducers/index'
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  AllReducer, 
  composeEnhancers(applyMiddleware(thunk)),
);

export default store;
