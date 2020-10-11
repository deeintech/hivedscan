import AppCardWidget from 'components/CardWidget';
import React from 'react';
import { Row, Col } from "reactstrap";

export const ProposalsStatsWidget = () => {
  const statsCards = [
    { style: "bg-danger", icon: "fas fa-battery-full", title: "Total budget", subtitle: "559,060 HBD" },
    { style: "bg-warning", icon: "fas fa-battery-half", title: "Daily Budget", subtitle: "5,591 HBD" },
    { style: "bg-default", icon: "fas fa-bullseye", title: "Total Proposals", subtitle: "31" }
  ];

  const renderedWidget = (
    <Row className="mt-4">
      {
        statsCards.map((card, key) => {
          return (
            <Col lg="6" xl="4">
              <AppCardWidget
                style={card.style}
                icon={card.icon}
                title={card.title}
                subtitle={card.subtitle}
                key={key}
              />
            </Col>
          );
        })
      }
    </Row>
  );

  return (
    <div className="mt-3">
      {renderedWidget}
    </div>
  );
}
