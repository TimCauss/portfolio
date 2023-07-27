import React from "react";
import PageHeader from "../../components/PageHeader";

export default function Dashboard() {
  return (
    <section className="dashboardTitle">
      <PageHeader title="Dashboard" />
      <NavDashboard />
    </section>
  );
}
