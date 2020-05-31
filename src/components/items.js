import React from "react";

const Items = ({ elemento, handlerChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={elemento.nombre}>{elemento.nombre}</label>
      <input
        type="text"
        id={elemento.nombre}
        name={elemento.nombre}
        className="form-control"
        placeholder=""
        onChange={handlerChange}
        required
      />
    </div>
  );
};
export default Items;
