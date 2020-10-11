import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'app/store/rootReducer';
import { ProposalsList } from './ProposalsList';
import { fetchProposals } from './proposalsListSlice';
import Skeleton from 'react-loading-skeleton';
import AppError from 'components/Error';
import { Row, Col } from "reactstrap";
import useUserInput from 'helpers/useUserInput';
import useSearchable from 'helpers/useSearchable';
import { AppSearchForm } from 'components/SearchForm';
import { AppDropdown } from 'components/Dropdown';

export const ProposalsListPage = () => {
  const dispatch = useDispatch();

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

  const searchText = useUserInput("");
  const dropdown = {
    navItems: [
      { name: "Submit a proposal", url: "/newproposal" }
    ],
    dropdownHeader: "Sort by",
    dropdownItems: ["Creator", "Start date", "End date", "Total votes"]
  };

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

  const renderSearchWidget = (
    <Row>
      <Col md="6" className="my-1">
        <AppSearchForm {...searchText} />
      </Col>
      <Col md="6" className="my-1 d-flex align-items-md-end flex-column">
        <AppDropdown
          items={dropdown.navItems}
          dropdownHeader={dropdown.dropdownHeader}
          dropdownItems={dropdown.dropdownItems}
        />
      </Col>
    </Row>
  );

  const renderedList = isLoading ? (
    <Skeleton count={5} height={30} duration={3} />
  ) : (
      <div>
        {renderSearchWidget}
        <ProposalsList
          passingProposals={searchablePassingProposals}
          nonPassingProposals={searchableNonPassingProposals}
          returnProposal={returnProposal} />
      </div>
    );

  return (
    <div className="mt-3">
      {renderedList}
    </div>
  );
}
