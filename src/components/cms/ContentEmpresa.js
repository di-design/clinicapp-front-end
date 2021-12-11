import React from "react";
import EmpresaForm from "../forms/EmpresaForm";

export default function Content() {
  return (
    <div id="layoutSidenav_content">
      <main>
        <div className="container-fluid p-5">
          <EmpresaForm/>
        </div>
      </main>
    </div>
  );
}
