import { ProjectGrid } from "../components";
import DashboardLayout from "../components/layouts/DashboardLayout";
import { getUserProjects } from "../operations";

function Dashboard() {
  const { isLoading, projects, controls, error } = getUserProjects("", 1, 3);

  return (
    <DashboardLayout>
      <section>
        <div className="flex flex-col justify-between gap-4 pt-6">
          <div className="p-8 flex items-center justify-center bg-base-300 rounded h-48">
            Stuff
          </div>
          <div className="">
            <h2 className="text-xl font-semibold mt-9">Latest Submissions</h2>
            <ProjectGrid
              isLoading={isLoading}
              projects={projects}
              controls={controls}
              error={error}
            />
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
}

export default Dashboard;
