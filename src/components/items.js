import React from 'react';

const Items = ({ elemento, onChange, val }) => {
  return (
    <div className="form-group">
      <label htmlFor={elemento.nombre}>{elemento.nombre}</label>
      <input
        type="text"
        id={elemento.nombre}
        className="form-control"
        placeholder=""
      />
    </div>
  );
};
export default Items;