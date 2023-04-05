/*!

=========================================================
* Paper Dashboard React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

function AnaliseVendas() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card className="demo-icons">
              <CardHeader>
                <CardTitle tag="h5">SEMANAL</CardTitle>
{/*                 <p className="card-category">
                  Handcrafted by our friends from{" "}
                  <a href="https://nucleoapp.com/?ref=1712">NucleoApp</a>
                </p> */}
              </CardHeader>
              <CardBody className="all-icons">
                <div id="icons-wrapper">
                  <section>
                    <ul>
                      <li>
                        <i className="nc-icon nc-cart-simple" />
                        <p>CLIENTE SEM COMPRA</p>
                        <em>\ea1d</em>
                      </li>
                      <li>
                        <i className="nc-icon nc-planet" />
                        <p>GD7 X DONIZETE</p>
                        <em>\ea43</em>
                      </li>
                      <li>
                        <i className="nc-icon nc-bag-16" />
                        <p>80 / 20</p>
                        <em>\ea0a</em>
                      </li>
                      <li>
                        <i className="nc-icon nc-bullet-list-67" />
                        <p>TOP 50</p>
                        <em>\ea15</em>
                      </li>
                      <li>
                        <i className="nc-icon nc-sound-wave" />
                        <p>PREVISÃO DE VENDAS</p>
                        <em>\ea52</em>
                      </li>
                      <li>
                        <i className="nc-icon nc-tile-56" />
                        <p>TABELA DINÂMICA</p>
                        <em>\ea5a</em>
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

export default AnaliseVendas;
