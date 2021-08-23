import React from "react";

// assests
import imgSrc from "../../assets/img/png/our-partners-2/img.png";
import imgDesk from "../../assets/img/png/our-partners-2/desk-img.png";
import "./OurPartners2.css";
export default function OurPartners2() {
  return (
    <section className="our-partners-2">
      <div className="wrapper">
        <h2 className="h1 c-primary our-partners-2__title">Our Partners</h2>
        <p className="p4 c-primary our-partners-2__para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor fames
          volutpat, malesuada viverra vitae. Ullamcorper rutrum lacus, pulvinar
          quis. Egestas eu elementum eu dolor at morbi odio imperdiet.
          Pellentesque diam a sit adipiscing in vulputate. Pretium morbi nullam
          cursus ipsum feugiat. Aliquet erat sed blandit dui imperdiet et
          vulputate integer. A pulvinar bibendum et laoreet consectetur enim.
          Nulla eu facilisis ultricies vitae. Justo sed eget ultricies bibendum
          volutpat viverra pellentesque nunc.
        </p>
      </div>
      <img
        src={imgSrc}
        className="our-partners-2__img mob"
        alt="our-partners-2"
      />
      <img
        src={imgDesk}
        className="our-partners-2__img desk"
        alt="our-partners-2"
      />
    </section>
  );
}
