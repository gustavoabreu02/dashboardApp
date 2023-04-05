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

function RotinasSemanal() {
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
