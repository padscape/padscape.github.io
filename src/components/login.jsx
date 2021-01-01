// IMPORTS

import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

// STYLES

import "./loginForms.css";

// COMPONENTS

import Footer from "./footer";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleForm() {
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed ot log in");
    }

    setLoading(false);
  }

  return (
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
            <h1>LOG IN</h1>
            <br></br>
            <br></br>
            {error && (
              <div className="alert alert-warning">
                <small>{error}</small>
              </div>
            )}
            <div style={{ marginBottom: "10px" }} className="slide">
              <span className="input-icon">
                <i className="fas fa-envelope" aria-hidden="true"></i>
              </span>
              <input
                className="input email"
                type="text"
                placeholder="Email"
                ref={emailRef}
                required
              ></input>
            </div>
            <div style={{ marginBottom: "10px" }} className="slide">
              <span className="input-icon">
                <i className="fas fa-lock" aria-hidden="true"></i>
              </span>
              <input
                className="input password"
                type="password"
                placeholder="Password"
                ref={passwordRef}
                required
              ></input>
            </div>
            <button
              className="button"
              style={{ marginTop: "20px" }}
              id="loginbtn"
              disabled={loading}
              onClick={handleForm}
            >
              <span>Log in</span>
            </button>
            <br></br>
            <br></br>
            <br></br>
            <h5 id="invalid"> </h5>
            <h6 className="mx-auto">
              <small>
                Don't have an account? <Link to="/signup">Sign up</Link>
              </small>
            </h6>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
