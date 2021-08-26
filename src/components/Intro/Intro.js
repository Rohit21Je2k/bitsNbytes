import React from "react";

import PlayButton from "../PlayButton/PlayButton.js";
import video from "../../assets/video/intro.mp4";

import "./Intro.css";
export default function Intro() {
  return (
    <section className="intro">
      <video className="intro__video" autoPlay muted loop>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <img className="intro__img" src={intro} alt="intro" /> */}
      <div className="wrapper">
        <h1 className="h1 intro__title">
          Design the best possible IT infrastructure of your choice
        </h1>
        <PlayButton className="intro__play-button" color="gray-100" />
      </div>
    </section>
  );
}
