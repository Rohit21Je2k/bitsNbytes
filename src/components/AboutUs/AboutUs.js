import React from "react";
import { Link } from "react-router-dom";
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
              From computer networking and internet services to IT and SD-WAN
              solutions customized just for you, we deliver best-in-class
              systems to all kinds of companies. With a client-centric approach,
              our goal is to create top-notch projects with a touch of
              simplicity and zest
            </p>
            {/* <p className="p1 f-wt-600 c-primary about-us__para-2">
              Our passion is to create memorable projects in a simple and fun
              way.
            </p> */}
            <div className="pos-rel about_us__para-3__container">
              <p className="p2 c-primary about-us__para-3">
                Bits and BYTE IT consulting was started by a team of innovative
                entrepreneurs with professional IT and industry experience. We
                strongly believe in changing the face of organizations, by
                providing practical IT solutions to solve the challenges that
                arise while running a business.
              </p>
              <Link to="/about">
                <PlayBanner title="Read more..." color="primary" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
