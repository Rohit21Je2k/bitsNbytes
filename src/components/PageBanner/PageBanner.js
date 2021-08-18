import React from "react";

import "./PageBanner.css";
export default function PageBanner(props) {
  const { imgSrc, title, text } = props;
  console.log(imgSrc);
  return (
    <div className="page-banner">
      <div
        className="page-banner__background"
        style={{ backgroundImage: `url(".${imgSrc}")` }}
      >
        <h1 className="h1 c-gray-100">{title}</h1>
      </div>
      <div className="page-banner__text flex flex-jc-c">
        <div className="wrapper">
          <p className="p1 f-wt-600 c-primary">{text}</p>
        </div>
      </div>
    </div>
  );
}
