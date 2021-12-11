import React, { Component } from "react";
import axios from "axios";
import * as reactbs from "react-bootstrap";

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
      <div>
        <h4>Datos empresa</h4>
        {this.state.status === true && (
          <React.Fragment>
            <reactbs.Accordion>
              <reactbs.Accordion.Item eventKey="0">
                <reactbs.Accordion.Header>
                  Información General
                </reactbs.Accordion.Header>
                <reactbs.Accordion.Body>
                  <reactbs.Form>
                    <div className="row">
                      <div className="col">
                        <reactbs.Form.Group
                          className="mb-3"
                          controlId="formNit"
                        >
                          <reactbs.Form.Label>Nit</reactbs.Form.Label>
                          <reactbs.Form.Control
                            type="number"
                            placeholder="Número identificación tributaria"
                            value={this.state.datos.nit}
                          />
                        </reactbs.Form.Group>
                      </div>
                      <div className="col">
                        <reactbs.Form.Group
                          className="mb-3"
                          controlId="formSiglas"
                        >
                          <reactbs.Form.Label>Siglas</reactbs.Form.Label>
                          <reactbs.Form.Control
                            type="text"
                            placeholder="Siglas"
                            value={this.state.datos.siglas}
                          />
                        </reactbs.Form.Group>
                      </div>
                    </div>
                    <reactbs.Form.Group
                      className="mb-3"
                      controlId="formRazonSocial"
                    >
                      <reactbs.Form.Label>Razón social</reactbs.Form.Label>
                      <reactbs.Form.Control
                        type="text"
                        placeholder="Razón social o nombre comercial"
                        value={this.state.datos.nombre}
                      />
                    </reactbs.Form.Group>
                    <div className="row">
                      <div className="col">
                        <reactbs.Form.Group
                          className="mb-3"
                          controlId="formNombreCorto"
                        >
                          <reactbs.Form.Label>Nombre corto</reactbs.Form.Label>
                          <reactbs.Form.Control
                            type="text"
                            placeholder="Nombre corto"
                            value={this.state.datos.nombre_corto}
                          />
                        </reactbs.Form.Group>
                      </div>
                      <div className="col">
                        <reactbs.Form.Group
                          controlId="formFile"
                          className="mb-3"
                        >
                          <reactbs.Form.Label>Logo empresa</reactbs.Form.Label>
                          <reactbs.Form.Control type="file" />
                        </reactbs.Form.Group>
                      </div>
                    </div>
                    <reactbs.Button variant="primary" type="submit">
                      Guardar
                    </reactbs.Button>
                  </reactbs.Form>
                </reactbs.Accordion.Body>
              </reactbs.Accordion.Item>
              <reactbs.Accordion.Item eventKey="1">
                <reactbs.Accordion.Header>
                  Información corporativa
                </reactbs.Accordion.Header>
                <reactbs.Accordion.Body>
                  <reactbs.Form>
                    <reactbs.Form.Group
                      className="mb-3"
                      controlId="formObjetivos"
                    >
                      <reactbs.Form.Label>Objetivos</reactbs.Form.Label>
                      <reactbs.Form.Control
                        type="text"
                        placeholder="Objetivos corporativos"
                        value={this.state.datos.objetivos}
                      />
                    </reactbs.Form.Group>
                    <reactbs.Form.Group
                      className="mb-3"
                      controlId="formQuienesSomos"
                    >
                      <reactbs.Form.Label>Quienes Somos</reactbs.Form.Label>
                      <reactbs.Form.Control
                        type="text"
                        placeholder="¿Quienes somos?"
                        value={this.state.datos.quienes_somos}
                      />
                    </reactbs.Form.Group>
                    <reactbs.Form.Group className="mb-3" controlId="formMision">
                      <reactbs.Form.Label>Misión</reactbs.Form.Label>
                      <reactbs.Form.Control
                        type="text"
                        placeholder="Misión"
                        value={this.state.datos.mision}
                      />
                    </reactbs.Form.Group>
                    <reactbs.Form.Group className="mb-3" controlId="formVision">
                      <reactbs.Form.Label>Visión</reactbs.Form.Label>
                      <reactbs.Form.Control
                        type="text"
                        placeholder="Visión"
                        value={this.state.datos.vision}
                      />
                    </reactbs.Form.Group>
                    <reactbs.Button variant="primary" type="submit">
                      Guardar
                    </reactbs.Button>
                  </reactbs.Form>
                </reactbs.Accordion.Body>
              </reactbs.Accordion.Item>
              <reactbs.Accordion.Item eventKey="2">
                <reactbs.Accordion.Header>
                  Ubicación y contacto
                </reactbs.Accordion.Header>
                <reactbs.Accordion.Body>
                  <reactbs.Form>
                    <div className="row">
                      <div className="col">
                        <reactbs.Form.Group
                          className="mb-3"
                          controlId="formTelefono"
                        >
                          <reactbs.Form.Label>Teléfono</reactbs.Form.Label>
                          <reactbs.Form.Control
                            type="text"
                            placeholder="Teléfono"
                            value={this.state.datos.telefono}
                          />
                        </reactbs.Form.Group>
                      </div>
                      <div className="col">
                        <reactbs.Form.Group
                          className="mb-3"
                          controlId="formCorreo"
                        >
                          <reactbs.Form.Label>
                            Correo electrónico
                          </reactbs.Form.Label>
                          <reactbs.Form.Control
                            type="email"
                            placeholder="Correo electrónico"
                            value={this.state.datos.correo}
                          />
                        </reactbs.Form.Group>
                      </div>
                    </div>
                    <reactbs.Form.Group
                      className="mb-3"
                      controlId="formDireccion"
                    >
                      <reactbs.Form.Label>Dirección</reactbs.Form.Label>
                      <reactbs.Form.Control
                        type="text"
                        placeholder="Dirección"
                        value={this.state.datos.direccion}
                      />
                    </reactbs.Form.Group>
                    <reactbs.Button variant="primary" type="submit">
                      Guardar
                    </reactbs.Button>
                  </reactbs.Form>
                </reactbs.Accordion.Body>
              </reactbs.Accordion.Item>
            </reactbs.Accordion>
          </React.Fragment>
        )}
      </div>
    );
  }
}
