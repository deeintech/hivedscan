import React from "react";
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";

class AppStats extends React.Component {
  render() {
    return (
      <Row className="mt-4">
        <Col lg="6" xl="4">
          <Card className="card-stats mb-4 mb-xl-0 bg-danger py-2">
            <CardBody>
              <Row>
                <div className="col">
                  <CardTitle
                    tag="h5"
                    className="text-uppercase text-white text-muted mb-0"
                  >
                    Total Budget
                          </CardTitle>
                  <span className="h2 text-white mb-0">
                  559,060 HBD
                          </span>
                </div>
                <Col className="col-auto">
                  <div className="icon icon-shape text-white rounded-circle">
                    <i className="fas fa-battery-full" />
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col lg="6" xl="4">
          <Card className="card-stats mb-4 mb-xl-0 bg-warning py-2">
            <CardBody>
              <Row>
                <div className="col">
                  <CardTitle
                    tag="h5"
                    className="text-uppercase text-white text-muted mb-0"
                  >
                    Daily Budget
                          </CardTitle>
                  <span className="h2 text-white mb-0">
                  5,591 HBD
                          </span>
                </div>
                <Col className="col-auto">
                  <div className="icon icon-shape text-white rounded-circle">
                    <i className="fas fa-battery-half" />
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col lg="6" xl="4">
          <Card className="card-stats mb-4 mb-xl-0 bg-default py-2">
            <CardBody>
              <Row>
                <div className="col">
                  <CardTitle
                    tag="h5"
                    className="text-uppercase text-muted text-white mb-0"
                  >
                    Total Proposals
                          </CardTitle>
                  <span className="h2 text-white mb-0">31</span>
                </div>
                <Col className="col-auto">
                  <div className="icon icon-shape text-white rounded-circle">
                    <i className="fas fa-bullseye" />
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default AppStats;