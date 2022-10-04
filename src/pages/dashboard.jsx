import { useState } from "react";
import { Header } from "../components";
import DashboardLayout from "../components/layouts/DashboardLayout";

function Dashboard() {
  return (
    <>
      <DashboardLayout>
        <section>
          <div className="flex flex-col justify-between gap-4 pt-6">
            <div className="flex flex-col gap-12 md:flex-row">
              <div className="flex flex-col gap-6 gap-4">
                <p>Member</p>
                <p>Member</p>
                <p>Member</p>
                <button className="btn">Add Member</button>
              </div>
              <div className="flex gap-4">
                <p>Qouta:</p>
                -----------
                <p>Used:</p>
                -----------
              </div>
            </div>
            <div className="">
              <h2>Latest Submissions</h2>
            </div>
          </div>
        </section>
      </DashboardLayout>
    </>
  );
}

export default Dashboard;
