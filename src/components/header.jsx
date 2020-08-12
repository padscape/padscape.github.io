import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="header">
          <h1
            style={{ fontSize: "5rem", padding: "15rem 1.25rem 8rem 1.25rem" }}
          >
            Padscape
          </h1>
          <div>
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
