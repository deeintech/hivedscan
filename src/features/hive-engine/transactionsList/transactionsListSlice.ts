import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from 'app/store/store';
import { ITransaction } from 'interfaces/hive-engine/transaction';
import { getLatestTransactions } from 'services/hive-engine-service';

type LatestBlockState = {
  transactions: ITransaction[]
  isLoading: boolean
  error: string | null
}

const latestBlockInitialState: LatestBlockState = {
  transactions: null,
  isLoading: true,
  error: null
}

function startLoading(state: LatestBlockState) {
  state.isLoading = true
}

function loadingFailed(state: LatestBlockState, action: PayloadAction<string>) {
  state.isLoading = false
  state.error = action.payload
}

const latestHeTransactions = createSlice({
  name: 'latestHeTransactions',
  initialState: latestBlockInitialState,
  reducers: {
    getLatestTransactionsStart: startLoading,
    getLatestTransactionsSuccess(state, { payload }: PayloadAction<ITransaction[]>) {
      state.isLoading = false;
      state.error = null;
      state.transactions = payload
    },
    getLatestTransactionsFailure: loadingFailed,
  }
});

export const {
  getLatestTransactionsStart,
  getLatestTransactionsSuccess,
  getLatestTransactionsFailure,
} = latestHeTransactions.actions;
export default latestHeTransactions.reducer;

export const fetchTransactions = (): AppThunk => async dispatch => {
  try {
    dispatch(getLatestTransactionsStart());
    const transactions = await getLatestTransactions();
    dispatch(getLatestTransactionsSuccess(transactions.transactions));
  } catch (err) {
    dispatch(getLatestTransactionsFailure(err.toString()));
  }
}