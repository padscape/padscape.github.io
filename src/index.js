// IMPORTS

import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "tilt.js";
import $ from "jquery";

// STYLES

import "./index.css";

// COMPONENTS

import Navbar from "./components/navbar";
import Dashboard from "./components/dashboard";
import Signup from "./components/signup";
import Login from "./components/login";
import Page404 from "./404";
import { AuthProvider } from "./contexts/authContext";

const login = () => <Login />;

const signup = () => <Signup />;

const dashboard = () => <Dashboard />;

function App() {
  if (window.location.pathname[1]) {
    window.location.replace(
      window.location.origin + window.location.pathname.replace("/", "/#/")
    );
  }

  return (
    <React.StrictMode>
      <Router basename={`${process.env.PUBLIC_URL}/`}>
        <Navbar />
        <AuthProvider>
          <Switch>
            <Route path="/" exact component={dashboard} />
            <Route path="/login" component={login} />
            <Route path="/signup" component={signup} />
            <Route component={Page404} />
          </Switch>
        </AuthProvider>
      </Router>
    </React.StrictMode>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

const navbarTransition = () => {
  let scroll = $(window).scrollTop();
  $("#navbar-custom").css(
    "box-shadow",
    scroll > 150 ? "rgba(0, 0, 0, 0.1) 0 0 10px" : "box-shadow",
    "none"
  );
};

$("#toTop").on("click", () => {
  scrollToTop();
});

$(window).trigger("scroll", () => {
  navbarTransition();
});

$(".js-tilt").tilt({
  scale: 1.1,
});

serviceWorker.unregister();
