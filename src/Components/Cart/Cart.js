import React,{useContext} from 'react'
import Navbar from '../Navbar'
import cartContext from '../../context/cartContext';
import data from '../../data'
import CartUi from './CartUi';

import { useState } from 'react';

export default function Cart() {
 const{total,settotal} =useState([])

  const context = useContext(cartContext)
  const { cart ,setCart} = context;
  
 
  const item = cart.map((item) => {
    return <CartUi key={item.id} {...item}  />
  })

  return (
    <>
      <Navbar />
      <div className="productlist">{item}</div>
  
    </>
  );
}
