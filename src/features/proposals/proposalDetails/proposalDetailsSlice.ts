import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from 'app/store/store';
import { IContentResult } from 'interfaces/content';
import { IProposal, IProposalResult } from 'interfaces/proposals/proposal';
import { getProposalById } from 'services/proposal-service';

type ProposalState = {
  proposal: IProposal
  content: IContentResult
  isLoading: boolean
  error: string | null
}

const proposalInitialState: ProposalState = {
  proposal: null,
  content: null,
  isLoading: true,
  error: null
}

function startLoading(state: ProposalState) {
  state.isLoading = true
}

function loadingFailed(state: ProposalState, action: PayloadAction<string>) {
  state.isLoading = false
  state.error = action.payload
}

const proposal = createSlice({
  name: 'proposal',
  initialState: proposalInitialState,
  reducers: {
    getProposalStart: startLoading,
    getProposalSuccess(state, { payload }: PayloadAction<IProposalResult>) {
      const { proposal, content } = payload;
      state.isLoading = false
      state.error = null
      state.proposal = proposal
      state.content = content
    },
    getProposalFailure: loadingFailed
  }
});

export const {
  getProposalStart,
  getProposalSuccess,
  getProposalFailure
} = proposal.actions;

export default proposal.reducer;

export const fetchProposal = (id: number): AppThunk => async dispatch => {
  try {
    dispatch(getProposalStart())
    const proposal = await getProposalById(id);
    dispatch(getProposalSuccess(proposal));
  } catch (err) {
    dispatch(getProposalFailure(err.toString()));
  }
}