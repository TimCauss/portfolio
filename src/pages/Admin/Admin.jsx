import { useEffect, useState } from "react";
import Dashboard from "../dashboard/Dashboard";
import { useAuthInfo } from "@propelauth/react";

const Admin = () => {
  const authInfo = useAuthInfo();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (
      authInfo.isLoggedIn &&
      authInfo.user.userId === process.env.REACT_APP_ADMIN_ID
    ) {
      setIsLoggedIn(true);
      setIsAdmin(true);
    }
  });

  if (isLoggedIn && isAdmin) {
    return <Dashboard />;
  }
};

export default Admin;
