import AppModal from "components/Modal";
import { ContentDetailsPage } from "features/content/contentDetails/ContentDetailsPage";
import { IProposal } from "interfaces/proposal";
import React from "react";
import ReactDOM from "react-dom";

type Props = {
  isShowing: boolean,
  hide: any,
  proposal: IProposal
}

export const ContentModal = ({ isShowing, hide, proposal }: Props) => {
  
  const renderForm = (
    <ContentDetailsPage author={proposal.creator} permlink={proposal.permlink} />
  );

  return (
    isShowing ? ReactDOM.createPortal(
      <React.Fragment>
        <AppModal
          isShowing={isShowing}
          hide={hide}
          size="lg"
          header={proposal.subject}
          children={renderForm}
        />
      </React.Fragment>, document.body
    ) : null)
};

export default ContentModal;