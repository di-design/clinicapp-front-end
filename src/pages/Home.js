import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class EmpresaFormIndex extends Component {
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
      <div>
        {this.state.status === true && (
          <div>
            {/* Navigation*/}
            <nav
              className="navbar navbar-expand-lg navbar-light fixed-top py-3"
              id="mainNav"
            >
              <div className="container px-4 px-lg-5">
                <a className="navbar-brand">{this.state.datos.nombre_corto}</a>
                <button
                  className="navbar-toggler navbar-toggler-right"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarResponsive"
                  aria-controls="navbarResponsive"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav ms-auto my-2 my-lg-0">
                    <li className="nav-item">
                      <a className="nav-link" href="#about">
                        Nosotros
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#services">
                        Información corporativa
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#contact">
                        Contacto
                      </a>
                    </li>
                    <li className="nav-item">
                      <Link to="/empresa" className="nav-link">
                        Login
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            {/* Masthead*/}
            <header className="masthead">
              <div className="container px-4 px-lg-5 h-100">
                <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                  <div className="col-lg-8 align-self-end">
                    <h1 className="text-white font-weight-bold">
                      {this.state.datos.nombre}
                    </h1>
                    <hr className="divider" />
                  </div>
                  <div className="col-lg-8 align-self-baseline">
                    <p className="text-white-75 mb-5">
                      {this.state.datos.objetivos}
                    </p>
                    <a className="btn btn-primary btn-xl" href="#about">
                      + de nosotros
                    </a>
                  </div>
                </div>
              </div>
            </header>
            {/* About*/}
            <section className="page-section bg-primary" id="about">
              <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                  <div className="col-lg-8 text-center">
                    <h2 className="text-white mt-0">Quienes Somos</h2>
                    <hr className="divider divider-light" />
                    <p className="text-white-75 mb-4">
                      {this.state.datos.quienes_somos}
                    </p>
                    <a className="btn btn-light btn-xl" href="#services">
                      Nuestra Empresa!
                    </a>
                  </div>
                </div>
              </div>
            </section>
            {/* Services*/}
            <section className="page-section" id="services">
              <div className="container px-4 px-lg-5">
                <h2 className="text-center mt-0">Información corporativa</h2>
                <hr className="divider" />
                <div className="row gx-4 gx-lg-5">
                  <div className="col-lg-6 col-md-6 text-center">
                    <div className="mt-5">
                      <div className="mb-2">
                        <i className="bi-gem fs-1 text-primary" />
                      </div>
                      <h3 className="h4 mb-2">Misión</h3>
                      <p className="text-muted mb-0">
                        {this.state.datos.mision}
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 text-center">
                    <div className="mt-5">
                      <div className="mb-2">
                        <i className="bi-laptop fs-1 text-primary" />
                      </div>
                      <h3 className="h4 mb-2">Visión</h3>
                      <p className="text-muted mb-0">
                        {this.state.datos.vision}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Contact*/}
            <section className="page-section" id="contact">
              <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                  <div className="col-lg-8 col-xl-6 text-center">
                    <h2 className="mt-0">Contáctanos</h2>
                    <hr className="divider" />
                    <p className="text-muted mb-5">
                      Puedes escribirnos al correo: {this.state.datos.correo}
                    </p>
                  </div>
                </div>
                <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
                  <div className="col-lg-6">
                    {/* * * * * * * * * * * * * * * **/}
                    {/* * * SB Forms Contact Form * **/}
                    {/* * * * * * * * * * * * * * * **/}
                    {/* This form is pre-integrated with SB Forms.*/}
                    {/* To make this form functional, sign up at*/}
                    {/* https://startbootstrap.com/solution/contact-forms*/}
                    {/* to get an API token!*/}
                    <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                      {/* Name input*/}
                      <div className="form-floating mb-3">
                        <input
                          className="form-control"
                          id="name"
                          type="text"
                          placeholder="Enter your name..."
                          data-sb-validations="required"
                        />
                        <label htmlFor="name">Full name</label>
                        <div
                          className="invalid-feedback"
                          data-sb-feedback="name:required"
                        >
                          A name is required.
                        </div>
                      </div>
                      {/* Email address input*/}
                      <div className="form-floating mb-3">
                        <input
                          className="form-control"
                          id="email"
                          type="email"
                          placeholder="name@example.com"
                          data-sb-validations="required,email"
                        />
                        <label htmlFor="email">Email address</label>
                        <div
                          className="invalid-feedback"
                          data-sb-feedback="email:required"
                        >
                          An email is required.
                        </div>
                        <div
                          className="invalid-feedback"
                          data-sb-feedback="email:email"
                        >
                          Email is not valid.
                        </div>
                      </div>
                      {/* Phone number input*/}
                      <div className="form-floating mb-3">
                        <input
                          className="form-control"
                          id="phone"
                          type="tel"
                          placeholder="(123) 456-7890"
                          data-sb-validations="required"
                        />
                        <label htmlFor="phone">Phone number</label>
                        <div
                          className="invalid-feedback"
                          data-sb-feedback="phone:required"
                        >
                          A phone number is required.
                        </div>
                      </div>
                      {/* Message input*/}
                      <div className="form-floating mb-3">
                        <textarea
                          className="form-control"
                          id="message"
                          type="text"
                          placeholder="Enter your message here..."
                          style={{ height: "10rem" }}
                          data-sb-validations="required"
                          defaultValue={""}
                        />
                        <label htmlFor="message">Message</label>
                        <div
                          className="invalid-feedback"
                          data-sb-feedback="message:required"
                        >
                          A message is required.
                        </div>
                      </div>
                      {/* Submit success message*/}
                      {/**/}
                      {/* This is what your users will see when the form*/}
                      {/* has successfully submitted*/}
                      <div className="d-none" id="submitSuccessMessage">
                        <div className="text-center mb-3">
                          <div className="fw-bolder">
                            Form submission successful!
                          </div>
                          To activate this form, sign up at
                          <br />
                          <a href="https://startbootstrap.com/solution/contact-forms">
                            https://startbootstrap.com/solution/contact-forms
                          </a>
                        </div>
                      </div>
                      {/* Submit error message*/}
                      {/**/}
                      {/* This is what your users will see when there is*/}
                      {/* an error submitting the form*/}
                      <div className="d-none" id="submitErrorMessage">
                        <div className="text-center text-danger mb-3">
                          Error sending message!
                        </div>
                      </div>
                      {/* Submit Button*/}
                      <div className="d-grid">
                        <button
                          className="btn btn-primary btn-xl disabled"
                          id="submitButton"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="row gx-4 gx-lg-5 justify-content-center">
                  <div className="col-lg-4 text-center mb-5 mb-lg-0">
                    <i className="bi-phone fs-2 mb-3 text-muted" />
                    <div>{this.state.datos.telefono}</div>
                  </div>
                </div>
              </div>
            </section>
            {/* Footer*/}
            <footer className="bg-light py-5">
              <div className="container px-4 px-lg-5">
                <div className="small text-center text-muted">
                  Powered by Team 6 | Misión TIC 2022
                  <div>
                    <span>
                      <small>
                        <small>
                          Última actualización: {this.state.datos.fecha_cambio}
                        </small>
                      </small>
                    </span>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        )}
      </div>
    );
  }
}
