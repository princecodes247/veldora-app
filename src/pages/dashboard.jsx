import { useEffect, useState } from "react";
import { Header, ProjectCard } from "../components";
import DashboardLayout from "../components/layouts/DashboardLayout";
import { useAsync } from "../hooks";
import { getUserProjects } from "../operations";

function Dashboard() {
  // const [projects, setProjects] = useState([]);

  const { isLoading, status, projects, error } = getUserProjects();

  return (
    <DashboardLayout>
      <section>
        <div className="flex flex-col justify-between gap-4 pt-6">
          <div className="p-8 flex items-center justify-center bg-base-300 rounded h-48">
            Stuff
          </div>
          <div className="">
            <h2>Latest Submissions</h2>
            <div className="grid">
              {!isLoading && projects.map((item) => <div>s</div>)}
            </div>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
}

export default Dashboard;
