import React from "react";

import "./TestimonialCard.css";
export default function TestimonialCard(props) {
  const { className, text, auth, imgSrc } = props;
  return (
    <div
      className={`bg-gray-100 c-primary testimonial-card ${className || ""}`}
    >
      <div
        className="testimonial-card__img"
        style={{ backgroundImage: `url("${imgSrc}")` }}
      ></div>
      <div className="testimonial-card__info">
        <p className="p3 testimonial-card__text">“{text}”</p>
        <h5 className="p3 f-wt-600">- {auth}</h5>
      </div>
    </div>
  );
}
