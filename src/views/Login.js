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

function Login(props) {
  const [sup, setSup] = useState({
    email: "",
    password: "",
  });

  const [login, setLogin] = useState({
    message: "Digite sua senha e email",
  });

  const handleClick = async () => {
    console.log(sup);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sup),
    };
    const fetchAPI = await fetch("http://localhost:3003/login", requestOptions);
    const response = await fetchAPI.json();
    console.log(response);
    if (response.message) {
      return setLogin({
        message: response.message,
      });
    }
    localStorage.setItem("sup", JSON.stringify(response));
    props.history.push("/admin/dashboard");
  };

  const handleChange = ({ target }) => {
    setSup({
      ...sup,
      [target.name]: target.value,
    });
  };

  return (
    <div className="body">
      <div className="wrapperLogin fadeInDown">
        <div className="content-login">
          <h2 className="activeLogin"> Login </h2>
          <form className="box-login" method="post" action="#">
            <input
              type="email"
              id="email"
              className="campo"
              name="email"
              placeholder="E-mail"
              onChange={handleChange}
              onClick={handleChange}
            />
            <input
              type="password"
              id="password"
              className="campo"
              name="password"
              placeholder="Senha"
              onChange={handleChange}
              onClick={handleChange}
            />
            <button
              type="button"
              className="botao"
              value="Entrar"
              onClick={handleClick}
            >
              Entrar
            </button>
          </form>
          <div className="box-lembrar-senha">
            <a
              className="link"
              href="http://suporteti.gd7.com.br:8083/otrs/customer.pl"
            >
              Lembrar Senha ?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
