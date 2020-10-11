import React, { useState } from 'react';
import { Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';

type Props = {
  dropdownHeader: string,
  dropdownItems: any[]
}

export const AppDropdown = ({ dropdownHeader, dropdownItems }: Props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle nav caret>
        {dropdownHeader}
      </DropdownToggle>
      <DropdownMenu>
        {
          dropdownItems.map((item, key) => {
            return (
              <DropdownItem key={key} value={item.key}>{item.name}</DropdownItem>
            );
          })
        }
      </DropdownMenu>
    </Dropdown>
  );
}
