import React from "react";

const DashboardHeader = () => {
  return (
    <>
      <div className="dashboardHeader">
        <nav className="menuDashboard">
          <ul className="d-inline-flex flex-wrap justify-content-center">
            <li>Projets</li>
            <li>Articles</li>
            <li>Users</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default DashboardHeader;
