import React from "react";

import PlayBanner from "../PlayBanner/PlayBanner.js";
// assets
import img from "../../assets/img/png/contact-page/get-in-touch.png";
// styles
import "./GetInTouch.css";
export default function GetInTouch() {
  return (
    <div className="get-in-touch">
      <div className="wrapper">
        <div className="col-1">
          <h2 className="h2 f-wt-500 c-gray-500 get-in-touch__title">
            GET IN TOUCH
          </h2>
          <p className="p1 f-wt-600 c-primary get-in-touch__para">
            Fill up this form and our team will get back to you within 24 hours.
          </p>
          <img src={img} alt="img" className="get-in-touch__img" />
        </div>
        <div className="col-2">
          <form className="get-in-touch__form">
            <div className="form__container">
              <div className="flex flex-col">
                <label>Full Name</label>
                <input name="fullName" type="text" />
              </div>
              <div className="flex flex-col">
                <label>Email Address</label>
                <input name="email" type="email" />
              </div>
            </div>
            <label>Subject</label>
            <input name="subject" type="text" />
            <label>Message</label>
            <textarea></textarea>
            <PlayBanner title="Submit the form" color="primary" />
          </form>
        </div>
      </div>
    </div>
  );
}
