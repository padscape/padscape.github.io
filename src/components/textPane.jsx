import React, { Component } from "react";

class TextPane extends Component {
  renderCols() {
    let first, second;

    if (this.props.id % 2) {
      first = (
        <img
          alt=""
          src={this.props.imageSrc}
          className="img-fluid mx-auto"
          style={{ display: "block", width: "80%" }}
        ></img>
      );

      second = this.props.children;
    } else {
      first = this.props.children;

      second = (
        <img
          alt=""
          src={this.props.imageSrc}
          className="img-fluid mx-auto"
          style={{ display: "block", width: "80%" }}
        ></img>
      );
    }

    const cols = (
      <React.Fragment>
        <div className="col-sm-6">{first}</div>
        <div className="col-sm-6 align-items-center pl-4">{second}</div>
      </React.Fragment>
    );

    return cols;
  }

  getPaneClasses() {
    return `row no-gutters ${this.props.id > 1 ? "slideanim" : ""}`;
  }

  render() {
    return (
      <div className="container">
        <div className={this.getPaneClasses()} style={{ paddingBottom: 150 }}>
          {this.renderCols()}
        </div>
      </div>
    );
  }
}

export default TextPane;
