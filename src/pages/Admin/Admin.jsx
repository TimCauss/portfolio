import {
  useLogoutFunction,
  useRedirectFunctions,
  useAuthInfo,
} from "@propelauth/react";
import React from "react";
import PageHeader from "../../components/PageHeader";
import Dashboard from "../../components/Dashboard";

const Admin = (props) => {
  const authInfo = useAuthInfo();

  const {
    redirectToLoginPage,
    redirectToSignupPage,
    redirectToAccountPage,
  } = useRedirectFunctions();
  const logoutFunction = useLogoutFunction();

  const styles = {
    p: {
      color: "#ffff",
    },
  };

  if (authInfo.isLoggedIn) {
    return (
      <Dashboard />
      // <div>
      //   <p style={styles.p}>You are logged in as {authInfo.user.email}</p>
      //   <button onClick={redirectToAccountPage}>Account</button>
      //   <button onClick={logoutFunction}>Logout</button>
      // </div>
    );
  } else {
    return (
      <section className="loginError">
        <PageHeader title="Vous n'etes pas connecté" description="Login" />
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
