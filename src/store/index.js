import { legacy_createStore as createStore, combineReducers } from "redux";

import counterReducer from "../reducers";

const store = createStore(counterReducer);

export default store;
