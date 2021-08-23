import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import NavBar from "./components/Navigation/NavBar/NavBar.js";
import Footer from "./components/Footer/Footer.js";
import Home from "./containers/Home/Home.js";
import About from "./containers/AboutUs/About.js";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import "./styles/main.css";
function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Redirect to="/" />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
