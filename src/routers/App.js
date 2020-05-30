import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from '../pages/Home';
import FormularioInformacion from "../pages/FormularioInformacion";

const App=()=> {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/informacion" component={FormularioInformacion} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
