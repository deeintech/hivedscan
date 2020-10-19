import { combineReducers } from '@reduxjs/toolkit';
import proposalsReducer from 'features/proposals/proposalsList/proposalsListSlice';
import proposalReducer from 'features/proposals/proposalDetails/proposalDetailsSlice';
import contentReducer from 'features/content/contentDetails/contentDetailsSlice';

const rootReducer = combineReducers({
  proposals: proposalsReducer,
  proposal: proposalReducer,
  content: contentReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
