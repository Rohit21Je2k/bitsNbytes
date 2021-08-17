import React, { useState, useCallback } from "react";

import PartnerCard from "../PartnerCard/PartnerCard.js";
import { Carousel } from "react-responsive-carousel";

import "./OurPartners.css";
export default function OurPartners() {
  const [cardNumber, setCardNumber] = useState(0);
  const handleMouseEnter = (e) => {
    const num = Number(e.currentTarget.dataset.number);
    setCardNumber(num);
  };

  const handleMouseLeave = (e) => {
    setCardNumber(0);
  };

  const carouselRefHandler = useCallback((node) => {
    if (node) {
      const target = node.carouselWrapperRef;
      target.classList.add("our-partners__carousel");
    }
  }, []);

  return (
    <section className="our-partners">
      <div className="wrapper">
        <h3 className="h3 f-wt-500 c-gray-500 our-partners__title">
          OUR PARTNERS
        </h3>
        <p className="p1 f-wt-600 c-primary our-partners__title-para">
          We work with best partners in the industry
        </p>
        <div className="our-partners-container">
          <div
            className="our-partners__all-partners-name"
            onMouseLeave={handleMouseLeave}
          >
            <svg
              onMouseEnter={handleMouseEnter}
              data-number="1"
              className="name"
              viewBox="0 0 450 50"
            >
              <text y="50">PARTNER NAME</text>
            </svg>
            <svg
              onMouseEnter={handleMouseEnter}
              data-number="2"
              className="name"
              viewBox="0 0 450 50"
            >
              <text y="50">PARTNER NAME</text>
            </svg>
            <svg
              onMouseEnter={handleMouseEnter}
              data-number="3"
              className="name"
              viewBox="0 0 450 50"
            >
              <text y="50">PARTNER NAME</text>
            </svg>
            <svg
              onMouseEnter={handleMouseEnter}
              data-number="4"
              className="name"
              viewBox="0 0 450 50"
            >
              <text y="50">PARTNER NAME</text>
            </svg>
            <svg
              onMouseEnter={handleMouseEnter}
              data-number="5"
              className="name"
              viewBox="0 0 450 50"
            >
              <text y="50">PARTNER NAME</text>
            </svg>
          </div>
          <div className="our-partners__all-cards">
            {cardNumber === 1 && (
              <PartnerCard
                className="our-partners__partner-card"
                style={{ top: `${1}%` }}
                number="01"
                name="Partner 1"
                info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Tempor fames volutpat, malesuada viverra vitae. Ullamcorper rutrum lacus, 
                pulvinar quis."
              />
            )}
            {cardNumber === 2 && (
              <PartnerCard
                className="our-partners__partner-card"
                style={{ top: `${2}%` }}
                number="02"
                name="Partner 2"
                info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Tempor fames volutpat, malesuada viverra vitae. Ullamcorper rutrum lacus, 
                pulvinar quis."
              />
            )}
            {cardNumber === 3 && (
              <PartnerCard
                className="our-partners__partner-card"
                style={{ top: `${3}%` }}
                number="03"
                name="Partner 3"
                info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Tempor fames volutpat, malesuada viverra vitae. Ullamcorper rutrum lacus, 
                pulvinar quis."
              />
            )}
            {cardNumber === 4 && (
              <PartnerCard
                className="our-partners__partner-card"
                style={{ top: `${4}%` }}
                number="04"
                name="Partner 4"
                info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Tempor fames volutpat, malesuada viverra vitae. Ullamcorper rutrum lacus, 
                pulvinar quis."
              />
            )}
            {cardNumber === 5 && (
              <PartnerCard
                className="our-partners__partner-card"
                style={{ top: `${1}%` }}
                number="05"
                name="Partner 5"
                info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Tempor fames volutpat, malesuada viverra vitae. Ullamcorper rutrum lacus, 
                pulvinar quis."
              />
            )}
          </div>
          <Carousel
            ref={carouselRefHandler}
            swipeable={true}
            emulateTouch={true}
            axis="horizontal"
            centerMode={false}
            autoPlay={false}
            showArrows={false}
            showStatus={false}
            showThumbs={false}
          >
            <PartnerCard
              number="01"
              name="Partner 1"
              info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Tempor fames volutpat, malesuada viverra vitae. Ullamcorper rutrum lacus, 
                pulvinar quis."
            />
            <PartnerCard
              number="02"
              name="Partner 2"
              info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Tempor fames volutpat, malesuada viverra vitae. Ullamcorper rutrum lacus, 
                pulvinar quis."
            />
            <PartnerCard
              number="03"
              name="Partner 3"
              info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Tempor fames volutpat, malesuada viverra vitae. Ullamcorper rutrum lacus, 
                pulvinar quis."
            />
            <PartnerCard
              number="04"
              name="Partner 4"
              info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Tempor fames volutpat, malesuada viverra vitae. Ullamcorper rutrum lacus, 
                pulvinar quis."
            />
            <PartnerCard
              number="05"
              name="Partner 5"
              info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Tempor fames volutpat, malesuada viverra vitae. Ullamcorper rutrum lacus, 
                pulvinar quis."
            />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
