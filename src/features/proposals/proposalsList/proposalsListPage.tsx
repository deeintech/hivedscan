import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'app/store/rootReducer';
import AppError from 'components/Error';
import { Row, Col } from "reactstrap";
import { fetchProposals } from './proposalsListSlice';
import useUserInput from 'helpers/useUserInput';
import useSearchable from 'helpers/useSearchable';
import { ProposalsList } from './ProposalsList';
import Skeleton from 'react-loading-skeleton';
import { AppSearchForm } from 'components/SearchForm';
import { AppNav } from 'components/Nav';
import { SubmitProposalModal } from 'features/proposals/proposalModals/SubmitProposalModal';
import useModal from 'helpers/useModal';

export const ProposalsListPage = () => {
  const dispatch = useDispatch();
  const searchText = useUserInput("");
  const { isOpenNewProposalModal, toggleNewProposalModal } = useModal();

  const {
    passingProposals,
    nonPassingProposals,
    returnProposal,
    error: proposalsError,
    isLoading
  } = useSelector((state: RootState) => state.proposals);

  useEffect(() => {
    dispatch(fetchProposals());
  }, [dispatch]);

  const searchablePassingProposals = useSearchable(
    passingProposals,
    searchText.value,
    (l: any) => [l.subject, l.creator]
  );

  const searchableNonPassingProposals = useSearchable(
    nonPassingProposals,
    searchText.value,
    (l: any) => [l.subject, l.creator]
  );

  if (proposalsError) {
    return (
      <AppError />
    );
  };

  const navItems = [
    { icon: "fas fa-plus-circle", content: "Submit", onClick: toggleNewProposalModal }
  ];

  const renderSearchWidget = (
    <Row>
      <Col md="6" className="my-1">
        <AppSearchForm {...searchText} />
      </Col>
      <Col md="6" className="my-1 d-flex align-items-md-end flex-column">
        <AppNav items={navItems} />
      </Col>
    </Row>
  );

  const renderNewProposalModal = (
    <SubmitProposalModal
      isShowing={isOpenNewProposalModal}
      hide={toggleNewProposalModal} />
  );

  const renderList = isLoading ? (
    <Skeleton count={5} height={30} duration={3} />
  ) : (
      <div>
        <ProposalsList
          passingProposals={searchablePassingProposals}
          nonPassingProposals={searchableNonPassingProposals}
          returnProposal={returnProposal} />
      </div>
    );

  return (
    <div className="mt-3">
      {renderSearchWidget}
      {renderList}
      {renderNewProposalModal}
    </div>
  );
}
