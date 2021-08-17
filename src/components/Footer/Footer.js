import React from "react";

import logo from "../../assets/img/logo/logo.png";
import fb from "../../assets/img/vector/icons/fb-white.svg";
import ig from "../../assets/img/vector/icons/ig-white.svg";
import lkd from "../../assets/img/vector/icons/in-white.svg";
import tw from "../../assets/img/vector/icons/tw-white.svg";
import "./Footer.css";
export default function Footer() {
  return (
    <footer className="bg-primary footer">
      <div className="wrapper">
        <div className="footer__container-1">
          <div className="footer__container-1__col-1">
            <img className="footer__logo" src={logo} alt="logo" />
            <p className="p3 c-gray-100 footer__para">
              Bits and BYTE IT consulting was founded by an entrepreneurial
              group of lifelong experienced and successful IT professionals. Our
              focus is to simply apply IT solutions to challenging and complex
              business issues.
            </p>
          </div>
          <div className="footer__container-1__col-2 footer__links">
            <div className="footer__links__col-1">
              <a href="/" className="h4 f-wt-600 c-gray-100 footer__link about">
                About
              </a>
              <a
                href="/"
                className="h4 f-wt-600 c-gray-100 footer__link contact-us"
              >
                Contact Us
              </a>
            </div>
            <div className="footer__links__col-2">
              <h4 className="h4 f-wt-600 c-gray-100 footer__link services">
                Services
              </h4>
              <a href="/" className="c-gray-100 footer__link__sub-link">
                Sub List
              </a>
              <a href="/" className="c-gray-100 footer__link__sub-link">
                Sub List
              </a>
              <a href="/" className="c-gray-100 footer__link__sub-link">
                Sub List
              </a>
            </div>
          </div>
        </div>
        <div className="footer__container-2">
          <div className="footer__container-2__col-1 footer__follow-us">
            <h4 className="h4 f-wt-600 c-gray-100 footer__follow-us__title">
              Follow Us
            </h4>
            <div>
              <img src={fb} alt="facebook" />
              <img src={ig} alt="instagram" />
              <img src={lkd} alt="linked-in" />
              <img src={tw} alt="twitter" />
            </div>
          </div>

          <div className="footer__container-2__col-2 footer__insights">
            <h4 className="h4 f-wt-600 c-gray-100 footer__insights__title">
              Our Insights to your Inbox
            </h4>
            <div className="bg-gray-100 footer__insights__input">
              <input
                name="footer-insights"
                placeholder="Your email address here"
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="footer__hr" />
      <div className="wrapper">
        <p className="p3 footer__copyright">
          Copyright © 2021 Bits & BYTE, All rights reserved
        </p>
      </div>
    </footer>
  );
}
