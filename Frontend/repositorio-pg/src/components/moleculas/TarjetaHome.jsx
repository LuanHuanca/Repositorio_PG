// TarjetaHome.jsx
import React from 'react';
import { Link,NavLink } from 'react-router-dom';
import './TarjetaHome.css';

const TarjetaHome = ({ imagen, imagenDescrip, titulo, Descripcion, fecha }) => {

  return (
    <NavLink to="/tarjetaTesis"  style={{ textDecoration: 'none' }}>
      <div className='tarjetaHome'>
        <img src={imagen} alt={imagenDescrip} />
        <div className='tarjetaHome-container'>
          <h3>{titulo}</h3>
          <h4>Descripcion:</h4>
          <h4>{Descripcion}</h4>
          <h4>Fecha:</h4>
          <h4>{fecha}</h4>
        </div>
      </div>
    </NavLink>
  );
};

export default TarjetaHome;
