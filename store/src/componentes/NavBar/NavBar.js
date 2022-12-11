import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import  './NavBar.css'

const NavBar = () => {
  return (
    <div className='navi'>
        <h1 className='storeName'>Abuguet Store</h1>
    <li>
    
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
//          <NavLink to= "/productos">Productos</NavLink>

export default NavBar