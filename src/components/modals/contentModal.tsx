import { ContentDetailsPage } from "features/content/contentDetails/contentDetailsPage";
import React from "react";
import ReactDOM from "react-dom";
import {
  Modal
} from "reactstrap";

export const ContentModal = ({ isShowing, hide, proposal }) => {
  return (
    isShowing ? ReactDOM.createPortal(
      <React.Fragment>
        <Modal
          className="modal-dialog-centered"
          isOpen={isShowing}
          toggle={hide}
          size="lg"
        >
          <div className="modal-header">
            <h5 className="modal-title">
              {proposal.subject} ({proposal.id})
            </h5>
            <button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
              onClick={hide}
            >
              <span aria-hidden={true}>×</span>
            </button>
          </div>
          <div className="modal-body">
            <ContentDetailsPage author={proposal.creator} permlink={proposal.permlink} />
          </div>
        </Modal>
      </React.Fragment>, document.body
    ) : null)
};

export default ContentModal;