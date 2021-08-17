import React from "react";

import PlayBanner from "../PlayBanner/PlayBanner.js";

import "./RecentWorks.css";
export default function RecentWorks() {
  return (
    <section className="pos-rel recent-works">
      <div className="recent-works__big-ellipse"></div>
      <div className="wrapper">
        <div className="container">
          <h3 className="h3 f-wt-500 c-gray-500 recent-works__title">
            RECENT WORKS
          </h3>
          <p className="p1 f-wt-600 c-primary recent-works__para-1">
            Recent Project name will come here
          </p>
          <div className="recent-works__para-2__container">
            <p className="p2 c-primary recent-works__para-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor
              fames volutpat, malesuada viverra vitae. Ullamcorper rutrum lacus,
              pulvinar quis. Egestas eu elementum eu dolor at morbi odio
              imperdiet. Pellentesque diam a sit adipiscing in vulputate.
              Pretium morbi nullam cursus ipsum feugiat.
            </p>
            <PlayBanner title="Work with us" color="primary" />
          </div>
        </div>
      </div>
    </section>
  );
}
