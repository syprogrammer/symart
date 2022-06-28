import CartContext from "./cartContext";
import { useState,useEffect } from "react";

const CartState = (props) => {
    const [cartlength, setCartlength] = useState(0)
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart") )|| []);

  useEffect(() => {
     
    localStorage.setItem('cart',JSON.stringify(cart))
    setCartlength(cart.length)
    },[cart])


  
  return (
      <CartContext.Provider value={{ cart,setCart,cartlength}}>
          {props.children}
   </CartContext.Provider>
  )
};

export default CartState;
