import React from 'react';
import { Proposal } from 'interfaces/proposal';;
import { ProposalListItem } from './proposalListItem';
import { localeNumberFilter } from 'helpers/filters';

type Props = {
  passingProposals: Proposal[],
  nonPassingProposals: Proposal[],
  returnProposal: Proposal
}

export const ProposalsList = ({ returnProposal, passingProposals, nonPassingProposals }: Props) => {
  const renderPassingProposals = passingProposals.map(proposal => (
    <ProposalListItem proposal={proposal} key={proposal.id} color="item-success"/>
  ));
  const renderNonPassingProposals = nonPassingProposals.map(proposal => (
    <ProposalListItem proposal={proposal} key={proposal.id} color="item-warning"/>
  ));
  return (<div>  
    {renderPassingProposals}
    <h3 className="mt-4 text-center">Insufficient funds ({localeNumberFilter(returnProposal.total_votes)} HP)</h3>
    {renderNonPassingProposals}
  </div>
  )
};
