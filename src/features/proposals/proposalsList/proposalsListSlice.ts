import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProposal, IProposalsResult } from 'interfaces/proposal';
import { AppThunk } from 'app/store/store';
import { getProposals } from 'services/proposal-service';

type ProposalsState = {
  proposals: IProposal[]
  passingProposals: IProposal[]
  nonPassingProposals: IProposal[]
  returnProposal: IProposal
  isLoading: boolean
  error: string | null
}

const proposalsInitialState: ProposalsState = {
  proposals: [],
  passingProposals: [],
  nonPassingProposals: [],
  returnProposal: null,
  isLoading: true,
  error: null
}

function startLoading(state: ProposalsState) {
  state.isLoading = true
}

function loadingFailed(state: ProposalsState, action: PayloadAction<string>) {
  state.isLoading = false
  state.error = action.payload
}

const proposals = createSlice({
  name: 'proposals',
  initialState: proposalsInitialState,
  reducers: {
    getProposalsStart: startLoading,
    getProposalsSuccess(state, { payload }: PayloadAction<IProposalsResult>) {
      const { proposals, returnProposal } = payload;
      state.isLoading = false;
      state.error = null;
      state.proposals = proposals;
      state.passingProposals = proposals.filter(p => p.total_votes >= returnProposal.total_votes);
      state.nonPassingProposals = proposals.filter(p => p.total_votes < returnProposal.total_votes);
      state.returnProposal = returnProposal;
    },
    getProposalsFailure: loadingFailed,
  }
});

export const {
  getProposalsStart,
  getProposalsSuccess,
  getProposalsFailure,
} = proposals.actions;
export default proposals.reducer;

export const fetchProposals = (): AppThunk => async dispatch => {
  try {
    dispatch(getProposalsStart());
    const proposals = await getProposals(50);
    dispatch(getProposalsSuccess(proposals));
  } catch (err) {
    dispatch(getProposalsFailure(err.toString()));
  }
}