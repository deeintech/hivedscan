import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IContentResult } from 'interfaces/content';
import { AppThunk } from 'app/store/store';
import { getContent } from 'services/content-service';

type ContentState = {
  content: IContentResult
  isLoading: boolean
  error: string | null
}

const contentInitialState: ContentState = {
  content: null,
  isLoading: true,
  error: null
}

function startLoading(state: ContentState) {
  state.isLoading = true
}

function loadingFailed(state: ContentState, action: PayloadAction<string>) {
  state.isLoading = false
  state.error = action.payload
}

const content = createSlice({
  name: 'content',
  initialState: contentInitialState,
  reducers: {
    getContentStart: startLoading,
    getContentSuccess(state, { payload }: PayloadAction<IContentResult>) {
      state.isLoading = false
      state.error = null
      state.content = payload
    },
    getContentFailure: loadingFailed
  }
});

export const {
  getContentStart,
  getContentSuccess,
  getContentFailure
} = content.actions

export default content.reducer;

export const fetchContent = (author: string, permlink: string): AppThunk => async dispatch => {
  try {
    dispatch(getContentStart())
    const content = await getContent(author, permlink);
    dispatch(getContentSuccess(content));
  } catch (err) {
    dispatch(getContentFailure(err.toString()));
  }
}