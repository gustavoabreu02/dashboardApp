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
        "http://localhost:3003/products/codigo",
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
        "http://localhost:3003/rcas/codigo",
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

  const handleChange = ({target}) => {
    const { name, value } = target;
    setCampanha({...campanha, [name]: value})
  }

  const cadastrarCampanha = () => {
    const updatedCampanha = {...campanha, produtos: product, rcas: rca }
    setCampanha(updatedCampanha)
    console.log(campanha);
  };
  console.log(campanha);
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
                  <form>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label for="inputAddress">Título da campanha</label>
                        <input
                          onChange={handleChange}
                          value={campanha.titulo}
                          name="titulo"
                          type="text"
                          class="form-control"
                          id="inputAddress"
                          placeholder="Digite o título da campanha"
                        />
                      </div>
                      <div class="form-group col-md-3">
                        <label for="inputState">Supervisor</label>
                        <select name="sup" id="inputState" class="form-control" onChange={handleChange}>
                          <option selected>Paulinho</option>
                          <option>Jhosy</option>
                          <option>Silva</option>
                          <option>Esly</option>
                        </select>
                      </div>
                      <div class="form-group col-md-3">
                        <label for="inputPassword4">Código do produto</label>
                        <input
                          name="codProduct"
                          value={codProduct}
                          type="text"
                          class="form-control"
                          id="inputPassword4"
                          placeholder="Digite o código do produto"
                          onChange={handleChangeProduct}
                          onKeyDown={getProdut}
                        />
                      </div>
                    </div>
                    {product.map((prod, i) => (
                      <div>
                        <div class="form-group">
                          <label for="inputAddress">Produto</label>
                          <input
                            autocomplete="off"
                            id={i}
                            onDoubleClick={removeProduct}
                            value={prod}
                            type="text"
                            class="form-control"
                            placeholder="Produto"
                          />
                        </div>
                      </div>
                    ))}
                    <div class="form-row">
                      <div class="form-group col-md-4">
                        <label for="inputState">Clientes positivados</label>
                        <input
                          onClick={handleClick}
                          id="inputState"
                          class="form-control"
                          type="number"
                        />
                      </div>
                      <div class="form-group col-md-5">
                        <label for="inputCity">Representante</label>
                        <input
                          type="text"
                          class="form-control"
                          id="inputCity"
                          placeholder="Digite o código do RCA"
                          onChange={handleChangeRca}
                          onKeyDown={getRca}
                        />
                      </div>
                    </div>
                    {rca.map((rca, i) => (
                      <div class="form-group">
                        <label for="inputAddress">RCA</label>
                        <input
                          id={i}
                          value={rca}
                          type="text"
                          class="form-control"
                          placeholder="RCA"
                          onDoubleClick={removeRca}
                        />
                      </div>
                    ))}
                    <div class="form-floating">
                    <label for="floatingTextarea">Descrição</label>
                      <textarea
                        name="descrição"
                        value={campanha.descrição}
                        onChange={handleChange}
                        class="form-control"
                        placeholder="Escreva a descrição da campanha"
                        id="floatingTextarea"
                      ></textarea>
                    </div>
                    <button type="button" class="btn btn-primary" onClick={cadastrarCampanha}>
                      CADASTRAR
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
