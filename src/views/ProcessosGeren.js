import React from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

function ProcessosGeren() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card className="demo-icons">
              <CardHeader>
                <CardTitle tag="h5">SEMANAL</CardTitle>
              </CardHeader>
              <CardBody className="all-icons">
                <div id="icons-wrapper">
                  <section>
                    <ul>
                      <li>
                        <i className="nc-icon nc-world-2" />
                        <p>UNIVERSON NISSIN</p>
                        <em>\ea63</em>
                      </li>
                      <li>
                        <i className="nc-icon nc-box" />
                        <p>SCANTECH</p>
                        <em>\ea12</em>
                      </li>
                    </ul>
                  </section>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ProcessosGeren;
