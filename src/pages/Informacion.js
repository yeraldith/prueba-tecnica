import React from "react";
import Formulario from "../components/formulario";

class Information extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      variables: [],
      secciones: [],
    };
  }
  onChange=(e)=>{
this.setState({
    valor: e.target.value,
  
});
  }

  cargar = (informacion) => {
    const datos = informacion.data.data;
    let variables = [];
    let secciones = [];
    let bandera = true;
    for (const val1 of Object.values(datos)) {
      let keys = Object.keys(val1);
      for (let i = 0; i < keys.length; i++) {
        const element = keys[i];
        if (bandera) {
          variables.push(val1[element]);
        } else {
          secciones.push(val1[element]);
        }
      }
      bandera = false;
    }
    //organizando variables
    variables = variables.map((elemento) => elemento);
    variables.sort((variable1, variable2) => {
      return variable1.seccion - variable2.seccion;
    });
    //organizando secciones
    secciones = secciones.map((elemento) => elemento);
    secciones.sort((seccion1, seccion2) => {
      return parseInt(seccion1.valor) - parseInt(seccion2.valor);
    });
    this.setState({
      data: datos,
      variables: variables,
      secciones: secciones,
    });
  };

  componentDidMount() {
    let URL =
      "https://formularios-prueba-tecnica-6ihrk4y23q-ue.a.run.app/formularios/api/v3/prueba_tecnica";
    fetch(URL, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((informacion) => this.cargar(informacion));
  }

  render() {
    if (this.state.data == null) {
      return <h1>No se puede cargar el componente</h1>;
    } else {
      return (
          <Formulario
            variables={this.state.variables}
            secciones={this.state.secciones}
            onChange={this.onChange}
            val={this.state.valor}
          />
      );
    }
  }
}
export default Information;
