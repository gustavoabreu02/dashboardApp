import React from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

function PlanejamentoDoc() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card className="demo-icons">
              <CardHeader>
                <CardTitle tag="h5">DOCUMENTOS</CardTitle>
              </CardHeader>
              <CardBody className="all-icons">
                <div id="icons-wrapper">
                  <section>
                    <ul>
                      <li>
                        <i className="nc-icon nc-single-copy-04" />
                        <p>MÉTODO TRABALHO</p>
                        <em>\ea51</em>
                      </li>
                      <li>
                        <i className="nc-icon nc-briefcase-24" />
                        <p>DIVISÃO DE PASTA</p>
                        <em>\ea13</em>
                      </li>
                      <li>
                        <i className="nc-icon nc-pin-3" />
                        <p>MAPA</p>
                        <em>\ea42</em>
                      </li>
                      <li>
                        <i className="nc-icon nc-zoom-split" />
                        <p>PESQUISA DE PREÇO</p>
                        <em>\ea64</em>
                      </li>
                      <li>
                        <i className="nc-icon nc-box-2" />
                        <p>PROTOCOLO MAT.</p>
                        <em>\ea11</em>
                      </li>
                      <li>
                        <i className="nc-icon nc-simple-remove" />
                        <p>CONTR / DESLG RCA</p>
                        <em>\ea4f</em>
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

export default PlanejamentoDoc;
