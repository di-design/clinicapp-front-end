import React, { useEffect, useState } from "react";

// Rutas para consumo API Rest
import * as EmpresaRutas from './EmpresaRutasApi';

const EmpresaData = () => {
    const [datosEmpresa, setDatosEmpresa]= useState([]);
    const dataEmpresa = async () => {
        try {
            const resultado = await EmpresaRutas.rutasApi();
            console.log(resultado);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        dataEmpresa();
    }, []);

    return (
        <div>
            <h2>Datos Empresa</h2>
            {
                datosEmpresa.map((empresa) =>(
                    <h4>{empresa.id} {empresa.nombre} {empresa.telefono}</h4>
                    
                ))
            }
        </div>
    )
};
export {EmpresaData};