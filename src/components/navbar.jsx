import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import "../index.css";

function navbar() {
  return (
    <>
      <Router>
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-danger">
          <div className="container-fluid">
            <a className="navbar-brand">
              LOGO
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <Link to="/">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page">
                      Home
                    </a>
                  </li>
                </Link>
                <Link to="/About">
                  <li className="nav-item">
                    <a className="nav-link">
                      About
                    </a>
                  </li>
                </Link>
                <Link to="/Contact-Us">
                  <li className="nav-item">
                    <a className="nav-link">
                      Contact
                    </a>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/About" element={<About />} />

            <Route path="/Contact-Us" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default navbar;
