import Dashboard from "views/Dashboard.js";
/* import Typography from "views/Typography.js";
import TableList from "views/Tables.js";
import Maps from "views/Map.js"; */
import RotinasTrabalho from "views/RotinasTrabalho";
import AnaliseVendas from "views/AnaliseVendas";
import ProcessosGeren from "views/ProcessosGeren";
import Planejamento from "views/Planejamento";
import GestaoKPIs from "views/GestaoKPIs";

var routes = [
  {
    path: "/dashboard",
    name: "DASHBOARD",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/rotinas",
    name: "ROTINAS DE TRABALHO",
    icon: "nc-icon nc-diamond",
    component: RotinasTrabalho,
    layout: "/admin",
  },
  {
    path: "/gestao",
    name: "GESTÃO DE KPIs",
    icon: "nc-icon nc-pin-3",
    component: GestaoKPIs,
    layout: "/admin",
  },
  {
    path: "/analise",
    name: "ANÁLISE DE VENDAS",
    icon: "nc-icon nc-bell-55",
    component: AnaliseVendas,
    layout: "/admin",
  },
  {
    path: "/processos",
    name: "PROCESSOS GERENCIAIS",
    icon: "nc-icon nc-single-02",
    component: ProcessosGeren,
    layout: "/admin",
  },
  {
    path: "/planejamento",
    name: "PLANEJAMENTO",
    icon: "nc-icon nc-caps-small",
    component: Planejamento,
    layout: "/admin",
  },
  {
    pro: true,
    path: "/login",
    name: "SAIR",
    icon: "nc-icon nc-button-power",
    layout: "",
  },
];
export default routes;
