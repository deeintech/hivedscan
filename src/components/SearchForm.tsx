import React from 'react';
import { Input, InputGroup, InputGroupAddon, InputGroupText } from "reactstrap";

type Props = {
  value: string,
  onChange: any
}

export const AppSearchForm = ({ value, onChange }: Props) => {
  return (
    <InputGroup className="input-group-alternative">
      <InputGroupAddon addonType="prepend">
        <InputGroupText>
          <i className="fab fa-searchengin" />
        </InputGroupText>
      </InputGroupAddon>
      <Input
        className="form-control-alternative"
        placeholder="search"
        type="text"
        value={value}
        onChange={onChange}
      />
    </InputGroup>
  );
}
