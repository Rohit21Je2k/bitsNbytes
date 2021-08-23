import React from "react";

import "./TeamCard.css";
export default function TeamCard(props) {
  const { classname, imgSrc, name, position } = props;
  return (
    <div className={`bg-gray-100 team-card ${classname || ""}`}>
      <img className="team-card__img" src={imgSrc} alt="team-card__img" />
      <h3 className="p2 f-wt-600 c-primary team-card__name">{name}</h3>
      <h5 className="p2 f-wt-500 c-primary team-card__position">{position}</h5>
    </div>
  );
}
