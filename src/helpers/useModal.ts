import { IProposal } from 'interfaces/proposal';
import { useState } from 'react';

const useModal = (p: IProposal) => {
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