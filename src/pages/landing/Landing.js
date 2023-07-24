import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
// import Draw from "../../components/Draw";
import SocialIcons from "../../components/SocialIcons";
import SkillsItems from "../../components/SkillsItems/SkillsItems";
import Particles from "react-particles";
import Cursor from "../../components/Cursor";

const Landing = ({ name }) => {
  const styles = {
    landing: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },

    textContainer: {
      display: "flex",
      flexDirection: "column",
      letterSpacing: "1px",
      textAlign: "center",
      zIndex: "1",
      color: "#fff",
      textShadow: "1px 1px 3px #000",
    },

    name: {
      color: "#fff",
      fontWeight: "700",
      paddingBottom: "28px",
    },
  };

  return (
    <section className="landing" id="repulsor" style={styles.landing}>
      {/* <Draw /> */}
      <Cursor />
      <div className="textContainer" style={styles.textContainer}>
        <h1 className="name" style={styles.name}>
          {name}
        </h1>
        <div className="description">
          <Typewriter
            className="description"
            onInit={(typewriter) => {
              typewriter
                .changeDelay(80)
                .typeString("Développeur")
                .pauseFor(1500)
                .deleteAll()
                .typeString("Python, ")
                .pauseFor(500)
                .typeString("Web et ")
                .pauseFor(500)
                .typeString("Cybersécurité.")
                .start();
            }}
          />
        </div>
        <div className="pt-5">
          <SkillsItems />
        </div>
      </div>
      <SocialIcons />
    </section>
  );
};

export default Landing;
