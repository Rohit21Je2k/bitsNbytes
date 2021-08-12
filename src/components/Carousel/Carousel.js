import React, { Children } from "react";

import "./Carousel.css";
export default function Carousel() {
  return (
    <div className="carousel">
      <div className="carousel__track">
        <div className="carousel-item"></div>
        <div className="carousel-item"></div>
        <div className="carousel-item"></div>
        <div className="carousel-item"></div>
        <div className="carousel-item"></div>
      </div>
      <div className="carousel-control"></div>
      <div className="carousel-nav">
        <button className="carousel-nav__dot"></button>
        <button className="carousel-nav__dot"></button>
        <button className="carousel-nav__dot"></button>
        <button className="carousel-nav__dot"></button>
      </div>
    </div>
  );
}
