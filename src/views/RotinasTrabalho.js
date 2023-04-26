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
import RotinasSemanal from "./RotinasSemanal";
import { Link } from "react-router-dom";

function RotinasTrabalho() {
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
                        <a href="https://mail.google.com/mail/u/0/#inbox"
                        target="_blank"
                        rel="noreferrer">
                      <li>
                        <i className="nc-icon nc-email-85" />
                        <p>E-MAIL / OUTLOOK</p>
                        <em>\ea2a</em>
                      </li>
                      </a>
                      <li>
                        <i className="nc-icon nc-book-bookmark" />
                        <p>ATA DE DESPACHO</p>
                        <em>\ea0f</em>
                      </li>
                      <a href="https://appsv.solucoesmaxima.com.br/Acessar?ReturnUrl=%2F"
                         target="_blank"
                         rel="noreferrer">
                      <li>
                        <i className="nc-icon nc-single-copy-04" />
                        <p>MÁXIMA</p>
                        <em>\ea51</em>
                      </li>
                      </a>
                      <li>
                        <i className="nc-icon nc-paper" />
                        <p>BOOK DE AÇÕES</p>
                        <em>\ea41</em>
                      </li>
                      <li>
                        <i className="nc-icon nc-tile-56" />
                        <p>CAMPANHA PEPSICO</p>
                        <em>\ea5a</em>
                      </li>
                      <Link to="/admin/rotinas/campanhas">
                      <li>
                        <i className="nc-icon nc-trophy" />
                        <p>CAMPANHAS</p>
                        <em>\ea5d</em>
                      </li>
                      </Link>
                      <a href="https://pepsicorace.com.br/login.php"
                      target="_blank"
                      rel="noreferrer" >
                      <li>
                        <i className="nc-icon nc-spaceship" />
                        <p>RACE</p>
                        <em>\ea53</em>
                      </li>
                      </a>
                    </ul>
                  </section>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <RotinasSemanal />
      </div>
    </>
  );
}

export default RotinasTrabalho;
