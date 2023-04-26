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
import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import TableList from "views/Tables.js";
import Maps from "views/Map.js";
import UserPage from "views/User.js";
import UpgradeToPro from "views/Upgrade.js";
import RotinasTrabalho from "views/RotinasTrabalho";
import AnaliseVendas from "views/AnaliseVendas";
import ProcessosGeren from "views/ProcessosGeren";
import Planejamento from "views/Planejamento";
import GestaoKPIs from "views/GestaoKPIs";
import FormPadrao from "views/FormPadrao";

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
    path: "/tables",
    name: "Table List",
    icon: "nc-icon nc-tile-56",
    component: Icons,
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
    component: UpgradeToPro,
    layout: "",
  },
];
export default routes;
