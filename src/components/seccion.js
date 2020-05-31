import React from "react";
import Items from "./items";
import Lista from "./lista";
import ItemNumero from "./itemNumero";

const Seccion = ({ variables, valor, handlerChange }) => {
  return (
    <>
      {variables.map((elemento, index) => {
        let lstOpc = [];
        if (elemento.opciones_lista !== null) {
          lstOpc = elemento.opciones_lista;
        }
        if (elemento.seccion == valor) {
          switch (elemento.tipo) {
            case "lista":
              return (
                <div key={"lista" + index}>
                  <Lista
                    lstOpc={lstOpc}
                    nombre={elemento.nombre}
                    handlerChange={handlerChange}
                  />
                </div>
              );
            case "numero":
              return (
                <div key={"itemNumero" + index}>
                  <ItemNumero
                    elemento={elemento}
                    handlerChange={handlerChange}
                  />
                </div>
              );
            default:
              return (
                <div key={"item" + index}>
                  <Items elemento={elemento} handlerChange={handlerChange} />
                </div>
              );
          }
        }
      })}
    </>
  );
};
export default Seccion;
