import React, { createRef } from "react";
import Lottie from "lottie-react";

const animHtml = require("./animhtml.json");
const animReact = require("./animreact.json");
const animPython = require("./animpython.json");
const animJs = require("./animjs.json");

class SkillsItems extends React.Component {
  constructor(props) {
    super(props);
    this.htmlLogoRef = createRef();
    this.reactLogoRef = createRef();
    this.pythonLogoRef = createRef();
    this.jsLogoRef = createRef();
  }

  render() {
    return (
      <>
        <div className="row pt-5 d-flex align-content-center justify-content-center">
          <div className="skillsAnimation align-items-center">
            <Lottie
              lottieRef={this.htmlLogoRef}
              className="appLogo logoHtml"
              animationData={animHtml}
              loop={false}
            />
          </div>
          <div className="skillsAnimation align-items-center justify-content-center">
            <Lottie
              lottieRef={this.reactLogoRef}
              className="appLogo logoReact"
              animationData={animReact}
              loop={false}
            />
          </div>
          <div className="skillsAnimation align-items-center justify-content-center">
            <Lottie
              lottieRef={this.pythonLogoRef}
              className="appLogo logoPython"
              animationData={animPython}
              loop={false}
            />
          </div>
          <div className="skillsAnimation align-items-center justify-content-center">
            <Lottie
              lottieRef={this.jsLogoRef}
              className="appLogo logoJS"
              animationData={animJs}
              loop={false}
            />
          </div>
        </div>
      </>
    );
  }
}

export default SkillsItems;
