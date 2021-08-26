import React, { useCallback } from "react";

import { Carousel } from "react-responsive-carousel";
import ImgCard from "../ImgCard/ImgCard";
import img from "../../assets/img/png/our-reach/office.png";

import "./WhyUs.css";
export default function WhyUs() {
  const carouselRefHandler = useCallback((node) => {
    if (node) {
      const target = node.carouselWrapperRef;
      target.classList.add("why-us__carousel");
    }
  }, []);
  return (
    <section className="bg-primary why-us">
      <div className="wrapper">
        <h3 className="h3 f-wt-500 why-us__title">WHY CHOOSE US</h3>
        <p className="p1 f-wt-600 c-gray-100 why-us__para">
          We’ve been there, we’ve done that! Flexible services and solutions to
          empower your business to greater heights.
        </p>
        <Carousel
          ref={carouselRefHandler}
          axis="horizontal"
          swipeable={true}
          emulateTouch={true}
          autoPlay={false}
          centerMode={false}
          showArrows={false}
          showStatus={false}
          showThumbs={false}
        >
          <ImgCard
            imgSrc={img}
            title="We know our IT"
            para="Through our strategic global alliances, products, and network 
            expertise, we believe in being your go-to for all IT Hardware and 
            connectivity-related requirements."
          />

          <ImgCard
            imgSrc={img}
            title="Deep industry experience"
            para="We are a young team of professionals with 80+ years of working 
            Industry​ experience in the fields of infrastructure and global internet
             services."
          />

          <ImgCard
            imgSrc={img}
            title="Customer-driven strategies"
            para="Highly experienced IT team with a strong understanding of products and 
            their applications in the customer environment.​"
          />

          <ImgCard
            imgSrc={img}
            title="Customised solutions just the way you want them"
            para="Our OEM & Vendor agnostic service offer solutions based on the 
            customer’s ​business requirements.​"
          />

          <ImgCard
            imgSrc={img}
            title="Proven track records"
            para="Strong proven records of network designing, security, cloud, and 
            storage solutions, being implemented for end​ customers from varied
             industries like Banking, Telecom operators, System​ Integrators, and 
             Enterprises.​​"
          />

          <ImgCard
            imgSrc={img}
            title="Well-built and dedicated networks"
            para="A wide range of partnerships with Local Operators & Professional 
            Service contracts in 156+ countries."
          />
        </Carousel>
      </div>
    </section>
  );
}
