// IMPORTS

import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

// STYLES

import "./validation.css";

// COMPONENTS

import Footer from "./footer";

class CodeValidation extends Component {
  constructor(props) {
    super(props);
    this.resetCode = this.resetCode.bind(this);
  }

  resetCode() {
    $.ajax({
      url: "https://padscape.herokuapp.com/user/delete/",
      type: "post",
      data: `Key=${localStorage.padscapeUserToken.slice(0, -1)}`,
      contentType: "application/x-www-form-urlencoded",
      dataType: "json",
    });

    localStorage.padscapeUserToken = "";
  }

  render() {
    return (
      <React.Fragment>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="container container-fluid">
          <h1>Activate your account.</h1>
          <p>
            You’re only a few steps away from activating your online account,
            you’ll just need to go to the link which we’ve emailed to you. If
            you haven’t received your activation email please check your junk
            mail or{" "}
            <Link to="/signup" onClick={this.resetCode}>
              re-register
            </Link>{" "}
            (your account will be deleted).
          </p>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Footer />
      </React.Fragment>
    );
  }
}

export default CodeValidation;
