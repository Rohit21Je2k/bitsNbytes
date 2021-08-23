import React from "react";

import PageBanner from "../../components/PageBanner/PageBanner";
import AboutTheCompany from "../../components/AboutTheCompany/AboutTheCompany";
import MeetOurTeam from "../../components/MeetOurTeam/MeetOurTeam";
import OurPortfolio from "../../components/OurPortfolio/OurPortfolio";
import OurPartners2 from "../../components/OurPartners2/OurPartners2";
// assets
import img from "../../assets/img/png/page-banner/about-us.png";
import "./About.css";
export default function About() {
  return (
    <div id="about-page">
      <PageBanner
        imgSrc={img}
        title="About us"
        text="We Provide entire range of networking, security and customized IT
          solutions to organizations of all sizes . Our flexible, customer
          oriented services are tailor made to suit the business needs of each
          customer."
      />
      <AboutTheCompany />
      <MeetOurTeam />
      <OurPortfolio />
      <OurPartners2 />
    </div>
  );
}
