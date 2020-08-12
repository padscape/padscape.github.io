import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import $ from "jquery";
import "./index.css";
import coding1 from "./assets/dual-screen-1745705_1280.png";
import Navbar from "./components/navbar";
import Header from "./components/header";
import TextPane from "./components/textPane";
import Footer from "./components/footer";

const contents = [
  {
    id: 1,
    text: (
      <React.Fragment>
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
      </React.Fragment>
    ),
    img: coding1,
  },
  {
    id: 2,
    text: (
      <React.Fragment>
        <h1>Open Source.</h1>
        <p>
          Padscape is a completely open-source project hosted with GitHub (you
          can check out the code
          <a href="https://github.com/padscape/padscape"> here</a>). This means
          that you can see how your data is used, and you can contribute to make
          Padscape better! Don't worry, the code is simple; I am sure that you
          can help. Even if you are not that keen on writing code for us, you
          can send us feature ideas or report any problems you may be facing.
        </p>
      </React.Fragment>
    ),
    img:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.dtNE8IQSVDx0zNH7JJPWBwHaHa%26pid%3DApi&f=1",
  },
];

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Header />
    {contents.map((pane) => (
      <TextPane key={pane.id} imageSrc={pane.img} id={pane.id}>
        {pane.text}
      </TextPane>
    ))}
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);

function slideAnimation() {
  $(".slideanim").each(function () {
    let pos = $(this).offset().top;
    let winTop = $(window).scrollTop();

    if (pos < winTop + 800) {
      $(this).addClass("slide");
    }
  });
}

function navbarTransition() {
  let scroll = $(window).scrollTop();

  if (scroll <= 150) {
    $("#navbar-custom").css("box-shadow", "none");
  } else {
    $("#navbar-custom").css("box-shadow", "rgba(0, 0, 0, 0.1) 0 0 10px");
  }
}

$(window).scroll(() => {
  navbarTransition();
  slideAnimation();
});

serviceWorker.unregister();
