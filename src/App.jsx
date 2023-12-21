import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Timothée Caussignac",
    location: "Saint-Nazaire, FR",
    email: "contact@tcaussignac.fr",
    availability: "Alternance et Freelance",
    brand:
      "Passionné par le développement et fasciné par la cybersécurité, je suis déterminé à créer des expériences digitales innovantes et sécurisées. N'hésitez pas à me contacter pour collaborer sur des projets passionnants et sécurisés ensemble !",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
