import { useEffect, useState } from "react";
import { Header, ProjectCard } from "../components";
import DashboardLayout from "../components/layouts/DashboardLayout";
import { getUserProjects } from "../operations";

function Dashboard() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchProjects = async () => {
      const projects = await getUserProjects();
      setProjects(projects);
    };
    fetchProjects();
  }, []);
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
              {projects.map((project) => (
                <ProjectCard />
              ))}
            </div>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
}

export default Dashboard;
