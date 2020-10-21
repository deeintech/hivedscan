import React from 'react';
import { IProposal } from 'interfaces/proposal';;
import { ProposalListItem } from './ProposalListItem';

type Props = {
  passingProposals: IProposal[],
  nonPassingProposals: IProposal[],
  returnProposal: IProposal
}

export const ProposalsList = ({ passingProposals, nonPassingProposals }: Props) => {
  const renderPassingProposals = passingProposals.map(proposal => (
    <ProposalListItem proposal={proposal} key={proposal.id} style="item-success"/>
  ));
  const renderNonPassingProposals = nonPassingProposals.map(proposal => (
    <ProposalListItem proposal={proposal} key={proposal.id} style="item-warning"/>
  ));
  return (<div>  
    {renderPassingProposals}
    <h3 className="mt-4 text-center">Insufficient funds</h3>
    {renderNonPassingProposals}
  </div>
  )
};
