import React from "react";
import { useAuthInfo, useRedirectFunctions } from "@propelauth/react";

const ProfilInfo = () => {
  const authInfo = useAuthInfo();
  const { redirectToLoginPage, redirectToAccountPage } = useRedirectFunctions();

  if (authInfo.isLoggedIn) {
    return (
      <div>
        <img
          id="profilePicture"
          onClick={redirectToAccountPage}
          src={authInfo.user.pictureUrl}
        />
      </div>
    );
  } else {
    return (
      <button className="btn btnProfile" onClick={redirectToLoginPage}>
        Login
      </button>
    );
  }
};

export default ProfilInfo;
