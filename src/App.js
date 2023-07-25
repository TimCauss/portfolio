import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Timothée Caussignac",
    location: "Nevers, FR",
    email: "t.caussignac@gmail.com",
    availability: "Freelance",
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
