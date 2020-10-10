import React from 'react';
import { Input, InputGroupAddon, InputGroupText, InputGroup } from "reactstrap";

export const AppSearchForm = () => {
  return (
    <InputGroup>
      <InputGroupAddon addonType="prepend">
        <InputGroupText>
          <i className="fab fa-searchengin"></i>
        </InputGroupText>
      </InputGroupAddon>
      <Input placeholder="Search" type="text" />
    </InputGroup>
  );
}
