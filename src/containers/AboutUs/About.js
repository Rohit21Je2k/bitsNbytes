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
        text="From computer networking and internet services to IT and SD-WAN 
        solutions customized just for you, we deliver best-in-class systems to 
        all kinds of companies. With a client-centric approach, our goal is to
         create top-notch projects with a touch of simplicity and zest."
      />
      <AboutTheCompany />
      <MeetOurTeam />
      <OurPortfolio />
      <OurPartners2 />
    </div>
  );
}
