import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "@propelauth/react";

import "./index.css";
import "./pages/landing/landing.css";
import "./pages/about/about.css";
import "./pages/portfolio/portfolio.css";
import "./pages/contact/contact.css";
import "./pages/404/pageNotFound.css";
import "./pages/Admin/admin.css";
import "./components/SkillsItems/skillsitems.css";
import "./pages/dashboard/ListDashboard.css";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider authUrl={process.env.REACT_APP_AUTH_URL}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>
);
