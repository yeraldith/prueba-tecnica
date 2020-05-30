import React from "react";
import Items from "./items";
import Lista from "./lista";
import ItemNumero from './itemNumero'

const Seccion = ({ variables, valor}) => {
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
                  />
                </div>
              );
            case "numero":
              return (
                <div key={"itemNumero" + index}>
                  <ItemNumero elemento={elemento}/>
                </div>
              );
            default:
              return (
                <div key={"item" + index}>
                  <Items elemento={elemento} />
                </div>
              );
          }
        }
      })}
    </>
  );
};
export default Seccion;
