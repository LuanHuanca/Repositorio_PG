import React from 'react'
import { Icon } from "@iconify/react";
import "./SearchButton.css"
import { NavLink } from 'react-router-dom';

const SearchButton = ({onClick}) => {
  return (
    <div>
      <button className="container-button" >
          <Icon icon="charm:search" color="white" width="40" onClick={onClick}/>
      </button>
    </div>
  )
}

export default SearchButton
