import React from 'react'
import { Icon } from "@iconify/react";
import "./SearchButton.css"
import { NavLink } from 'react-router-dom';

const SearchButton = ({direccion,action}) => {
  return (
    <div>
      <button className="container-button" onClick={action}>
        <NavLink to={direccion}>
          <Icon icon="charm:search" color="white" width="40" />
        </NavLink>
      </button>
    </div>
  )
}

export default SearchButton
