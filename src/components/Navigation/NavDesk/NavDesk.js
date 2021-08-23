import React, { useState } from "react";
import { Link } from "react-router-dom";

import NavBanner from "../NavBanner/NavBanner";
import "./NavDesk.css";
export default function NavDesk() {
  const [banner, setBanner] = useState(false);
  function handleClick(e, type) {
    if (type === "services") {
      setBanner(!banner);
    } else {
      setBanner(false);
    }
    document
      .querySelector(".nav-desk__nav-link.select")
      .classList.remove("select");

    e.target.classList.add("select");
  }
  return (
    <ul className="flex-ai-c navbar__nav-desk">
      <li>
        <Link to="/">
          <button
            className="b-0 bg-none h4 f-wt-400 c-gray-100 nav-desk__nav-link select"
            onClick={handleClick}
          >
            Home
          </button>
        </Link>
      </li>
      <li>
        <Link to="/about">
          <button
            className="b-0 bg-none h4 f-wt-400 c-gray-100 nav-desk__nav-link"
            onClick={handleClick}
          >
            About
          </button>
        </Link>
      </li>
      <li>
        <button
          className="b-0 bg-none h4 f-wt-400 c-gray-100 nav-desk__nav-link"
          onClick={(e) => {
            handleClick(e, "services");
          }}
        >
          Services
        </button>
        {banner && (
          <NavBanner
            title="Services"
            grid={[
              { title: "Name", tagline: "Tag line" },
              { title: "Name", tagline: "Tag line" },
              { title: "Name", tagline: "Tag line" },
              { title: "Name", tagline: "Tag line" },
              { title: "Name", tagline: "Tag line" },
              { title: "Name", tagline: "Tag line" },
            ]}
          />
        )}
      </li>
      <li>
        <Link to="/contact">
          <button
            className="b-0 bg-none h4 f-wt-400 c-gray-100 nav-desk__nav-link"
            onClick={handleClick}
          >
            Contact
          </button>
        </Link>
      </li>
      <li>
        <button className="flex flex-jc-c flex-ai-c b-0 bg-vl-blue f-epilogue f-wt-600 c-primary nav-desk__cta">
          Let's Talk
        </button>
      </li>
    </ul>
  );
}
