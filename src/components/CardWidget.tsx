import React from "react";
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";

type Props = {
  style: string,
  icon: string,
  title: string,
  subtitle: string
}

export const AppCardWidget = ({ style, icon, title, subtitle }: Props) => {
  return (
    <Card className={`card-stats mb-4 mb-xl-0 ${style} py-2`}>
      <CardBody>
        <Row>
          <div className="col">
            <CardTitle
              tag="h5"
              className="text-uppercase text-white text-muted mb-0"
            >
              {title}
            </CardTitle>
            <span className="h2 text-white mb-0">
              {subtitle}
            </span>
          </div>
          <Col className="col-auto">
            <div className="icon icon-shape text-white rounded-circle">
              <i className={icon} />
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
}

export default AppCardWidget;