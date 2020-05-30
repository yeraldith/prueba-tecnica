import React from "react";
import "../style/bottom.css";

const Bootom = () => {
  return (
    <section className="fondo-bottom">
      <div className="bottom-texto">
        <h3>Medellín</h3>
        <p>
          Calle 19A # 44-25 Local 206
          <br />
          Edificio Salud y Servicios.
        </p>
      </div>
      <div className="bottom-texto">
        <h3>Rionegro</h3>
        <p>Carrera 55 A #35- 2027, piso 4 Cs 402-404 Torre 2, City Médica.</p>
      </div>
      <div className="bottom-mapa">
        <iframe
          title="mapasitio"
          className="iframe-google"
          src="https://maps.google.com/maps?q=Neumomed&t=m&z=15&output=embed&iwloc=near"
        ></iframe>
      </div>
    </section>
  );
};
export default Bootom;
