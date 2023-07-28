import { useRedirectFunctions, useAuthInfo } from "@propelauth/react";
import React from "react";
import PageHeader from "../../components/PageHeader";
import Dashboard from "../dashboard/Dashboard";

const Admin = () => {
  const authInfo = useAuthInfo();

  const { redirectToLoginPage } = useRedirectFunctions();

  if (authInfo.isLoggedIn) {
    return (
      <Dashboard />
    );
  } else {
    return (
      <section className="loginError">
        <PageHeader title="Vous n'etes pas connecté" />
        <div className="col btnContainer">
          <button className="btn " onClick={redirectToLoginPage}>
            Login
          </button>
          {/*           <button className="btn" onClick={redirectToSignupPage}>
            Signup
          </button> */}
        </div>
      </section>
    );
  }
};

export default Admin;
