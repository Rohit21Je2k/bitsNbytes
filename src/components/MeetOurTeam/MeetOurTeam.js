import React from "react";

import TeamCard from "../TeamCard/TeamCard";
import PlayButton from "../PlayButton/PlayButton.js";
// assets
import card1 from "../../assets/img/png/meet-our-team/card-1.png";
import "./MeetOurTeam.css";
export default function MeetOurTeam() {
  return (
    <section className="bg-l-blue meet-our-team">
      <div className="wrapper">
        <div className="container">
          <h1 className="p1 f-wt-700 c-primary meet-our-team__title">
            Meet Our Team
          </h1>

          <div className="meet-our-team__controls">
            <PlayButton className="prev" color="primary" />
            <PlayButton className="next" color="primary" />
          </div>
        </div>

        <div className="flex flex-jc-c meet-our-team__team-cards">
          <TeamCard imgSrc={card1} name="Name" position="Work position" />
        </div>
      </div>
    </section>
  );
}
