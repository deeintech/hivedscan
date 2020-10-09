import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'app/store/rootReducer';
import { ProposalsList } from './proposalsList';
import { fetchProposals } from './proposalsListSlice';
import Skeleton from 'react-loading-skeleton';

export const ProposalsListPage = () => {
  const dispatch = useDispatch();

  const {
    passingProposals,
    nonpassingProposals,
    returnProposal,
    error: proposalsError,
    isLoading
  } = useSelector((state: RootState) => state.proposals);

  useEffect(() => {
    dispatch(fetchProposals())
  }, [dispatch]);

  if (proposalsError) {
    return (
      <div>
        <h1>Something went wrong...</h1>
        <div>{proposalsError.toString()}</div>
      </div>
    )
  };

  let renderedList = isLoading ? (
    <Skeleton count={5} height={30} duration={3} />
  ) : (
      <ProposalsList
        passingProposals={passingProposals}
        nonPassingProposals={nonpassingProposals}
        returnProposal={returnProposal} />
    );

  return (
    <div className="mt-3">
      {renderedList}
    </div>
  );
}
