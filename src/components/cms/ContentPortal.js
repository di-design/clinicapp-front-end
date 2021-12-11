import React from "react";
import PortalForm from "../forms/PortalForm";

export default function Content() {
  return (
    <div id="layoutSidenav_content">
      <main>
        <div className="container-fluid p-5">
           <PortalForm/>
        </div>
      </main>
    </div>
  );
}
