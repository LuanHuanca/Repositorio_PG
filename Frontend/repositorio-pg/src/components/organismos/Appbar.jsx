import React from "react";
import "./Appbar.css";
import Lenguaje from "../atomos/Lenguaje";
import { NavLink } from "react-router-dom";
import { useLocalStorage } from "../../services/useLocalStorage";

const Appbar = () => {
  // Utiliza useLocalStorage para obtener los valores
  const [loggedIn] = useLocalStorage("loggedIn", false);
  const [userName] = useLocalStorage("userName", "");
  

  return (
    <div className="appbar">
      <div className="appbar-container">
        <NavLink to="/">
          <img src="src\assets\logo_ucb.png" alt="Logo UCB" />
        </NavLink>
        <Lenguaje loggedIn={loggedIn} userName={userName} />
      </div>
    </div>
  );
};

export default Appbar;
