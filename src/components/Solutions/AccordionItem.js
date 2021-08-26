import React from "react";

import PlayBanner from "../PlayBanner/PlayBanner.js";

import "./AccordionItem.css";
export default function AccordionItem(props) {
  const { number, title, para, imgSrc, children } = props;
  const handleClick = (e) => {
    const target = e.currentTarget;

    const activeItem = document.querySelector(
      ".solution__accordion-item.active"
    );

    const targetContainer = target.querySelector(
      ".solution__accordion-item__content-container"
    );

    if (target === activeItem) {
      target.classList.remove("active");
      targetContainer.style.height = 0;
      return;
    }

    // handle active item
    if (activeItem) {
      const activeContainer = activeItem.querySelector(
        ".solution__accordion-item__content-container"
      );
      activeContainer.style.height = 0;
      activeItem.classList.remove("active");
    }

    // handle target item
    const targetContent = targetContainer.querySelector(
      ".solution__accordion-item__content"
    );
    const targetHeight = targetContent.offsetHeight;
    const targetImgHeight = window.innerWidth < 768 ? 200 : 0;
    targetContainer.style.height = targetHeight + targetImgHeight + "px";
    target.classList.add("active");
  };

  return (
    <div onClick={handleClick} className="solution__accordion-item">
      <div className="wrapper">
        <div className="container">
          <div className="solution__accordion-item__banner">
            {/* title */}
            <div className="solution__accordion-item__title-container">
              <h2 className="solution__accordion-number">{`//${number}`}</h2>
              <h2 className="solution__accordion-title">{title}</h2>
            </div>

            {/* img */}
            <div className="solution__accordion-item__img-container">
              <img
                className="solution__accordion-img"
                src={imgSrc}
                alt="accordion-img"
              />
            </div>
          </div>

          {/* content */}
          <div className="solution__accordion-item__content-container">
            <div className="solution__accordion-item__content">
              {children}
              {/* <p className="solution__accordion-para">{para}</p>
              <PlayBanner
                className="solution__accordion-playBanner"
                title="More Info"
                color="gray-100"
              /> */}
            </div>
          </div>

          {/* end */}
        </div>
        <hr className="solution__accordion-underline" />
      </div>
    </div>
  );
}
