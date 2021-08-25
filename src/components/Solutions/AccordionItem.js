import React from "react";

import PlayBanner from "../PlayBanner/PlayBanner.js";

import "./AccordionItem.css";
export default function AccordionItem(props) {
  const { number, title, para, imgSrc } = props;
  const handleClick = (e) => {
    const target = e.currentTarget;

    const activeItem = document.querySelector(
      ".solution__accordion-item.active"
    );

    if (target === activeItem) {
      target.classList.remove("active");
      return;
    }

    activeItem?.classList.remove("active");
    target.classList.add("active");
  };
  return (
    <div onClick={handleClick} className="solution__accordion-item">
      <div className="wrapper">
        <div className="container">
          {/* title */}
          <div className="solution__accordion-item__title-container">
            <h2 className="solution__accordion-number">{`//${number}`}</h2>
            <h2 className="solution__accordion-title">{title}</h2>

            {/* img */}
            <div className="solution__accordion-item__img-container">
              <img
                className="solution__accordion-img"
                src={imgSrc}
                alt="accordion-img"
              />

              {/* para */}
              <div className="solution__accordion-item__para-container">
                <p className="solution__accordion-para">{para}</p>
                <PlayBanner
                  className="solution__accordion-playBanner"
                  title="More Info"
                  color="gray-100"
                />
              </div>
            </div>
          </div>
        </div>
        <hr className="solution__accordion-underline" />
      </div>
    </div>
  );
}
