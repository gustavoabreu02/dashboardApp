import React from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

function RotinasSemanal() {
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
                        <i className="nc-icon nc-calendar-60" />
                        <p>AGENDA</p>
                        <em>\ea1a</em>
                      </li>
                      <li>
                        <i className="nc-icon nc-chart-bar-32" />
                        <p>PREST. DE CONTAS</p>
                        <em>\ea1e</em>
                      </li>
                      <li>
                        <i className="nc-icon nc-bulb-63" />
                        <p>COACHING COM RCAs</p>
                        <em>\ea14</em>
                      </li>
                      <a href="http://suporteti.gd7.com.br:8083/otrs/customer.pl"
                        target="_blank"
                        rel="noreferrer">
                      <li>
                        <i className="nc-icon nc-laptop" />
                        <p>CHAMADOS T.I</p>
                        <em>\ea35</em>
                      </li>
                      </a>
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

export default RotinasSemanal;
