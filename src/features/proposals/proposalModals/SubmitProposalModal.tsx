import AppModal from "components/Modal";
import { keychainCreateProposal } from "helpers/keychain";
import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Row,
  Col
} from "reactstrap";

type FormData = {
  username: string,
  receiver: string,
  subject: string,
  permlink: string,
  daily_pay: number,
  start: Date,
  end: Date
};

type Props = {
  isShowing: boolean,
  hide: any
}

export const SubmitProposalModal = ({ isShowing, hide }: Props) => {
  const { register, handleSubmit } = useForm<FormData>();
  const onKeychainVote = (data: FormData) => {
    keychainCreateProposal(data.username, data.receiver, data.subject, data.permlink, data.daily_pay, data.start, data.end);
  };

  const renderForm = (
    <Form className="bg-secondary shadow">
      <FormGroup>
        <Label>1. Enter a short title for your proposal:</Label>
        <input
          id="subject"
          className="form-control fancy-input"
          name="subject"
          placeholder="title"
          type="text"
          ref={register}
        />
      </FormGroup>
      <Label>2. Enter proposal permlink and daily payout for your work:</Label>
      <Row>
        <Col md="6">
          <FormGroup>
            <input
              id="permlink"
              className="form-control fancy-input"
              name="permlink"
              placeholder="permlink"
              type="text"
              ref={register}
            />
          </FormGroup>
        </Col>
        <Col md="6">
          <FormGroup>
            <input
              id="daily_pay"
              className="form-control fancy-input"
              name="daily_pay"
              type="number"
              ref={register}
            />
          </FormGroup>
        </Col>
      </Row>
      <Label>3. Enter hive accounts for proposal creator and funds receiver:</Label>
      <Row>
        <Col md="6">
          <FormGroup>
            <input
              id="username"
              className="form-control fancy-input"
              name="username"
              placeholder="creator"
              type="text"
              ref={register}
            />
          </FormGroup>
        </Col>
        <Col md="6">
          <FormGroup>
            <input
              id="receiver"
              className="form-control fancy-input"
              name="receiver"
              placeholder="receiver"
              type="text"
              ref={register}
            />
          </FormGroup>
        </Col>
      </Row>
      <Label>4. Enter start and end date of funds payment:</Label>
      <Row>
        <Col md="6">
          <FormGroup>
            <input
              id="start"
              className="form-control fancy-input"
              name="start"
              type="date"
              ref={register}
            />
          </FormGroup>
        </Col>
        <Col md="6">
          <FormGroup>
            <input
              id="end"
              className="form-control fancy-input"
              name="end"
              type="date"
              ref={register}
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label>5. Submit your vote:</Label><br />
        <Button
          color="default"
          type="button"
          onClick={handleSubmit(onKeychainVote)}
        >
          Submit with <img className="icon icon-sm ml-1" src="src/assets/img/keychain.png" />
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
          size="lg"
          header="Submit a proposal"
          children={renderForm}
        />
      </React.Fragment>, document.body
    ) : null)
};
export default SubmitProposalModal;