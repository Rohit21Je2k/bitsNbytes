import React from "react";

import "./RTLMarquee.css";
export default function RTLMarquee(props) {
  const { title } = props;
  return (
    <div className="rtl-marquee">
      <svg className="rtl__text rtl-marquee-animation">
        <text y="130">{title}</text>
      </svg>
      <svg className="rtl__text rtl-marquee-animation">
        <text y="130">{title}</text>
      </svg>
    </div>
  );
}
