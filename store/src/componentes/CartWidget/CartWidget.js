import React from 'react'
import trolley from'../../assets/Trolley.jpg'
import './CartWidget.css'


const CartWidget = () => {
  return (
    <div className='cart'>
       
        <img className='cartImg' src={trolley} alt='Cart Widget'/>
    </div>
  )
}

export default CartWidget