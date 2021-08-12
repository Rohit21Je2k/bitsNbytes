import React from "react";

import NavBar from "./components/Navigation/NavBar/NavBar.js";
import Home from "./containers/Home/Home.js";

import "./styles/main.css";
function App() {
  return (
    <>
      <NavBar />
      <Home />
    </>
  );
}

export default App;
