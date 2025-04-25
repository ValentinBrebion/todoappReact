import React from 'react'

const filterButton = (props) => {
    const {
        label,
        selected,
        onClick
    } = props
    
    return <button className={selected ? "selected" : ''} onClick={onClick}>
    {label}
  </button>
}
export default filterButton