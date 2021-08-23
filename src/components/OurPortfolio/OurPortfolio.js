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
              Rich experience of IT infrastructure technology State of art
              processes and project management skills
            </li>
            <li>Strong technology partners</li>
            <li>Deep domain expertise across key industries</li>
            <li>Easy access to affordable, expert resources</li>
            <li>
              Our mission is to provide entire range of networking, security and
              business solutions to organizations of all sizes and and get
              recognized as efficient, one stop company for all their networking
              and security requirements.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
