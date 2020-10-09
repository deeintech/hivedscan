import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Proposal, ProposalsResult } from 'interfaces/proposal';
import { AppThunk } from 'app/store/store';
import { getProposals } from 'services/proposal-service';
import { vestsToHive } from 'services/dhive-service';

interface ProposalsState {
  proposals: Proposal[]
  passingProposals: Proposal[]
  nonpassingProposals: Proposal[]
  returnProposal: {}
  isLoading: boolean
  error: string | null
}

const proposalsInitialState: ProposalsState = {
  proposals: [],
  passingProposals: [],
  nonpassingProposals: [],
  returnProposal: {},
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
    getProposalsSuccess(state, { payload }: PayloadAction<ProposalsResult>) {
      const { proposals, returnProposal } = payload
      state.isLoading = false
      state.error = null
      state.proposals = proposals
        .sort((a, b) => b.total_votes - a.total_votes)
        .map(p => {
          p.total_votes = vestsToHive(p.total_votes)
          p.daily_pay = {
            amount: (Number(p.daily_pay.amount)/1000).toLocaleString(),
            precision: p.daily_pay.precision,
            nai: p.daily_pay.nai
          };
          return p;
        });
      state.passingProposals = proposals.filter(p => p.total_votes >= returnProposal.total_votes);
      state.nonpassingProposals = proposals.filter(p => p.total_votes < returnProposal.total_votes);
      state.returnProposal = returnProposal
    },
    getProposalsFailure: loadingFailed
  }
});

export const {
  getProposalsStart,
  getProposalsSuccess,
  getProposalsFailure
} = proposals.actions

export default proposals.reducer;

export const fetchProposals = (): AppThunk => async dispatch => {
  try {
    dispatch(getProposalsStart())
    const proposals = await getProposals(50);
    dispatch(getProposalsSuccess(proposals));
  } catch (err) {
    dispatch(getProposalsFailure(err.toString()));
  }
}