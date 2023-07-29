import React from "react";
import { NavLink } from "react-router-dom";
import { useAuthInfo } from "@propelauth/react";

export default function AdminNavLink() {
  const authInfo = useAuthInfo();

  if (
    authInfo.isLoggedIn &&
    authInfo.user.userId === process.env.REACT_APP_ADMIN_ID
  ) {
    return (
      <NavLink
        to="/admin"
        onClick={() => setIsMenuOpen(false)}
        logged={authInfo.isLoggedIn.toString()}
        admin={(
          authInfo.user.userId === process.env.REACT_APP_ADMIN_ID
        ).toString()}
      >
        Admin
      </NavLink>
    );
  }
}
