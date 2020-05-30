import React from "react";
import Imagen from "../images/_MG_5091.JPG";
import "../style/seccionNeumomed.css";

const SeccionNeumomed = () => {
  return (
    <section className="section">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-sm-12 col-md-6">
          <hr className="line"></hr>
          <div className="caja-texto">
          <span className="texto">NEUMOMED</span>
          <h5 className="texto-h">Neumomed IPS</h5>
          <span className="texto-p">
            ofrece una atención integral a pacientes con enfermedades
            respiratorias y trastornos del sueño.
          </span>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 p-5">
          <img
            className="imagen-atencion"
            src={Imagen}
            alt="Imagen Atención"
          ></img>
        </div>
      </div>
    </section>
  );
};
export default SeccionNeumomed;
