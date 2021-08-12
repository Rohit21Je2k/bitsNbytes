import React from "react";

import PlayButton from "../PlayButton/PlayButton";
import img from "../../assets/img/png/aboutus/img.png";

import "./AboutUs.css";
export default function AboutUs() {
  return (
    <section className="about-us">
      <div className="wrapper">
        <h5 className="h5 f-wt-500 c-gray-500 about-us__title-1">ABOUT US</h5>
        <div className="container">
          <div className="about-us__img-container">
            <img src={img} alt="about-us-img" className="block about-us__img" />
          </div>
          <div className="about-us__paras">
            <p className="p1 f-wt-600 c-primary about-us__para-1">
              We Provide entire range of networking, security and customized IT
              solutions to organizations of all sizes.
            </p>
            <p className="p1 f-wt-600 c-primary about-us__para-2">
              Our passion is to create memorable projects in a simple and fun
              way.
            </p>
            <div className="pos-rel about_us__para-3__container">
              <p className="p2 c-primary about-us__para-3">
                Bits and BYTE IT consulting was founded by an entrepreneurial
                group of lifelong experienced and successful IT professionals.
                Our focus is to simply apply IT solutions to challenging and
                complex business issues.
              </p>
              <h3 className="h3 f-wt-500 c-primary about-us__title-2">
                About Bits & BYTE
              </h3>
              <PlayButton className="about-us__play-button" />
              <hr className="about-us__underline" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
