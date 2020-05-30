import React from 'react';

const ItemNumero = ({ elemento }) => {
  return (
    <div className="form-group">
      <label htmlFor={elemento.nombre}>{elemento.nombre}</label>
      <input
        type="number"
        id={elemento.nombre}
        className="form-control"
        placeholder="0"
      />
    </div>
  );
};
export default ItemNumero;