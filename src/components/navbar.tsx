import React from "react";
import { Link } from "react-router-dom";
// import useModal from 'helpers/useModal';
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
// import LoginModal from "features/user/userModals/LoginModal";

export const AppNavbar = () => {
  // const { isOpenLoginModal, toggleLoginModal } = useModal();

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
                Fund
                </NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink onClick={toggleLoginModal}>
                Sign in
                </NavLink>
            </NavItem> */}
          </Nav>
        </UncontrolledCollapse>
      </Container>
      {/* <LoginModal
        isShowing={isOpenLoginModal}
        hide={toggleLoginModal} /> */}
    </Navbar>
  );
}

export default AppNavbar;