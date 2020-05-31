import React from "react";
import Seccion from "./seccion";
import "../style/formualrio.css";

const Formulario = ({ variables, secciones, handlerChange, handleSubmit }) => {
  return (
    <form
      onSubmit={handleSubmit}
      id="informacion"
      className="container mt-5 mb-5 formulario"
    >
      <h1 className="text-center mt-5">Ingresar Datos</h1>
      <div className="row">
        {secciones.map((item, index) => {
          return (
            <section key={"Seccion" + index} className="col-12 col-lg-4 mt-3">
              <div className="rounded-pill p-2">
                <h3 className="text-center text-info mt-5 mb-5">
                  {item.nombre}
                </h3>
              </div>
              <Seccion
                variables={variables}
                valor={item.valor}
                handlerChange={handlerChange}
              />
            </section>
          );
        })}
      </div>
      <button
        onClick={handleSubmit}
        className="mx-auto d-block p-3 mt-2 btn btn-dark"
      >
        Enviar
      </button>
    </form>
  );
};
export default Formulario;
