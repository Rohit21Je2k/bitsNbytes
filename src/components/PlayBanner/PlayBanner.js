import React from "react";

import PlayButton from "../PlayButton/PlayButton";

import "./PlayBanner.css";

export default function Button(props) {
  const { className, title, color } = props;
  return (
    <div className={`pos-rel play-banner ${className || ""}`}>
      <h3
        className="p2 f-wt-500 play-banner__title"
        style={{ color: `var(--${color})` }}
      >
        {title}
      </h3>
      <PlayButton className="play-banner__play-button" color={color} />
      <hr
        className="play-banner__underline"
        style={{ backgroundColor: `var(--${color})` }}
      />
    </div>
  );
}
