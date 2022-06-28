import React from 'react'
import Footer from "../Home/Footer";
import ProductList from "../Home/ProductList";
import Navbar from "../Navbar";
import Carousel from "./Carousel";
import Category from "./Category";
import data from '../../data'
export default function Groceries() {
  const item = data.map((item) => {
    if (item.category === "Groceries" || item.category === "groceries") {
      return <ProductList key={item.id} {...item} />;
    }
    return "";
  }); 
  return (
    <>
      <Navbar />
      <Category />
      <Carousel />
      <div className="productlist">{item}</div>
      <Footer />
    </>
  );
}


