import React from "react";

import { useLocation } from "react-router";
import NavDesk from "../NavDesk/NavDesk";
// assets
import logo from "../../../assets/img/logo/logo.png";

import "./NavBar.css";

export default function NavBar() {
  const location = useLocation();
  return (
    <nav
      className="navbar"
      style={
        location.pathname !== "/"
          ? {
              backgroundImage: "none",
              backgroundColor: "var(--primary)",
            }
          : {}
      }
    >
      <div className="wrapper">
        {/* nav logo */}
        <a href="/">
          <img className="navbar__logo" src={logo} alt="logo" />
        </a>

        {/* nav hamburger */}
        <div className="navbar__hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* nav desk*/}
        <NavDesk />
      </div>
    </nav>
  );
}
