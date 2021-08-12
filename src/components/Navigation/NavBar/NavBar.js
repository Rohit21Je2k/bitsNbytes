import React from "react";

import NavDesk from "../NavDesk/NavDesk";

import logo from "../../../assets/img/logo/logo.png";

import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
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
