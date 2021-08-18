import React, { useState } from "react";

import PlayBanner from "../PlayBanner/PlayBanner.js";
import { Carousel } from "react-responsive-carousel";
import TestimonialCard from "../TestimonialCard/TestimonialCard.js";

// assets
import img1 from "../../assets/img/png/testimonial/img-1.png";
import img2 from "../../assets/img/png/testimonial/img-2.png";

// styles
import "./Testimonial.css";

export default function Testimonial() {
  const [mode, setMode] = useState("mobile");

  const setModeHandler = () => {
    if (window.innerWidth > 730) {
      setMode("desktop");
    } else {
      setMode("mobile");
    }
  };

  window.onload = setModeHandler;
  window.onresize = setModeHandler;

  const carouselRefHandler = (node) => {
    if (node) {
      const target = node.carouselWrapperRef;
      target.classList.add("testimonial__carousel");
    }
  };

  return (
    <section className="testimonial">
      <div className="wrapper">
        {/* carousel */}
        <Carousel
          ref={carouselRefHandler}
          axis={mode === "mobile" ? "horizontal" : "vertical"}
          swipeable={true}
          emulateTouch={true}
          autoPlay={false}
          centerMode={false}
          showArrows={false}
          showStatus={false}
          showThumbs={false}
        >
          {/* item 1 */}
          <div className="testimonial__carousel-item">
            <TestimonialCard
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor
            fames volutpat, malesuada viverra vitae. Ullamcorper"
              auth="Rohith R"
              imgSrc={img1}
            />
          </div>

          {/* item 2 */}
          <div className="testimonial__carousel-item">
            <TestimonialCard
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor
            fames volutpat, malesuada viverra vitae. Ullamcorper"
              auth="Rohith R"
              imgSrc={img2}
            />
          </div>

          {/* item 3 */}
          <div className="testimonial__carousel-item">
            <TestimonialCard
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor
            fames volutpat, malesuada viverra vitae. Ullamcorper"
              auth="Rohith R"
              imgSrc={img2}
            />
          </div>

          {/* item 4 */}
          <div className="testimonial__carousel-item">
            <TestimonialCard
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor
            fames volutpat, malesuada viverra vitae. Ullamcorper"
              auth="Rohith R"
              imgSrc={img2}
            />
          </div>
        </Carousel>

        {/* text container */}
        <div className="testimonial__text-container">
          <p className="p1 f-wt-600 c-primary testimonial__para-1">
            Our Customers love what we do
          </p>
          <div className="testimonial__para-2-container">
            <p className="p3 c-primary testimonial__para-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor
              fames volutpat, malesuada viverra vitae. Ullamcorper rutrum lacus,
              pulvinar quis. Egestas eu elementum eu dolor at morbi odio
              imperdiet. Pellentesque diam a sit adipiscing in vulputate.
              Pretium morbi nullam cursus ipsum feugiat.
            </p>
            <PlayBanner title="Work with us" color="primary" />
          </div>
        </div>
      </div>
    </section>
  );
}
