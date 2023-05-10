import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.3.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import "assets/css/login.css";

import AdminLayout from "layouts/Admin.js";
import Login from "views/Login";
import Campanhas from "components/Telas/Campanhas";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/admin/rotinas/campanhas" component={Campanhas} />
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Redirect to="/login" />
    </Switch>
  </BrowserRouter>
);
