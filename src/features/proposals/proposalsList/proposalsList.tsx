import React from 'react';
import { IProposal } from 'interfaces/proposal';;
import { ProposalListItem } from './ProposalListItem';
import { localeNumberFilter } from 'helpers/filters';

type Props = {
  passingProposals: IProposal[],
  nonPassingProposals: IProposal[],
  returnProposal: IProposal
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
