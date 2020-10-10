import React, { useState } from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

type Props = {
  items: any[],
  dropdownHeader: string,
  dropdownItems: string[]
}

export const AppDropdown = ({ items, dropdownHeader, dropdownItems }: Props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <Nav pills>
      {items.map((item, key) => {
        return (
          <NavItem>
            <NavLink href={item.url} key={key}>{item.name}</NavLink>
          </NavItem>
          );
        })
      }
      <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle nav caret>
          {dropdownHeader}
        </DropdownToggle>
        <DropdownMenu>
          {
            dropdownItems.map((item, key) => {
              return (
                <DropdownItem key={key}>{item}</DropdownItem>
              );
            })
          }
        </DropdownMenu>
      </Dropdown>
    </Nav>
  );
}
