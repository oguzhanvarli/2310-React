import React from 'react'
import {useSelector} from 'react-redux'

function Navbar() {

    const cart = useSelector(state => state.cart.cartNumber)


  return (
    <div>Sepet Değerim {cart} </div>
  )
}

export default Navbar