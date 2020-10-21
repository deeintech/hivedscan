import AppCardWidget from 'components/CardWidget';
import React from 'react';
import { Row, Col } from "reactstrap";

type Props = {
  totalProposals: number,
  totalBudget: number;
  dailyBudget: number;
}

export const ProposalsStatsWidget = ( {totalProposals, totalBudget, dailyBudget }: Props)  => {
  const statsCards = [
    { style: "bg-danger", icon: "fas fa-battery-full", title: "Total budget", subtitle: `${totalBudget ? totalBudget.toLocaleString() : 0} HBD` },
    { style: "bg-warning", icon: "fas fa-battery-half", title: "Daily Budget", subtitle: `${dailyBudget ? dailyBudget.toLocaleString() : 0} HBD` },
    { style: "bg-default", icon: "fas fa-bullseye", title: "Total Proposals", subtitle: totalProposals ? totalProposals : 0 }
  ];

  const renderedWidget = (
    <Row className="mt-4">
      {
        statsCards.map((card, key) => {
          return (
            <Col lg="6" xl="4" key={key}>
              <AppCardWidget
                style={card.style}
                icon={card.icon}
                title={card.title}
                subtitle={card.subtitle.toString()}
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
