import React, { useCallback } from "react";

import { Carousel } from "react-responsive-carousel";
import img from "../../assets/img/png/our-reach/office.png";

import "./WhyUs.css";
export default function WhyUs() {
  const carouselRefHandler = useCallback((node) => {
    if (node) {
      const target = node.carouselWrapperRef;
      target.classList.add("why-us__carousel");
    }
  }, []);
  return (
    <section className="bg-primary why-us">
      <div className="wrapper">
        <h3 className="h3 f-wt-500 why-us__title">WHY CHOOSE US</h3>
        <p className="p1 f-wt-600 c-gray-100 why-us__para">
          Comprehensive, flexible and more efficient data center solutions
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
          <div className="why-us__carousel-item">
            <img src={img} alt="item-img" />
            <h4 className="h4 c-gray-100">Title 1</h4>
          </div>

          <div className="why-us__carousel-item">
            <img src={img} alt="item-img" />
            <h4 className="h4 c-gray-100">Title 2</h4>
          </div>

          <div className="why-us__carousel-item">
            <img src={img} alt="item-img" />
            <h4 className="h4 c-gray-100">Title 3</h4>
          </div>

          <div className="why-us__carousel-item">
            <img src={img} alt="item-img" />
            <h4 className="h4 c-gray-100">Title 4</h4>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
