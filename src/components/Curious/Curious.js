import React from "react";

import PlayBanner from "../PlayBanner/PlayBanner.js";
// assets
import img from "../../assets/img/png/curious/img.png";
import "./Curious.css";
export default function Curious() {
  return (
    <div className="c-primary curious">
      <div className="wrapper">
        <h2 className="h2 f-wt-600 curious__title">
          Curious to see how these services has helped our clients ?
        </h2>
        <img className="curious__img" src={img} alt="curious" />
        <div className="curious__content">
          <p className="curious__para">
            We enable customers to realize maximum value out of their IT
            infrastructure investment through smart IT strategy, seamless
            implementation and sincere support. We work closely with customers
            to help them achieve operational agility, efficiency and accelerate
            their business transformation through niche technology.
          </p>
          <PlayBanner title="Let’s work together" color="primary" />
        </div>
      </div>
    </div>
  );
}
