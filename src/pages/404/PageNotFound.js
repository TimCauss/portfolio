import PageHeader from "../../components/PageHeader";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <section className="error">
      <PageHeader title="404 Page Not Found" description="Uh oh!" />
      <div className="error-description">
        <div className="row">
          <div className="col">
            <p>Le page que vous recherchez n'existe pas.</p>
            <p>Vérifiez bien l'URL ou naviguez vers une autre partie du site.</p>
            <Link to="/" className="home">
              <button className="btn">Retour à l'accueil</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
