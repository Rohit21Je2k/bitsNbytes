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
              title="Who are we?"
              para="Bits and BYTE IT consulting was started by a team of innovative 
              entrepreneurs with professional IT and industry experience. We strongly 
              believe in changing the face of organizations, by providing practical IT 
              solutions to solve the challenges that arise while running a business. Our
               company sets forth a passion for technology which is clearly visible in 
               what we do and how we serve our clients. Our Corporate office which is 
               based in Bangalore puts flawless execution at the center of attention, by
                developing and nurturing our engineering talents which are established 
                through our Remote center of excellence as well as client locations. Our
                 engineers have notable certifications in the field of cloud service offerings,
                  server platforms, storage solutions, and IT services which is beneficial for 
                  clients’ business needs. Our team is skilled with real-world experience and
                   fine industry training, to provide businesses with a stable foundation that
                    is built with finesse."
            />
            <TextCard
              className="about-the-company__text-card"
              color="primary"
              number="02"
              title="What do we do?"
              para=" Bits and BYTE provide customers with maximum utilization of their IT
               infrastructure and its components through smart strategies, seamless software
                implementation, and customer support. Our main criteria are to work closely 
                with customers so that we can together achieve business operations agility, 
                efficiency in systems, and transform your business into the unimaginable through
                 our niche skills in technology."
            />
            <TextCard
              className="about-the-company__text-card"
              color="primary"
              number="03"
              title="Vendor-Agnostic Solutions"
              para="All our services and systems are based on IT best practices, past experience,
               and proven high technology standards. We follow independent consultancy to provide
                our clients with the best results. We do not owe our dependency on any one party 
                but are ready to work with a number of vendors. We also have established relationships
                 with businesses whose work we can validate through past projects. Our number one 
                 priority is to give you the best of what we have and fulfill your requirements.
                  Besides our tech-savvy minds, our expertise is also inclusive of business and
                   financial acumen. We believe that technologies, business, and financial perspectives
                    need to work collectively for quality implementation. With our IT services, we
                     can help you manage your business through a systematic process of planning,
                      assessment, set-up, and administration."
            />
            <PlayBanner color="primary" title="Learn More" />
          </div>
        </div>
      </div>
    </div>
  );
}
