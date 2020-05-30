import React from 'react';
import Information from './Informacion';
import Nav from "../components/nav.jsx";
import Footer from "../components/footer.jsx";
import Bootom from "../components/bottom.jsx";

const FormularioInformacion =()=>{
    return (
      <>
        <header className="container">
          <Nav />
        </header>
        <Information />
        <Bootom />
        <Footer />
      </>
    );

}
export default FormularioInformacion;