import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import teamReducer from "../reducers/teams";
import scoresReducer from "../reducers/score";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const reducers = combineReducers({ teams: teamReducer, scores: scoresReducer });
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
