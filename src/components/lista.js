import React from "react";

const Lista = ({ lstOpc, nombre, handlerChange }) => {
  return (
    <div>
      <label htmlFor={nombre}>{nombre}</label>
      <select
        onChange={handlerChange}
        className="form-control"
        id={nombre}
        name={nombre}
        defaultValue={'DEFAULT'}
      >        
        <option value="DEFAULT" disabled>
          Selecciona una opción
        </option>
        {lstOpc.map((item, index) => {
          return <option required key={"opc" + index}>{item.valor}</option>;
        })}
      </select>
    </div>
  );
};
export default Lista;
