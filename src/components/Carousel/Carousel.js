import React from "react";

import "./Carousel.css";
export default function Carousel(props) {
  const { id, className, trackClassName, navClassName, color, children } =
    props;

  let pressed = false;
  let startx;
  let endx;

  function handleMouseDown(e) {
    pressed = true;
    startx = e.nativeEvent.offsetX;
  }

  function handleMouseUp() {
    pressed = false;
  }

  function handleMouseMove(e) {
    e.preventDefault();
    if (!pressed) return;

    endx = e.nativeEvent.offsetX;

    const move = startx - endx;

    const track = document.querySelector(`#${id} .carousel-track`);

    const currentScroll = track.scrollLeft;
    const scroll = currentScroll + move;

    track.scroll(scroll, 0);
  }

  function handleNavClick(e) {
    const track = document.querySelector(`#${id} .carousel-track`);
    const elSize = track.firstChild.offsetWidth + 20;
    const index = Number(e.target.getAttribute("data-index"));
    const scroll = elSize * index;

    track.scroll(scroll, 0);

    const target = e.target;

    document
      .querySelector(`#${id} .carousel-nav__dot.select`)
      .classList.remove("select");

    target.classList.add("select");
  }

  return (
    <div
      id={id}
      className={`carousel ${className || ""}`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <div className={`carousel-track ${trackClassName || ""}`}>{children}</div>

      <div
        className={`carousel-nav ${navClassName || ""}`}
        onClick={(e) => {
          if (!e.target.closest("button")) return;
          handleNavClick(e);
        }}
        data-type="index"
      >
        {[...Array(children.length)].map((n, i) => {
          return (
            <button
              key={i}
              className={`carousel-nav__dot ${i === 0 ? "select" : ""}`}
              style={{ backgroundColor: `var(--${color})` }}
              data-index={i}
            ></button>
          );
        })}
      </div>
    </div>
  );
}
