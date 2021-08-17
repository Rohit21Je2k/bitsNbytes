import React from "react";

import "./PartnerCard.css";
export default function PartnerCard(props) {
  const { className, style, number, name, info } = props;
  return (
    <div
      className={`bg-primary c-gray-100 partner-card ${className || ""}`}
      style={style}
    >
      <div className="inline-block partner-card__img"></div>
      <h2 className="h2 partner-card__number">{number}</h2>
      <hr className="b-0 bg-gray-100 partner-card__underline" />
      <h2 className="h2 partner-card__name">{name}</h2>
      <p className="p4 partner-card__info">{info}</p>
    </div>
  );
}
