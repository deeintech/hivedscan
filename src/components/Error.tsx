import React from "react";
import { Container } from "reactstrap";

class AppError extends React.Component {
  render() {
    return (
      <Container>
        <h1 className="display-1">Ooops.</h1>
        <p>It seems Hived Scan experiences some troubles with loading your content.</p>
      </Container>
    );
  }
}

export default AppError;