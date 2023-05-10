import React from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";
import PlanejamentoDoc from "./PlanejamentoDoc";

function Planejamento() {
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
                        <i className="nc-icon nc-money-coins" />
                        <p>ANÁLISE DE COMISSÕES</p>
                        <em>\ea3e</em>
                      </li>
                      <li>
                        <i className="nc-icon nc-layout-11" />
                        <p>PERFORMACE SUPERVISOR</p>
                        <em>\ea36</em>
                      </li>
                      <li>
                        <i className="nc-icon nc-ruler-pencil" />
                        <p>PLANILHA DE METAS</p>
                        <em>\ea45</em>
                      </li>
                      <li>
                        <i className="nc-icon nc-chart-bar-32" />
                        <p>ANÁLISE SWOT</p>
                        <em>\ea1e</em>
                      </li>
                      <li>
                        <i className="nc-icon nc-tile-56" />
                        <p>PLANILHA DE AÇÃO</p>
                        <em>\ea5a</em>
                      </li>
                      <li>
                        <i className="nc-icon nc-badge" />
                        <p>ROTEIROS RCAs</p>
                        <em>\ea09</em>
                      </li>
                    </ul>
                  </section>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <PlanejamentoDoc />
      </div>
    </>
  );
}

export default Planejamento;
