import React from "react";

import "./TextCard.css";
export default function TextCard(props) {
  const { color, number, title, para } = props;
  return (
    <div className="text-card" style={{ color: `var(--${color})` }}>
      <h4 className="h4 text-card__number">{number}</h4>
      <hr className="b-0 bg-primary text-card__underline" />
      <h4 className="h4 f-wt-600 text-card__name">{title}</h4>
      <p className="p4 text-card__para">{para}</p>
    </div>
  );
}
