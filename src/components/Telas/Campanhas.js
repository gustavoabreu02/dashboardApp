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
import React, { useState } from "react";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import { useLocation } from "react-router-dom";

import Sidebar from "components/Sidebar/Sidebar.js";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";

import routes from "routes.js";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Row,
} from "reactstrap";

var ps;

function Campanhas(props) {
  const [backgroundColor, setBackgroundColor] = React.useState("black");
  const [activeColor, setActiveColor] = React.useState("info");
  const [codProduct, setCodProduct] = useState("");
  const [product, setProduct] = useState("");
  const mainPanel = React.useRef();
  const location = useLocation();
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current);
      document.body.classList.toggle("perfect-scrollbar-on");
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.body.classList.toggle("perfect-scrollbar-on");
      }
    };
  });
  React.useEffect(() => {
    mainPanel.current.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [location]);
  const handleActiveClick = (color) => {
    setActiveColor(color);
  };
  const handleBgClick = (color) => {
    setBackgroundColor(color);
  };

  const getProdut = async (e) => {
    if(e.key === 'Enter') {
      console.log(1);
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ codigo: codProduct }),
      };
      const fetchAPI = await fetch(
        "http://localhost:3004/products/codigo",
        requestOptions
      );
      const response = await fetchAPI.json();
      console.log(response);
      setProduct(response[0].PRODUTO)
    }
    
  }

  const handleChange = ({target}) => {
   setCodProduct(target.value)
   console.log(codProduct);
  }

  return (
    <div className="wrapper">
      <Sidebar
        {...props}
        routes={routes}
        bgColor={backgroundColor}
        activeColor={activeColor}
      />
      <div className="main-panel" ref={mainPanel}>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Cadastrar Campanhas</CardTitle>
                  <p className="card-category">24 Hours performance</p>
                </CardHeader>
                <CardBody>
                  <form>
                    <div class="form-row">
                      <div class="form-group col-md-4">
                        <label for="inputState">Supervisor</label>
                        <select id="inputState" class="form-control">
                          <option selected>Paulinho</option>
                          <option>Jhosy</option>
                          <option>Silva</option>
                          <option>Esly</option>
                        </select>
                      </div>
                      <div class="form-group col-md-6">
                        <label for="inputPassword4">Código do produto</label>
                        <input
                          name="codProduct"
                          value={codProduct}
                          type="text"
                          class="form-control"
                          id="inputPassword4"
                          placeholder="Digite o código do produto"
                          onChange={handleChange}
                          onKeyDown={getProdut}
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="inputAddress">Produto</label>
                      <input
                        value={product}
                        type="text"
                        class="form-control"
                        id="inputAddress"
                        placeholder="Produto"
                      />
                    </div>
                    <div class="form-group">
                      <label for="inputAddress2">Address 2</label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputAddress2"
                        placeholder="Apartment, studio, or floor"
                      />
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label for="inputCity">City</label>
                        <input
                          type="text"
                          class="form-control"
                          id="inputCity"
                        />
                      </div>
                      <div class="form-group col-md-4">
                        <label for="inputState">State</label>
                        <select id="inputState" class="form-control">
                          <option selected>Choose...</option>
                          <option>...</option>
                        </select>
                      </div>
                      <div class="form-group col-md-2">
                        <label for="inputZip">Zip</label>
                        <input type="text" class="form-control" id="inputZip" />
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="gridCheck"
                        />
                        <label class="form-check-label" for="gridCheck">
                          Check me out
                        </label>
                      </div>
                    </div>
                    <button type="button" class="btn btn-primary">
                      Sign in
                    </button>
                  </form>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-history" /> Updated 3 minutes ago
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      <FixedPlugin
        bgColor={backgroundColor}
        activeColor={activeColor}
        handleActiveClick={handleActiveClick}
        handleBgClick={handleBgClick}
      />
    </div>
  );
}

export default Campanhas;
