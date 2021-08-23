import React, { useCallback } from "react";

import { Carousel } from "react-responsive-carousel";
import ImgCard from "../ImgCard/ImgCard";
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
          <ImgCard
            imgSrc={img}
            title="Title 1"
            para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor fames
          volutpat, malesuada viverra vitae. Ullamcorper rutrum lacus, pulvinar
          quis. Egestas eu elementum eu dolor at morbi odio imperdiet.
          Pellentesque diam a sit adipiscing in vulputate. Pretium morbi nullam
          cursus ipsum feugiat. Aliquet erat sed"
          />

          <ImgCard
            imgSrc={img}
            title="Title 1"
            para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor fames
          volutpat, malesuada viverra vitae. Ullamcorper rutrum lacus, pulvinar
          quis. Egestas eu elementum eu dolor at morbi odio imperdiet.
          Pellentesque diam a sit adipiscing in vulputate. Pretium morbi nullam
          cursus ipsum feugiat. Aliquet erat sed"
          />

          <ImgCard
            imgSrc={img}
            title="Title 1"
            para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor fames
          volutpat, malesuada viverra vitae. Ullamcorper rutrum lacus, pulvinar
          quis. Egestas eu elementum eu dolor at morbi odio imperdiet.
          Pellentesque diam a sit adipiscing in vulputate. Pretium morbi nullam
          cursus ipsum feugiat. Aliquet erat sed"
          />

          <ImgCard
            imgSrc={img}
            title="Title 1"
            para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor fames
          volutpat, malesuada viverra vitae. Ullamcorper rutrum lacus, pulvinar
          quis. Egestas eu elementum eu dolor at morbi odio imperdiet.
          Pellentesque diam a sit adipiscing in vulputate. Pretium morbi nullam
          cursus ipsum feugiat. Aliquet erat sed"
          />
        </Carousel>
      </div>
    </section>
  );
}
