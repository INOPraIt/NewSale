import { combineReducers } from "redux";
import { connectRouter } from 'connnected-react-router';

export default (history) => combineReducers({

  router: connectRouter(history)
})