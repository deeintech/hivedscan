import React from "react";
import { Container } from "reactstrap";
import AppNavbar from "./Navbar";

class AppHeader extends React.Component {
  render() {
    return (
      <div className="header bg-danger">
        <AppNavbar />
        <div className="pb-8 pt-3 pt-md-6">
          <Container>
            <h1 className="display-1 text-secondary">Hive Fund</h1>
            <p className="lead text-secondary">
              A list of the latest proposals submitted to the Hive network
          </p>
          </Container>
        </div>
      </div>
    );
  }
}

export default AppHeader;