import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TextCard from "../TextCard/TextCard";
import PlayBanner from "../PlayBanner/PlayBanner.js";
import "./AboutTheCompany.css";
export default function AboutTheCompany() {
  const handleAboutTheCompanyRef = (node) => {
    if (node) {
      gsap.registerPlugin(ScrollTrigger);
      // animating underline
      gsap.from(".about-the-company__title-underline", {
        scrollTrigger: {
          trigger: ".about-the-company__title-underline",
          start: "top bottom",
        },
        width: 0,
        duration: 0.7,
      });
      // animating text cards on scroll
      gsap.utils.toArray(".about-the-company__text-card").forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
          },
          duration: 1.5,
          opacity: 0,
          ease: "power1",
        });
      });
    }
  };

  return (
    <div ref={handleAboutTheCompanyRef} className="about-the-company">
      <div className="wrapper">
        <h3 className="h3 f-wt-500 c-gray-500 about-the-company__title">
          ABOUT THE COMPANY
        </h3>
        <hr className="about-the-company__title-underline" />
        <div className="container">
          {/* h4 */}
          <h4 className="about-the-company__title-para p1 f-wt-600 c-primary ">
            Turn your vision into reality
          </h4>
          {/* text-card container */}
          <div className="text-card__container">
            <TextCard
              className="about-the-company__text-card"
              color="primary"
              number="01"
              title="Who We Are"
              para="Bits and BYTE IT consulting was founded by an entrepreneurial group 
          of lifelong experienced and successful IT professionals. Our focus is 
          to simply apply IT solutions to challenging and complex business issues. 
          We display our deep dedication and passion for technology in all aspects of 
          our business and the way we serve your business. Corporate Office Based in
           Bangalore, we focus on flawless execution, by developing and maintaining 
           outstanding engineering talent, deployed through both our Remote Center of
            Excellence and at client locations. Built on a foundation of excellence 
            through real world experience, our team is among the most knowledgeable 
            and trained in the industry. Our engineering team has impressive credentials 
            that are relevant to your business needs."
            />
            <TextCard
              className="about-the-company__text-card"
              color="primary"
              number="02"
              title="How we do"
              para="Bits & BYTE is enable customers to realize maximum value out of their 
          IT infrastructure investment through smart IT strategy, seamless 
          implementation and sincere support. We work closely with customers to help 
          them achieve operational agility, efficiency and accelerate their business 
          transformation through niche technology."
            />
            <TextCard
              className="about-the-company__text-card"
              color="primary"
              number="03"
              title="Vendor-Agnostic Solutions"
              para="We base our implementations on known technology standards and best 
          practices. We have established relationships with certain vendors to provide 
          the best products for your money, we are not beholden to any one party. Our 
          priority is to provide you the best fit for your needs. Technology, Business, 
          and Financial Acumen. We are not just technically savvy in computer consulting, 
          but have an understanding of the technology, business, and financial perspectives
           go hand in hand with any implementation. Full IT Services Our services include 
           assessment, planning, set-up and ongoing management."
            />
            <PlayBanner color="primary" title="Learn More" />
          </div>
        </div>
      </div>
    </div>
  );
}
