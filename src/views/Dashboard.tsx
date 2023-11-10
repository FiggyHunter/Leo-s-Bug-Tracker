import DashboardContent from "@/components/dashboard/DashboardContent";
import Navigation from "@/components/shared/Navigation";
import React from "react";

const Dashboard = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <DashboardContent />
      </main>
    </>
  );
};

export default Dashboard;
