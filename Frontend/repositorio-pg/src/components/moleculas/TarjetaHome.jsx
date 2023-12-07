import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TarjetaHome.css';

const TarjetaHome = ({ imagen, imagenDescrip, titulo, Descripcion, fecha }) => {
  const navigate = useNavigate();
  const enviarKey = (proyecto) => {
    navigate(`/tarjetaTesis?proyecto=${proyecto}`);
    console.log(proyecto);
  };
  return (
    <div onClick={()=>{enviarKey(titulo)}}  className="navlink">
      <div className='tarjetaHome'>
      <img src="images/imagen de tesis.png" alt={imagenDescrip} />
        <div className='tarjetaHome-container'>
          <h4>{titulo}</h4>
          <h4>Descripción</h4>
          <h4 id='descripcion'>{Descripcion}</h4>
          {/* <h4>Gestión:</h4>
          <h4>{fecha}</h4> */}
        </div>
      </div>
    </div>
  );
};

export default TarjetaHome;
