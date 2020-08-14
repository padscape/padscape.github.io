import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#343434"
              fillOpacity="1"
              d="M0,224L48,229.3C96,235,192,245,288,256C384,267,480,277,576,234.7C672,192,768,96,864,85.3C960,75,1056,149,1152,170.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
          <div className="footer">
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <a
                    style={{ color: "#eee" }}
                    href="https://github.com/padscape/"
                  >
                    GitHub
                  </a>
                </div>
                <div className="col-6">
                  <a
                    style={{ color: "#eee" }}
                    href="https://padscape.github.io/padscape/"
                  >
                    Editor
                  </a>
                </div>
              </div>
            </div>
            <br></br>
            <a id="toTop" title="To Top" style={{ color: "#fff" }}>
              <i className="fas fa-angle-up"></i>
            </a>
            <br></br>
            <br></br>
            <span>Padscape</span>
            <br></br>
            <br></br>
            <br></br>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
