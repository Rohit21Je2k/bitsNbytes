import React from "react";

import intro from "../../assets/img/png/Intro/intro.png";

import "./Intro.css";
export default function Intro() {
  return (
    <section className="intro">
      <img className="intro__img" src={intro} alt="intro" />
      <div className="wrapper">
        <h1 className="h1 intro__title">
          Design the best possible IT infrastructure of your choice
        </h1>
      </div>
    </section>
  );
}
