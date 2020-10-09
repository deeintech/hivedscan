import { combineReducers } from '@reduxjs/toolkit';
import proposalReducer from 'features/proposals/proposalsList/proposalsListSlice';
import contentReducer from 'features/content/contentDetails/contentDetailsSlice';

const rootReducer = combineReducers({
  proposals: proposalReducer,
  content: contentReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
