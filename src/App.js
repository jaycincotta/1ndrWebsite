import React, { useState } from "react";
import "./styles.css";
import { Router, Link } from "@reach/router";
import Burger from "./widgets/BurgerMenu";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";

const NavLink = (props) => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        className: isCurrent ? "active" : ""
      };
    }}
  />
);

export default function App() {
  const [isOpen, toggle] = useState(true);

  return (
    <div className="App">
      <header className="navbar flex">
        <div className="flex">
          <img
            className="logo"
            style={{ width: "96px", height: "84px" }}
            alt=""
            src="/assets/Logo2.png"
          />
          <h1 className="title">
            1NDR Works
            <br />
            <span className="subtitle">by Kevin Cincotta</span>
          </h1>
        </div>
        <nav>
          <ul className={isOpen ? "open" : "closed"}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/art">Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/shop">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
        <Burger className="burger" toggle={toggle} isOpen={isOpen} />
      </header>
      <main className="content">
        <Router>
          <Home path="/" />
          <Portfolio path="/art" />
          <Shop path="/shop" />
          <About path="/about" />
          <Contact path="/contact" />
        </Router>
      </main>
      <footer>
        See more on Instagram:
        <a alt="@1ndr.works" href="https://www.instagram.com/1ndr.works/">
          1ndr.works
        </a>
      </footer>
    </div>
  );
}
