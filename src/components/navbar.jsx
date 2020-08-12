import React, { Component } from "react";
import NavbarBtn from "./navbarBtn";
import "./navbar.css";

class Navbar extends Component {
  state = {
    buttons: [
      { id: 1, link: "./index.html", content: "Home", color: false },
      { id: 2, link: "./login.html", content: "Log In", color: true },
      { id: 3, link: "./signup.html", content: "Sign Up", color: true },
    ],
  };

  render() {
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
              {this.state.buttons.map((button) => (
                <NavbarBtn
                  key={button.id}
                  link={button.link}
                  content={button.content}
                  color={button.color}
                />
              ))}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
