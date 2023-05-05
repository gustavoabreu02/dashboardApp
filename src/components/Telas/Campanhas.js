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
  const [data, setData] = useState({});
  const [campanha, setCampanha] = useState({
    name: "",
    sup: "Paulinho",
  });
  const [campanhasAtivas, setCampanhasAtivas] = useState([]);
  const [perm, setPerm] = useState(false);

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

  React.useEffect(() => {
    const sup = JSON.parse(localStorage.getItem("sup"));
    if (sup.level === "AUX") {
      setPerm(true);
    }
    getCampanhasAtivas();
  }, []);

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

  const cadastrarCampanha = async () => {
    console.log(campanha);
    const requestOptions = {
      method: "POST",
      headers: campanha,
      body: data,
    };
    const fetchAPI = await fetch(
      "http://localhost:3003/campanhas/upload",
      requestOptions
    );
    const response = await fetchAPI.json();
    getCampanhasAtivas();
  };

  const handleFiles = async ({ target }) => {
    const file = target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    setData(formData);
    /* console.log(response); */
  };

  const getCampanhasAtivas = async () => {
    const sup = JSON.parse(localStorage.getItem("sup"));
    if (sup.level === "SUP") {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sup: sup.username }),
      };
      const fetchAPI = await fetch(
        "http://localhost:3003/campanhas/sup",
        requestOptions
      );
      const response = await fetchAPI.json();
      console.log(response);
      setCampanhasAtivas(response);
    } else if (sup.level === "AUX") {
      const requestOptions = {
        method: "GET",
      };
      const fetchAPI = await fetch(
        "http://localhost:3003/campanhas/",
        requestOptions
      );
      const response = await fetchAPI.json();
      setCampanhasAtivas(response);
    }
  };

  const removeCampanha = async ({ target }) => {
    const { id, name } = target;
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id, file: name }),
    };
    const fetchAPI = await fetch(
      "http://localhost:3003/campanhas/delete",
      requestOptions
    );
    const response = await fetchAPI.json();
    getCampanhasAtivas();
  };

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
            {perm ? (
              <Col md="12">
                <Card>
                  <CardHeader>
                    <CardTitle tag="h3">CAMPANHAS</CardTitle>
                    <p className="card-category">GD7</p>
                  </CardHeader>
                  <CardBody>
                    <div className="container">
                      <h2>Cadastrar campanhas</h2>
                      <form>
                        <div className="form-group">
                          <label htmlFor="nome">Título:</label>
                          <input
                            value={campanha.name}
                            name="name"
                            onChange={handleChange}
                            type="text"
                            className="form-control"
                            id="nome"
                            placeholder="Digite o título da campanha"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="arquivo">Arquivo:</label>
                          <input
                            onChange={handleFiles}
                            type="file"
                            className="form-control-file"
                            id="arquivo"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="selecao">Supervisor:</label>
                          <select
                            name="sup"
                            className="form-control"
                            id="selecao"
                            onChange={handleChange}
                          >
                            <option>Paulinho</option>
                            <option>Jhosy</option>
                            <option>Esly</option>
                            <option>Silva</option>
                            <option>Luis</option>
                            <option>Márcio</option>
                            <option>Área vaga</option>
                          </select>
                        </div>
                        <button
                          onClick={cadastrarCampanha}
                          type="button"
                          className="btn btn-primary"
                        >
                          Cadastrar
                        </button>
                      </form>
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
            ) : undefined}
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h3">CAMPANHAS ATIVAS</CardTitle>
                  <p className="card-category">GD7</p>
                </CardHeader>
                <CardBody>
                  {campanhasAtivas.map((camp, id) => (
                    <div className="card" key={id}>
                      <div className="card-header">{camp.sup}</div>
                      <div className="card-body">
                        <h5 className="card-title">{camp.name}</h5>
                        <p className="card-text">
                          Aperte no botão abaixo para baixar a campanha!
                        </p>
                        <a
                          href={`http://localhost:3003/campanhas/download/${camp.file.replace(
                            "uploads/",
                            ""
                          )}`}
                          className="btn btn-primary"
                        >
                          Download
                        </a>
                        {perm ? (
                          <button
                            id={camp.id}
                            name={camp.file}
                            onClick={removeCampanha}
                            className="btn btn-danger"
                          >
                            Remover
                          </button>
                        ) : undefined}
                      </div>
                    </div>
                  ))}
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
