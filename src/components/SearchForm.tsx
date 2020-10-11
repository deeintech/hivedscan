import React from 'react';
import { Input, InputGroupAddon, InputGroupText, InputGroup } from "reactstrap";

type Props = {
  value: string,
  onChange: any
}

export const AppSearchForm = ({ value, onChange }: Props) => {
  return (
    <InputGroup>
      <InputGroupAddon addonType="prepend">
        <InputGroupText>
          <i className="fab fa-searchengin"></i>
        </InputGroupText>
      </InputGroupAddon>
      <Input placeholder="Search" type="text" value={value} onChange={onChange} />
    </InputGroup>
  );
}
