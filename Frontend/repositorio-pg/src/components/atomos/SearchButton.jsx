import React from 'react'
import { Icon } from "@iconify/react";
import "./SearchButton.css"

const SearchButton = () => {
  return (
    <div>
      <button className="container-button">
        <Icon icon="charm:search" color="white" width="40" />
      </button>
    </div>
  )
}

export default SearchButton
