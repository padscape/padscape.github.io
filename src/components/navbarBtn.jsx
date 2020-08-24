// IMPORTS

import React, { Component } from "react";
import { Link } from "react-router-dom";

// STYLES

import "./navbarBtn.css";

class NavbarBtn extends Component {
  state = {
    link: this.props.link,
    content: this.props.content,
    color: this.props.color,
  };

  render() {
    return (
      <li id="nav-item">
        <Link to={this.state.link} className={this.getButtonClasses()}>
          {this.state.content}
        </Link>
      </li>
    );
  }

  getButtonClasses() {
    return `nav-link rounded-lg ${this.state.color ? "nav-btn" : ""}`;
  }
}

export default NavbarBtn;
