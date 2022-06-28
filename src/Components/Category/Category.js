import React from "react";
import { Link } from "react-router-dom";
export default function Category() {
  return (
    <>
      <div className="category-container">
        <Link to="/top_offers">
          <div className="category-box">
            <div className="category-image">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4213/4213958.png"
                alt="offer-img"
              />
            </div>
            <div className="category_header">
              <span>Top Offers</span>
            </div>
          </div>
        </Link>
        <Link to="/mobiles">
          <div className="category-box">
            <div className="category-image">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/71zGrrAe5NL._AC._SR360,460.jpg"
                alt="mobiles"
              />
            </div>
            <div className="category_header">
              <span>Mobiles</span>
            </div>
          </div>
        </Link>
        <Link to="/grocery">
          <div className="category-box">
            <div className="category-image">
              <img
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/rnjzx4sguedcnpsoo9f2"
                alt="grocery-img"
              />
            </div>
            <div className="category_header">
              <span>Groceries</span>
            </div>
          </div>
        </Link>
        <Link to="/electronics">
          <div className="category-box">
            <div className="category-image">
              <img
                src="https://thumbs.dreamstime.com/z/small-group-modern-home-appliances-e-commerce-online-shopping-presentation-concept-d-render-white-no-shadow-199545506.jpg"
                alt=""
              />
            </div>
            <div className="category_header">
              <span>Electronics</span>
            </div>
          </div>
        </Link>
        <Link to="/fashion">
          <div className="category-box">
            <div className="category-image">
              <img
                src="https://meraj.in/media/catalog/product/cache/1/small_image/400x520/17f82f742ffe127f42dca9de82fb58b1/0/0/002_2.jpg"
                alt=""
              />
            </div>
            <div className="category_header">
              <span> Fashion</span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
