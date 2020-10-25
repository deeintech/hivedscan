import { combineReducers } from '@reduxjs/toolkit';
import proposalsReducer from 'features/proposals/proposalsList/proposalsListSlice';
import proposalReducer from 'features/proposals/proposalDetails/proposalDetailsSlice';
import contentReducer from 'features/content/contentDetails/contentDetailsSlice';
import userReducer from 'features/user/userDetails/userDetailsSlice';

const rootReducer = combineReducers({
  proposals: proposalsReducer,
  proposal: proposalReducer,
  content: contentReducer,
  user: userReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
