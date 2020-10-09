import { Proposal } from 'interfaces/proposal';
import { useState } from 'react';

const useModal = (p: Proposal) => {
  const [isOpenVotingModal, setIsOpenVotingModal] = useState(false);
  const [isOpenContentModal, setIsOpenContentModal] = useState(false);
  const [proposal, setProposal] = useState(p);

  function toggleVotingModal() {
    setIsOpenVotingModal(!isOpenVotingModal);
    setProposal(proposal);
  }

  function toggleContentModal() {
    setIsOpenContentModal(!isOpenContentModal);
    setProposal(proposal);
  }

  return {
    isOpenVotingModal,
    isOpenContentModal,
    proposal,
    toggleVotingModal,
    toggleContentModal
  }
};

export default useModal;