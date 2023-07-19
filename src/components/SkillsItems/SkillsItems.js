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
        <div className="row flex">
          <div className="skillsAnimation align-items-center center">
            <Lottie
              lottieRef={this.htmlLogoRef}
              className="appLogo"
              animationData={animHtml}
              loop={false}
            />
          </div>
          <div className="skillsAnimation align-items-center">
            <Lottie
              lottieRef={this.reactLogoRef}
              className="appLogo"
              animationData={animReact}
              loop={false}
            />
          </div>
          <div className="skillsAnimation mt-3 align-items-center">
            <Lottie
              lottieRef={this.pythonLogoRef}
              className="appLogo"
              animationData={animPython}
              loop={false}
            />
          </div>
          <div className="skillsAnimation mt-2 align-items-center">
            <Lottie
              lottieRef={this.jsLogoRef}
              className="appLogo"
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
