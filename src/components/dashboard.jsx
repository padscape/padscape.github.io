import React from "react";
import Header from "./header";
import Footer from "./footer";

import screen from "../assets/dual-screen-1745705_1280.png";
import github from "../assets/github.png";

export default function Dashboard() {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <div className="row no-gutters" style={{ paddingBottom: 150 }}>
          <div className="col-sm-6">
            <img
              alt=""
              src={screen}
              className="img-fluid mx-auto"
              style={{ display: "block", width: "80%" }}
            ></img>
          </div>
          <div className="col-sm-6 align-items-center pl-4">
            <h1>Write, run, and upload your code.</h1>
            <p>
              Padscape is a development environment with support for HTML and
              Python. You can use it to create test websites quickly, experiment
              with different layouts real-time, and see others' creations.
            </p>
            <a
              href="https://padscape.github.io/padscape/"
              className="button bg-gradient"
            >
              <span>Try out the editor.</span>
            </a>
          </div>
        </div>
        <div className="row no-gutters" style={{ paddingBottom: 150 }}>
          <div className="col-sm-6">
            <h1>Open Source.</h1>
            <p>
              Padscape is a completely open-source project hosted with GitHub
              (you can check out the code
              <a href="https://github.com/padscape/padscape"> here</a>). This
              means that you can see how your data is used, and you can
              contribute to improve Padscape! Don't worry, the code is simple; I
              am sure that you can help. Even if you are not that keen on
              writing code for us, you can send us feature ideas or report any
              problems you may be facing.
            </p>
          </div>
          <div className="col-sm-6 align-items-center pl-4">
            <img
              alt=""
              src={github}
              className="img-fluid mx-auto"
              style={{ display: "block", width: "80%" }}
            ></img>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
