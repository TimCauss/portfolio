import Typewriter from "typewriter-effect";
import SocialIcons from "../../components/SocialIcons";
import SkillsItems from "../../components/SkillsItems/SkillsItems";
import Space from "../../components/Space";

const Landing = ({ name }) => {
  const styles = {
    landing: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
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
      <Space />
      <div className="textContainer" style={styles.textContainer}>
        <h1 className="name" id="Name" style={styles.name}>
          {name}
        </h1>
        <div className="description">
          <Typewriter
            className="description"
            onInit={(typewriter) => {
              typewriter
                .changeDelay(80)
                .typeString("Développeur")
                .pauseFor(2500)
                .deleteAll()
                .typeString("Python, ")
                .pauseFor(500)
                .typeString("Web, ")
                .pauseFor(500)
                .typeString("Cybersécurité.")
                .start();
            }}
          />
        </div>
        <SkillsItems />
      </div>
      <SocialIcons />
    </section>
  );
};

export default Landing;
