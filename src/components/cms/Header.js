import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class EmpresaForm extends Component {
  state = {
    datos: {},
    status: false,
  };

  datosEmpresa = () => {
    axios.get("http://localhost:8080/empresa/listar").then((res) => {
      this.setState({
        datos: res.data,
        status: true,
      });
    });
  };

  componentDidMount = () => {
    this.datosEmpresa();
  };

  render() {
    return (
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
      {/* Navbar Brand*/}
      <Link to="/" className="navbar-brand ps-3">
      CMS | {this.state.datos.nombre_corto}
      </Link>
      {/* Sidebar Toggle*/}
      <button
        className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
        id="sidebarToggle"
        href="#!"
      >
        <i className="fas fa-bars" />
      </button>
      <ul className="navbar-nav d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            id="navbarDropdown"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fas fa-user fa-fw" />
          </a>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdown"
          >
            <li>
              <Link to="/" className="dropdown-item" href="#!">
                Logout
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    );
  }
}
