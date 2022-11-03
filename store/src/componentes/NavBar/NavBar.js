import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import  './NavBar.css'

const NavBar = () => {
  return (
    <div className='navi'>
        <h1 className='storeName'>Abuguet Store</h1>
    <li>
        <a href='' className='products'>Productos</a>
    </li>
    <li>
        <a href='' className='pedidos'>Pedidos</a>
    </li>
    <li>
        <a href='' className='buscar'>Buscar</a>
    </li>
    <CartWidget/>
    </div>

   
  )
}

export default NavBar