// IMPORTS

import React, { Component } from "react";

// STYLES

import "./header.css";

// IMAGES

import img from "./../assets/work-4997565_1280.png";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <div
          className="header row justify-content-center"
          style={{ paddingTop: "12rem" }}
        >
          <div className="col-xs-6" style={{ paddingBottom: "15rem" }}>
            <h1
              style={{
                fontSize: "5rem",
                paddingTop: "8rem",
              }}
            >
              Padscape
            </h1>
            <p>A new alternative for code editing</p>
          </div>
          <div className="col-xs-6">
            <img alt="" src={img} className="img-fluid header-img"></img>
          </div>
          <div style={{ width: "100%" }}>
            <svg
              className="waves"
              viewBox="0 24 150 28"
              preserveAspectRatio="none"
              shapeRendering="auto"
            >
              <g className="parallax">
                <path
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                  x="48"
                  y="0"
                  fill="rgba(255,255,255,0.7)"
                />
                <path
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                  x="48"
                  y="3"
                  fill="rgba(255,255,255,0.5)"
                />
                <path
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                  x="48"
                  y="5"
                  fill="rgba(255,255,255,0.3)"
                />
                <path
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                  x="48"
                  y="7"
                  fill="#fff"
                />
              </g>
            </svg>
          </div>
        </div>
        <br></br>
      </React.Fragment>
    );
  }
}

export default Header;
