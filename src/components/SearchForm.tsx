import React from 'react';
import { Input, InputGroup } from "reactstrap";

type Props = {
  value: string,
  onChange: any
}

export const AppSearchForm = ({ value, onChange }: Props) => {
  return (
    <InputGroup className="input-group-alternative">
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
