import React, { useContext } from "react";
import cartContext from "../context/cartContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const context = useContext(cartContext);
  const { cartlength } = context;

  const login = true;
  let navigate = useNavigate();

  return (
    <>
      <nav>
        <ul>
          <li>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS09veGtP8s2aM82jLzrFeAJfieZsUIMbteUD1KZaNrBBaMQWzTkiF8ZUltM-BrSKFC3w&usqp=CAU"
              alt="logo"
              className="nav-logo"
              onClick={() => navigate("/")}
            />
          </li>
          <div className="search-container">
            <form action="/">
              <input type="text" placeholder="Search.." name="search" />
              <button className="nav-btn" type="submit">
                <i className="fa fa-search" />
              </button>
            </form>
          </div>
          {login && <button className="login-btn">Login</button>}

          <div className="cart_img" onClick={() => navigate("/cart")}>
            <i className="fa fa-shopping-cart"> Cart</i>
            <div className="cart_item">{cartlength}</div>
          </div>
        </ul>
      </nav>
    </>
  );
}
