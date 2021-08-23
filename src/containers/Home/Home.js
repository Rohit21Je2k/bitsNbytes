import React from "react";

import Intro from "../../components/Intro/Intro.js";
import AboutUs from "../../components/AboutUs/AboutUs.js";
import RTLMarquee from "../../components/RTLMarquee/RTLMarquee.js";
import WhyUs from "../../components/WhyUs/WhyUs.js";
import RecentWorks from "../../components/RecentWorks/RecentWorks.js";
import OurService from "../../components/OurService/OurService.js";
import OurPartners from "../../components/OurPartners/OurPartners.js";
import Testimonial from "../../components/Testimonial/Testimonial.js";
import GlobalReach from "../../components/GlobalReach/GlobalReach.js";
import ContactBlock from "../../components/ContactBlock/ContactBlock.js";

import "./Home.css";
export default function Home() {
  return (
    <>
      <Intro />
      <AboutUs />
      <RTLMarquee title="Innovative - Standard - Experience" />
      <WhyUs />
      <RecentWorks />
      <OurService />
      <OurPartners />
      <Testimonial />
      <GlobalReach />
      <ContactBlock />
    </>
  );
}
