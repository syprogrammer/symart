import React from 'react'
import CartState from "./context/CartState";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './Components/Cart/Cart';
import Category from './Components/Category/Category';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar'
// import Shop from './Components/Shop'
import "./App.css"
import Carousel from './Components/Category/Carousel';
import Footer from './Components/Home/Footer';
import ProductList from './Components/Home/ProductList';
import Topoffers from './Components/Category/Topoffers';
import Electronics from './Components/Category/Electronics';
import Mobiles from './Components/Category/Mobiles';
import Fashion from './Components/Category/Fashion';
import Groceries from './Components/Category/Groceries';


export default function App() {
  return (
    <>
      <CartState>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/top_offers" element={<Topoffers />} />
            <Route path="/mobiles" element={<Mobiles />} />
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/fashion" element={<Fashion />} />
            <Route path="/grocery" element={<Groceries />} />
          </Routes>
        </BrowserRouter>
      </CartState>
    </>
  );
}


//syprogrammer.github.io -