// src/main.js
import React from 'react';
import ReactDOM from 'react-dom';
import Proyectos from './proyectos';

const App = () => {
  return (
    <div>
      <h1>Mis Proyectos</h1>
      <Proyectos/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
