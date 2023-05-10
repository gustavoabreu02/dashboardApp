import React from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

function GestaoSemanal() {
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
                        <i className="nc-icon nc-album-2" />
                        <p>ONE PAGE NISSIN</p>
                        <em>\ea02</em>
                      </li>
                      <li>
                        <i className="nc-icon nc-globe-2" />
                        <p>VENDA CIDADE/POP</p>
                        <em>\ea2d</em>
                      </li>
                      <li>
                        <i className="nc-icon nc-layout-11" />
                        <p>MARGENS</p>
                        <em>\ea36</em>
                      </li>
                      <li>
                        <i className="nc-icon nc-delivery-fast" />
                        <p>DEVOLUÇÕES</p>
                        <em>\ea28</em>
                      </li>
                      <li>
                        <i className="nc-icon nc-support-17" />
                        <p>AVARIAS</p>
                        <em>\ea55</em>
                      </li>
                      <li>
                        <i className="nc-icon nc-tag-content" />
                        <p>COBRANÇAS</p>
                        <em>\ea57</em>
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

export default GestaoSemanal;
