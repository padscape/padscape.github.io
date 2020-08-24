// IMPORTS

import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

// STYLES

import "./loginForms.css";

// COMPONENTS

import Footer from "./footer";

class LoginForms extends Component {
  constructor(props) {
    super(props);
    this.handleForm = this.handleForm.bind(this);
  }

  handleForm() {
    $(".username, .password, .email").parent().removeClass("alert-required");

    let valid = true;

    if (!$(".username").val() || $(".username").val().trim() === "") {
      $(".username").parent().addClass("alert-required");
      valid = false;
    }

    if (!$(".password").val() || $(".password").val().trim() === "") {
      $(".password").parent().addClass("alert-required");
      valid = false;
    } else if (
      $(".password").val().length < 8 &&
      this.props.type === "Sign up"
    ) {
      $(".password")
        .eq(1)
        .parent()
        .attr("data-validate", "Password must be longer than 8 characters.")
        .addClass("alert-required");
      valid = false;
    }

    if (this.props.type === "Sign up") {
      if (!$(".email").val() || $(".email").val().trim() === "") {
        $(".email")
          .parent()
          .attr("data-validate", "Email is required.")
          .addClass("alert-required");
        valid = false;
      } else {
        let regex = /\S+@\S+\.\S+/;

        if (!regex.test($(".email").val())) {
          $(".email")
            .parent()
            .attr("data-validate", "Invalid email.")
            .addClass("alert-required");
          valid = false;
        }
      }
    }

    if (!valid) {
      return;
    }

    if (this.props.type === "Sign up") {
      $.ajax({
        url: "https://padscape.herokuapp.com/user/signup/",
        type: "post",
        data: `Username=${$(".username").val()}&Password=${$(
          ".password"
        ).val()}&Email=${$(".email").val()}`,
        contentType: "application/x-www-form-urlencoded",
        dataType: "json",
        success: (data) => {
          if (data.id) {
            window.location.assign(
              `${window.location.protocol}//${window.location.host}`
            );
          } else {
            $(".username")
              .parent()
              .attr("data-validate", data.page)
              .addClass("alert-required");
            return;
          }
        },
      });
    }

    $.ajax({
      url: "https://padscape.herokuapp.com/user/login/",
      type: "post",
      data: `Username=${$(".username").val()}&Password=${$(".password").val()}`,
      contentType: "application/x-www-form-urlencoded",
      dataType: "json",
      success: (data) => {
        if (data.page === "valid") {
          window.location.assign(
            `${window.location.protocol}//${window.location.host}`
          );
        }

        $("#invalid").text("Invalid username or password");
      },
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="header">
          <br></br>
          <br></br>
          <div className="login-wrap">
            <div className="row">
              <div className="col-sm-6">
                <br></br>
                <img
                  alt=""
                  src="https://avatars2.githubusercontent.com/u/51507573?s=400&u=7b0c73685f03e22579236e0ef69ac1c84ef2c530&v=4"
                  width="350"
                  height="350"
                  className="img-fluid align-self-center js-tilt"
                ></img>
              </div>
              <div className="col-sm-6">
                <h1>{this.props.type.toUpperCase()}</h1>
                <br></br>
                <br></br>
                <div
                  style={{ marginBottom: "10px" }}
                  data-validate="Username is required."
                >
                  <span className="input-icon">
                    <i className="fas fa-user" aria-hidden="true"></i>
                  </span>
                  <input
                    className="input username"
                    type="text"
                    placeholder="Username"
                  ></input>
                </div>
                <div
                  style={{ marginBottom: "10px" }}
                  data-validate="Password is required."
                >
                  <span className="input-icon">
                    <i className="fas fa-lock" aria-hidden="true"></i>
                  </span>
                  <input
                    className="input password"
                    type="password"
                    placeholder="Password"
                  ></input>
                </div>
                {this.props.type === "Log in" ? (
                  ""
                ) : (
                  <div
                    style={{ marginBottom: "10px" }}
                    className="slide"
                    data-validate="Email is required."
                  >
                    <span className="input-icon">
                      <i className="fas fa-envelope" aria-hidden="true"></i>
                    </span>
                    <input
                      className="input email"
                      type="text"
                      placeholder="Email"
                    ></input>
                  </div>
                )}
                <button
                  className="button"
                  style={{ marginTop: "20px" }}
                  id="loginbtn"
                  onClick={this.handleForm}
                >
                  <span>{this.props.type}</span>
                </button>
                <br></br>
                <br></br>
                <br></br>
                <h5 id="invalid"> </h5>
                <h6 className="mx-auto">
                  <small>
                    {this.props.type === "Log in" ? "Don't" : "Already"} have an
                    account?{" "}
                    <Link
                      to={`/${
                        this.props.type === "Log in" ? "signup" : "login"
                      }`}
                    >
                      {this.props.type === "Log in" ? "Sign up" : "Log in"}
                    </Link>
                  </small>
                </h6>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default LoginForms;
