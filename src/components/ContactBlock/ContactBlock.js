import React from "react";

import PlayBanner from "../PlayBanner/PlayBanner.js";
import "./ContactBlock.css";
export default function ContactBlock() {
  return (
    <section className="contact-block">
      <div className="wrapper">
        <h2 className="h2 c-primary contact-block__para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor fames
          volutpat, malesuada viverra vitae. Ullamcorper rutrum lacus, pulvinar
          quis.
        </h2>
        <PlayBanner
          className="contact-block__play-banner"
          title="Get in Contact"
          color="primary"
        />
      </div>
    </section>
  );
}
