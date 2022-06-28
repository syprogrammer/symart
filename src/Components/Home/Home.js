import React from "react";
import Carousel from "../Category/Carousel";
import Category from "../Category/Category";
import Navbar from "../Navbar";
import Footer from "./Footer";
import ProductList from "./ProductList";

import data from "../../data";

export default function Home() {
  const item = data.map((item) => {
    return <ProductList key={item.id} {...item} />;
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
