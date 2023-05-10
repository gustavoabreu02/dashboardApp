import React, { useEffect, useState } from "react";
import { Line, Pie } from "react-chartjs-2";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart,
} from "variables/charts.js";

function Dashboard() {
  const [vendas, setVendas] = useState(0);
  const [vendasRCA, setVendasRCA] = useState([]);

  useEffect(() => {
    const sup = JSON.parse(localStorage.getItem("sup"));
    if (sup.level === "AUX") {
      getAllVendas();
      getAllVendasRCA();
    } else {
      getVendasSup();
      getVendasRCA();
    }
  }, []);

  const getVendasSup = async () => {
    const sup = JSON.parse(localStorage.getItem("sup"));
    console.log(sup);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ codSup: sup.CODSUPERV, mes: "FEV.23" }),
    };
    const fetchAPI = await fetch(
      "http://localhost:3004/vendas/sup",
      requestOptions
    );
    const response = await fetchAPI.json();
    console.log(response[0]);
    setVendas(response[0]);
  };

  const getAllVendas = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mes: "FEV.23" }),
    };
    const fetchAPI = await fetch(
      "http://localhost:3004/vendas",
      requestOptions
    );
    const response = await fetchAPI.json();
    console.log(response[0]);
    setVendas(response[0]);
  };

  const getVendasRCA = async () => {
    const sup = JSON.parse(localStorage.getItem("sup"));
    console.log(sup);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ codSup: sup.CODSUPERV, mes: "FEV.23" }),
    };
    const fetchAPI = await fetch(
      "http://localhost:3004/vendas/rca",
      requestOptions
    );
    const response = await fetchAPI.json();
    setVendasRCA(response);
  };

  const getAllVendasRCA = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mes: "FEV.23" }),
    };
    const fetchAPI = await fetch(
      "http://localhost:3004/vendas/allrca",
      requestOptions
    );
    const response = await fetchAPI.json();
    setVendasRCA(response);
  };

  return (
    <>
      <div className="content">
        <Row>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-cart-simple text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Pedidos realizados</p>
                      <CardTitle tag="p">{vendas.Total_Venda_VFA}</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="fas fa-sync-alt" /> Update Now
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-money-coins text-success" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Vendas</p>
                      <CardTitle tag="p">
                        {new Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(Number(vendas.Total_Venda_Valor).toFixed(2))}
                      </CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="far fa-calendar" /> Last day
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-bag-16 text-danger" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Itens</p>
                      <CardTitle tag="p">{vendas.Total_Venda}</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="far fa-clock" /> In the last hour
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-box-2 text-primary" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Caixas</p>
                      <CardTitle tag="p">{vendas.Total_Caixa}</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="fas fa-sync-alt" /> Update now
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Vendas Gerais</CardTitle>
                <p className="card-category">Gráfico de vendas geral</p>
              </CardHeader>
              <CardBody>
                <Line
                  data={dashboard24HoursPerformanceChart.data}
                  options={dashboard24HoursPerformanceChart.options}
                  width={400}
                  height={100}
                />
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
        <Row>
          <Col md="4">
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Top Fornecedores</CardTitle>
                <p className="card-category">Top 4</p>
              </CardHeader>
              <CardBody style={{ height: "266px" }}>
                <Pie
                  data={dashboardEmailStatisticsChart.data}
                  options={dashboardEmailStatisticsChart.options}
                />
              </CardBody>
              <CardFooter>
                <div className="legend">
                  <i className="fa fa-circle text-primary" /> Nissin{" "}
                  <i className="fa fa-circle text-warning" /> Bimbo{" "}
                  <i className="fa fa-circle text-danger" /> Pepsico{" "}
                  <i className="fa fa-circle text-gray" /> Minuano
                </div>
                <hr />
                <div className="stats">
                  <i className="fa fa-calendar" /> Fevereiro
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col md="8">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h5">Vendas Supervisores</CardTitle>
                <p className="card-category">
                  Gráfico de vendas por supervisor
                </p>
              </CardHeader>
              <CardBody>
                <Line
                  data={dashboardNASDAQChart.data}
                  options={dashboardNASDAQChart.options}
                  width={400}
                  height={100}
                />
              </CardBody>
              <CardFooter>
                <div className="chart-legend">
                  <i className="fa fa-circle text-info" /> Jhosy{" "}
                  <i className="fa fa-circle text-warning" /> Silva
                </div>
                <hr />
                <div className="card-stats">
                  <i className="fa fa-check" /> Fevereiro
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Top Vendedores</CardTitle>
                <p className="card-category">Atualização em 3 minutos</p>
              </CardHeader>
              <CardBody>
                <div className="card mb-4">
                  <div className="card-header">
                    <i className="fas fa-table me-1"></i>
                    Ranking
                  </div>
                  <div className="card-body">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Position</th>
                          <th scope="col">Código</th>
                          <th scope="col">Representante</th>
                          <th scope="col">Venda</th>
                        </tr>
                      </thead>
                      <tfoot>
                        <tr>
                          <th scope="col">Position</th>
                          <th scope="col">Código</th>
                          <th scope="col">Representante</th>
                          <th scope="col">Venda</th>
                        </tr>
                      </tfoot>
                      <tbody>
                        {vendasRCA.map((rca, i) => (
                          <tr className="table-success" key={i}>
                            <td>{i + 1}</td>
                            <td>{rca.CODUSUR}</td>
                            <td>{rca.REPRESENTANTE}</td>
                            <td>
                              {new Intl.NumberFormat("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                              }).format(rca.TOTAL_VENDAS.toFixed(2))}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
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
    </>
  );
}

export default Dashboard;
