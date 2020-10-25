import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { hivesignerProposalVote, keychainProposalVote } from 'helpers/keychain';
import {
  Button,
  Form,
  FormGroup,
  Label
} from "reactstrap";
import AppModal from "components/Modal";

type Props = {
  isShowing: boolean,
  hide: any,
  proposalId: number
}

type FormData = {
  username: string;
  voteStatus: boolean;
};

export const VotingModal = ({ isShowing, hide, proposalId }: Props) => {
  const { register, handleSubmit } = useForm<FormData>();
  const onHivesignerVote = (data: FormData) => {
    hivesignerProposalVote(data.voteStatus, data.username, proposalId);
  };
  const onKeychainVote = (data: FormData) => {
    keychainProposalVote(data.voteStatus, data.username, proposalId);
  };

  const renderForm = (
    <Form className="bg-secondary shadow">
      <FormGroup>
        <Label for="username">1. Enter your Hive account:</Label>
        <input
          id="username"
          className="form-control fancy-input"
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
          Vote with <img className="icon icon-sm ml-1" src="assets/img/keychain.png" />
        </Button>
      </FormGroup>
    </Form>
  );

  return (
    isShowing ? ReactDOM.createPortal(
      <React.Fragment>
        <AppModal
          isShowing={isShowing}
          hide={hide}
          size="md"
          header="Support proposal"
          children={renderForm}
        />
      </React.Fragment>, document.body
    ) : null)
};

export default VotingModal;