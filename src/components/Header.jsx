import NavLinks from "./NavLinks";
import ProfilInfo from "./ProfilInfo";

const Header = () => {
  return (
    <header className="header">
      <ProfilInfo />
      <NavLinks />
    </header>
  );
};

export default Header;
