import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";
import PerfectScrollbar from "perfect-scrollbar";
import logoGD7 from "gd7.png";

var ps;

function Sidebar(props) {
  const sup = JSON.parse(localStorage.getItem("sup"));
  const sidebar = React.useRef();

  const activeRoute = (routeName) => {
    return props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(sidebar.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
    };
  });
  return (
    <div
      className="sidebar"
      data-color={props.bgColor}
      data-active-color={props.activeColor}
    >
      <div className="logo">
        <a
          href="https://www.gd7.com.br/g1"
          className="simple-text logo-mini"
        >
          <div className="logo-img">
            <img src={logoGD7} alt="react-logo" />
          </div>
        </a>
        <a href="/admin/dashboard" className="simple-text logo-normal">
          {sup.level} {sup.username}
        </a>
      </div>
      <div className="sidebar-wrapper" ref={sidebar}>
        <Nav>
          {props.routes.map((prop, key) => {
            if (prop.name === "SAIR") {
              return (
                <li
                  className={
                    activeRoute(prop.path) + (prop.pro ? " active-pro" : "")
                  }
                  key={key}
                >
                  <NavLink
                    to={prop.layout + prop.path}
                    className="nav-link"
                    activeClassName="active"
                    onClick={() => {
                      localStorage.setItem(
                        "sup",
                        JSON.stringify({
                          nome: "",
                          sobrenome: "",
                          email: "",
                        })
                      );
                    }}
                  >
                    <i className={prop.icon} />
                    <p>{prop.name}</p>
                  </NavLink>
                </li>
              );
            }
            return (
              <li
                className={
                  activeRoute(prop.path) + (prop.pro ? " active-pro" : "")
                }
                key={key}
              >
                <NavLink
                  to={prop.layout + prop.path}
                  className="nav-link"
                  activeClassName="active"
                >
                  <i className={prop.icon} />
                  <p>{prop.name}</p>
                </NavLink>
              </li>
            );
          })}
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;
