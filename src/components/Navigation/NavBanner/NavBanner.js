import React from "react";

import blueDot from "../../../assets/img/png/blueDot.png";
import "./NavBanner.css";
export default function NavBanner(props) {
  const { title, grid } = props;
  return (
    <div className="navBanner">
      <h3 className="navBanner__title">{title}</h3>
      <div className="navBanner__grid">
        {grid &&
          grid.map((card, index) => {
            return (
              <div key={index} className="navBanner__grid__card">
                <img src={blueDot} alt="card-img" />
                <div>
                  <h4>{card.title}</h4>
                  <p>{card.tagline}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
