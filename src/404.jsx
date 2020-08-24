// IMPORTS

import React from "react";
import { Link } from "react-router-dom";

// COMPONENTS

import Footer from "./components/footer";

// IMAGES

import img404 from "./assets/monitor-1350918_1280.png";

const Page404 = () => (
  <React.Fragment>
    <div className="header">
      <br></br>
      <br></br>
      <div className="row">
        <div className="col-sm-6" style={{ paddingTop: "15rem" }}>
          <h1>
            <kbd>404</kbd>
          </h1>
          <h2>The link has broken or the page has been moved.</h2>
          <br></br>
          <br></br>
          <Link to="/" className="link">
            Go to homepage <i className="fas fa-angle-right"></i>
          </Link>
        </div>
        <div className="col-sm-6">
          <img alt="" src={img404} className="img-fluid" width="1000"></img>
        </div>
      </div>
      <Footer />
    </div>
  </React.Fragment>
);

export default Page404;
