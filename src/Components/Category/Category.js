import React from "react";

export default function Category() {
  return (
    <>
      <div className="category-container">
        <div className="category-box">
          <div className="category-image">
            
            <a href ="/top_offers"><img className ="category-img"
              src="https://cdn-icons-png.flaticon.com/512/4213/4213958.png"
              alt="offer-img"
              
            />
              </a>
          </div>
          Top Offers
        </div>
        <div className="category-box">
          <div className="category-image">
            <a href ="/mobiles"><img className ="category-img"
              src="https://images-na.ssl-images-amazon.com/images/I/71zGrrAe5NL._AC._SR360,460.jpg"
              alt="mobiles"
              style={{
                width: 30,
              }}
            />
              </a>
          </div>
          Mobiles
        </div>
        <div className="category-box">
          <div className="category-image">
            <a href ="/grocery"><img className ="category-img"
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/rnjzx4sguedcnpsoo9f2"
              alt="grocery-img"
              style={{
                width: 60,
              }}
            />
              </a>
          </div>
          Groceries
        </div>
        <div className="category-box">
          <div className="category-image">
            <a href ="/electronics"><img className ="category-img"
              src="https://thumbs.dreamstime.com/z/small-group-modern-home-appliances-e-commerce-online-shopping-presentation-concept-d-render-white-no-shadow-199545506.jpg"
              alt=""
              style={{
                width: 60,
              }}
            />
              </a>
          </div>
          Electronics
        </div>
        <div className="category-box">
          <div className="category-image">
            <a href ="/fashion"><img className ="category-img"
              src="https://meraj.in/media/catalog/product/cache/1/small_image/400x520/17f82f742ffe127f42dca9de82fb58b1/0/0/002_2.jpg"
              alt=""
            />
              </a>
          </div>
          Fashion
        </div>
      </div>
    </>
  );
}
