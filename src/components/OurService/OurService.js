import React from "react";

import PlayBanner from "../PlayBanner/PlayBanner.js";

import "./OurService.css";
export default function OurService() {
  return (
    <section className="bg-primary our-service">
      <div className="wrapper">
        <h3 className="h3 f-wt-500 c-gray-300 our-service__title">
          OUR SERVICE
        </h3>
        <p className="p1 f-wt-600 c-gray-100 our-service__title-para">
          We enable you throughout the journey
        </p>
        <div className="c-gray-100 our-service__services-container">
          <div className="our-service__service">
            <h4 className="h4 our-service__service-number">01</h4>
            <hr className="b-0 bg-gray-100 our-service__service-underline" />
            <h4 className="h4 f-wt-600 our-service__service-name">
              Cloud service offerings
            </h4>
            <p className="p4 our-service__service-para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor
              fames volutpat, malesuada viverra vitae. Ullamcorper rutrum lacus,
              pulvinar quis. Egestas eu elementum eu dolor at morbi odio
              imperdiet. Pellentesque diam a sit adipiscing in vulputate.
            </p>
          </div>

          <div className="our-service__service">
            <h4 className="h4 our-service__service-number">02</h4>
            <hr className="b-0 bg-gray-100 our-service__service-underline" />
            <h4 className="h4 f-wt-600 our-service__service-name">
              Cloud service offerings
            </h4>
            <p className="p4 our-service__service-para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor
              fames volutpat, malesuada viverra vitae. Ullamcorper rutrum lacus,
              pulvinar quis. Egestas eu elementum eu dolor at morbi odio
              imperdiet. Pellentesque diam a sit adipiscing in vulputate.
            </p>
          </div>

          <div className="our-service__service">
            <h4 className="h4 our-service__service-number">03</h4>
            <hr className="b-0 bg-gray-100 our-service__service-underline" />
            <h4 className="h4 f-wt-600 our-service__service-name">
              Cloud service offerings
            </h4>
            <p className="p4 our-service__service-para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor
              fames volutpat, malesuada viverra vitae. Ullamcorper rutrum lacus,
              pulvinar quis. Egestas eu elementum eu dolor at morbi odio
              imperdiet. Pellentesque diam a sit adipiscing in vulputate.
            </p>
          </div>

          <div className="our-service__service">
            <h4 className="h4 our-service__service-number">04</h4>
            <hr className="b-0 bg-gray-100 our-service__service-underline" />
            <h4 className="h4 f-wt-600 our-service__service-name">
              Cloud service offerings
            </h4>
            <p className="p4 our-service__service-para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor
              fames volutpat, malesuada viverra vitae. Ullamcorper rutrum lacus,
              pulvinar quis. Egestas eu elementum eu dolor at morbi odio
              imperdiet. Pellentesque diam a sit adipiscing in vulputate.
            </p>
          </div>

          <PlayBanner
            className="our-service__play-banner"
            title="Learn More"
            color="gray-100"
          />
        </div>
      </div>
    </section>
  );
}
