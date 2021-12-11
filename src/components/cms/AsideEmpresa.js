import React from "react";
import { Link } from "react-router-dom";
import ContentEmpresa from "./ContentEmpresa";

export default function Aside() {
  return (
    <div id="layoutSidenav">
      <div id="layoutSidenav_nav">
        <nav
          className="sb-sidenav accordion sb-sidenav-dark"
          id="sidenavAccordion"
        >
          <div className="sb-sidenav-menu">
            <div className="nav">
              <div className="sb-sidenav-menu-heading"></div>
              <a className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="true" aria-controls="collapseLayouts">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-columns" />
                </div>
                Configuración
                <div className="sb-sidenav-collapse-arrow">
                  <i className="fas fa-angle-down" />
                </div>
              </a>
              <div
                className="collapse show"
                id="collapseLayouts"
                aria-labelledby="headingOne"
                data-bs-parent="#sidenavAccordion"
              >
                <nav className="sb-sidenav-menu-nested nav">
                  <Link to="/empresa" className="nav-link">
                    Datos empresa
                  </Link>
                  <Link to="/web" className="nav-link">
                    Portal web
                  </Link>
                </nav>
              </div>
            </div>
          </div>
          <div className="sb-sidenav-footer">
            <div className="small">Powered by Team 6</div>
            Misión TIC 2022
          </div>
        </nav>
      </div>
      <ContentEmpresa/>
    </div>
  );
}
