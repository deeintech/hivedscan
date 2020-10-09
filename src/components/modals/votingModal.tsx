import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { hivesignerProposalVote, keychainProposalVote } from 'helpers/votingHelper';
import {
  Button,
  Modal,
  Form,
  FormGroup,
  Label
} from "reactstrap";

export const VotingModal = ({ isShowing, hide, proposalId }) => {
  type FormData = {
    username: string;
    voteStatus: boolean;
  };

  const { register, handleSubmit } = useForm<FormData>();
  const onHivesignerVote = (data: FormData) => {
    hivesignerProposalVote(data.voteStatus, data.username, proposalId);
  };
  const onKeychainVote = (data: FormData) => {
    keychainProposalVote(data.voteStatus, data.username, proposalId);
  };

  return (
    isShowing ? ReactDOM.createPortal(
      <React.Fragment>
        <Modal
          className="modal-dialog-centered"
          isOpen={isShowing}
          toggle={hide}
        >
          <div className="modal-header">
            <h5 className="modal-title">
              Supporting Proposal
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
            <Form>
              <FormGroup>
                <Label for="username">1. Enter your Hive account:</Label>
                <input
                  id="username"
                  className="form-control"
                  name="username"
                  placeholder="username"
                  type="text"
                  ref={register}
                />
              </FormGroup>
              <FormGroup>
                <Label for="voteStatus">2. Make your decision:</Label>
                <div className="custom-control custom-control-alternative custom-checkbox mb-3">
                  <input
                    className="custom-control-input"
                    id="voteStatus"
                    name="voteStatus"
                    type="checkbox"
                    ref={register}
                    defaultChecked
                  />
                  <label className="custom-control-label" htmlFor="voteStatus">
                    Support
              </label>
                </div>
              </FormGroup>
              <FormGroup>
                <Label>3. Submit your vote:</Label><br />
                <Button
                  color="default"
                  type="button"
                  onClick={handleSubmit(onHivesignerVote)}
                >
                  Vote with <img className="icon icon-sm ml-1" src="src/assets/img/hivesigner.svg" />
                </Button>
                <Button
                  color="default"
                  type="button"
                onClick={handleSubmit(onKeychainVote)}
                >
                  Vote with <img className="icon icon-sm ml-1" src="src/assets/img/keychain.png" />
                </Button>
              </FormGroup>
            </Form>
          </div>
        </Modal>
      </React.Fragment>, document.body
    ) : null)
};

export default VotingModal;