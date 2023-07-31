import React, { useEffect, useState } from "react";
import { useAuthInfo, useRedirectFunctions } from "@propelauth/react";

const ProfilInfo = () => {
  const authInfo = useAuthInfo();
  const { redirectToLoginPage, redirectToAccountPage } = useRedirectFunctions();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (authInfo.isLoggedIn) {
      setIsLoggedIn(true);
    }
  });

  if (isLoggedIn) {
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
