import React from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";
import GestaoSemanal from "./GestaoSemanal";

function GestaoKPIs() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card className="demo-icons">
              <CardHeader>
                <CardTitle tag="h5">DIÁRIAS</CardTitle>
              </CardHeader>
              <CardBody className="all-icons">
                <div id="icons-wrapper">
                  <section>
                    <ul>
                      <li>
                        <i className="nc-icon nc-sound-wave" />
                        <p>BOLETIM DE VENDAS</p>
                        <em>\ea52</em>
                      </li>
                      <li>
                        <i className="nc-icon nc-map-big" />
                        <p>INDICADOR. DIÁRIOS</p>
                        <em>\ea38</em>
                      </li>

                    </ul>
                  </section>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <GestaoSemanal />
      </div>
    </>
  );
}

export default GestaoKPIs;
