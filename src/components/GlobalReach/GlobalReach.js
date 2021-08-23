import React, { useCallback } from "react";

import { Carousel } from "react-responsive-carousel";
import img from "../../assets/img/png/our-reach/office.png";
import ImgCard from "../ImgCard/ImgCard";
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
          <ImgCard
            imgSrc={img}
            title="Bangalore Office"
            para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor fames
          volutpat, malesuada viverra vitae."
          />

          <ImgCard
            imgSrc={img}
            title="Singapore Office"
            para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor fames
          volutpat, malesuada viverra vitae."
          />

          <ImgCard
            imgSrc={img}
            title="Ghana Office"
            para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor fames
          volutpat, malesuada viverra vitae."
          />

          <ImgCard
            imgSrc={img}
            title="London Office"
            para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor fames
          volutpat, malesuada viverra vitae."
          />
        </Carousel>
      </div>
    </section>
  );
}
