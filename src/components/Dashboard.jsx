import React from "react";
import PageHeader from "./PageHeader";
import NavDashboard from "./NavDashboard";

const Dashboard = () => {
  return (
    <section className="dashboardTitle">
      <PageHeader title="Dashboard" description="" />
      <NavDashboard />
    </section>
  );
};

export default Dashboard;
