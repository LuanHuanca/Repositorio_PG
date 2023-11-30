import React from 'react';
import { NavLink } from 'react-router-dom';
import './VerificacionIngreso.css';

const VerificacionIngreso = () => {
  return (
    <div className="verificacion-ingreso-container">
      <h1>Verificación de Ingreso</h1>
      <p>
        Para acceder a esta sección, por favor, inicie sesión con su cuenta de Google o su cuenta normal.
      </p>
      <div className="botones-ingreso">
        <NavLink to="/login" className="btn-ingreso">
          Iniciar Sesión
        </NavLink>
      </div>
    </div>
  );
};

export default VerificacionIngreso;
