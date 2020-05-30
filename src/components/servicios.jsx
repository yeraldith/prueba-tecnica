import React from "react";
import "../style/servicios.css";

const servicio = [
  {
    nombre: "Programas",
    li1: "Programa de EPOC y ASMA",
    li2: "Programa de SAHOS",
    li3: "Programa Dejar de Fumar",
  },
  {
    nombre: "Terapias",
    li1: "Rehabilitación Pulmonar",
    li2: "Terapia Miofuncional Orofacial",
    li3: "Terapia Cognitivo Conductual",
  },
  {
    nombre: "Consultas",
    li1: "Consulta de Neumología ",
    li2: "Consulta de Nutrición",
    li3: "Consulta de Psicología",
  },
];

const Servicios = () => {
  return (
    <section className="section-servicios">
        {servicio.map((serv, index) => {
          return (
            <div key={index} className="contenido-servicios card-deck">
              <div className="card-body">
                <hr className="borde" />
                <h3 className="servicio">{serv.nombre}</h3>
                <ul>
                  <li className="lista">{serv.li1}</li>
                  <li className="lista">{serv.li2}</li>
                  <li className="lista">{serv.li3}</li>
                </ul>
              </div>
            </div>
          );
        })}
    </section>
  );
};
export default Servicios;
