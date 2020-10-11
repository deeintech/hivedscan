import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import AppNavbar from "./Navbar";

type Props = {
  items: any[]
}

export const AppNav = ({ items }: Props) => {
  return (
    <Nav
      className="nav-fill flex-column flex-md-row"
      pills
      role="tablist">
      {
        items.map((item, key) => {
          return (
            < NavItem key={key}>
              <NavLink
                className="mb-sm-3 mb-md-0"
                href={item.url}
              >
                <i className={`${item.icon} mr-2 text-secondary3`}></i>
                <span className="text-secondary3">{item.content}</span>
              </NavLink>
            </NavItem>
          );
        })
      }
    </Nav>
  );
}

export default AppNavbar;