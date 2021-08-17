import React from "react";

import PlayBanner from "../PlayBanner/PlayBanner.js";
import img from "../../assets/img/png/aboutus/img.png";
import video from "../../assets/video/soc.mp4";

import "./AboutUs.css";
export default function AboutUs() {
  const playVideoHandler = (e) => {
    const video = e.target;
    video.play();
  };

  const stopVideoHandler = (e) => {
    const video = e.target;
    video.load();
  };
  return (
    <section className="about-us">
      <div className="wrapper">
        <h3 className="h3 f-wt-500 c-gray-500 about-us__title-1">ABOUT US</h3>
        <div className="container">
          <div className="about-us__img-container">
            <video
              onMouseEnter={playVideoHandler}
              onMouseLeave={stopVideoHandler}
              className="about-us__video"
              poster={img}
              muted="muted"
            >
              <source src={video} type="video/mp4" />
            </video>
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
              <PlayBanner title="About Bits & BYTE" color="primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
