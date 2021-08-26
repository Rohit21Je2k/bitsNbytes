import React from "react";

// assets
import imgSrc from "../../assets/img/png/our-portfolio/img.png";
import "./OurPortfolio.css";
export default function OurPortfolio() {
  return (
    <section className="bg-primary our-portfolio">
      <div className="wrapper">
        {/* cell 1 */}
        <div className="cell-1">
          <h4 className="h4 c-gray-300 f-wt-500 our-portfolio__title">
            OUR PORTFOLIO
          </h4>
          <p className="p1 f-wt-600 c-gray-100 our-portfolio__title-para">
            Our Portfolio of Enterprise is Powered by
          </p>
        </div>

        {/* cell 2 */}
        <div className="cell-2">
          <img
            src={imgSrc}
            className="our-portfolio__img"
            alt="portfolio-img"
          />
        </div>

        {/* cell 3 */}
        <div className="cell-3">
          <ul className="c-gray-100 our-portfolio__list">
            <li>
              Superior experience and implementation of IT infrastructure and
              technologies.
            </li>
            <li>
              State of the art processes accompanied by project management.
            </li>
            <li>Renowned partners in the technology industry.</li>
            <li>Domain knowledge and expertise for chief industries.</li>
            <li>
              An adaptive and smart array of security and networking solutions.
            </li>
            <li>Global internet services, wherever the location.</li>
            <li>Microsoft IT infrastructure to boost your business.</li>
            <li>
              DevOps service offerings to drive speed and quality through
              automation.
            </li>
            <li>
              Transformation of your environment with cloud service offerings.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
