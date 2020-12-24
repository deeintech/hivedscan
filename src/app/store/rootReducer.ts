import { combineReducers } from '@reduxjs/toolkit';
import proposalsReducer from 'features/proposals/proposalsList/proposalsListSlice';
import proposalReducer from 'features/proposals/proposalDetails/proposalDetailsSlice';
import contentReducer from 'features/content/contentDetails/contentDetailsSlice';
import userReducer from 'features/user/userDetails/userDetailsSlice';
import latestHeTransactions from 'features/hive-engine/transactionsList/transactionsListSlice';

const rootReducer = combineReducers({
  proposals: proposalsReducer,
  proposal: proposalReducer,
  content: contentReducer,
  user: userReducer,
  latestHeTransactions: latestHeTransactions
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
