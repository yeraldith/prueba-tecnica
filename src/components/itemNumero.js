import React from "react";

const ItemNumero = ({ elemento, handlerChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={elemento.nombre}>{elemento.nombre}</label>
      <input
        type="number"
        id={elemento.nombre}
        name={elemento.nombre}
        className="form-control"
        onChange={handlerChange}
        placeholder="0"
        required
      />
    </div>
  );
};
export default ItemNumero;
