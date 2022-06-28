import React from "react";

export default function Carousel() {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://storiesflistgv2.blob.core.windows.net/stories/2021/05/FKSfooterbanner_new__.jpg"
              className="d-block w-100 "
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.i-n-d-i-a-n.com/wp-content/uploads/Flipkart-Perfect-Buy-Experience.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAFUeXs6mbLcbHM6Hpw55GET-KuhZNFxedNw&usqp=CAU"
              className="d-block w-100 "
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
