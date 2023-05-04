import React, { useState } from "react";
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
  const [codRca, setCodRca] = useState("");
  const [product, setProduct] = useState([]);
  const [rca, setRca] = useState([]);
  const [clientesPo, setClientesPo] = useState(0);
  const [campanha, setCampanha] = useState({
    titulo: "",
    sup: "Paulinho",
    produtos: [],
    rcas: [],
    descrição: "",
  });
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
    if (e.key === "Enter") {
      console.log(1);
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ codigo: codProduct }),
      };
      const fetchAPI = await fetch(
        "http://localhost:3001/products/codigo",
        requestOptions
      );
      const response = await fetchAPI.json();
      if (response.length > 0) {
        return setProduct([
          ...product,
          `${codProduct} - ${response[0].PRODUTO}`,
        ]);
      }
      setProduct([...product]);
    }
  };

  const getRca = async (e) => {
    if (e.key === "Enter") {
      console.log(1);
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ codigo: codRca }),
      };
      const fetchAPI = await fetch(
        "http://localhost:3001/rcas/codigo",
        requestOptions
      );
      const response = await fetchAPI.json();
      console.log(response);
      if (response.length > 0) {
        return setRca([
          ...rca,
          `CLIENTES POSITIVADOS: ${clientesPo} // ${codRca} - ${response[0].REPRESENTANTE}`,
        ]);
      }
      setRca([...rca]);
    }
  };

  const handleChangeProduct = ({ target }) => {
    setCodProduct(target.value);
    console.log(codProduct);
  };

  const handleChangeRca = ({ target }) => {
    setCodRca(target.value);
    console.log(codProduct);
  };

  const handleClick = ({ target }) => {
    setClientesPo(target.value);
  };

  const removeProduct = ({ target }) => {
    const updatedProduct = product.filter(
      (item, index) => index !== Number(target.id)
    );
    setProduct(updatedProduct);
  };

  const removeRca = ({ target }) => {
    const updatedRca = rca.filter((item, index) => index !== Number(target.id));
    setRca(updatedRca);
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setCampanha({ ...campanha, [name]: value });
  };

  const cadastrarCampanha = () => {
    const updatedCampanha = { ...campanha, produtos: product, rcas: rca };
    setCampanha(updatedCampanha);
    console.log(campanha);
  };

  const handleFiles = async ({target}) => {
    const file = target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    const requestOptions = {
      method: "POST",
      headers: { "name": "campanha", "sup": "jhosy" },
      body: formData,
    };
    const fetchAPI = await fetch(
      "http://localhost:3003/campanhas/upload",
      requestOptions
    );
    const response = await fetchAPI.json();
    /* console.log(response); */
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
                  <CardTitle tag="h3">Cadastrar Campanhas</CardTitle>
                  <p className="card-category">24 Hours performance</p>
                </CardHeader>
                <CardBody>
                  <div class="mb-3">
                    <label for="formFileDisabled" class="form-label">
                      Faça upload de sua campanha
                    </label>
                    <input
                    onChange={handleFiles}
                      class="form-control"
                      type="file"
                      id="formFileDisabled"
                    />
                  </div>
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
