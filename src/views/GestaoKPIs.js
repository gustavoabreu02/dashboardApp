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
