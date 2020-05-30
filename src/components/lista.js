import React from "react";

const Lista = ({ lstOpc, nombre}) => {
  return (
    <div>
      <label htmlFor={nombre}>{nombre}</label>
      <select className="form-control" id={nombre}>
        {lstOpc.map((item, index) => {
          return (
            <option key={"opc" + index}>
              {item.valor}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default Lista;
