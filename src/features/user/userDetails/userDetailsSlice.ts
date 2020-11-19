import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from 'app/store/store';
import { IUser } from 'interfaces/proposals/user';
import { getUser } from 'services/user-service';

type UserState = {
  user: IUser
  isUserLoading: boolean
  error: string | null
}

const userInitialState: UserState = {
  user: null,
  isUserLoading: true,
  error: null
}

function startLoading(state: UserState) {
  state.isUserLoading = true
}

function loadingFailed(state: UserState, action: PayloadAction<string>) {
  state.isUserLoading = false
  state.error = action.payload
}

const user = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    getUserStart: startLoading,
    getUserSuccess(state, { payload }: PayloadAction<IUser>) {
      state.isUserLoading = false
      state.error = null
      state.user = payload
    },
    getUserFailure: loadingFailed
  }
});

export const {
  getUserStart,
  getUserSuccess,
  getUserFailure
} = user.actions;

export default user.reducer;

export const fetchUser = (name: string): AppThunk => async dispatch => {
  try {
    dispatch(getUserStart())
    const user = await getUser(name);
    dispatch(getUserSuccess(user));
  } catch (err) {
    dispatch(getUserFailure(err.toString()));
  }
}