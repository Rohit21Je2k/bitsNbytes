import React, { useCallback } from "react";

import { Carousel } from "react-responsive-carousel";
import img from "../../assets/img/png/our-reach/office.png";
import "./GlobalReach.css";
export default function GlobalReach() {
  const carouselRefHandler = useCallback((node) => {
    if (node) {
      const target = node.carouselWrapperRef;
      target.classList.add("global-reach__carousel");
    }
  }, []);
  return (
    <section className="bg-primary global-reach">
      <div className="wrapper">
        <h3 className="h3 f-wt-400 c-gray-200 global-reach__title">
          OUR GLOBAL REACH
        </h3>
        <p className="p1 f-wt-600 c-gray-100 global-reach__title-para">
          We are world wide and expanding our office for better reach
        </p>

        <Carousel
          ref={carouselRefHandler}
          axis="horizontal"
          swipeable={true}
          emulateTouch={true}
          autoPlay={false}
          centerMode={false}
          showArrows={false}
          showStatus={false}
          showThumbs={false}
        >
          <div className="global-reach__carousel-item">
            <img src={img} alt="item-img" />
            <h4 className="h4 c-gray-100">Bangalore Office</h4>
          </div>

          <div className="global-reach__carousel-item">
            <img src={img} alt="item-img" />
            <h4 className="h4 c-gray-100">Singapore Office</h4>
          </div>

          <div className="global-reach__carousel-item">
            <img src={img} alt="item-img" />
            <h4 className="h4 c-gray-100">Ghana Office</h4>
          </div>

          <div className="global-reach__carousel-item">
            <img src={img} alt="item-img" />
            <h4 className="h4 c-gray-100">London Office</h4>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
