import React, { Component } from "react";
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
        <a href={this.state.link} className={this.getButtonClasses()}>
          {this.state.content}
        </a>
      </li>
    );
  }

  getButtonClasses() {
    return `nav-link rounded-lg ${this.state.color ? "nav-btn" : ""}`;
  }
}

export default NavbarBtn;
