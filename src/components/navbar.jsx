// IMPORTS

import React from "react";
import { NavLink } from "react-router-dom";

// STYLES

import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" id="navbar-custom">
      <div className="container navbar-dark">
        <span className="navbar-brand">Padscape</span>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapse">
          <ul className="navbar-nav ml-auto">
            <li id="nav-item">
              <NavLink to="/" className="nav-link rounded-lg">
                Home
              </NavLink>
            </li>
            <li id="nav-item">
              <NavLink to="/login" className="nav-link rounded-lg nav-btn">
                Log In
              </NavLink>
            </li>
            <li id="nav-item">
              <NavLink to="/signup" className="nav-link rounded-lg nav-btn">
                Sign Up
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
