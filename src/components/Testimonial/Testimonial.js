import React, { useState, useCallback } from "react";

import PlayBanner from "../PlayBanner/PlayBanner.js";
import { Carousel } from "react-responsive-carousel";
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

  const carouselRefHandler = useCallback((node) => {
    if (node) {
      const target = node.carouselWrapperRef;
      target.classList.add("testimonial__carousel");
    }
  }, []);

  return (
    <section className="testimonial">
      <div className="wrapper">
        <Carousel
          ref={carouselRefHandler}
          axis={mode === "mobile" ? "horizontal" : "vertical"}
          swipeable={true}
          emulateTouch={true}
          centerMode={false}
          autoPlay={false}
          showArrows={false}
          showStatus={false}
          showThumbs={false}
        >
          {/* item 1 */}
          <div className="bg-gray-100 c-primary testimonial-card card-1">
            <div className="testimonial-card__img"></div>
            <div className="testimonial-card__info">
              <p className="p3 testimonial-card__text">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor
                fames volutpat, malesuada viverra vitae. Ullamcorper”
              </p>
              <h5 className="p3 f-wt-600">- Rohith R</h5>
            </div>
          </div>
          {/* item 2 */}
          <div className="bg-gray-100 c-primary testimonial-card card-2">
            <div className="testimonial-card__img"></div>
            <div className="testimonial-card__info">
              <p className="p3 testimonial-card__text">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor
                fames volutpat, malesuada viverra vitae. Ullamcorper”
              </p>
              <h5 className="p3 f-wt-600">- Rohith R</h5>
            </div>
          </div>

          {/* item 2 */}
          <div className="bg-gray-100 c-primary testimonial-card card-2">
            <div className="testimonial-card__img"></div>
            <div className="testimonial-card__info">
              <p className="p3 testimonial-card__text">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor
                fames volutpat, malesuada viverra vitae. Ullamcorper”
              </p>
              <h5 className="p3 f-wt-600">- Rohith R</h5>
            </div>
          </div>

          {/* item 2 */}
          <div className="bg-gray-100 c-primary testimonial-card card-2">
            <div className="testimonial-card__img"></div>
            <div className="testimonial-card__info">
              <p className="p3 testimonial-card__text">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor
                fames volutpat, malesuada viverra vitae. Ullamcorper”
              </p>
              <h5 className="p3 f-wt-600">- Rohith R</h5>
            </div>
          </div>
        </Carousel>
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
