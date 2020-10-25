import AppModal from "components/Modal";
import { loginKeychain } from "helpers/keychain";
import React from 'react';
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Label
} from "reactstrap";

type FormData = {
  username: string
};

type Props = {
  isShowing: boolean,
  hide: any
}

export const LoginModal = ({ isShowing, hide }: Props) => {
  const { register, handleSubmit } = useForm<FormData>();
  const onKeychainLogin = (data: FormData) => {
    loginKeychain(data.username);
  };

  const renderForm = (
    <div className="modal-body p-0">
      <Card className="bg-secondary shadow border-0">
        <CardBody className="px-lg-5 py-lg-5">
          <div className="text-center text-muted mb-4">
            <small>Sign in with <u><a href="https://hive.io" className="text-muted">Hive</a></u> account:</small>
          </div>
          <Form role="form">
            <FormGroup className="mb-3">
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fas fa-user" />
                  </InputGroupText>
                </InputGroupAddon>
                <input
                  id="username"
                  className="form-control fancy-input"
                  name="username"
                  placeholder="username"
                  type="text"
                  ref={register}
                />
              </InputGroup>
              <Label className="small mt-2" for="username">Don't have a Hive account? Create one <u><a href="https://signup.hive.io">here</a></u></Label>
            </FormGroup>
            <div className="text-center">
              <Button
                color="default"
                type="button"
                onClick={handleSubmit(onKeychainLogin)}
              >
                Sign in with <img className="icon icon-sm ml-1" src="src/assets/img/keychain.png" />
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </div>
  );

  return (
    isShowing ? ReactDOM.createPortal(
      <React.Fragment>
        <AppModal
          isShowing={isShowing}
          hide={hide}
          size="sm"
          header="Login"
          children={renderForm}
        />
      </React.Fragment>, document.body
    ) : null)
};

export default LoginModal;