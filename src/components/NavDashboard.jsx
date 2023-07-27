import React from "react";
import {
  useLogoutFunction,
  useRedirectFunctions,
  useAuthInfo,
  withAuthInfo,
} from "@propelauth/react";

const NavDashboard = () => {
  const authInfo = useAuthInfo();
  return (
    <>
      {/* //TODO This img need to be redirected to profil page */}
      <img id="profilePicture" src={authInfo.user.pictureUrl} onClick={useLogoutFunction()} />
      <div className="dashboardHeader">
        <nav className="menuDashboard">
          <ul className="d-inline-flex flex-wrap justify-content-center">
            <li>Projets</li>
            <li>Articles</li>
            <li>Users</li>
          </ul>
        </nav>
      </div>

    </>
  );
};

export default NavDashboard;
