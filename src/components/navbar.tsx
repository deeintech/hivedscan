import React from "react";
import { Link } from "react-router-dom";
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

export const AppNavbar = () => {
  return (
    <Navbar
      className="navbar-horizontal navbar-dark bg-danger"
      expand="lg"
    >
      <Container>
        <NavbarBrand href="/">
          Hived Scan
          </NavbarBrand>
        <button
          aria-controls="navbar-primary"
          aria-expanded={false}
          aria-label="Toggle navigation"
          className="navbar-toggler"
          data-target="#navbar-primary"
          data-toggle="collapse"
          id="navbar-primary"
          type="button"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <UncontrolledCollapse navbar toggler="#navbar-primary">
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                <Link to="/">Hived Scan</Link>
              </Col>
              <Col className="collapse-close" xs="6">
                <button
                  aria-controls="navbar-primary"
                  aria-expanded={false}
                  aria-label="Toggle navigation"
                  className="navbar-toggler"
                  data-target="#navbar-primary"
                  data-toggle="collapse"
                  id="navbar-primary"
                  type="button"
                >
                  <span />
                  <span />
                </button>
              </Col>
            </Row>
          </div>
          <Nav className="ml-lg-auto" navbar>
            <NavItem>
              <NavLink href="/fund">
                Hive Fund
                </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/hive-engine">
                Hive Engine
                </NavLink>
            </NavItem>
          </Nav>
        </UncontrolledCollapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;