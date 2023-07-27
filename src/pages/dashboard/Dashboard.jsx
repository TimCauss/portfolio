import React from "react";
import PageHeader from "../../components/PageHeader";
import DashboardHeader from "../../components/DashboardHeaderjsx";

export default function Dashboard() {
  return (
    <section className="dashboardTitle">
      <PageHeader title="Dashboard" />
      <DashboardHeader />
    </section>
  );
}
