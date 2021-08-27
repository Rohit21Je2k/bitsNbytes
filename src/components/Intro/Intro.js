import React, { useEffect } from "react";

import PlayButton from "../PlayButton/PlayButton.js";
import video from "../../assets/video/intro.mp4";

import "./Intro.css";
export default function Intro() {
  useEffect(() => {
    const time = 5000;
    setInterval(() => {
      const activeSlide = document.querySelector(".intro__title.active");

      if (!activeSlide) return;

      const next = activeSlide.nextSibling;

      if (next) {
        activeSlide.classList.remove("active");
        next.classList.add("active");
        return;
      }

      const prev = activeSlide.previousSibling;
      if (prev) {
        activeSlide.classList.remove("active");
        prev.classList.add("active");
        return;
      }
    }, time);
  }, []);

  return (
    <section className="intro">
      <video className="intro__video" autoPlay muted loop>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="wrapper">
        {/* 
          1 - Empower Yourself To Evolve Consistently, At Ease
          2 - Design The Best Of Breed IT Infrastructure Setup
          3 - Design The Best Of Breed IT Infrastructure Setup
          4 - End To End Data Center Solutions
        */}
        <div>
          <h1 className="h1 intro__title active">
            Empower Yourself To Evolve Consistently, At Ease
          </h1>
          <h1 className="h1 intro__title">
            Design The Best Of Breed IT Infrastructure Setup
          </h1>
          <h1 className="h1 intro__title">
            Design The Best Of Breed IT Infrastructure Setup
          </h1>
          <h1 className="h1 intro__title">End To End Data Center Solutions</h1>
        </div>
        <PlayButton className="intro__play-button" color="gray-100" />
      </div>
    </section>
  );
}
