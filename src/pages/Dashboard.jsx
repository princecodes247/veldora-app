import { useState } from "react";
import { Header } from "../components";
import DashboardLayout from "../components/layouts/DashboardLayout";

function Dashboard() {
  return (
    <>
      <DashboardLayout>
        <Header />
        <section></section>
      </DashboardLayout>
    </>
  );
}

export default Dashboard;
