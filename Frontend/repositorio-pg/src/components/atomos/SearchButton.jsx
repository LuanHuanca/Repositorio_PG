import React from 'react'
import { Icon } from "@iconify/react";
import "./SearchButton.css"
import { NavLink } from 'react-router-dom';

const SearchButton = ({buscar}) => {
  return (
    <div>
      <button className="container-button">
        <NavLink to={buscar}>
          <Icon icon="charm:search" color="white" width="40" />
        </NavLink>
      </button>
    </div>
  )
}

export default SearchButton
