import React from "react";

import "./ImgCard.css";
export default function ImgCard(props) {
  const { imgSrc, title, para } = props;
  return (
    <div
      className="c-gray-100 img-card"
      style={{ backgroundImage: `url("${imgSrc}")` }}
    >
      <div className="img-card__text">
        <h4 className="h4 img-card__title">{title}</h4>
        <p className="img-card__para">{para}</p>
      </div>
    </div>
  );
}
