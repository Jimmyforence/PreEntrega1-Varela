import React from 'react'
import './ItemsListContainer.css'
const ItemsListContainer = (props) => {
  return (
    <div className='greet'>
<h2 className='mH2'>{props.name}</h2>
    </div>
  )
}

export default ItemsListContainer