import React from "react";
import { Container } from "reactstrap";

type Props = {
  title: string,
  subtitle: string
}

export const AppHeader = ({ title, subtitle }: Props) => {
  return (
    <div className="header bg-danger">
      <div className="pb-8 pt-3 pt-md-6">
        <Container>
          <h1 className="display-1 text-secondary">{title}</h1>
          <p className="lead text-secondary">
            {subtitle}
          </p>
        </Container>
      </div>
    </div>
  );
}

export default AppHeader;