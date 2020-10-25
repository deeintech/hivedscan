import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProposal, IProposalsResult } from 'interfaces/proposal';
import { AppThunk } from 'app/store/store';
import { getProposals } from 'services/proposal-service';

type ProposalsState = {
  proposals: IProposal[]
  passingProposals: IProposal[]
  nonPassingProposals: IProposal[]
  returnProposal: IProposal
  totalProposals: number
  totalBudget: number
  dailyBudget: number
  isLoading: boolean
  error: string | null
}

const proposalsInitialState: ProposalsState = {
  proposals: [],
  passingProposals: [],
  nonPassingProposals: [],
  returnProposal: null,
  totalProposals: 0,
  totalBudget: 0,
  dailyBudget: 0,
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
      const { proposals, returnProposal, totalProposals, totalBudget, dailyBudget } = payload;
      state.isLoading = false;
      state.error = null;
      state.proposals = proposals
      state.passingProposals = proposals.filter(p => p.total_votes >= returnProposal.total_votes);
      state.nonPassingProposals = proposals.filter(p => p.total_votes < returnProposal.total_votes);
      state.returnProposal = returnProposal;
      state.totalProposals = totalProposals;
      state.totalBudget = totalBudget;
      state.dailyBudget = dailyBudget;
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