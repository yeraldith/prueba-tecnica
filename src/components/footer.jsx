import React from 'react';
import '../style/footer.css'
import { Link } from 'react-router-dom';

const Footer =()=>{
    return (
      <div className="fondo-footer">
        <div className="d-flex justify-content-center align-items-center">
          <p className="footer-texto">
            <Link className="footer-texto" to="" rel="dirección-sitio">
              Neumomed
            </Link>
            | Todos los derechos reservados 2020
          </p>
        </div>
      </div>
    );
}
export default Footer;