import React from "react";
import Seccion from "./seccion";

const Formulario = ({ variables, secciones}) => {
  return (
    <form id="informacion" className="container mt-5 mb-5">
      <div className="row">
        {secciones.map((item, index) => {
          return (
            <section
              key={"Seccion" + index}
              className="col-12 col-lg-4 mt-3 bg-light"
            >
              <div className="rounded-pill p-2">
                <h1 className="text-center text-info mt-5 mb-5">
                  {item.nombre}
                </h1>
              </div>
              <Seccion variables={variables} valor={item.valor} />
            </section>
          );
        })}
      </div>
      <button className="mx-auto d-block p-3 mt-2 btn btn-dark">Enviar</button>
    </form>
  );
};
export default Formulario;
