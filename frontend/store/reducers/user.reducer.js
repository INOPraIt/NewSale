import { handleActions } from 'redux-actions';

import {
  getCurrentAccountInfoAsync,
  searchUsersAsync,
  clearAllUserErrorsAsync
} from './user.reducer';

const initialState = {
  state: null,
  searched: [],
  error: null
};

export default handleActions({
  [getCurrentAccountInfoAsync.success]: (s, a) => (
    { ...s, 
      searched: [], 
      state: a.payload.data && a.payload.data.success ? { ...s.state, ...a.payload.data.user } : null 
    }),
  [getCurrentAccountInfoAsync.failed]: (s, a) => (
    { ...s, 
      state: null 
    })
}, initialState);
