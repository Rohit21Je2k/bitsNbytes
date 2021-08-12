import React from "react";

import Intro from "../../components/Intro/Intro.js";
import AboutUs from "../../components/AboutUs/AboutUs.js";
import WhyUs from "../../components/WhyUs/WhyUs.js";
import RecentWorks from "../../components/RecentWorks/RecentWorks.js";

import "./Home.css";
export default function Home() {
  return (
    <>
      <Intro />
      <AboutUs />
      <WhyUs />
      <RecentWorks />
    </>
  );
}
